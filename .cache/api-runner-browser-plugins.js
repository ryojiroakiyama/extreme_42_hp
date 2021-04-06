module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-jss/gatsby-browser.js'),
      options: {"plugins":[],"theme":{"typography":{"primary":"Orbitron, sans-serif","secondary":"Electrolize, sans-serif"},"color":{"accent":0.2,"alpha":0.5,"primary":{"dark":"#bbbbbb","main":"#eeeeee","light":"#ffffff"},"secondary":{"dark":"#19a0b3","main":"#27e1fa","light":"#7eecfb"},"tertiary":{"dark":"#b5a005","main":"#fae127","light":"#feec67"},"heading":{"main":"#eeeeee"},"text":{"main":"#cccccc"},"link":{"dark":"#55cbd0","main":"#87f7fc","light":"#aff3f6"},"background":{"dark":"#000000","main":"#02161a","light":"#043b3b"}},"animation":{"time":250,"stagger":50}}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Extreme_42tokyo","short_name":"extreme_42","start_url":"/","background_color":"#000000","theme_color":"#000000","display":"standalone","orientation":"portrait","icon":"src/images/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"95ea5cff012f971ed864a05d4505500e"},
    },{
      plugin: require('../node_modules/gatsby-plugin-layout/gatsby-browser.js'),
      options: {"plugins":[],"component":"/Users/kagawayuukana/42tokyo/extreme_42/hp/src/layouts/Template/index.js"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
