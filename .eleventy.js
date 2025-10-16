// const htmlmin = require("html-minifier-terser");
const { DateTime } = require('luxon');
const pluginRss = require("@11ty/eleventy-plugin-rss");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  // This makes the eleventy command quieter (with less detail)
  eleventyConfig.setQuietMode(true);

  // This will stop the default behaviour of foo.html being turned into foo/index.html
  eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");

  // This will make Eleventy not use your .gitignore file to ignore files
  eleventyConfig.setUseGitIgnore(false);

  // This will copy this folder to the output without modifying it at all
  eleventyConfig.addPassthroughCopy("content/css");

  // This defines which files will be copied
  eleventyConfig.setTemplateFormats(["md", "html", "njk", "txt", "js", "css", "xml", "json", "ico"]);

  // Adds Next & Previous links to the bottom of our blog posts
  eleventyConfig.addCollection("posts", function(collection) {
    const coll = collection.getFilteredByTag("posts");    
    for(let i = 0; i < coll.length ; i++) {
      const prevPost = coll[i-1];
      const nextPost = coll[i + 1];      
      coll[i].data["prevPost"] = prevPost;
      coll[i].data["nextPost"] = nextPost;
    }
    return coll;
  });

  // Add the filter "readableDate" to simplify the way blog dates are presented in the Archives page
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc+7' }).toFormat(
      'dd LLL yyyy'
    );
  });

  // Add the filter "topDate" to simplify the way blog dates are presented at the top of blog posts
  eleventyConfig.addFilter('formatDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc+7' }).toFormat(
      'yyyy-LL-dd'
    );
  });
//  eleventyConfig.addTransform("htmlmin", function (content) {
//    if ((this.page.outputPath || "").endsWith(".html")) {
//      let minified = htmlmin.minify(content, {
//        useShortDoctype: true,
//        removeComments: true,
//        collapseWhitespace: true,
//        minifyCSS: true,
//        minifyJS: true,
//      });
//      return minified;
//    }
//    return content;
//  });
    // This defines the input and output directories
  return {
    dir: {
      input: "content",
      output: "public",
    },
  };
};