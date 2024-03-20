/** 
Root Fallback
<head>
<meta name="google-adsense-account" content="ca-pub-4522602122490605">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4522602122490605" crossorigin="anonymous"></script>
<style>
*{display:none;}
</style>
<script>
void async function(){

let root=await fetch('/_root');
let homePage=await root.text();

document.write(homePage);

}();
</script>
</head>
*/

import './api/index.mjs';
