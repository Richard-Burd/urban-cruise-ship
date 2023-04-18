# Urban Cruise Ship Homepage

## Installation Instructions (Bash Commands):

1. run: `npm install` to install the node module dependencies
2. run: `npm run dev` to run the development server (to see what your changes look like)
3. run: `npm run build-css` to build out any necessary TailwindCSS classes (if you add or change any)
4. run: `npm run build` to build out a production version of the site that is all static HTML files
5. run: `npm start` to serve up those HTML files and see how they look; it should all look the same as development server unless there's a bug somewhere.

---

## Instructions for Creating New Handouts & Hosting them on this Website

### Hosting Handouts on This Website

Our handouts are setup so that our site visitors can download them from our website and view them in their local internet browser (e.g. Chrome) or a local PDF viewer such as Adobe Acrobat Reader. The visitor would not view our handouts as part of our site, and so the handouts are not included in our code repo on GitHub. Instead, the repo has code that provides a link to a publicly available handout on our Google Shared drive that automatically downloads the handout, rather than displaying it in the Google-Drive default browser previewer. Follow these steps for adding a new handout to our existing collection:

First, go to the original handout PDF file on Google Drive and find the file's ID. In an example, the **_Human Population_** handout is located in [this directory here](https://drive.google.com/drive/folders/19tryIaoeLHmw0Y9rsUtGRrPpRg-PzHJW?usp=sharing). If you right-click on the file and select **get link** you will get the following path: `https://drive.google.com/file/d/1S4Z-GoAg_kjnQrMelPXk50aPggTe9NWc/view?usp=share_link` ...now the part of this link that is unique to the **_Human Population_** handout is this one right here: `1S4Z-GoAg_kjnQrMelPXk50aPggTe9NWc`. This is the **file-id** number. Note that it comes right after the : `/d/` part of the link and precedes the `view?usp=share_link` part of the link at the very end. Copy and paste this file-id as we will use it in future steps

Next, In this very GitHub repo, go to this directory: `"./pages/publications.js"` - this is where we display the handouts in the following three different sections:

- _Health_
- _Access_
- _Opportunities_

The **_Human Population_** handout (located in the _Health_ section) is represented by the following code:

```jsx
<a
  href="https://drive.google.com/uc?export=view&id=1S4Z-GoAg_kjnQrMelPXk50aPggTe9NWc"
  className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
>
  <div>
    <b>
      <i>Human Population</i>
    </b>
  </div>
</a>
```

Notice that the `href` contains a different link path that starts with `https://drive.google.com/uc?export` ...this is the format we must use in order that our viewer will _download_ our handout when they click on it rather then get taken to a google-drive preview window. When you add a new handout, you will copy and paste the code above and replace the `1S4Z-GoAg_kjnQrMelPXk50aPggTe9NWc` with the file-id for the new handout so that it will look something like this:

```jsx
<a
  href="https://drive.google.com/uc?export=view&id=8675309"
  className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
>
  <div>
    <b>
      <i>My Handout Title</i>
    </b>
  </div>
</a>
```

In our case, the `8675309` above is a stand-in for our new handout's **file-id** which is a random list of letters, numbers, and dashes. The code snippet looks confusing so here is a breakdown:

```jsx
<a href="changes" className="does-not-change">
  <div>
    <b>
      <i>My Handout Title</i>
    </b>
  </div>
</a>
```

