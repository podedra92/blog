---
title: How I created this awesome blog!
tags: documentation,tips
lastUpdated: true
---
# How I created this awesome blog!

I'm going to give you the secret sauce!<br/>
Although not overly impressive, I did spend a good day wondering what to work with and went ahead and published it.<br/>
This page will share the tech used with a quick how to, try not to be too in awe!!

![sauce](../assets/docs/awesome-sauce.gif)


## Tech stack

### Vitepress

VitePress is a static site generator for Vue.js that is built on top of the Vite build tool.
It is worth noting I wanted to play with Vue, VitePress allowed me to do so, so docusauras and jekyll were out the running.

You're probably wondering why not use VuePress, it's more mature and both are static site generators.
It's documentation is more complete and its more customisable. 

VitePress is a newer currently in alpha, they may introduce breaking changes and their concern is focused on performance (not really a bonus for me at this stage) and ease of use (more of a winner).
Its opinionated allowing me to just focus on content, whilst allowing to delve into a bit of Vue by injecting components.

For me I'd end up in a bit of a rabbit hole, spend days customising the whole blog and looking up the latest plugins....<br/>
I just didn't need the distraction, I just want to write to an MD file and publish, whilst also allowing me to create custom components to play with Vue a bit.

That's my retrospective reasoning, the real reason is I was going to quickly PoC both, but once I had setup vitepress I thought why bother. <br/>
[See paradox of choice.](https://www.youtube.com/watch?v=VO6XEQIsCoM&ab_channel=TED)

So the quick win was vitepress, doesn't mean its the right choice but for now it will suffice.

### Github Pages

The question of where to host, should I go Azure Static Web App, S3 or firebase?
I could've placed the compiled site anywhere really, but I quickly landed on GitHub Pages.<br/>
Its a free service offered by GitHub that allows the hosting of websites directly from a GitHub repository (published using github actions of course).

This for now seems like the easiest and obvious solution as I was already pushing my code to my git repo.
By default you will get a domain ending in `github.io`, obviously there is nothing stopping you from creating your own cname.

For me and my one visitor (me proof reading when on the train) it is more than capable of handling the the load...

![alone](../assets/docs/alone.gif)

## Getting Started

Always refer to the [VitePress getting started docs here.](https://vitepress.vuejs.org/guide/getting-started)<br/>
However I've listed some steps with some gotchas below!

### Initial VitePress Project

```sh
# Initialize a new Yarn package
yarn init

# Add vitepress and vue as development dependencies
yarn add --dev vitepress vue
```

So the init creates a package.json file, containing information about the project and its dependencies.

The second command, `yarn add`, adds the vitepress and vue packages to the project.
The --dev flag indicate these dependencies are only required during development.


Next you can nest the following to the package.json.

```json
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
```

Example `package.json`

```json
{
  "name": "example",
  "version": "1.0.0",
  "license": "MIT",
  "devDependencies": {
    "vitepress": "*",
    "vue": "*"
  },
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
}
```
Why, well the the scripts json object is as expected, key-value pairs, the key is the command to run in the terminal, the values are the command that will be executed.

So instead of `yarn vitepress dev docs` you would just enter `yarn docs:dev` into your terminal.

What does each command do:

- **docs:dev** - Starts a development server for the documentation locally.
- **docs:build** - Builds the documentation for production.
- **docs:preview** - Runs/previews the build artifacts locally

### Add content

So now to add the content.
My general folder structure is:

```
.
├─ .github
├─ docs
│  ├─ .vitepress
│  ├─ components
│  ├─ public
│  └─ category_dir
│     ├─ assets
│     │  └─ sub_category_assets_dir
│     ├─ index.md
│     └─ sub_category_dir
└─ package.json
```

Ok lets have a quick look at the structure - you dont need to necessarily follow this but it's a structure that works for me.
- **.github:** This dir currently contains workflows, just one for now to deploy the site.
- **docs:** Contains config components and markdown files, equivelant to src.
- **.vitepress:** Contains config and custom themes, it also contains dist and cache remember to add these to your .gitignore!
I may however move this to the root of the project, so docs directory contain just that.
- **components:** Where I store custom Vue components 
- **public:** So this is a bit of an escape hatch, it copies these over as static assets, classified as those which aren't referenced within documentation (e.g. themeConfig logo).
These assets are copied over to the root of the dist directory, and the name is not appended with a hash.

While we're on this topic, I try to categorise my docs, and also create nested directories such as `sub_category_dir`, the same principal is used within the assets directory. <br/>
Again you may choose your own structure but it feels the most logical approach for me, for now.


::: details Nav/Menu tips

We define our navs within .vitepress/config.js.

So the main nav bar is relatively straight forward, define text and path to the dir.
Each dir should contain an index.md for the page to display a homepage.

```json
nav: [
      { text: 'my first category', link: '/category_dir1/' },
      { text: 'my second category', link: '/category_dir2/' }
    ]
```
<br/>
To allow for navigation within the category directory to all the sub categories, I've added a sidebar.<br/>
If a sub-category contains more than one markdown file I've defined a collabsible menu, just to make it a bit easier to navigate.

```json
sidebar: {
  '/category_dir1/': [
    {
      text: 'Introduction',
      items: [
        { text: 'Category Home', link: '/category_dir1/' },
      ]
    },
    {
      text: 'sub_category_dir1',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Markdown file 1', link: '/category_dir1/sub_category_dir1/<markdown-file-without-extention>' },
        { text: 'Markdown file 2', link: '/category_dir1/sub_category_dir1/<markdown-file-without-extention>' },
      ]
    }
  ],
 .....
}
```
:::

### Publish

Great so I have my blog and it seems to work locally now what?

![live](../assets/docs/go-live.gif)


Get yourself a github account, create a project and push your vitepress code!

Ok so I wont put the whole workflow in here but you can visit [Vitepress deployment docs](https://vitepress.vuejs.org/guide/deploying#github-pages) to see it, or visit my repo.

Now its worth noting I'm doing something bad and not linting my markdown files, this should probably be included within my workflow.<br/>
I'll also try quickly define each step:

- Checkout the repository using actions/checkout@v3.
- Download specified version of Node.js using actions/setup-node@v3 action.
- `yarn install --frozen-lockfile` this installs project dependencies, the flag uses package-lock file.
- `yarn docs:build` to build the documentation.
- We leverage `peaceiris/actions-gh-pages@v3` action, specifying the build artifacts path from step above (typically .vitepress/dist), I've also set an additional variable `enable_jekyll: false`.
Ultimately this pushes the build artifacts to a branch, default is gh-pages.

Now this part is magic...

When files are pushed to the `gh-pages` branch, a bot triggers a workflow to serve the site at `<username>.github.io/<projectname>`.

We could potentially use `actions/deploy-pages@v1` to deploy to GitHub pages in place of `peaceiris/actions-gh-pages@v3`, thus publishing directly from main, but having a quick look `peaceiris/actions-gh-pages@v3` it does add and delete some files so this would need to be accounted for, so I may revisit this later, but for now I will leave as is.

Anyhow once the automated run has completed on branch gh-pages you are good to go!

::: warning
If all your assets are missing and you're greeted with 404 you may be missing your base path.<br/>
So within `.vitepress/config.js` add `base: '/<projectName>/'`
:::



## Downsides

**VitePress:**
- Requires you to have some knowledge of Vue.js - it's all possible without, but it may add some time for adding custom components.

- Its relatively new, so it doesn't have as many features or plugins 

- Currently no out the box search, I've installed a plugin, which works locally but no luck once published! 

**GitHub Pages:**

For free hosting its great, can't complain too much, and for such a small blog its fine!<br/>
A potential drawback is the repository containing the blog must be Public, unless you're using github pro or enterprise.

This isn't really an issue for me though!