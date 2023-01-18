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

## Instructions for Creating & Editing Article & Solution Markdown Files

### Prerequisites
You will need to know how to do the following in Markdown in order to create articles and solutions:
- [How to create a link](https://www.markdownguide.org/basic-syntax/#links)
- [How to create a table](https://www.markdownguide.org/extended-syntax/#tables)
- [How to create a list](https://www.markdownguide.org/basic-syntax/#lists)
- [How to create a heading](https://www.markdownguide.org/basic-syntax/#headings)
- [How to create footnotes](https://www.markdownguide.org/extended-syntax/#footnotes)

You will also need a basic understanding of GitHub and Bash commands in order to create, edit, and delete both articles and solutions.

### Article Organization
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

Next we would navigate to the OCEAN Site's `hierarchy.json` file located here:

`./pages/oceans/hierarchy.json`

...and add in the new article so that the components in the `./components/` directory know to render it:

```JSON
[

// other content

  {
   "focus_area_name":"Industry",
   "focus_area_url":"ocean_industry",
   "articles":[
     { "article_title": "Energy", "article_url": "ocean_mhk" },
     { "article_title": "Manufacturing", "article_url": "ocean_industry" },
     { "article_title": "Seafood", "article_url": "seafood" },
     { "article_title": "Deep Sea Mining", "article_url": "exotic_mining" },
     { "article_title": "Lobster", "article_url": "lobster" }
   ]
  }
]
```
In our example, we will be creating the following Lobster Article at `./pages/oceans/ocean_industry/lobster` :

```markdown
# Lobsters
lobsters are cool

## A Subtitle
subtitles are cool

## Final Subtitle
bottom most text block within the article.
```
<br></br>

### Article Structure
Articles are written in MDX Markdown and then wrapped in an `<Article />` component.  The `<Article />` component is located in the `/components/Article.js` directory and is imported into the article `.mdx` file.  Articles are also made aware of the hierarchy so they can display the correct focus area navbar and article navbar between the actual article and the top two navbars of the whole UCS Website.  The final product looks like this:

```jsx
// This is an example of an article wrapped in an <Article /> component
import Article from '/components/Article.js'
import hierarchy from "../hierarchy.json";

export const site = "oceans";
export const focusAreaUrl = "ocean_industry";

# Lobsters
lobsters are cool

## A Subtitle
subtitles are cool

## Final Subtitle
bottom most text block within the article.

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

In the example above, the markdown text is saved as the `{children}` object and injected into the `<Article />` component where it is styled.  The `<Article />` component passes `focusAreaUrl`, `hierarchy`, and `site` data through the component tree so the application renders the correct focus area navbar and article navbar. The article's specialized site (OCEANS) and focus area (Industry) are specified here:

```jsx
export const site = "oceans";
export const focusAreaUrl = "ocean_industry";
```

The lines above make the article aware of its place within the UCS Website hierarchy.  This single line below lets the article know how the hierarchy is constructed:

```jsx
import hierarchy from "../hierarchy.json";
```

### Adding Images to Articles
Images in articles are wrapped in the `<ArticleImage />` component.  Here is how we would import an image into the middle of our Lobster article:

```jsx
// This is an example of an article wrapped in an <Article /> component
import Article from '/components/Article.js'
import hierarchy from "../hierarchy.json";

export const site = "oceans";
export const focusAreaUrl = "ocean_industry";

// This statement imports the <ArticleImage /> image component
import ArticleImage from "/components/ArticleImage.js";

# Lobsters
lobsters are cool

## A Subtitle
subtitles are cool

// This is an image placed in the middle of the article
<ArticleImage image={"article_image_name.svg"} width={750} height={400} />
#### some small markdown text that goes under the image

## Final Subtitle
bottom most text block within the article.

export default ({ children }) => 
  <Article 
    focusAreaUrl={focusAreaUrl} 
    hierarchy={hierarchy} 
    site={site}
  >
    {children}
  </Article>
```

NOTE: The `<h4>` Markdown symbol: `####` is used to create a small subtitle under the image.  This is a custom feature of the `<ArticleImage />` component and this UCS Website project.  Normally, any text following a `#` would be *larger* than the standard text size, not smaller, but in our case we are using the `####` symbol for the smaller sized *'sub-text`* that goes under each image.

Also, within the current configuration of the UCS Website, the maximum ***width*** of an image is 1000 pixels which would look like this:


```jsx
<ArticleImage image={"image_name.svg"} width={1000} height={400} />
```

There is no maximum on the height as web browsers scroll from top to bottom.  You will want to size the width and heights of each image such that there is no dead-space so that the image displays at maximum width on mobile. The `<ArticleImage />` tag uses the Next.js `<Image>` tag and technical data on sizing these is available [here](https://nextjs.org/docs/api-reference/next/image#width).

The project is setup to pull `"image_name.svg"` directly from the [UCS Images Repo](https://github.com/Richard-Burd/ucs-images/). The `.env.local` file in the main directory contains a variable specifying a path to this repo:

```
.env.local

NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH
```

This path is then passed into the `<ArticleImage />` component located at: `./components/ArticleImage.js`.


<br></br><br></br><br></br>

### Sizing Images
**NOTE:** This section applies to images in both articles as well as solutions.
When placing images into the project, we want to maintain these three standards:
- Image titles should have the same font size as an article sub-section heading, i.e. the headings that start with the: **##** in markdown language, are are found in the ***article*** files.  Ignore those in ***solution*** files for now as they are too small.

- The titles in different images should thus be similar in size and...

- The UCS logos in different images should roughly be the same size as well.

This makes the images appear standardized across the site.  If the image font is unreadable whenever following these rules, the rules should be broken to make the images readable.  

There has never been a branding or graphic-standard guideline for UCS website graphics, and as a result, each image has a unique width respective to the website's viewport width.  This means that the width & height of each new image must be independently specified.

Images are imported with the `ArticleImage.js` React component which in turn uses the [Next.js `<Image />` component.](https://nextjs.org/docs/api-reference/next/image) and (via [props](https://reactjs.org/docs/components-and-props.html)) passes in the image's width and height as measured in pixels. The `<Image />` tag will then render the image according to one of these two formulas:
1. **Raster Sizing:**  Any raster image will get stretched to the exact width and height (in pixels) you specify inside the `<ArticleImage />` component, regardless of the image's original size.  In example, the following will render an image at 100 pixels by 100 pixels, regardless of the original image sizing or proportions:
`<ArticleImage image={"new_image.jpg"} width={100} height={100} />`
This means that if you want the image to retain its original proportions, you will have to look at the original image's width & height, then do some [proportional math](https://www.calculatorsoup.com/calculators/math/fractionssolvex.php) to figure out what the image width & height should be inside the `<ArticleImage />` component. You could also just *"eyeball"* it.
3. **Vector Sizing** A vector image will always retain its original proportions regardless of the width and height you specify.  The vector image will automatically ***fit*** into whatever space you specify with the `<ArticleImage />` component, and will not stretch in the vertical or horizontal axis. This means that  if you have an SVG file that is 200 millimeters wide by 100 millimeters tall, and you drop it into the code like this: 
`<ArticleImage image={"new_image.svg"} width={100} height={100} />`
...The width of the image will display at 100 pixels on the website and the height will display at 50 pixels. This is because the image only has a 100x100 pixel window within which to appear, and keeping its original proportions necessitates a height of 50 pixels.  The width on the other hand will stretch to its maximum allowable dimension of 100 pixels.  The same rules apply for a portrait image where the height exceeds the width.

<br></br>

![image of an example showing image sizing](https://raw.githubusercontent.com/Richard-Burd/ucs-images/503f20df5cc47314fd95af47065f2b8efb6052a7/sizing_images.png)

<br></br><br></br><br></br>

### Placeholders for Future Images (Dashboard Graphics)
Sometimes you will want to put images on the website that are still on the [dashboard](https://docs.google.com/document/d/1loCxU9D7uR4SbcVHAXHbUdjDwFNakZ0k8CbpVkDwGUE/edit?usp=sharing) and have not been created yet.  In order to do this, you will copy & paste the following code block into the correct article file:
```mdx
{/* This image is on Lee's dashboard and is not done yet */}
{/* <ArticleImage  image={"new_image.svg"}  width={100}  height={100} /> */}
{/* #### image markdown footnotes. */}
```
Replace `new_image` with the correct image name and then add in the correct footnotes.  Everything within these comments wrappers: "`{/* */}`" will be hidden to the reader visiting our UCS website.  This will only be visible in the code repository. When the image is complete and it has been uploaded to the image repository, you can go in and uncomment this block and then size the image according to the instructions above so that it will look something like this:
```mdx
<ArticleImage  image={"new_image.svg"}  width={700}  height={400} />
#### image markdown footnotes.
```
<br></br><br></br>

---

### Solutions (Markdown Coding)
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

```jsx
# Lobsters
Lobster hunting is a bad idea.
Eat more fish.
```

Solutions are wrapped in a `<Solution />` component located in the `/components/Solution.js` directory.  Solutions must define the ***Problem:*** and ***Solution:*** values for our `<Solution />` component to display. Our Solution will look like this:

```jsx
import SolutionDropdown from '/components/SolutionDropdown.js'

export const problem = "Lobsters are Dying";
export const solution = "Ban Lobster Hunts";

# Lobsters
Lobster hunting is a bad idea.
Eat more fish.

<SolutionImages 
  mobileSrc={"lobster_metrics_mobile.svg"}
  desktopSrc={"lobster_metrics_desktop.svg"}
/>
#### some small markdown text that goes under the image

export default ({ children }) => 
  <SolutionDropdown 
    problem={problem} 
    solution={solution}
  >
    {children}
  </SolutionDropdown>
```
Images in solutions are wrapped in this `<SolutionImages />` component as shown above:

```jsx
<SolutionImages 
  mobileSrc={"lobster_metrics_mobile.svg"}
  desktopSrc={"lobster_metrics_desktop.svg"}
/>
#### some small markdown text that goes under the image
```


We provide this component with both a desktop and a mobile version for these images. Since mobile images can be read on desktop (while desktop images are hard to read on mobile) we have the option to only pass in the mobile version like this:

```jsx
<SolutionImages 
  mobileSrc={"lobster_metrics_mobile.svg"}
/>
```

If we do so the mobile version will display in the desktop viewport. Generally speaking, both versions should be provided for all solutions.

By default the *'metrics-images'* are the following sizes:
- **340** pixels wide by 500 pixels tall on **mobile**
- **900** pixels wide by 320 pixels tall on **desktop**

*'metrics-images'* are the images that show the cost, benefit, and enviromental impacts for a given solution. These images do not require any specifications for height and/or width if they have the commensurate heights & widths shown above. In most cases, all solution images should use the default widths.  If you have a mobile image that was 340 pixels wide and 1000 pixels tall, you would specify the height like this:

```jsx
<SolutionImages 
  mobileSrc={"lobster_metrics_mobile.svg"}
  desktopSrc={"lobster_metrics_desktop.svg"}
  mobileHeight={1000}
/>
```
NOTE: you only specify a width or height whenever they are not the same as the default width or height.  Here is how you would specify all four dimensions for both mobile and desktop images if you had to for some reason:

```jsx
<SolutionImages 
  mobileSrc={"lobster_metrics_mobile.svg"}
  desktopSrc={"lobster_metrics_desktop.svg"}
  mobileHeight={735}
  mobileWidth={362}
  desktopHeight={495}
  desktopWidth={694}
/>
```

---

Here is how we would import our lobster solution into our Lobster article:

```jsx
// This is an example of an article wrapped in an <Article /> component
import Article from '/components/Article.js'
import hierarchy from "../hierarchy.json";

export const site = "oceans";
export const focusAreaUrl = "ocean_industry";

import ArticleImage from "/components/ArticleImage.js";

// import the solution MDX file and give it an UpperCamelCase name
import LobsterSolution from "/solutions/lobster_solution.mdx"

<ArticleImage image={"article_image_name.svg"} width={750} height={400} />
#### some small markdown text that goes under the image

# Lobsters
lobsters are cool

## A Subtitle
subtitles are cool

// place the solution where you want it to appear in the article
<LobsterSolution />

## Final Subtitle
bottom most text block within the article.

export default ({ children }) => 
  <Article 
    focusAreaUrl={focusAreaUrl} 
    hierarchy={hierarchy} 
    site={site}
  >
    {children}
  </Article>
```

### Solutions (Content Structure)
Solutions generally have the following four subsections:
1. Description
2. Background
3. Estimates
4. Calculations
5. Implementation

***Description*** is a required subsection that describes the problem being solved.
***Background*** is also required unless the parent article (encapsulating the solution) gives ample background information in the paragraph that preceeds the actual solution itself.  If such background is present in the article, then the solution does not need to have a background subsection.
***Estimates*** is a required subsection that contains, at minimum, an image for the metrics of the solution.  If there is no introductory paragraph(s) present in this subsection, the actual `## Estimates` header should not be typed out, but instead will be implied.
***Calculations*** is a required subsection that details how the estimates in the preceeding subsection were determined to be correct.
***Implementation*** is a required subsection that describes how the solution can be converted from an idea into a reality.

Below is an illustration of what a solution should look like:

<br></br>

![under construction; image of what a solution looks like](https://raw.githubusercontent.com/Richard-Burd/ucs-images/master/solution_example.svg)

<br></br>

Not all solutions will conform to this standard structure but the structure is a good starting point.  Whernever possible, we should make the effort to consult with experts in the follwoing fields:
1. Academia
2. Industry
3. Government
These would be experts with specialized knowledge in the solution topic.

<br></br><br></br><br></br>

### References (Footnotes)
The references inside solutions should be different than those inside the articles so the two don't accidentally cross-reference each other. The easiest way to do this is to use quotation marks in the solutions so each reference is a string like so:

```markdown
Article reference looks like this: [^1]
Solution reference looks like this: [^"1"]
```

See [How to create footnotes](https://www.markdownguide.org/extended-syntax/#footnotes) for more information. In the UCS Website, reference are imported from the legacy site and retain the same numbers they had on the legacy site.  This project uses the [remarkGfm](https://github.com/remarkjs/remark-gfm) plugin to render references.  This will re-number the references (when rendered to the browser) so that the first footnote to be mentioned in a text will be at the top, and the second will be below it, and so on.  This orders the references in order of their appearance in the text.  The legacy UCS Website ordered references alphabetically. NOTE: by default, [remarkGfm](https://github.com/remarkjs/remark-gfm) [and other modules we use in the project] render references as *Footnotes* but we change this title to say 'References' instead.

------

### Creating Tables
Tables are created using the [standard Markdown syntax](<div className="table-wrapper">) and are then wrapped in a `<div>` container with the className label: `table-container`.  Here is an example of how to make a table for this project:

```markdown
<div className="table-wrapper">

| Title-1 | Title-2 | Title-3 |
| --- | --- | --- |
| Name | Age | DOB |
| Name | Age | DOB |

</div>

```

This will render the following:

<div className="table-wrapper">

| Title-1 | Title-2 | Title-3 |
| --- | --- | --- |
| Name | Age | DOB |
| Name | Age | DOB |

</div>

The `<div>` container is necessary to make the table scrollable on mobile devices.  The `table-wrapper` class is defined in the `./styles/tailwind-styles.css` file and uses TailwindCSS classes that only work on a `<div>` container, and will not work on a `<table>` container.

Tables that have a title will look like this:

```markdown
<div className="table-title"> The Title of the Table Will Go Here </div>
<div className="table-wrapper">

| Title-1 | Title-2 | Title-3 |
| --- | --- | --- |
| Name | Age | DOB |
| Name | Age | DOB |

</div>

```

Note that the table title goes above the wrapper, not inside it.  The opening (`<div>`) and closing (`</div>`) ***div*** tags are also on the same line for the table title, as opposed to separate lines for the table wrapper.

------

## Special MDX Markdown Features

This project uses several NodeJS libraries and dependencies to generate [MDX Markdown](https://mdxjs.com/) for article and solution files.  These enable the wrapping [discussed above](#article-structure) as well as using [references](#references-footnotes).

### Entry Point Into The Project
The [next.config.mjs](https://github.com/Richard-Burd/urban-cruise-ship/blob/main/next.config.mjs) file is responsible for generating MDX Markdown and its commensurate features.  This is where all relevant NodeJS libraries (used to generate MDX Markdown) are introduced.

### Changing 'Footnotes' to say 'References'
Citations at the bottom of an MDX Markdown page are referred to by default as `'Footnotes'` in the myriad of NodeJS libraries we use (as dependencies) for the [@mdx-js/mdx](https://github.com/mdx-js/mdx) library.  Several of our NodeJS libraries (and their dependencies) are capable of generating footnotes depending on a given project structure. Since this is a [Next.js](https://nextjs.org/) project, we are using the following file to generate our footnotes:
```
node_modules/mdast-util-to-hast/lib/index.js
```
It's dependency chain looks like this:
```javascript
@mdx-js/mdx
└── remark-rehype
    └── mdast-util-to-hast
```
The `mdast-util-to-hast` dependency contains the line of code that must be altered:
```
h.footnoteLabel = settings.footnoteLabel || 'Footnotes'
```



In order to alter our `mdast-util-to-hast` dependency, we must access it via the [remark-rehype API](https://github.com/remarkjs/remark-rehype#unifieduseremarkrehype-destination-options); and in order to access that API within our project, we must utilize the [`options.rehypePlugins`](https://mdxjs.com/docs/extending-mdx/#using-plugins)  inside the `createMDX()` function located in the [next.config.mjs](https://github.com/Richard-Burd/urban-cruise-ship/blob/main/next.config.mjs) file.  This is achieved with the following line of code in that file:
```
[remarkRehype, {footnoteLabel: 'References'}]
```

### Autolink Headings
If you hover your mouse on the ***Autolink  Headings*** title above, a small chain icon will appear on the right of it, and if you click on *that* icon, you will automatically get a link to this subsection of this README file!  These are called ***Autolinks*** (or internal links) and they are a nifty way to point someone to a specific subsection in a Markdown page. 


 This UCS Website project uses Autolinks for article subsections so you can generate links to specific subsections within those articles.  In order to achieve this, we utilize two libraries: [`rehype-autolink-headings`](https://github.com/rehypejs/rehype-autolink-headings) and [`rehype-slug`](https://github.com/rehypejs/rehype-slug).  The latter is passed into [`options.rehypePlugins`](https://mdxjs.com/docs/extending-mdx/#using-plugins)  inside the `createMDX()` function located in the [next.config.mjs](https://github.com/Richard-Burd/urban-cruise-ship/blob/main/next.config.mjs) file and takes in no additional options.  We then pass the [former's API](https://github.com/rehypejs/rehype-autolink-headings#api) into the same place right below with options for `behavior` (which we must define) and `ariaHidden`:
 ```javascript
const behaviors = [...'append'...]

const withMDX = createMDX({
  ...
  options: {
    ...
      ...
      [rehypeSlug],
      [rehypeAutolinkHeadings, 
        {behaviors: 'append', properties: {ariaHidden: false} }]
    ],
  },
});

export  default withMDX(nextConfig);
```
If you navigate to the *[ENERGY / Transportation / Energy and Emissions in Transportation](https://urban-cruise-ship.vercel.app/energy/transport/transpo_ghg)* article, you will see a subsection at the bottom entitled: *Transportation Energy Efficiency.*  If you inspect this title with something like [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/open/) you will see that our code generates the following HTML:


```HTML
<h2 id="transportation-energy-efficiency">
  <a href="#transportation-energy-efficiency">
    <span class="icon icon-link"></span>
  </a>
  Transportation Energy Efficiency
</h2>
```
The Title is slugged to say: `transportation-energy-efficiency` in both the `<id>` and`<href>` tags which enable this link below to take you directly to this subsection:
[
https://urban-cruise-ship.vercel.app/energy/transport/transpo_ghg#transportation-energy-efficiency
](https://urban-cruise-ship.vercel.app/energy/transport/transpo_ghg#transportation-energy-efficiency)


------

<br></br> <br></br> <br></br>

## Project Build
This static site uses the following:

1. **NPM/Node.js** - for package management
2. **Next.js** - a production grade React application for static site generation
3. **Tailwind-CSS** - CSS styling library
4. **MDX** - a Markdown-based syntax for writing JSX components
5. **Algolia** - a site-search & discovery engine powered by AI (Planned Future Addition)

### Availability

The app is deployed [here](https://urban-cruise-ship.vercel.app/) hosted on Vercel.

---

### Installation Instructions (Bash Commands):

1. run: `npm install` to install the node module dependencies
2. run: `npm run dev` to run the development server
3. run: `npm run build-css` to build out any necessary TailwindCSS classes (if you add or change any)
4. run: `npm run build` to build out a production version of the site

---