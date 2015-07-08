Simple Jekyll Site
===

[![endorse](https://api.coderwall.com/luke/endorsecount.png)](https://coderwall.com/luke)

This is an example of a very basic Jekyll site. It lays down the basic folder structure, uses very basic CSS to make it look presentable and leaves everything else up to you.

This is a perfect starting point for building your own Jekyll site.

Requirements
------------

Development time dependencies:

* [Ruby][rb]
* [Gems][gm]
* [Jekyll][jk]
* [Rdiscount][rd] (optional - comment out in `_config.yaml` to use Maroku)
* [Node.js][no] & [Grunt.js][gr] (optional - only if you wish to use GruntJS)

Run-time dependencies:

* A web server (any will do)


Beginners Guide
---------------

To use this template:

1. Clone to some directory
* Modify `_config.yaml` with your name, blog title, description and etc...
* Tweak `style.css` and HTML files in `_layouts` to personalize
* Create blog entries in `_posts/` - work off the sample posts there
* Run `jekyll serve` to generate site locally
* View it by going to `http://localhost:4000` and make sure it looks good
* If all is well, upload contents of `_site` to your server
* Repeat steps 4-7 to update blog

Features
--------

Following features are available:

* Automatically generate a valid RSS feed (see feed.xml in root directory).
* Automatically generate a valid Google Sitemap (see sitemap.xml in root directory).
* Organize your posts into categories and automatically generate category index pages.
* Can be deployed in a subdirectory

Using Categories
----------------

To use the category feature simply add category tag at the top of your post:

    category: some_category_name

You can specify multiple categories using a comma separated list.

Known Issues
------------

The plugins in the `_plugins` directory are not compatible with Github pages. If you want to deploy your site to Github, you might need to give up on these plugins.

Deploying to Subdirectory
-------------------------

You can deploy to a subdirectory. For example instead of running your site at `http://foo.tld/` you can instead put it in `http://foo.tld/blog/`. To do this use the `url` and  `baseurl` settings in `_config.yaml`. The former is used for absolute links (like in the RSS feed) while the latter is used for relative links (like everywhere on the front page). For example if you set it to:

    baseurl: /blog
    url: http://foo.tld/blog

Then the html files will still be generated in `_site` but all the links will be generated either relative to `/blog` or using the absolute url of `http://foo.tld/blog`. 

**Note**: when you run the built-in Jekyll server you will need to access your site by going to `http://localhost:4000/blog`.

Linting & Validation
---

You can use [Grunt.js][gr] to automatically validate the HTML in your generated site. First install the dependencies:

    npm install

You can use the following Grunt commands:

- `grunt jshint` - to lint your `scripts.js` file using JSHint
- `grunt csslint` - to lint your `styles.css` file
- `grunt validation` - to validate all the HTML files in `_site`

Please note that validation is done against the W3C server. If you have many pages, you may get temporarily locked out for abuse.

To lint js and css simultaneously simply run `grunt` with no parameters. Validation is only on-demand because of the potential lockout.


Credits
-------

This sample layout uses plugins created by [Dave Perret][dp] to generate categories and sitemaps. Credit where credit is due. Please see the `_plugins` directory for details.

The web font icons have been created based on the [Typicon][ty] set and customized via the [Fontello][fo] service.


Screenshots
-----------

Just so you can see how it looks:

Front page:  
  
![Front Page](http://i.imgur.com/WeXFkWn.jpg) 
  
Individual post:
  
![Individual post](http://i.imgur.com/o6sSJEt.jpg) 
  
Archive page:
  
![Archive page](http://i.imgur.com/Fmy6FPt.jpg) 


[rb]: http://www.ruby-lang.org/
[gm]: http://rubygems.org/
[jk]: https://github.com/mojombo/jekyll
[rd]: https://github.com/rtomayko/rdiscount/
[dp]: http://recursive-design.com
[gr]: http://gruntjs.com
[no]: http://nodejs.com

[ty]: http://typicons.com/
[fo]: http://fontello.com/
