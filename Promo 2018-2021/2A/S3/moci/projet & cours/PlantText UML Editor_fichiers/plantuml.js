function decode6bit(e){return"0"<=e&&e<="9"?e.charCodeAt(0)-48:"A"<=e&&e<="Z"?e.charCodeAt(0)-65+10:"a"<=e&&e<="z"?e.charCodeAt(0)-97+36:"-"==e?62:"_"==e?63:0}function decode64(e){var t="";for(i=0;i<e.length;i+=4){var n=decode6bit(e.substring(i,i+1)),r=decode6bit(e.substring(i+1,i+2)),o=decode6bit(e.substring(i+2,i+3)),c=decode6bit(e.substring(i+3,i+4));t+=String.fromCharCode(n<<2|r>>4),t+=String.fromCharCode((15&r)<<4|o>>2),t+=String.fromCharCode((3&o)<<6|c)}return decodeURIComponent(escape(RawDeflate.inflate(t)))}function encode64(e){for(r="",i=0;i<e.length;i+=3)i+2==e.length?r+=append3bytes(e.charCodeAt(i),e.charCodeAt(i+1),0):i+1==e.length?r+=append3bytes(e.charCodeAt(i),0,0):r+=append3bytes(e.charCodeAt(i),e.charCodeAt(i+1),e.charCodeAt(i+2));return r}function append3bytes(e,t,n){return c1=e>>2,c2=(3&e)<<4|t>>4,c3=(15&t)<<2|n>>6,c4=63&n,r="",r+=encode6bit(63&c1),r+=encode6bit(63&c2),r+=encode6bit(63&c3),r+=encode6bit(63&c4),r}function encode6bit(e){return e<10?String.fromCharCode(48+e):(e-=10)<26?String.fromCharCode(65+e):(e-=26)<26?String.fromCharCode(97+e):0==(e-=26)?"-":1==e?"_":"?"}function compress(e){e=unescape(encodeURIComponent(e));var t=encode64(deflate(e)),n=document.getElementById("plantumlserver").value;""==n.trim()&&(n="https://www.plantuml.com/plantuml/");var r=n+"img/"+t,o=n+"svg/"+t,i=n+"txt/"+t;document.getElementById("im").src=r,$("a#plantimagelink").attr("href",r),$("a#plantsvglink").attr("href",o),$("a#planttxtlink").attr("href",i),$("a#planteditorlink").attr("href","?text="+t)}UTF8={encode:function(e){return unescape(encodeURIComponent(e))},decode:function(e){return decodeURIComponent(escape(e))}},Base64={encode:function(e){return btoa(e)},decode:function(e){return atob(e)}};