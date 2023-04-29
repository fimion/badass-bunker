# The Badass Bunker

A collection of Resources for the Bunkers and Badasses Homebrew community.

## 🗂️ Structure

This is an Astro site so let's discus the setup a bit

### `/src/`

This is where the majority of the code for our project lives. Within it we have a few directories that are important.

#### `/src/content`

This is where all our content lives. If you are wanting to add/edit a resource, this is where it will be. Most homebrew 
resources will live in `homebrew` but this will update as we add features.

#### `/src/pages`

Need to add a new page that isn't a resource? This is where it'll go.

#### `/src/layouts`

This is where the layouts live. A layout is a special component that wraps an entire page.

#### `/src/components`

Need to make some reusable markup? Put it in here! We can add Astro/Vue/React components.

#### `/src/shared`

This is for files that can be referenced from multiple places.

#### `/src/styles`

Put your global styles in here!

### `/public`

All files in this folder will be bundled into the published site. Add images, fonts, etc here.


Need to add a

## 🧞 Commands
All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
