
# Overview
This repo houses Push protocol's website, documentation and blogs. More info below on how to run the website or submit PRs for new documentation, blog or website pages.

## Index
- [Installation](#installation)
- [Local Development](#local-development)
- [Serve Build](#serve-build)
- [Build](#build)
- [Deployment](#deployment)
- [Submit Documentation](#how-to-submit-new-documentation)
- [Submit Blog](#how-to-submit-new-blog)
- [Submit Website Page](#how-to-submit-new-webpage)
- [Credits](#credits)
- [Useful References](#useful-references)

### Installation

```
$ yarn install
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Serve Build

```
$ npm run build && npm run serve
```

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

### How to submit new documentation

- All assets (Images, etc) should be put under `/static/assets/docs/{relativeproduct}/{relativefolder}/{relativearticle}`

  for example: if you are creating **tutorial** for **creating channel** under **notifications**, then images for them should be under `/static/assets/docs/notifications/tutorials/create-channel`

  Feel free to create a folder for a relative document incase needed.

- We follow numbering format and specific format for folder structure, article structure and positioning, do make sure that you are aware of those, refer existing articles for more understanding.

- You don't have to put a preview image for any documentation as any `.mdx` file under the `/docs` will automatically generate a preview image.

- Avoid adding custom components unless really required.

- Use `live playground` to ensure builders can play with the code.

- Use modern standards for images (aivf, webp) wherever possible.

- Ensure consistency is maintained with other articles that are written.

- Ensure you know how front matter of Docusaurus works. Recommended to [read about front matter](https://docusaurus.io/docs/markdown-features#front-matter) from Docusaurus for best practices.

- Once you are done with the article, raise a PR and a team member will review -> merge -> deploy the website with your newly added docs.

### How to submit new blog

- All blogs go in `/blog` section. Each blog is a seperate folder that follows the naming convention of `yyyy-mm-dd-blog-short-title-in-kebab-case`

- Cover images and any other images goes inside this folder.

- All images need to follow modern standards (webp or aivf).

- Create an `index.md` inside this folder struture and write you blog here. 

- Ensure you are aware of all the meta tags that you have to provide. Make sure you are aware of [all standards mentioned here](https://docusaurus.io/docs/blog#adding-posts "Docusaurus standards for writing blog") and include them in the blog.

- All authors should be included in `/blog/authors.yml` and author images should be placed in `/assets/blog/authors/`.

- Once you are done with the article, raise a PR and a team member will review -> merge -> deploy the website with your newly added blogs.

### How to submit new webpage

- All webpage go in `/src/pages` section.

- All custom components go in `src/components` section.

- You can build `.mdx` markdown page as well. Follow this Docusaurus tutorial on [How to build a page](https://docusaurus.io/docs/creating-pages) for more info.

- Ensure images are of modern format (aivf, webp) and are stored under `/static/assets/website/{relevant_folder}` or for custom components under `/static/assets/src/{relevant_folder}`

- Once you are done with the article, raise a PR and a team member will review -> merge -> deploy the website with your newly added blogs.

# Credits

This website is built using [Docusaurus 2](https://docusaurus.io/). a modern static website generator.

### Useful references
https://theochu.com/docusaurus/styling/