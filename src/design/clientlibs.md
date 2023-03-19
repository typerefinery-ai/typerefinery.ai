# CMS ClientLibs Pattern

## Client-Side Libraries

CMS (Content Management System) client-side libraries are sets of JavaScript and CSS files that are included in the web page served by a CMS to provide additional functionality and enhance the user experience. These libraries may be built into the CMS itself or provided as standalone packages that can be integrated into the CMS.

Some common CMS client-side libraries include:

* jQuery - a popular JavaScript library that simplifies the process of manipulating HTML documents, handling events, and creating animations.
* Bootstrap - a CSS framework that provides a set of pre-built UI components such as buttons, forms, and navigation menus, as well as responsive grid layouts for building mobile-friendly websites.
* Angular - a JavaScript framework for building complex web applications that provides a powerful set of tools for building data-driven UIs.
* React - a JavaScript library for building reusable UI components that provides a declarative approach to building user interfaces.
* Vue.js - a progressive JavaScript framework for building user interfaces that provides a simple and intuitive API for building components and managing application state.

These libraries can be used in conjunction with a CMS to enhance its functionality and provide a better user experience. For example, jQuery can be used to add dynamic effects and animations to the page, Bootstrap can be used to create responsive layouts that adapt to different screen sizes, and Angular can be used to build complex web applications with data-driven UIs.

## How Client-Side Libraries typically used

Client-side libraries are typically used to add additional functionality to a website or web application. These libraries are loaded in the user's web browser and run on the client-side, which means that they do not require server-side processing and can be executed immediately on the user's machine.

There are several ways in which client-side libraries are typically used:

* Enhancing the User Interface (UI): Client-side libraries such as jQuery, React, and Vue.js are commonly used to add interactivity to the UI of a website or web application. For example, they can be used to create dynamic menus, form validation, sliders, and other interactive elements that make the site more engaging and user-friendly.
* Optimizing Performance: Client-side libraries can also be used to optimize the performance of a website or web application. For example, libraries like Lodash and Underscore.js provide a set of optimized functions for common programming tasks, which can help to reduce the amount of code that needs to be executed on the client-side and improve performance.
* Building Web Applications: Client-side libraries such as Angular, React, and Vue.js are commonly used to build single-page applications (SPAs) that provide a more seamless user experience. These libraries provide tools for building complex UI components, managing application state, and interacting with APIs.
* Cross-Browser Compatibility: Client-side libraries can also be used to ensure cross-browser compatibility. For example, jQuery provides a set of functions that work consistently across different web browsers, which can help to ensure that the website or web application functions correctly on all devices.

In summary, client-side libraries are used to enhance the functionality and user experience of a website or web application, optimize performance, build complex web applications, and ensure cross-browser compatibility.

## Standard way to include a client-side library in HTML

The standard way to include a client-side library in an HTML document is to use the `<script>` tag. Here are the steps to include a client-side library in your HTML code:

* Download or reference the library file: You can either download the library file and save it in your project directory or reference it from a CDN (Content Delivery Network) such as Google, Microsoft, or Cloudflare. The library file will typically have a .js extension.
* Create a `<script>` tag: Add a `<script>` tag to your HTML document where you want to include the library.
* Set the src attribute: Set the src attribute of the `<script>` tag to the URL of the library file. If the library is located in your project directory, use a relative path. If the library is hosted on a CDN, use the absolute URL.
* Optional: Set the defer or async attribute: If you want to defer the loading of the script or load it asynchronously, set the defer or async attribute of the `<script>` tag. The defer attribute will defer the execution of the script until the HTML document has finished parsing, while the async attribute will load and execute the script asynchronously.

Here's an example of how to include the jQuery library in your HTML document using a CDN:

```html
<!DOCTYPE html>
<html>
<head>
 <title>My Web Page</title>
</head>
<body>
 <h1>Welcome to my web page</h1>

 <!-- Include jQuery library -->
 <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

 <!-- Your JavaScript code that uses jQuery -->
 <script>
  $(document).ready(function() {
   // jQuery code here
  });
 </script>
</body>
</html>
```

In this example, we included the jQuery library from a CDN by setting the src attribute of the <script> tag to the absolute URL of the library file. We then used jQuery code in a <script> tag to execute some code after the page has loaded.

## CMS ClientLibs Pattern

While standard way to use client-side libraries in HTML works outside of CMS, it can lead to problems in CMS due to the fact that pages have unknown component structured. In such cases there is the danger that multiple copies of the same JS library may be included in the final HTML output. To avoid this and to allow logical organization of client-side libraries uses client-side library folders.

