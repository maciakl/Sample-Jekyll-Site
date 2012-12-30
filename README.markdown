Simple Jekyll Site
===

This is an example of a very basic Jekyll site. It lays down the basic folder structure, uses very basic CSS to make it look presentable and leaves everything else up to you.

This is a perfect starting point for building your own Jekyll site.

Complete Idiot's Guide
----------------------

To use this template:

1. Clone to some directory
* Modify `_config.yaml` with your name, blog title, description and etc...
* Tweak `style.css` and HTML files in `_layouts` to personalize
* Create blog entries in `_posts/` - work off the sample posts there
* Run `jekyll --server` to generate site locally
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

Deploying to Subdirectory
-------------------------

You can deploy to a subdirectory. For example instead of running your site at `http://foo.tld/` you can instead put it in `http://foo.tld/blog/`. To do this use the `baseurl` setting in `_config.yaml`. For example if you set it to:

    baseurl: /blog
    url: http://foo.tld

Then the html files will still be generated in `_site` but all the links will be generated relative to `/blog`. When you run the built-in Jekyll server you will need to access your site by going to `http://localhost:4000/blog`.

Credits
-------

This sample layout uses plugins created by Dave Perret (recursive-design.com) to generate categories and sitemaps. Credit where credit is due. Please see the `_plugins` directory for details.
