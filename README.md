# Gitbased CMS for Portfolio, Blog, Shop with Astro, NetlifyCMS, WindiCSS, Vite

> Use Astro with a simple setup process so that others could use the template fairly easily.


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/snowpackjs/astro/tree/latest/examples/starter)


# Dev

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`         | Installs dependencies                            |
| `npm dev`          | Starts local dev server at `localhost:3000`      |
| `npm build`        | Build your production site to `./dist/`          |
| `npm preview`      | Preview your build locally, before deploying     |
| `npm astro ...`    | Run CLI commands like `astro add`, `astro check` |


## NetlifyCMS

Step 1: Add `local_backend: true` in your `config.yml` file in your `admin` folder 
Step 2: Run `npx netlify-cms-proxy-server` from the root directory of your repository, it will work on port 8081
Step 3: Run `npm dev` as usual, and navigate to `/admin/index.html`

Hook up Netlify CMS to your website, you're basically adding a tool for content editors to make commits to your site repository without touching code or learning Git.
RelatedPost work via UUID
UUID is generated randomly (with `nanoid`)



### Netlify

> 🧠 Just a heads up, you will not be able to see the function data or redirect output until you run locally with `netlify dev` (info below in [Netlify CLI section](#running-locally-with-the-netlify-cli))

### Running locally with the Netlify CLI

When using this template, you might want to see Netlify features such as redirects, functions, or preview the deploy locally first. To do, this you can install and use the Netlify CLI!

```
npm install -g netlify-cli # to install the Netlify CLI tool globally
netlify dev
```

And now your project should be running on <http://localhost:8888>.




# Prod

* `master` branch is auto deloy to https://onchainz.netlify.app
* `develop` branch is auto deloy to https://develop--onchainz.netlify.app
* Same as `staging` branch


# TODO

> Dev use import with absoluted path https://stackblitz.com/edit/github-mhrqb7-6mx7rn?file=src%2Fcomponents%2FTest.tsx,src%2Fcomponents%2FCounter.tsx

Don't know why we cannot use import from tsx to tsx
https://discordapp.com/channels/830184174198718474/1011122115379990558


### i18n for page and data

https://github.com/DefinedNet/nebula-docs

### Integrations

https://astro.build/integrations

### i18n, SEO

https://stackblitz.com/edit/github-u4augm?file=src%2Fconfig.ts


### auto publish/republish to Dev.to and Medium

Astro with Netlify CMS
https://github.com/christopher-kapic/astro-devblog


automatically publish content to Medium and Dev.to
How are my articles republished?
Articles are republished as part of the build step. Astro Devblog uses NetlifyCMS, which updates your Git repository when you publish a post. This, in turn, triggers a Netlify build, updating your site. The script republish.ts is run as part of the build step. republish.ts checks each post to see whether it has already been published (using a database—I suggest using *CockroachDB’s free serverless tier). If the post has not been republished and the author’s API keys are known, the post is published using Medium and Dev.to’s APIs.


