# Urban Cruise Ship Homepage

## Instructions for Uploading Images to The UCS Website
About 98% of all images on the [UCS Website](http://urbancruiseship.org/) are in the SVG (`.svg`) vector file format.  The instructions below detail how to prepare and upload SVG images to the internet so they can be used on any page within the [UCS Website](http://urbancruiseship.org/).  All images for the [UCS Website](http://urbancruiseship.org/) are currently stored in [this public GitHub repository](https://github.com/Richard-Burd/ucs-images/) and are referenced in the article (and solution) markdown `.mdx` files of the [UCS Website's](http://urbancruiseship.org/) code base. That code base is located [here](https://github.com/Richard-Burd/urban-cruise-ship/) in a private repository. You will need to be granted access in order to view or edit it. Images not part of an article or solution are stored in that private repository and are not discussed in this section below.

<br></br>

### Step-1 Setup Access to a GitHub Repository (Only Do This One Time)
You will need a [GitHub](https://github.com/) account in order to do all of this. When you create an account, make sure to add a picture of yourself in your profile section so you can follow instructions below. Once you have an account, the easiest way to get started is to use [GitHub Desktop](https://desktop.github.com/) to upload images. From [GitHub Desktop](https://desktop.github.com/), go to `file > Clone repository...` which brings up the **Clone Repository** window; in that window select the **URL** option and enter in the URL of the UCS Images Repository: 
`https://github.com/Richard-Burd/ucs-images/`
For the **Local Path** option, enter the folder on your computer where you want to store the repository. When you open up this folder, you should see a list of SVG images in that folder along with a `README.md` file, and possible a hidden `.git` file if your computer is set to show hidden files. the list of images should match what is in the [actual repository in the cloud](https://github.com/Richard-Burd/ucs-images/).

<br></br>

### Step-2 SVG Optimization:
SVG files created in [Inkscape](https://inkscape.org) and other graphics programs are unnecessarily large by default as they contain various *"front matter"* elements that help graphics programs, but also increase the file sizes of the SVGs.  These increased file sizes translate to slower loading times when the SVGs are viewed on a webpage through an internet browser. The process of getting rid of such front matter [that slows loading times] is called **optimization**.  You can optimize an SVG by either:
- Exporting the SVG as optimized from Inkscape directly by navigating to: `file > Save as > Optimized SVG` or:
- Using an online SVG optimizer [like this one](https://svgoptimizer.com/) where you can upload multiple images at once.
NOTE: if you use the latter, the image names will change as each file will have a `-min` added to the filename, you will need to make sure the image names remain the same as they were on the old UCS Website, so this `-min` will need to be removed from the filename.

<br></br>

### Step-3 Upload the Optimized SVGs to the GitHub Repository
Drag and drop the new SVG (or multiple SVGs) into the repository folder described above in Step-1, the **Local Path** described above in Step-1 is where the repository folder will be located.  You can find it in the [GitHub Desktop](https://desktop.github.com/) main window, in the center of the screen where it says **View the files of your repository in Explorer** -> click on the ***Show in Explorer*** window and there you should see a bunch of existing images in that file folder that mirror the images int the actual online (cloud) repository [here](https://github.com/Richard-Burd/ucs-images/). When you add those images in the local path folder, the GitHub Desktop window will show some green boxes with green plus marks in them, and you will see a picture of yourself in the lower left-hand corner of the GitHub desktop window.  Next to that picture you will need to enter in a brief comment, you can say "added image" or "added images" and then when you are ready, click on the ***Commit to master*** button in the lower left-hand corner of the GitHub Desktop window. If everything worked properly, you should see the images you just added [here](https://github.com/Richard-Burd/ucs-images/) in the cloud. 

**NOTE:** Images can not be *edited.* *updated* or *modified* using this system. This means that if you want to change an image that is already in the repository, you must delete that image first, and then re-upload another version of it with the same name **after** the original version has been deleted on the cloud.  You can add an image or delete an image, you cannot do anything else.  Make sure the old version of the image is deleted [here](https://github.com/Richard-Burd/ucs-images/) in the cloud before you add a corrected version. 

<br></br>

### What to Do if You Screw Something up and Want to Start Over
If the local repository on your computer got screwed up, and you want to delete it and start over, open up [GitHub Desktop](https://desktop.github.com/) and in the main window, go to the top menu bar and select `Repository > Remove...` - it will then ask you if you want to delete the repository and you can select yes. After that, go to `file > Clone repository...` and repeat the steps described above in **Step-1**.

If you screwed up and already pushed the changes to the [repository in the cloud](https://github.com/Richard-Burd/ucs-images/) let you administrator know and they will *restore* the repository to a previous state pre-dating your screw-up. They will most likely tell you to delete your local version of the repository via your [GitHub Desktop](https://desktop.github.com/) interface and then use that interface to re-clone the repository from the cloud as described in Step-1 above.

<br></br>

### Adding Images to an Article or Solution Markdown File in the UCS Website Repository
This process will be discussed in more detail in the sections detailing the site's markdown file system.  The shorthand version is that all article and solution files are written in [MDX](https://mdxjs.com/) which is a format of Markdown (normally `.md`) that allows for the use [JSX](https://en.wikipedia.org/wiki/JSX_(JavaScript)) and [React](https://en.wikipedia.org/wiki/React_(JavaScript_library)) components. The SVG images are stored [here](https://github.com/Richard-Burd/ucs-images/) and in the article (or solution) `.mdx` files, they get wrapped in an `<ArticleImage />` [React](https://en.wikipedia.org/wiki/React_(JavaScript_library)) component. The article (or solution) `.mdx` file must therefore import `<ArticleImage />` from the components directory like so:

```MDX
{/* article or solution MDX file */}

`import ArticleImage from "/components/ArticleImage.js";`

{/* some text above the image */}

`<ArticleImage image={"zero_waste.svg"} width={900} height={350} />`

{/* some text below an image */}
```

...the `<ArticleImage />` component will look for the [`zero-waste.svg`](https://github.com/Richard-Burd/ucs-images/blob/master/zero_waste.svg) image that is located [in this repository](https://github.com/Richard-Burd/ucs-images/) and display it accordingly.

---

<br></br> <br></br> <br></br>

# Instructions for Creating & Editing Article & Solution Markdown Files

## Prerequisites
You will need to know how to do the following in Markdown in order to create articles and solutions:
- [How to create a link](https://www.markdownguide.org/basic-syntax/#links)
- [How to create a table](https://www.markdownguide.org/extended-syntax/#tables)
- [How to create a list](https://www.markdownguide.org/basic-syntax/#lists)
- [How to create a heading](https://www.markdownguide.org/basic-syntax/#headings)
- [How to create footnotes](https://www.markdownguide.org/extended-syntax/#footnotes)

You will also need a basic understanding of GitHub and Bash commands in order to create, edit, and delete both articles and solutions.

## Article Organization
Articles are written in [Markdown-with-JSX](https://mdxjs.com/). these files have a `.mdx` file extension.  Articles are stored in `/pages` directory located in the top-level directory of this project.  In an example, the *Seafood* article [here](https://urban-cruise-ship.vercel.app/oceans/ocean_industry/seafood) would be located in the following directory:

```
├── urban-cruise-ship
│   ├── pages
│   │   ├── oceans
│   │   │   ├── oceans_industry
│   │   │   |   └── seafood.mdx
.....etc.....
```
The `oceans_industry` folder is the OCEAN Site's ***Industry*** focus area.

<br></br>

### Creating a New Article
If we wanted to create a new Article called `lobster.mdx` in the OCEANS Site's ***Industry*** focus area, we would create a new file called `lobster.mdx` in the `/pages/oceans/oceans_industry` directory:  

```
├── urban-cruise-ship
│   ├── pages
│   │   ├── oceans
│   │   │   ├── oceans_industry
│   │   │   |   ├── seafood.mdx
│   │   │   |   └── lobster.mdx
..............etc..............
```

Next we would navigate to the OCEAN Site's `hierarchy.json` file and add in the new article so that the components in the `./components/` directory know to render it:

```JSON
./pages/oceans/hierarchy.json

...

  {
   "focus_area_name":"Industry",
   "focus_area_url":"ocean_industry",
   "articles":[
     { "article_title": "Energy", "article_url": "ocean_mhk" },
     { "article_title": "Manufacturing", "article_url": "ocean_industry" },
     { "article_title": "Seafood", "article_url": "seafood" },
     { "article_title": "Deep Sea Mining", "article_url": "exotic_mining" }
     { "article_title": "Lobster", "article_url": "lobster" }
   ]
  }
]
```
In our example, we will be creating the following Lobster Article at `./pages/oceans/ocean_industry/lobster` :

```markdown
# Lobsters
Lobsters are cool

## A Subtitle
Subtitles are cool
```
<br></br>

### Article Structure
Articles are written in MDX Markdown and then wrapped in an `<Article />` component.  The `<Article />` component is located in the `/components/Article.js` directory and is imported into the article `.mdx` file.  Articles are also made aware of the hierarchy so they can display the correct focus area navbar and article navbar between the actual article and the top two navbars of the whole UCS Website.  The final product looks like this:

```jsx
import Article from '/components/Article.js'
import hierarchy from "../hierarchy.json";

export const site = "oceans";
export const focusAreaUrl = "ocean_industry";

# Lobsters
Lobsters are cool

## A Subtitle
Subtitles are cool

export default ({ children }) => 
  <Article 
    focusAreaUrl={focusAreaUrl} 
    hierarchy={hierarchy} 
    site={site}
  >
    {children}
  </Article>
```

The `./components/Article.js` file wraps the article with this code:

```jsx
import Article from '/components/Article.js'

      // other elements go here

export default ({ children }) => 
  <Article 
    focusAreaUrl={focusAreaUrl} 
    hierarchy={hierarchy} 
    site={site}
  >
    {children}
  </Article>
```

The article's specialized site (OCEANS) and focus area (Industry) are specified here:

```jsx
export const site = "oceans";
export const focusAreaUrl = "ocean_industry";
```

The article is made aware of the hierarchy so it can display the correct focus area navbar and article navbar between the actual article and the top two navbars of the whole UCS Website with this line of code:

```jsx
import hierarchy from "../hierarchy.json";
```

### Adding Images
Images are wrapped in the `./components/ArticleImage.js` file.  Here is how we would import an image into the middle of our Lobster article:

```jsx
import Article from '/components/Article.js'
import hierarchy from "../hierarchy.json";

export const site = "oceans";
export const focusAreaUrl = "ocean_industry";

import ArticleImage from "/components/ArticleImage.js";

# Lobsters
Lobsters are cool

<ArticleImage image={"image_name.svg"} width={750} height={400} />

## A Subtitle
Subtitles are cool

export default ({ children }) => 
  <Article 
    focusAreaUrl={focusAreaUrl} 
    hierarchy={hierarchy} 
    site={site}
  >
    {children}
  </Article>
```
The project is setup to pull `"image_name.svg"` directly from the [UCS Images Repo](https://github.com/Richard-Burd/ucs-images/).

<br></br><br></br><br></br>

## Solutions
Solutions for all specialized sites are located in a single `./solutions/` directory:

```
├── urban-cruise-ship
│   ├── solutions
.........etc.........
```
To create a new solution, we would create a new file MXD in the `/solutions` directory like so:

```
├── urban-cruise-ship
│   ├── solutions
|   |   └── lobster_solution.mdx
..............etc...............
```

Our solution will have the following body content at `./solutions/lobster_solution.mdx` :

```markdown
Lobster hunting is a bad idea.
Eat more fish.
```

Solutions are wrapped in a `<Solution />` component located in the `/components/Solution.js` directory.  Solutions must define the ***Problem:*** and ***Solution:*** values for our `<Solution />` component to display. Our Solution will look like this:

```jsx
import SolutionDropdown from '/components/SolutionDropdown.js'

export const problem = "Lobsters are Dying";
export const solution = "Ban Lobster Hunts";

Lobster hunting is a bad idea.
Eat more fish.

export default ({ children }) => 
  <SolutionDropdown 
    problem={problem} 
    solution={solution}
  >
    {children}
  </SolutionDropdown>
```

Images are added to solutions in the same way as they are added to articles.  Here is how we would import our lobster solution into our Lobster article:

```jsx
import Article from '/components/Article.js'
import hierarchy from "../hierarchy.json";

export const site = "oceans";
export const focusAreaUrl = "ocean_industry";

import ArticleImage from "/components/ArticleImage.js";

// import the solution MDX file
import LobsterSolution from "/solutions/lobster_solution.mdx"

# Lobsters
Lobsters are cool

<ArticleImage image={"image_name.svg"} width={750} height={400} />

## A Subtitle
Subtitles are cool

// place it wherever you want in the article
<LobsterSolution />

export default ({ children }) => 
  <Article 
    focusAreaUrl={focusAreaUrl} 
    hierarchy={hierarchy} 
    site={site}
  >
    {children}
  </Article>
```

NOTE: the `LobsterSolution` name is arbitrary and can be anything you want as long as the import statement matches the placement statement.

<br></br> <br></br> <br></br>

# Project Architecture
---
This static site uses the following:

1. **NPM/Node.js** - for package management
2. **Next.js** - a production grade React application for static site generation
3. **Tailwind-CSS** - CSS styling library
4. **Framer Motion** - a production-ready animation library
5. **Contentful** - a headless content management system
6. **Algolia** - a site-search & discovery engine powered by AI

### Availability

The app is deployed [here](https://urban-cruise-ship.vercel.app/) hosted on Vercel.

---

### Installation instructions (Bash commands):

1. run: `npm install` to install the node module dependencies
2. run: `npm run dev` to run the development server
3. run: `npm run build-css` to build out any necessary TailwindCSS classes (if you add any)
4. run: `npm run build` to build out a production version of the site

---

### Schematic Overview

The visualization below is available [here](https://drive.google.com/file/d/1buYF1jcbG2O6Q1f8SU8huDZSPb-u3QAg/view?usp=sharing)

![an image of the package.json file](https://imgur.com/XmKqMk7.png)