A clientlibs folder is a repository node of type `jcr:primaryType` of `sling:Folder` and with a `sling:resourceType` of `io/typerefinery/websight/clientlibs`. Here is an example of the node in JSON format:

```json
{
  "title": "Client Libs - Widgets - Chart",
  "jcr:primaryType": "sling:Folder",
  "sling:resourceType": "io/typerefinery/websight/clientlibs",
  "categories": ["io.typerefinery.websight.components","io.typerefinery.websight.components.widgets.chart"],  
  "prepend": [],
  "append": [],
  "css": [
    "style.css"
  ],  
  "js": [
    "/apps/typerefinery/clientlibs/vendor/chartjs/chart.js",
    "/apps/typerefinery/clientlibs/vendor/chartjs/chartjs-plugin-datalabels.min.js",
    "variants/linechart/functions.js",
    "variants/linechart/behaviour.js",
    "variants/barchart/functions.js",
    "variants/barchart/behaviour.js",
    "variants/piechart/functions.js",
    "variants/piechart/behaviour.js"
  ] 
}
```

By default, clientlibs nodes can be placed anywhere within the /apps subtrees of the repository.

Each clientlibs is populated with a set of JS and/or CSS files, along with references to other clientlibs categories to include. The properties of the clientlibs are configured as follows:

* title: A title to name the library.
* categories: Identifies the categories into which the set of JS and/or CSS files within this cq:ClientLibraryFolder fall. The categories property, being multi-valued, allows a library folder to be part of more than one category (see below for how this may be useful).
* prepend: This is a list of other client library categories on which this clientlibs needs as a dependecy to prepended to the resulting content.
* append: This is a list of other client library categories on which this clientlibs needs as a dependecy to appended to the resulting content.
* css: This is a list of files to include for CSS content generation. Paths can be relative sling paths and absolute paths that can be resolved using resource resolver.
* js: This is a list of files to include for JS content generation. Paths can be relative sling paths and absolute paths that can be resolved using resource resolver.

To use clientlibs using HTL in pages can be done several ways.

To include only CSS for category `io.typerefinery.websight.components`:

```htl
<sly data-sly-use.clientlibs="${'io.typerefinery.websight.clientlibs.ClientLibsModel' @
    categories='io.typerefinery.websight.components',
    debug=true,
    crossorigin='anonymous'}">
${clientlibs.cssIncludes @ context="unsafe"}
</sly>
```

To include only JS for category `io.typerefinery.websight.components`:

```htl
<sly data-sly-use.clientlibs="${'io.typerefinery.websight.clientlibs.ClientLibsModel' @
    categories='io.typerefinery.websight.components',
    debug=true,
    crossorigin='anonymous'}">
${clientlibs.jsIncludes @ context="unsafe"}
</sly>
```

To include CSS and JS for category `io.typerefinery.websight.components`:

```htl
<sly data-sly-use.clientlibs="${'io.typerefinery.websight.clientlibs.ClientLibsModel' @
    categories='io.typerefinery.websight.components',
    debug=true,
    crossorigin='anonymous'}">
${clientlibs.jsAndCssIncludes @ context="unsafe"}
</sly>
```

To output inline CSS only for category `io.typerefinery.websight.components` to include in `<style>` tag:

```htl
<sly data-sly-use.clientlibs="${'io.typerefinery.websight.clientlibs.ClientLibsModel' @
    categories='io.typerefinery.websight.components',
    debug=true,
    crossorigin='anonymous'}">
${clientlibs.cssInline @ context="unsafe"}
</sly>
```

To output inline JS only for category `io.typerefinery.websight.components` to include in `<script>` tag:

```htl
<sly data-sly-use.clientlibs="${'io.typerefinery.websight.clientlibs.ClientLibsModel' @
    categories='io.typerefinery.websight.components',
    debug=true,
    crossorigin='anonymous'}">
${clientlibs.jsInline @ context="unsafe"}
</sly>
```

You can add following attributes to `<script>`:
categories to output
media: add media attribute
debug: output debug paths to each include

You can add following attributes to `<style>`:
categories to output
async: add async attribute
defer: add defer attribute
debug: output debug paths to each include
onload: script to run when loaded
crossorigin: add crossorigin='anonymous'

The code snippets you provided show how to include CSS and JS files for a particular category using HTL. It's good to know that it's possible to output inline CSS and JS code using the cssInline and jsInline methods respectively, as well as adding attributes like media, async, defer, and crossorigin.
