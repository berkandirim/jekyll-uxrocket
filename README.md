# Jekyll UX Rocket

A Jekyll boilerplate using [UX Rocket](https://github.com/uxrocket) elements, [Melange](https://github.com/bcinarli/melange) and [Caffeine](https://github.com/bcinarli/caffeine).

This project is still in development.

1. Do a `bower install` and `npm install`, then copy `jquery.min.js` and `modernizr.js` to `assets/scripts/vendors`.
2. Start Jekyll server by typing `jekyll serve` in terminal.
3. Jekyll will start the server and build the htmls into the `_build` folder.
4. `_layouts` folder contains your templates. Jekyll uses [Liquid](https://github.com/Shopify/liquid/wiki) templating engine.
5. You can store your data in YAML or JSON, and include these in `_data` folder. Then access the data via `{{site.data.filename.object.key}}`.
6. Use [Grunt](http://gruntjs.com/) instead of the default sass compiler in Jekyll, in order to use the UX Rocket folder structure.


