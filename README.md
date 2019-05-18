# REACT HOT-RELOADER 

*React Hot Loader is a plugin that allows React components to be live reloaded without the loss of state. It works with Webpack and other bundlers that support both Hot Module Replacement (HMR) and Babel plugins.*



###### https://vimeo.com/100010922
*Video of React Hot loading in action*


### To get started:

  **npm start**   
   * development mode ONLY
   * webpack-dev-server
   * build to memory only
   * no actual files are written to file system
   * to change settings configure webpack.dev.js
   * *localhost:8080*
    
  **npm run build**
   * production mode 
   * webpack production build
   * build to file system
   * most of the popular production level optimizations enabled
        * code / chunk splitting, terser minification, css compression, gzip compression... 
   * to change settings configure webpack.prod.js


### Notes

   * webpack will automatically produce an index.html with all proper script tags sourced to your bundle files
        * just change highlighted settings for HTMLWebpackPlugin in webpack.common.js
             * reference: https://github.com/jaketrent/html-webpack-template
