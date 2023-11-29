

globalThis.ecmascript=`<script>void `+
function ModeJS(){
function ECMAScript(el){
  globalThis.htmlClone=document.querySelector('html').cloneNode(true);
  if(document.querySelectorAll('head').length<2){
    let h=document.createElement('head');
    document.firstElementChild.appendChild(h);
  }
  if(!el){return;}
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()){ 
  a.push(n);
    let ntext=n.textContent;

  ntext=ntext.replace(/javascript/gi,'ECMAScript');

  if(ntext!=n.textContent){
    n.textContent=ntext;
  }

  };
  if(document.title.toLowerCase().includes('javascript')){
    document.title=document.title
      .replace(/javascript/gi,'ECMAScript')
      .replace(/node/gi,'Mode');

  return a;
}

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