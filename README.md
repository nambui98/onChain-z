# Astro Starter Kit: Portfolio



## Dev

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`          | Installs dependencies                            |
| `pnpm dev`          | Starts local dev server at `localhost:3000`      |
| `pnpm build`        | Build your production site to `./dist/`          |
| `pnpm preview`      | Preview your build locally, before deploying     |
| `pnpm astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro --help` | Get help using the Astro CLI                     |

## Prod



## add more

### i18n for page and data

https://github.com/DefinedNet/nebula-docs

### Integrations

https://astro.build/integrations

### i18n, SEO

https://stackblitz.com/edit/github-u4augm?file=src%2Fconfig.ts


## auto publish/republish to Dev.to and Medium

Astro with Netlify CMS
https://github.com/christopher-kapic/astro-devblog

What is special about Astro Devblog?
I created Astro Devblog for two primary reasons:

automatically publish content from my blog to Medium and Dev.to (without pulling from RSS, which requires more manual intervention on my part)
Use Astro with a simple setup process so that others could use the template fairly easily.
How are my articles republished?
Articles are republished as part of the build step. Astro Devblog uses NetlifyCMS, which updates your Git repository when you publish a post. This, in turn, triggers a Netlify build, updating your site. The script republish.ts is run as part of the build step. republish.ts checks each post to see whether it has already been published (using a database—I suggest using *CockroachDB’s free serverless tier). If the post has not been republished and the author’s API keys are known, the post is published using Medium and Dev.to’s APIs.


## NetlifyCMS

hook up Netlify CMS to your website, you're basically adding a tool for content editors to make commits to your site repository without touching code or learning Git.

