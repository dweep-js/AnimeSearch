import{a as p,t as g}from"../chunks/disclose-version.CFVu6O2Z.js";import{j as S,af as ie,ag as le,z as q,ah as ce,ai as ve,aj as fe,p as ue,m as de,ac as c,aa as f,ak as z,ab as u,g as l,al as _,v as n,a9 as $,l as B}from"../chunks/runtime.BNbdORXG.js";import{e as A,s as w}from"../chunks/render.BCWjFFx6.js";import{p as _e,i as j}from"../chunks/props.DjHF3Odq.js";import{i as me}from"../chunks/lifecycle.DbCAMx4d.js";let G=!1;function Q(){G||(G=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var a;if(!e.defaultPrevented)for(const t of e.target.elements)(a=t.__on_r)==null||a.call(t)})},{capture:!0}))}function he(e){if(S){var a=!1,t=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var s=e.value;x(e,"value",null),e.value=s}if(e.hasAttribute("checked")){var r=e.checked;x(e,"checked",null),e.checked=r}}};e.__on_r=t,ie(t),Q()}}function x(e,a,t,s){var r=e.__attributes??(e.__attributes={});S&&(r[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||r[a]!==(r[a]=t)&&(a==="loading"&&(e[le]=t),t==null?e.removeAttribute(a):typeof t!="string"&&pe(e).includes(a)?e[a]=t:e.setAttribute(a,t))}var H=new Map;function pe(e){var a=H.get(e.nodeName);if(a)return a;H.set(e.nodeName,a=[]);for(var t,s=q(e);s.constructor.name!=="Element";){t=ce(s);for(var r in t)t[r].set&&a.push(r);s=q(s)}return a}function ge(e,a,t,s=t){e.addEventListener(a,t);const r=e.__on_r;r?e.__on_r=()=>{r(),s()}:e.__on_r=s,Q()}function be(e,a,t=a){var s=ve();ge(e,"input",()=>{var r=K(e)?J(e.value):e.value;t(r),s&&r!==(r=a())&&(e.value=r??"")}),fe(()=>{var r=a();if(S&&e.defaultValue!==e.value){t(e.value);return}K(e)&&r===J(e.value)||e.type==="date"&&!r&&!e.value||(e.value=r??"")})}function K(e){var a=e.type;return a==="number"||a==="range"}function J(e){return e===""?null:+e}var ye=g('<p class="error svelte-8ar2n4"> </p>'),ke=g('<h3 class="player-heading svelte-8ar2n4">Video Player:</h3> <video controls width="100%" class="video-player svelte-8ar2n4"><source type="video/mp4"> Your browser does not support the video tag.</video>',1),Ae=g('<h2 class="result-heading fade-in svelte-8ar2n4">Result:</h2> <div class="result fade-in svelte-8ar2n4"><strong>Anime Name:</strong> <a target="_blank" rel="noopener noreferrer" class="anime-link svelte-8ar2n4"> </a> <br> <strong>Episode:</strong> <br> <strong>Scene Time:</strong> <br> <button class="play-button svelte-8ar2n4">Play Video</button> <!> <button class="next-button svelte-8ar2n4">➡️</button></div>',1),we=g('<div class="container svelte-8ar2n4"><h1 class="fade-in svelte-8ar2n4">Anime Scene Search</h1> <div class="input-container fade-in svelte-8ar2n4"><label class="file-input-label svelte-8ar2n4"><input type="file" accept="image/*" class="svelte-8ar2n4"> 🗃️</label> <input type="text" placeholder="Enter image URL" class="url-input svelte-8ar2n4"> <button class="search-button svelte-8ar2n4">🔍</button></div> <!> <!></div>');function xe(e,a){ue(a,!1);let t=_e(a,"imageUrl",12),s=_([]),r=_(0),d=_(""),U=_(""),m=_(""),b=_(!1),N=_("");async function V(){if(!t()){n(d,"Please enter an image URL."),R();return}n(d,"");try{const o=await fetch("https://api.trace.moe/search?url="+encodeURIComponent(t()));if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);const i=await o.json();i&&i.result&&i.result.length>0?(n(s,i.result),n(r,0),F()):(R(),n(d,"No results found."))}catch(o){R(),n(d,"Error fetching data: "+o.message)}}function F(){if(l(s).length>0){const o=l(s)[l(r)];n(U,o.video),W(o.anilist),n(N,`${(o.from/60).toFixed(2)} - ${(o.to/60).toFixed(2)} mins`),n(b,!1)}}async function W(o){try{const i=await fetch(`https://api.jikan.moe/v4/anime/${o}`);if(i.ok){const v=await i.json();n(m,v.data.title)}else n(m,"Unknown Anime")}catch{n(m,"Unknown Anime")}}function R(){n(s,[]),n(r,0),n(U,""),n(m,""),n(d,""),n(b,!1),n(N,"")}function X(o){const i=o.target.files[0];if(i){const v=new FileReader;v.onload=()=>{t(v.result),V()},v.readAsDataURL(i)}}function Z(){l(s).length>0&&(n(r,(l(r)+1)%l(s).length),F())}function ee(){n(b,!0)}me();var L=we(),E=c(f(L),2),P=f(E),ae=f(P);z(),u(P);var T=c(P,2);he(T);var te=c(T,2);u(E);var I=c(E,2);j(I,()=>l(d),o=>{var i=ye(),v=f(i);u(i),$(()=>w(v,l(d))),p(o,i)});var re=c(I,2);j(re,()=>l(s).length>0,o=>{var i=Ae(),v=c(B(i),2),y=c(f(v),2),se=f(y);u(y);var M=c(y,5),C=c(M,4),D=c(C,3),O=c(D,2);j(O,()=>l(b),k=>{var h=ke(),Y=c(B(h),2),oe=f(Y);z(),u(Y),$(()=>x(oe,"src",l(U))),p(k,h)});var ne=c(O,2);u(v),$(()=>{var k,h;x(y,"href",`https://myanimelist.net/anime/${(k=l(s)[l(r)])==null?void 0:k.anilist}`),w(se,l(m)),w(M,` ${(((h=l(s)[l(r)])==null?void 0:h.episode)||"N/A")??""} `),w(C,` ${l(N)??""} mins `)}),A("click",D,ee),A("click",ne,Z),p(o,i)}),u(L),A("change",ae,X),be(T,t),A("click",te,V),p(e,L),de()}var Ue=g('<main class="svelte-isoyv8"><!></main>');function Te(e){let a="";var t=Ue(),s=f(t);xe(s,{imageUrl:a}),u(t),p(e,t)}export{Te as component};
