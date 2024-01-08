globalThis.searchfetch = async function (query){
let cx = '7f6418896a2455016';
let cxurl = 'https://cse.google.com/cse.js?hpg=1&cx=' + cx;

let script_raw = await fetchText(cxurl);
if(!globalThis.cse_tok){
globalThis.cse_tok = JSONExtract(script_raw, "cse_token");
}
console.log(cse_tok);

let cse_url = `https://cse.google.com/cse/element/v1?rsz=4&num=4&hl=en&source=gcsc&gss=.com&cx=${cx}&q=${query}&safe=off&cse_tok=${cse_tok}&lr=&cr=&gl=&filter=1&sort=&as_oq=&as_sitesearch=&exp=csqr%2Ccc&oq=${query}&cseclient=hosted-page-client&callback=google.search.cse.api6154`;

return fetchText(cse_url);
}