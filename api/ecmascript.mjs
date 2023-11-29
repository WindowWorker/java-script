

globalThis.ecmascript=`<script>void `+
function ModeJS(){
function ECMAScript(el){

 setTimeout(async function(){ if(!(document.querySelector('main'))){
   let myurl=window.location.href;
   if(myurl.includes('/docs/api')){return;}
   if(window.location.pathname.length<2){
     myurl=window.location.origin+'/_root';
   }
    let mydoc=await (await fetch(myurl+'?noscript')).text();
    let main =document.createElement('main');
    main.innerHTML=mydoc;
    document.body.appendChild(main);
  }},1);

  if(!(document.querySelector('html').getAttribute('window-location'))){
    document.querySelector('html').setAttribute('window-location',window.location);
  }
  /*globalThis.htmlClone=document.querySelector('html').cloneNode(true);*/
  if(document.querySelectorAll('head').length<2){
    let h=document.createElement('head');
    document.firstElementChild.appendChild(h);
  }
  if(!el){return;}
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()){ 
  a.push(n);
    let ntext=n.textContent;

  ntext=ntext.replace(/javascript/gi,'ECMAScript')
    .replace(/node/gi,'Mode');;

  if(ntext!=n.textContent){
    n.textContent=ntext;
  }

  };
  if(document.title.toLowerCase().includes('javascript')){
    document.title=document.title
      .replace(/javascript/gi,'ECMAScript')
     }
  if(document.title.toLowerCase().includes('node')){
    document.title=document.title
      .replace(/node/gi,'Mode');
     }
  return a;
  }

ECMAScript(document.body);

setInterval(async function(){
ECMAScript(document.body);
},100);


document.addEventListener("readystatechange", (event) => {
  ECMAScript(document.body);
});

document.addEventListener("DOMContentLoaded", (event) => {
  ECMAScript(document.body);
});

document.addEventListener("load", (event) => {
  ECMAScript(document.body);
});

}
+`();</script>`;