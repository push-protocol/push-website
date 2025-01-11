import chalk from 'chalk';
import fs from 'fs';
import readline from 'readline';
import { parse } from 'envfile';

const envPresets = {
  prod: {
    REACT_APP_DEPLOY_ENV: 'PROD',
    REACT_APP_PUBLIC_URL: 'https://push.org/',
  },
  preview: {
    REACT_APP_DEPLOY_ENV: 'PREVIEW',
    REACT_APP_PUBLIC_URL: process.env.REACT_APP_PUBLIC_URL || '',
  },
};

// Function to modify the environment file
const changeENV = async (appEnv) => {
  console.log(chalk.green.dim('  -- Generating custom .env file...'));

  let fileModified = false;
  const envPath = './.env';
  const envSamplePath = './.env.sample';

  if (!fs.existsSync(envPath)) {
    console.log(chalk.red('  -- Checking for ENV File... Not Found, creating'));
    fs.writeFileSync(envPath, fs.readFileSync(envSamplePath, 'utf8'));
  } else {
    console.log(chalk.green.dim('  -- Checking for ENV File... Found'));
  }

  const envData = fs.readFileSync(envPath, 'utf8');
  const envObject = parse(envData);

  const envSampleData = fs.readFileSync(envSamplePath, 'utf8');
  const envSampleObject = parse(envSampleData);

  const readIntSampleENV = readline.createInterface({
    input: fs.createReadStream(envSamplePath),
    output: false,
  });
  let realENVContents = '';

  console.log(chalk.green.dim('  -- Verifying and building ENV File...'));

  const customENVPreset = envPresets[appEnv];
  let envParamOverridden = false;

  for await (const line of readIntSampleENV) {
    let moddedLine = line;

    if (moddedLine.startsWith('#') || moddedLine.trim().length === 0) {
      // Keep comments and empty lines as they are
    } else {
      const delimiter = '#';
      const index = moddedLine.indexOf('#');
      const splits =
        index === -1
          ? [moddedLine, '']
          : [
              moddedLine.slice(0, index),
              ' ' + delimiter + moddedLine.slice(index + 1),
            ];

      const envVar = splits[0].split('=')[0].trim();
      const comment = splits[1];

      envParamOverridden = false;
      for (const [key, value] of Object.entries(customENVPreset)) {
        if (!envParamOverridden && key === envVar) {
          moddedLine = `${envVar}=${value}${comment}`;
          console.log(chalk.dim(`   -- ENV MODIFIED: ${moddedLine}`));
          fileModified = true;
          envParamOverridden = true;
        }
      }

      if (
        !envParamOverridden &&
        (!envObject[envVar] || envObject[envVar].trim() === '')
      ) {
        console.log(
          chalk.bgBlack.white(`  Enter ENV Variable Value --> ${envVar}`)
        );
        let value = '';

        while (value.trim().length === 0) {
          const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
          });
          value = await doSyncPrompt(rl, `${envSampleObject[envVar] || ''} >`);

          if (value.trim().length === 0) {
            console.log(
              chalk.bgRed.black("  Incorrect Entry, Field can't be empty")
            );
          }
        }

        console.log(chalk.bgBlack.white(`  [Saved] ${envVar}=${value}`));
        moddedLine = `${envVar}=${value}${comment}`;
        fileModified = true;
      } else if (!envParamOverridden) {
        moddedLine = `${envVar}=${envObject[envVar]}${comment}`;
      }
    }

    realENVContents = `${realENVContents}\n${moddedLine}`;
  }

  if (fileModified) {
    console.log(chalk.green.dim('  -- Modified ENV file generated, saving'));
    fs.writeFileSync(envPath, realENVContents.trim(), { flag: 'w' });
    console.log(chalk.green.bold(' -- -- -- --  -- -- -- --  -- -- -- --'));
    console.log(chalk.green.bold(' CONTENT OF .ENV FILE CHANGED '));
    console.log(chalk.green.bold(' -- -- -- --  -- -- -- --  -- -- -- --'));
  } else {
    console.log(chalk.green.dim('  -- ENV file verified!'));
  }
};

async function doSyncPrompt(rl, message) {
  const promptInput = await new Promise((resolve) =>
    rl.question(message, resolve)
  );
  rl.close();
  return promptInput.trim();
}

// Main deployment preparation function
const prepForDeployment = async (appEnv) => {
  console.log(chalk.green('Starting Custom Deployment Prebuild...'));

  if (appEnv !== 'prod' && appEnv !== 'preview') {
    console.log(
      chalk.red(
        'App Environment not set correctly... can only be prod or preview. Please check and retry'
      )
    );
    process.exit(1);
  }

  await changeENV(appEnv);
};

const args = process.argv.slice(2);
await prepForDeployment(args[0]);