Note that you do not need to change any of the [TailwindCSS](https://tailwindcss.com/) styling in the `className`, you just need to change the `href`

<br></br><br></br>

---

<br></br><br></br>

## Instructions for Uploading Images to The UCS Website

About 98% of all images on the [UCS Website](http://urbancruiseship.org/) are in the SVG (`.svg`) vector file format. The instructions below detail how to prepare and upload SVG images to the internet so they can be used on any page within the [UCS Website](http://urbancruiseship.org/). ~~All images for the [UCS Website](http://urbancruiseship.org/) are currently stored in [this public GitHub repository](https://github.com/Richard-Burd/ucs-images/) and are referenced in the article (and solution) markdown `.mdx` files of the [UCS Website's](http://urbancruiseship.org/) code base. That code base is located [here](https://github.com/Richard-Burd/urban-cruise-ship/) in a private repository. You will need to be granted access in order to view or edit it. Images not part of an article or solution are stored in that private repository and are not discussed in this section below.~~

<br></br>

### Step-1 Setup Access to a GitHub Repository (Only Do This One Time)

~~You will need a [GitHub](https://github.com/) account in order to do all of this. When you create an account, make sure to add a picture of yourself in your profile section so you can follow instructions below. Once you have an account, the easiest way to get started is to use [GitHub Desktop](https://desktop.github.com/) to upload images. From [GitHub Desktop](https://desktop.github.com/), go to `file > Clone repository...` which brings up the **Clone Repository** window; in that window select the **URL** option and enter in the URL of the UCS Images Repository:
`https://github.com/Richard-Burd/ucs-images/`
For the **Local Path** option, enter the folder on your computer where you want to store the repository. When you open up this folder, you should see a list of SVG images in that folder along with a `README.md` file, and possible a hidden `.git` file if your computer is set to show hidden files. the list of images should match what is in the [actual repository in the cloud](https://github.com/Richard-Burd/ucs-images/).~~

<br></br>

**UPDATE**: Right now we are storing our images on Jye's server because this solution with GitHub stopped working in February of 2023; we are not sure why as the problems we were expierencing were intermittent and hard to track down. We may do something later but as of now, send all images to Jye that you want uploaded to the site.

<br></br>

### Step-2 SVG Optimization:

SVG files created in [Inkscape](https://inkscape.org) and other graphics programs are unnecessarily large by default as they contain various _"front matter"_ elements that help graphics programs, but also increase the file sizes of the SVGs. These increased file sizes translate to slower loading times when the SVGs are viewed on a webpage through an internet browser. The process of getting rid of such front matter [that slows loading times] is called **optimization**. You can optimize an SVG by either:

- Exporting the SVG as optimized from Inkscape directly by navigating to: `file > Save as > Optimized SVG` or:
- Using an online SVG optimizer [like this one](https://svgoptimizer.com/) where you can upload multiple images at once.
  NOTE: if you use the latter, the image names will change as each file will have a `-min` added to the filename, you will need to make sure the image names remain the same as they were on the old UCS Website, so this `-min` will need to be removed from the filename.

<br></br>

### Step-3 Upload the Optimized SVGs to the GitHub Repository

~~Drag and drop the new SVG (or multiple SVGs) into the repository folder described above in Step-1, the **Local Path** described above in Step-1 is where the repository folder will be located. You can find it in the [GitHub Desktop](https://desktop.github.com/) main window, in the center of the screen where it says **View the files of your repository in Explorer** -> click on the **_Show in Explorer_** window and there you should see a bunch of existing images in that file folder that mirror the images int the actual online (cloud) repository [here](https://github.com/Richard-Burd/ucs-images/). When you add those images in the local path folder, the GitHub Desktop window will show some green boxes with green plus marks in them, and you will see a picture of yourself in the lower left-hand corner of the GitHub desktop window. Next to that picture you will need to enter in a brief comment, you can say "added image" or "added images" and then when you are ready, click on the **_Commit to master_** button in the lower left-hand corner of the GitHub Desktop window. If everything worked properly, you should see the images you just added [here](https://github.com/Richard-Burd/ucs-images/) in the cloud.~~

**NOTE:** ~~Images can not be _edited._ _updated_ or _modified_ using this system. This means that if you want to change an image that is already in the repository, you must delete that image first, and then re-upload another version of it with the same name **after** the original version has been deleted on the cloud. You can add an image or delete an image, you cannot do anything else. Make sure the old version of the image is deleted [here](https://github.com/Richard-Burd/ucs-images/) in the cloud before you add a corrected version.~~

<br></br>

### What to Do if You Screw Something up and Want to Start Over

~~If the local repository on your computer got screwed up, and you want to delete it and start over, open up [GitHub Desktop](https://desktop.github.com/) and in the main window, go to the top menu bar and select `Repository > Remove...` - it will then ask you if you want to delete the repository and you can select yes. After that, go to `file > Clone repository...` and repeat the steps described above in **Step-1**.~~

~~If you screwed up and already pushed the changes to the [repository in the cloud](https://github.com/Richard-Burd/ucs-images/) let you administrator know and they will _restore_ the repository to a previous state pre-dating your screw-up. They will most likely tell you to delete your local version of the repository via your [GitHub Desktop](https://desktop.github.com/) interface and then use that interface to re-clone the repository from the cloud as described in Step-1 above.~~

<br></br>

### Adding Images to an Article or Solution Markdown File in the UCS Website Repository

This process will be discussed in more detail in the sections detailing the site's markdown file system. The shorthand version is that all article and solution files are written in [MDX](https://mdxjs.com/) which is a format of Markdown (normally `.md`) that allows for the use [JSX](<https://en.wikipedia.org/wiki/JSX_(JavaScript)>) and [React](<https://en.wikipedia.org/wiki/React_(JavaScript_library)>) components. The SVG images are stored [here](https://github.com/Richard-Burd/ucs-images/) and in the article (or solution) `.mdx` files, they get wrapped in an `<ArticleImage />` [React](<https://en.wikipedia.org/wiki/React_(JavaScript_library)>) component. The article (or solution) `.mdx` file must therefore import `<ArticleImage />` from the components directory like so:

```MDX
{/* article or solution MDX file */}

`import ArticleImage from "/components/ArticleImage.js";`

{/* some text above the image */}

`<ArticleImage image={"zero_waste.svg"} width={900} height={350} />`

{/* some text below an image */}
```

...the `<ArticleImage />` component will look for the [`zero-waste.svg`](https://github.com/Richard-Burd/ucs-images/blob/master/zero_waste.svg) image that is located [in this repository](https://github.com/Richard-Burd/ucs-images/) and display it accordingly.

<br></br> <br></br> <br></br>

---

## Instructions for Uploading Article or Solution Content to The UCS Website

### GitHub Codespaces

GitHub Codespaces is the easiest way to both update the UCS Website and validate that those updates will properly integrate into the existing codebase.

### Git Commands

When you first open your Codespace (or local environment if you're doing that instead) you will want to `pull` in any recent changes that another team member has made to the site since the last time your codespace (or local environment) was opened. Do this by running the following command in your command terminal at the bottom of your screen:

`$ git pull`

You should see something like this in your command terminal if you have successfully pulled in the latest changes not yet present in your local codespace (or local environment):

```bash
@Lee-Nelson-UCS ➜ /workspaces/urban-cruise-ship (main) $ git pull
remote: Enumerating objects: 7, done.
remote: Counting objects: 100% (7/7), done.
remote: Compressing objects: 100% (1/1), done.
remote: Total 4 (delta 3), reused 4 (delta 3), pack-reused 0
Unpacking objects: 100% (4/4), 608 bytes | 60.00 KiB/s, done.
From https://github.com/Richard-Burd/urban-cruise-ship
   83113a2..3241116  main       -> origin/main
Updating 83113a2..3241116
Fast-forward
 solutions/development-set-patterns.mdx | 2 ++
 1 file changed, 2 insertions(+)
@Lee-Nelson-UCS ➜ /workspaces/urban-cruise-ship (main ✗) $
```

Now if you run that same command again, you should receive the following message:

```
Already up to date.
```

This is because you have already pulled in the latest changes and there's nothing new to add.

At this point you're ready to make changes to the article or solution markdown file(s) of your choice. The articles are located in the `./pages` directory (folder) and are organized hierarchically according to the websites **site / focus area / article** structure. Solutions on the other hand are all located in the `./solutions` directory (folder) without any subcategorization.

Once you are done making changes to articles and/or solutions go ahead and spin up a local development server to view those changes in your browser with this command:

`$ npm run dev`

You should see the following appear in your terminal:

```bash
@Lee-Nelson-UCS ➜ /workspaces/urban-cruise-ship (main ✗) $ npm run dev

> urban-cruise-ship@0.1.0 dev
> next dev

ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

You can Ctrl+MouseClick on the `http://localhost:3000` link to open the website in your browser. You should also see a link appear, follow you can also follow it to your web browser as well, then navigate to the **_site / focus area / article_** where your changes are located. If you don't see your changes, then you've made a mistake somewhere. If you do see your changes, then you're ready to "build" a new version of the website. First, shutdown the server with the following command:

**_Ctrl+C_**

You should see the following in your command prompt:

```bash
...
info  - automatically enabled Fast Refresh for 1 custom loader
event - compiled client and server successfully in 2s (588 modules)
wait  - compiling / (client and server)...
event - compiled client and server successfully in 241 ms (595 modules)
^C
@Lee-Nelson-UCS ➜ /workspaces/urban-cruise-ship (main ✗) $
```

Next, run the following command to make sure you've only made changes to the files you intended to change:

`$ git status`

You should see a list of changed files that you've made that looks like this:

```bash
@Lee-Nelson-UCS ➜ /workspaces/urban-cruise-ship (main ✗) $ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   pages/energy/industry/lobsters.mdx

no changes added to commit (use "git add" and/or "git commit -a")
@Lee-Nelson-UCS ➜ /workspaces/urban-cruise-ship (main ✗) $
```

In this case, the only file being changes is `lobsters.mdx` which is located in the `energy` specialized site's `industry` focus area. If you see files that you did not intend to change, then you've made a mistake somewhere. If you only see the files you intended to change, then you're ready to stage your're changes with the following command:

`$ git add .`

NOTE: don't forget the space and the period at the end of the command.

After you do this, nothing will appear in your command prompt and you will see something like this:

```bash
@Lee-Nelson-UCS ➜ /workspaces/urban-cruise-ship (main ✗) $ git add .
@Lee-Nelson-UCS ➜ /workspaces/urban-cruise-ship (main) $
```

Next, you can run `git status` again and now you should see the files you intend to update (and **_only_** those files) highlighted in green. It should look something like this:

```bash
@Richard-Burd ➜ /workspaces/urban-cruise-ship (main) $ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   pages/energy/industry/lobsters.mdx

@Lee-Nelson-UCS ➜ /workspaces/urban-cruise-ship (main) $
```

Next you will want to commit your changes with the following command:

`$ git commit -m "your commit message here"`

NOTE: You will need to replace the text "your commit message here" with a message that describes the changes you've made. For example, if you've added a new lobster article, then your commit message might look like this:

`$ git commit -m "added lobster article"`

After running the command above, you should see something like this in your command prompt:

```bash
@Lee-Nelson-UCS ➜ /workspaces/urban-cruise-ship (main) $ git commit -m "added lobster article"
[main d195578] Git Bash Commands added
 1 file changed, 107 insertions(+)
@Lee-Nelson-UCS ➜ /workspaces/urban-cruise-ship (main ✗) $
```

Finally, you will want to push your changes to the GitHub repository with the following command:

`$ git push`

After you run the command, you should see something like this in your command prompt:

```bash
@Lee-Nelson-UCS ➜ /workspaces/urban-cruise-ship (main) $ git push
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 2 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 2.69 KiB | 917.00 KiB/s, done.
Total 6 (delta 4), reused 0 (delta 0)
remote: Resolving deltas: 100% (4/4), completed with 2 local objects.
To https://github.com/Richard-Burd/urban-cruise-ship
   3241116..8fbc88a  main -> main
@Lee-Nelson-UCS ➜ /workspaces/urban-cruise-ship (main) $
```

At this point, your changes have been pushed to **_this_** GitHub repository and if everything is working properly, those changes should appear on http://urbancruiseship.org within 5 minutes or so.

### Git Commands Summary

1. `$ git pull`
2. `$ git status`
3. `$ git add .`
4. `$ git commit -m "your commit message here"`
5. `$ git push`

<br></br> <br></br> <br></br>

---

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

Articles are written in [Markdown-with-JSX](https://mdxjs.com/). these files have a `.mdx` file extension. Articles are stored in `/pages` directory located in the top-level directory of this project. In an example, the _Seafood_ article [here](https://urban-cruise-ship.vercel.app/oceans/ocean_industry/seafood) would be located in the following directory:

```
├── urban-cruise-ship
│   ├── pages
│   │   ├── oceans
│   │   │   ├── oceans_industry
│   │   │   |   └── seafood.mdx
.....etc.....
```

The `oceans_industry` folder is the OCEAN Site's **_Industry_** focus area.

<br></br>

### Creating a New Article

If we wanted to create a new Article called `lobster.mdx` in the OCEANS Site's **_Industry_** focus area, we would create a new file called `lobster.mdx` in the `/pages/oceans/oceans_industry` directory:

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

Articles are written in MDX Markdown and then wrapped in an `<Article />` component. The `<Article />` component is located in the `/components/Article.js` directory and is imported into the article `.mdx` file. Articles are also made aware of the hierarchy so they can display the correct focus area navbar and article navbar between the actual article and the top two navbars of the whole UCS Website. The final product looks like this:

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
import Article from "/components/Article.js";

// other elements go here

export default ({ children }) => (
  <Article focusAreaUrl={focusAreaUrl} hierarchy={hierarchy} site={site}>
    {children}
  </Article>
);
```

In the example above, the markdown text is saved as the `{children}` object and injected into the `<Article />` component where it is styled. The `<Article />` component passes `focusAreaUrl`, `hierarchy`, and `site` data through the component tree so the application renders the correct focus area navbar and article navbar. The article's specialized site (OCEANS) and focus area (Industry) are specified here:

```jsx
export const site = "oceans";
export const focusAreaUrl = "ocean_industry";
```

The lines above make the article aware of its place within the UCS Website hierarchy. This single line below lets the article know how the hierarchy is constructed:

```jsx
import hierarchy from "../hierarchy.json";
```

### Adding Images to Articles

Images in articles are wrapped in the `<ArticleImage />` component. Here is how we would import an image into the middle of our Lobster article:

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

NOTE: The `<h4>` Markdown symbol: `####` is used to create a small subtitle under the image. This is a custom feature of the `<ArticleImage />` component and this UCS Website project. Normally, any text following a `#` would be _larger_ than the standard text size, not smaller, but in our case we are using the `####` symbol for the smaller sized _'sub-text`_ that goes under each image.

There is no maximum on the height as web browsers scroll from top to bottom. You will want to size the width and heights of each image such that there is no dead-space so that the image displays at maximum width on mobile. The `<ArticleImage />` tag uses the Next.js `<Image>` tag and technical data on sizing these is available [here](https://nextjs.org/docs/api-reference/next/image#width).

The project is setup to pull `"image_name.svg"` directly from the [UCS Images Repo](https://github.com/Richard-Burd/ucs-images/). The `.env.local` file in the main directory contains a variable specifying a path to this repo:

```
.env.local

NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH
```

This path is then passed into the `<ArticleImage />` component located at: `./components/ArticleImage.js`.

<br></br><br></br><br></br>

### Sizing Images from the Original UCS Website

**NOTE:** This section applies to article images and not Solution images. Solution images are being sorted out at the time of this writing.

The maximum width of an article image is **992pixels**. When placing images into the project, we want to maintain these three standards:

- Image titles should have the same font size as an article sub-section heading, i.e. the headings that start with the: **##** in markdown language, are are found in the **_article_** files. Ignore those in **_solution_** files for now as they are too small.

- The titles in different images should thus be similar in size and...

- The UCS logos in different images should roughly be the same size as well.

This makes the images appear standardized across the site. If the image font is unreadable whenever following these rules, the rules should be broken to make the images readable.

There has never been a branding or graphic-standard guideline for UCS website graphics, and as a result, each image has a unique width respective to the website's viewport width. This means that the width & height of each new image must be independently specified.

Images are imported with the `ArticleImage.js` React component which in turn uses the [Next.js `<Image />` component.](https://nextjs.org/docs/api-reference/next/image) and (via [props](https://reactjs.org/docs/components-and-props.html)) passes in the image's width and height as measured in pixels. The `<Image />` tag will then render the image according to one of these two formulas:

1. **Raster Sizing:** Any raster image will get stretched to the exact width and height (in pixels) you specify inside the `<ArticleImage />` component, regardless of the image's original size. In example, the following will render an image at 100 pixels by 100 pixels, regardless of the original image sizing or proportions:
   `<ArticleImage image={"new_image.jpg"} width={100} height={100} />`
   This means that if you want the image to retain its original proportions, you will have to look at the original image's width & height, then do some [proportional math](https://www.calculatorsoup.com/calculators/math/fractionssolvex.php) to figure out what the image width & height should be inside the `<ArticleImage />` component. You could also just _"eyeball"_ it.
2. **Vector Sizing** A vector image will always retain its original proportions regardless of the width and height you specify. The vector image will automatically **_fit_** into whatever space you specify with the `<ArticleImage />` component, and will not stretch in the vertical or horizontal axis. This means that if you have an SVG file that is 200 millimeters wide by 100 millimeters tall, and you drop it into the code like this:
   `<ArticleImage image={"new_image.svg"} width={100} height={100} />`
   ...The width of the image will display at 100 pixels on the website and the height will display at 50 pixels. This is because the image only has a 100x100 pixel window within which to appear, and keeping its original proportions necessitates a height of 50 pixels. The width on the other hand will stretch to its maximum allowable dimension of 100 pixels. The same rules apply for a portrait image where the height exceeds the width.

<br></br>

![image of an example showing image sizing](https://web-cyber.jyeartstudio.com/ucs-images/sizing_images.png)

### Sizing New Images for the New UCS Website

Within the current configuration of the UCS Website, the maximum **_width_** of an article image when viewed in the Desktop viewport is 992 pixels which would look like this:

```jsx
<ArticleImage image={"image_name.svg"} width={992} height={400} />
```

Assuming the user had a mobile device with a 390 pixel width (which at one time was the average pixel width of a mobile device), the maximum image **_width_** would be 358 pixels and would look like this:

```jsx
<ArticleImage image={"image_name.svg"} width={358} height={400} />
```

Currently, we do not display mobile-specific images in articles but if you wanted to know how much width you had available to you, the answer would be 358 pixels.

The Solutions images discussed below have the following maximum widths:

- 900 pixels in the desktop viewport
- 340 pixels in the mobile viewport

The Solutions images are imported using the `<SolutionImages />` React component instead of the `<ArticleImage />` React component as discussed below. The `<SolutionImages />` component is designed to import both a mobile and desktop image with default widths & heights defined for each one.

Both the the `<ArticleImage />` and `<SolutionImages />` components are located in the `./components` directory and use the Next.js `<Image />` component to render the images. This Next.js `<Image />` component is responsible for the **Raster Sizing** and **Vector Sizing** rules discussed in the above section.

<br></br><br></br><br></br>

### Placeholders for Future Images (Dashboard Graphics)

Sometimes you will want to put images on the website that are still on the [dashboard](https://docs.google.com/document/d/1loCxU9D7uR4SbcVHAXHbUdjDwFNakZ0k8CbpVkDwGUE/edit?usp=sharing) and have not been created yet. In order to do this, you will copy & paste the following code block into the correct article file:

```mdx
{/* This image is on Lee's dashboard and is not done yet */}
{/* <ArticleImage  image={"new_image.svg"}  width={100}  height={100} /> */}
{/* #### image markdown footnotes. */}
```

Replace `new_image` with the correct image name and then add in the correct footnotes. Everything within these comments wrappers: "`{/* */}`" will be hidden to the reader visiting our UCS website. This will only be visible in the code repository. When the image is complete and it has been uploaded to the image repository, you can go in and uncomment this block and then size the image according to the instructions above so that it will look something like this:

```mdx
<ArticleImage image={"new_image.svg"} width={700} height={400} />
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

To create a new solution, we would create a new MDX file in the `/solutions` directory like so:

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

Solutions are wrapped in a `<Solution />` component located in the `/components/Solution.js` directory. Solutions must define the **_Problem:_** and **_Solution:_** values for our `<Solution />` component to display. Our Solution will look like this:

```jsx
import SolutionDropdown from '/components/SolutionDropdown.js'

export const problem = "Lobsters are Dying";
export const solution = "Ban Lobster Hunts";

import SolutionImages from "/components/SolutionImages.js";

# Lobsters
Lobster hunting is a bad idea.
Eat more fish.

<SolutionImages
  mobileSrc={"lobster_metrics_mobile.svg"}
  desktopSrc={"lobster_metrics_desktop.svg"}
  mobileHeight={500}
  desktopHeight={320}
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
  mobileHeight={500}
  desktopHeight={320}
/>
```

We provide this component with both a desktop and a mobile version for these images. Since mobile images can be read on desktop (while desktop images are hard to read on mobile) we have the option to only pass in the mobile version like this:

```jsx
<SolutionImages mobileSrc={"lobster_metrics_mobile.svg"} mobileHeight={500} />
```

If we do so the mobile version will display in the desktop viewport. Generally speaking, both versions should be provided for all solutions.

By default the solution images are the following sizes:

- **340** pixels wide
- **900** pixels wide

These images do not require any specifications for width, but they do require defined heights. In most cases, all solution images should use the default widths. If you have a mobile image that was 340 pixels wide (the defauly width) and 1000 pixels tall, you would specify the height like this:

```jsx
<SolutionImages
  mobileSrc={"lobster_metrics_mobile.svg"}
  desktopSrc={"lobster_metrics_desktop.svg"}
  mobileHeight={1000}
/>
```

NOTE: you only specify a width whenever it is not the same as the default width. You will always need to specify a height as there is no default height for our solution images. Here is how you would specify all four dimensions for both mobile and desktop images if you had to for some reason:

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

**_Description_** is a required subsection that describes the problem being solved.
**_Background_** is also required unless the parent article (encapsulating the solution) gives ample background information in the paragraph that preceeds the actual solution itself. If such background is present in the article, then the solution does not need to have a background subsection.
**_Estimates_** is a required subsection that contains, at minimum, an image for the metrics of the solution. If there is no introductory paragraph(s) present in this subsection, the actual `## Estimates` header should not be typed out, but instead will be implied.
**_Calculations_** is a required subsection that details how the estimates in the preceeding subsection were determined to be correct.
**_Implementation_** is a required subsection that describes how the solution can be converted from an idea into a reality.

Below is an illustration of what a solution should look like:

<br></br>

![under construction; image of what a solution looks like](https://raw.githubusercontent.com/Richard-Burd/ucs-images/master/solution_example.svg)

<br></br>

Not all solutions will conform to this standard structure but the structure is a good starting point. Whernever possible, we should make the effort to consult with experts in the follwoing fields:

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

See [How to create footnotes](https://www.markdownguide.org/extended-syntax/#footnotes) for more information. In the UCS Website, reference are imported from the legacy site and retain the same numbers they had on the legacy site. This project uses the [remarkGfm](https://github.com/remarkjs/remark-gfm) plugin to render references. This will re-number the references (when rendered to the browser) so that the first footnote to be mentioned in a text will be at the top, and the second will be below it, and so on. This orders the references in order of their appearance in the text. The legacy UCS Website ordered references alphabetically. NOTE: by default, [remarkGfm](https://github.com/remarkjs/remark-gfm) [and other modules we use in the project] render references as _Footnotes_ but we change this title to say 'References' instead.

---

### Creating Tables

Tables are created using the [standard Markdown syntax](<div className="table-wrapper">) and are then wrapped in a `<div>` container with the className label: `table-container`. Here is an example of how to make a table for this project:

```markdown
<div className="table-wrapper">

| Title-1 | Title-2 | Title-3 |
| ------- | ------- | ------- |
| Name    | Age     | DOB     |
| Name    | Age     | DOB     |

</div>
```

This will render the following:

<div className="table-wrapper">

| Title-1 | Title-2 | Title-3 |
| ------- | ------- | ------- |
| Name    | Age     | DOB     |
| Name    | Age     | DOB     |

</div>

The `<div>` container is necessary to make the table scrollable on mobile devices. The `table-wrapper` class is defined in the `./styles/tailwind-styles.css` file and uses TailwindCSS classes that only work on a `<div>` container, and will not work on a `<table>` container.

Tables that have a title will look like this:

```markdown
<div className="table-title"> The Title of the Table Will Go Here </div>
<div className="table-wrapper">

| Title-1 | Title-2 | Title-3 |
| ------- | ------- | ------- |
| Name    | Age     | DOB     |
| Name    | Age     | DOB     |

</div>
```

Note that the table title goes above the wrapper, not inside it. The opening (`<div>`) and closing (`</div>`) **_div_** tags are also on the same line for the table title, as opposed to separate lines for the table wrapper.

---

## Special MDX Markdown Features

This project uses several NodeJS libraries and dependencies to generate [MDX Markdown](https://mdxjs.com/) for article and solution files. These enable the wrapping [discussed above](#article-structure) as well as using [references](#references-footnotes).

### Entry Point Into The Project

The [next.config.mjs](https://github.com/Richard-Burd/urban-cruise-ship/blob/main/next.config.mjs) file is responsible for generating MDX Markdown and its commensurate features. This is where all relevant NodeJS libraries (used to generate MDX Markdown) are introduced.

### Changing 'Footnotes' to say 'References'

Citations at the bottom of an MDX Markdown page are referred to by default as `'Footnotes'` in the myriad of NodeJS libraries we use (as dependencies) for the [@mdx-js/mdx](https://github.com/mdx-js/mdx) library. Several of our NodeJS libraries (and their dependencies) are capable of generating footnotes depending on a given project structure. Since this is a [Next.js](https://nextjs.org/) project, we are using the following file to generate our footnotes:

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

In order to alter our `mdast-util-to-hast` dependency, we must access it via the [remark-rehype API](https://github.com/remarkjs/remark-rehype#unifieduseremarkrehype-destination-options); and in order to access that API within our project, we must utilize the [`options.rehypePlugins`](https://mdxjs.com/docs/extending-mdx/#using-plugins) inside the `createMDX()` function located in the [next.config.mjs](https://github.com/Richard-Burd/urban-cruise-ship/blob/main/next.config.mjs) file. This is achieved with the following line of code in that file:

```
[remarkRehype, {footnoteLabel: 'References'}]
```

### Autolink Headings

If you hover your mouse on the **_Autolink Headings_** title above, a small chain icon will appear on the right of it, and if you click on _that_ icon, you will automatically get a link to this subsection of this README file! These are called **_Autolinks_** (or internal links) and they are a nifty way to point someone to a specific subsection in a Markdown page.

This UCS Website project uses Autolinks for article subsections so you can generate links to specific subsections within those articles. In order to achieve this, we utilize two libraries: [`rehype-autolink-headings`](https://github.com/rehypejs/rehype-autolink-headings) and [`rehype-slug`](https://github.com/rehypejs/rehype-slug). The latter is passed into [`options.rehypePlugins`](https://mdxjs.com/docs/extending-mdx/#using-plugins) inside the `createMDX()` function located in the [next.config.mjs](https://github.com/Richard-Burd/urban-cruise-ship/blob/main/next.config.mjs) file and takes in no additional options. We then pass the [former's API](https://github.com/rehypejs/rehype-autolink-headings#api) into the same place right below with options for `behavior` (which we must define) and `ariaHidden`:

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

If you navigate to the _[ENERGY / Transportation / Energy and Emissions in Transportation](https://urban-cruise-ship.vercel.app/energy/transport/transpo_ghg)_ article, you will see a subsection at the bottom entitled: _Transportation Energy Efficiency._ If you inspect this title with something like [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/open/) you will see that our code generates the following HTML:

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

---

## Instructions for Creating Article Buttons with Top and Bottom Defined Text
Some of our article buttons have a unique requirement to display a specified text on the top line of text with a specified text on the bottom line of text.  below is one such button from the [HISTORY/Solutions](https://www.urbancruiseship.org/history/solutions) section:

![image of the Net Benefit button](https://web-cyber.jyeartstudio.com/ucs-images/top_n_bottom_text_button.jpg)

NOTE: the ***Net Benefit*** is defined as the 'top' line and the ***(Benefit - Cost)*** is defined as the bottom line.  We do not our  text to be arbitrarily wrapped as it is elsewhere throughout the site but instead want it defined by humans.  This is achieved by adding an extra key & value pair to the `hierarchy.json` file in the specialized site [in our case HISTORY] you wish to modify.  Below there is a `"article_title_two": "(Benefit / Cost)"` line that indicates the text that should be displayed on the bottom line of the button.  The `article_title_two` key is optional and if it is not present, the text will be displayed on a single line as it is elsewhere on the site.  The `article_title_two` key is only used for the top and bottom text buttons.  The `article_title` key is used for all other buttons.  Below is an example of the `hierarchy.json` file for the HISTORY section:

```json
[
    {
     "focus_area_name":"Solutions",
     "focus_area_url":"solutions",
     "articles": [
      { 
        "article_title": "Efficiency", 
        "article_title_two": "(Benefit / Cost)", 
        "article_url": "benefit-over-cost" 
      },
      { 
        "article_title": "Net Benefit", 
        "article_title_two": "(Benefit - Cost)", 
        "article_url": "benefit-minus-cost" 
      }
     ]
  },
]
```
This gets past down via `props` to the `ArticleButton` & `ArticleNavbarButton` components which then use the `article_title_two` key to display the text on this line:

```jsx
{props.articleTitle}
{props.articleTitleTwo && <div>{props.articleTitleTwo}</div>}
```

The code above essentially says: if the `article_title_two` key is present, display the text on the bottom line of the button.  If it is not present, display the text on a single line as it is elsewhere on the site.

---

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
