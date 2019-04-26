# REACT HOT-RELOADER 

*React Hot Loader is a plugin that allows React components to be live reloaded without the loss of state. It works with Webpack and other bundlers that support both Hot Module Replacement (HMR) and Babel plugins.*



###### https://vimeo.com/100010922
*Video of React Hot loading in action*


### To get started:

  **npm start** 
   * compile webpack build via webpack-dev-server  
     * build in memory only
     * no actual files are written to file system
   * to change settings configure webpack.dev.js
    
  **npm run build** 
   * compile webpack production build
     * files are written to file system
   * most of the popular production level settings enabled
     * code splitting, terser minification, css optimizations, gzip compression
   * to change settings configure webpack.prod.js


### Notes
  
   * 
   * change settings for HTMLWebpackPlugin in webpack.common.js to your information
   * utilizing html-webpack-template so refer to the documentation linked below
   * reference: https://github.com/jaketrent/html-webpack-template
     
   webpack.common.js
   .
   .
   .
   plugins: [
     new HtmlWebpackPlugin({
       .
       .
       .
       meta: [
          {
            charset: 'UTF-8'
          },
          {
            name: 'author',
            content: < YOUR NAME HERE >
          },
          {
            name: 'description',
            content: < YOUR APP DESCRIPTION HERE >
          }
        ],
        links: [
          < CDN LINKS HERE >,
          < CSS STYLESHEET LINKS HERE >
        ],
        appMountId: 'root', <-- this will produce the div in which your ReactDOM.render(...) will mount
        bodyHtmlSnippet: `<noscript>Please enable JavaScript...</noscript>`,
        scripts: [
          < ANY ADDITIONAL SCRIPTS HERE >
        ]
