import chalk from "chalk";
import fs from "fs";
import Jimp from "jimp";
import path from "path";
import readline from "readline";
import { fileURLToPath } from "url";

// Define the starting directory
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsDirectory = path.join(__dirname, "/docs");
const ogPreviewDirectory = path.join(__dirname, "static/assets/docs/previews");
const ogDirectory = __dirname;

// Function to recursively read directories and files
function walkDirectory(currentDirPath, callback) {
  fs.readdir(currentDirPath, (err, files) => {
    if (err) {
      throw new Error(err);
    }

    files.forEach((name) => {
      const filePath = path.join(currentDirPath, name);
      const stat = fs.statSync(filePath);

      if (stat.isFile()) {
        // Check if the file is an .mdx file before executing the callback
        if (path.extname(filePath) === ".mdx") {
          callback(filePath, stat);
        }
      } else if (stat.isDirectory()) {
        // If it's a directory, recursively call the walkDirectory function
        walkDirectory(filePath, callback);
      }
    });
  });
}

function extractFrontMatter(content) {
  const frontMatterRegex = /---[\s\S]*?---/;
  const match = content.match(frontMatterRegex);

  if (!match) return null;

  const keyValueRegex = /(\w+):\s*(.+)/g; // Capture key-value pairs
  let result;
  const frontMatter = {};

  while ((result = keyValueRegex.exec(match[0])) !== null) {
    frontMatter[result[1]] = result[2].replace(/['"]/g, "").trim();
  }

  return frontMatter;
}

async function checkFileContent(filePath) {
  // Read the file content
  const content = fs.readFileSync(filePath, "utf8");

  // Extract the front matter block
  const frontMatterEndIndex = content.indexOf("---", 4); // Find the end of the front matter block

  if (frontMatterEndIndex === -1) {
    console.log(chalk.yellow(`No front matter found in file: ${filePath}`));
    await generateFilePreview(filePath); // Call your function here
    return;
  }

  const frontMatterText = content.slice(0, frontMatterEndIndex + 3); // Extract front matter block

  // Parse the front matter content
  const metadata = extractFrontMatter(frontMatterText);

  if (metadata && metadata.title && metadata.image) {
    // Transform title to expected image name format: lowercase with underscores
    const expectedImageName =
      metadata.title.toLowerCase().split(" ").join("_") + ".webp"; // Assuming the extension is always .webp

    // Extract the actual image file name from the path
    const actualImageName = metadata.image
      .split("/")
      .pop()
      .replace(/['"]+/g, "");

    // Compare actual image file name with expected name
    if (actualImageName !== expectedImageName) {
      console.log(chalk.red(`Mismatch found in file: ${filePath}`));
      console.log(
        chalk.red(
          `Expected image name: '${expectedImageName}', found: '${actualImageName}'`,
        ),
      );
      await generateFilePreview(filePath); // Call your function here
    }
  } else {
    // Case where either 'image' or 'title' metadata is not found
    console.log(
      chalk.yellow(
        `Required metadata (title or image) not found in file: ${filePath}`,
      ),
    );
    await generateFilePreview(filePath); // Call your function here
  }
}

function clearDirectory(directoryPath) {
  const files = fs.readdirSync(directoryPath);
  for (const file of files) {
    fs.unlinkSync(path.join(directoryPath, file));
  }
}

async function generateFilePreview(filePath) {
  console.log(chalk.blue(`Generating file preview for: ${filePath}`));

  // Read the MDX content
  let content = fs.readFileSync(filePath, "utf8");

  // Extract the front matter from the MDX content
  let title;

  const frontMatterRegex = /---[\s\S]*?---/;
  const frontMatterMatch = content.match(frontMatterRegex);
  if (!frontMatterMatch) return;

  // Extract title value from the front matter
  const titleRegex = /title:\s*(.*?)(\n|$)/;
  const titleMatch = frontMatterMatch[0].match(titleRegex);
  if (!titleMatch) return;

  const rawTitle = titleMatch[1].trim().replace(/['"]/g, ""); // Remove any single or double quotes
  let rawTitleFormatted = rawTitle;
  rawTitleFormatted = rawTitle.replaceAll("(", "");
  rawTitleFormatted = rawTitleFormatted.replaceAll(")", "");

  // Infer id from title
  const inferredId = rawTitleFormatted.toLowerCase().replace(/\s+/g, "-");

  // Extract id value from the front matter
  const idRegex = /id:\s*(.*?)(\n|$)/;
  const idMatch = frontMatterMatch[0].match(idRegex);

  if (idMatch) {
    const id = idMatch[1]
      .trim()
      .replace(/['"]/g, "")
      .replace(inferredId, "")
      .replace(/^-|-$/g, "")
      .replace(/-/g, "_");
    if (id) {
      // If there's extra content in 'id' after removing the inferred ID, prepend it to the title
      title = id + "--" + rawTitle;
    } else {
      title = rawTitle;
    }
  } else {
    title = rawTitle;
  }

  // Construct image path
  const imageName = `${title.toLowerCase().split(" ").join("_")}.png`;
  const assetLocation = "/static/assets/docs/previews";
  const assetDocLocation = "/assets/docs/previews";

  const previewDirectory = ogDirectory + assetLocation;
  const imagePath = path.join(previewDirectory, imageName);
  const relativeImagePath = path.join(assetDocLocation, imageName);

  // Check if the image already exists
  if (!fs.existsSync(imagePath)) {
    await generatePNGImage(imagePath, title);
  }

  // Extract front matter
  const frontMatterEndIndex = content.indexOf("---", 4);
  const frontMatter = content.slice(0, frontMatterEndIndex);

  // Check if image tag exists
  const imageTagRegex = /image:\s*['"](.*?)['"]/;
  const imageTagMatch = frontMatter.match(imageTagRegex);

  // If image tag exists but doesn't match the expected name, replace it
  if (imageTagMatch && imageTagMatch[1] !== imageName) {
    content = content.replace(imageTagRegex, `image: "${relativeImagePath}"`);
    fs.writeFileSync(filePath, content);
  }
  // If image tag doesn't exist, add it
  else if (!imageTagMatch) {
    const position = frontMatterEndIndex; // End of the front matter block
    const imageTag = `image: "${relativeImagePath}"\n`;
    content = [
      content.slice(0, position),
      imageTag,
      content.slice(position),
    ].join("");
    fs.writeFileSync(filePath, content);
  }
}

function wrapText(font, text, maxTextWidth) {
  const words = text.split(" ");
  let lines = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const width = Jimp.measureText(font, currentLine + " " + word);
    if (width < maxTextWidth) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);

  return lines;
}

async function generatePNGImage(imagePath, title) {
  console.log(chalk.magenta(`Generating PNG image for: ${imagePath}`));

  const templatePreviewImagePath =
    ogDirectory + "/static/assets/docs/templatepreview/docsPreviewThumnail.png";
  const mainFont = Jimp.FONT_SANS_64_BLACK;

  const image = await Jimp.read(templatePreviewImagePath);
  const loadedMainFont = await Jimp.loadFont(mainFont);

  const maxTextWidth = image.bitmap.width - 80; // 80px for padding on both sides
  let mainTitle = title;
  let subTitle = null;

  if (title.includes("--")) {
    const parts = title.split("--", 2);
    subTitle = parts[0];
    mainTitle = parts[1];
  }

  if (subTitle && subTitle.includes("_")) {
    // Convert # to : for the top left title
    let formattedSubTitle = subTitle.replace(/_/g, ":");
    formattedSubTitle = formattedSubTitle.replaceAll("::", ":");
    formattedSubTitle = formattedSubTitle.replaceAll(":", "/");
    formattedSubTitle = formattedSubTitle.replaceAll("/section", "");

    // load font
    const subFont = Jimp.FONT_SANS_32_BLACK;
    const loadedSubFont = await Jimp.loadFont(subFont);

    // create transparent overlay
    let overlayImage = new Jimp(1200, 630, 0x0, (err, textImage) => {
      //((0x0 = 0 = rgba(0, 0, 0, 0)) = transparent)
      if (err) throw err;
    });
    overlayImage.print(loadedSubFont, 30, 30, formattedSubTitle);
    overlayImage.color([{ apply: "xor", params: ["#cf3fad"] }]);

    // Print the subTitle (top left corner)
    image.blit(overlayImage, 0, 0);
  }

  let lines = wrapText(loadedMainFont, mainTitle, maxTextWidth);
  const totalHeight = Jimp.measureTextHeight(
    loadedMainFont,
    lines.join("\n"),
    maxTextWidth,
  );

  // Starting Y coordinate to make the block of text vertically centered
  const yStart = (image.bitmap.height - totalHeight) / 2;
  const lineHeight = Jimp.measureTextHeight(loadedMainFont, "M"); // Approximating line height using letter "M"

  let yOffset = 0;

  for (let line of lines) {
    let textWidth = Jimp.measureText(loadedMainFont, line);
    const x = (image.bitmap.width - textWidth) / 2;
    image.print(loadedMainFont, x, yStart + yOffset, line, maxTextWidth);
    yOffset += lineHeight * 0.5 + 20;
  }

  image.write(imagePath);
  console.log("Image generated with title:", title);
}

// Prep for deployment starts everything
const prepForDeployment = async (appEnv) => {
  console.log(chalk.green("Starting Custom Deployment Prebuild..."));

  clearDirectory(ogPreviewDirectory);

  walkDirectory(docsDirectory, async (filePath) => {
    console.log(filePath);
    await checkFileContent(filePath);
  });
};

var args = process.argv.slice(2);
await prepForDeployment(args[0]);
