# Project Documentation

Welcome to the Project Documentation! This project utilizes [Nextra](https://nextra.site/) with the content convention to generate our documentation site. Below are instructions on how to work with Nextra for development, building, deploying, and understanding the project structure.

## Getting Started

Before you begin, ensure you have Node.js and npm installed on your machine. We recommend using the latest LTS version of Node.js.

### Installation

Install the necessary dependencies by running:

```bash
npm install
```	

### Development

To start a local development server and preview your documentation, run:
```bash
npm run dev
```
		
This command will start the server at http://localhost:3000 by default. Any changes you make to the files in the content directory will automatically reload the site.

### Building and Deployment

When you're ready to build the site for production, use the following command:
```bash 
npm run build
```	

This will generate static files in the out directory, which can be served by any static file hosting service.

## Content Structure
The Nextra documentation follows a content-based structure. Here's how it's organized:

    - Content Directory: All your documentation files are stored in the content directory.
    - Index File: content/index.mdx acts as the homepage for your site.
    - Subdirectories: Organize your content using subdirectories within the content folder to define hierarchical routes. For example, content/docs/guide.mdx will be available at /docs/guide.
    - `_meta.js` files can be used to define the order of documents in a directory

Use Markdown link syntax `[text](link)` to create links between your content files.

## Pagefind Index

Nextra uses Pagefind for searching within the documentation. It indexes your content automatically during the **build** process for fast and precise search results. When first starting a development server, the search index will not exist and show an error instead. Make sure to first run `npm run build` to create a search index.

## Configuration

Nextra is highly configurable. Important configuration files include:

    theme.config.js: Defines site-wide parameters like navigation, footer, and theme options.
    next.config.js: Contains Next.js specific settings.

For more detailed customization, refer to the [Nextra documentation](https://nextra.site/docs) and [Next.js documentation](https://nextjs.org/docs).