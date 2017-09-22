Format-cv
=========

My cv is really nothing special  
(I left out the part about my secret powers so it's actually pretty boring),  
but if you've come across it an like the format here it is..

Summarizing it's just a pug template,  
if you check the scripts inside `package.json` you'll find:

- _markup_ , parses the yml file (`src/data.yml`),  
converts from markdown all the keys which haven't been ommited;  
the resulting data is then injected into a the pug view (`src/views/cv1.pug`)   
in the end we write `public/index.html`.
- _styl-css_ , parses `src/style.styl`  into  `public/assets/app.js` 
- and for the js?  
there is just a static js file inside the public folder with one function which creates labels on elements with `labelize` attr. 

