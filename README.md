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

## Instructions for Creating & Editing Article & Solution Markdown Files
The...













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