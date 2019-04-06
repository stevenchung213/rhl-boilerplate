# REACT HOT-RELOADER 

*React Hot Loader is a plugin that allows React components to be live reloaded without the loss of state. It works with Webpack and other bundlers that support both Hot Module Replacement (HMR) and Babel plugins.*



###### https://vimeo.com/100010922
*Video of React Hot loading in action*


### To get started:

  **npm start** 
    - compile webpack build via webpack-dev-server  
    - build in memory only
    - no actual files are written to file system
    - to change settings configure webpack.dev.js
    
  **npm run build** 
    - compile webpack production build
    - written to file system
    - most of the popular production level settings enabled
    - to change settings configure webpack.prod.js


### Notes

  **Server not included**
    - consider installing *Express* | *Koa* | *Hapi*
