var wn=Array.isArray,Tn=Array.from,mn=Object.defineProperty,st=Object.getOwnPropertyDescriptor,Bt=Object.getOwnPropertyDescriptors,kn=Object.prototype,An=Array.prototype,Vt=Object.getPrototypeOf;const gn=()=>{};function Sn(t){return t()}function it(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,ft=4,q=8,_t=16,A=32,Z=64,R=128,U=256,p=512,k=1024,L=2048,N=4096,M=8192,Gt=16384,ct=32768,Rn=65536,Kt=1<<18,vt=1<<19,lt=Symbol("$state"),Dn=Symbol("");function pt(t){return t===this.v}function $t(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function ht(t){return!$t(t,this.v)}function Zt(t){throw new Error("effect_in_teardown")}function Wt(){throw new Error("effect_in_unowned_derived")}function zt(t){throw new Error("effect_orphan")}function Jt(){throw new Error("effect_update_depth_exceeded")}function On(){throw new Error("hydration_failed")}function xn(t){throw new Error("props_invalid_value")}function In(){throw new Error("state_descriptors_fixed")}function Nn(){throw new Error("state_prototype_fixed")}function Qt(){throw new Error("state_unsafe_local_read")}function Xt(){throw new Error("state_unsafe_mutation")}function rt(t){return{f:0,v:t,reactions:null,equals:pt,version:0}}function qn(t){return dt(rt(t))}function tn(t){var r;const n=rt(t);return n.equals=ht,f!==null&&f.l!==null&&((r=f.l).s??(r.s=[])).push(n),n}function bn(t){return dt(tn(t))}function dt(t){return a!==null&&a.f&w&&(E===null?cn([t]):E.push(t)),t}function Cn(t,n){return a!==null&&tt()&&a.f&w&&(E===null||!E.includes(t))&&Xt(),t.equals(n)||(t.v=n,t.version=Ft(),Et(t,k),tt()&&o!==null&&o.f&p&&!(o.f&A)&&(v!==null&&v.includes(t)?(y(o,k),z(o)):m===null?vn([t]):m.push(t))),n}function Et(t,n){var r=t.reactions;if(r!==null)for(var e=tt(),s=r.length,l=0;l<s;l++){var u=r[l],i=u.f;i&k||!e&&u===o||(y(u,n),i&(p|R)&&(i&w?Et(u,L):z(u)))}}const Pn=1,Fn=2,Ln=4,Mn=8,Yn=16,jn=1,Hn=2,nn="[",rn="[!",en="]",yt={},Un=Symbol();function wt(t){console.warn("hydration_mismatch")}let S=!1;function Bn(t){S=t}let d;function B(t){if(t===null)throw wt(),yt;return d=t}function Vn(){return B(D(d))}function Gn(t){if(S){if(D(d)!==null)throw wt(),yt;d=t}}function Kn(t=1){if(S){for(var n=t,r=d;n--;)r=D(r);d=r}}function $n(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===en){if(t===0)return n;t-=1}else(r===nn||r===rn)&&(t+=1)}var e=D(n);n.remove(),n=e}}var ut,Tt,mt;function Zn(){if(ut===void 0){ut=window;var t=Element.prototype,n=Node.prototype;Tt=st(n,"firstChild").get,mt=st(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function kt(t=""){return document.createTextNode(t)}function J(t){return Tt.call(t)}function D(t){return mt.call(t)}function Wn(t){if(!S)return J(t);var n=J(d);return n===null&&(n=d.appendChild(kt())),B(n),n}function zn(t,n){if(!S){var r=J(t);return r instanceof Comment&&r.data===""?D(r):r}return d}function Jn(t,n=1,r=!1){let e=S?d:t;for(;n--;)e=D(e);if(!S)return e;var s=e.nodeType;if(r&&s!==3){var l=kt();return e==null||e.before(l),B(l),l}return B(e),e}function Qn(t){t.textContent=""}function At(t){o===null&&a===null&&zt(),a!==null&&a.f&R&&Wt(),et&&Zt()}function sn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var s=(t&Z)!==0,l=o,u={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|k,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=x;try{ot(!0),W(u),u.f|=Gt}catch(T){throw Y(u),T}finally{ot(i)}}else n!==null&&z(u);var _=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&vt)===0;if(!_&&!s&&e&&(l!==null&&sn(u,l),a!==null&&a.f&w)){var c=a;(c.children??(c.children=[])).push(u)}return u}function Xn(t){const n=b(q,null,!1);return y(n,p),n.teardown=t,n}function tr(t){At();var n=o!==null&&(o.f&q)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:a})}else{var e=gt(t);return e}}function nr(t){return At(),St(t)}function rr(t){const n=b(Z,t,!0);return()=>{Y(n)}}function gt(t){return b(ft,t,!1)}function St(t){return b(q,t,!0)}function er(t){return St(t)}function sr(t,n=0){return b(q|_t|n,t,!0)}function lr(t,n=!0){return b(q|A,t,!0,n)}function Rt(t){var n=t.teardown;if(n!==null){const r=et,e=a;at(!0),K(null);try{n.call(null)}finally{at(r),K(e)}}}function Y(t,n=!0){var r=!1;if((n||t.f&Kt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:D(e);e.remove(),e=l}r=!0}Mt(t,n&&!r),F(t,0),y(t,M);var u=t.transitions;if(u!==null)for(const _ of u)_.stop();Rt(t);var i=t.parent;i!==null&&i.first!==null&&Dt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Dt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function ur(t,n){var r=[];Ot(t,r,!0),ln(r,()=>{Y(t),n&&n()})}function ln(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ot(t,n,r){if(!(t.f&N)){if(t.f^=N,t.transitions!==null)for(const u of t.transitions)(u.is_global||r)&&n.push(u);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&ct)!==0||(e.f&A)!==0;Ot(e,n,l?r:!1),e=s}}}function or(t){xt(t,!0)}function xt(t,n){if(t.f&N){t.f^=N,j(t)&&W(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&ct)!==0||(r.f&A)!==0;xt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const un=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let V=!1,G=!1,Q=[],X=[];function It(){V=!1;const t=Q.slice();Q=[],it(t)}function Nt(){G=!1;const t=X.slice();X=[],it(t)}function ar(t){V||(V=!0,queueMicrotask(It)),Q.push(t)}function ir(t){G||(G=!0,un(Nt)),X.push(t)}function on(){V&&It(),G&&Nt()}function an(t){let n=w|k;o===null?n|=R:o.f|=vt;const r={children:null,deps:null,equals:pt,f:n,fn:t,reactions:null,v:null,version:0,parent:o};if(a!==null&&a.f&w){var e=a;(e.children??(e.children=[])).push(r)}return r}function fr(t){const n=an(t);return n.equals=ht,n}function qt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&w?fn(e):Y(e)}}}function bt(t){var n,r=o;$(t.parent);try{qt(t),n=Lt(t)}finally{$(r)}var e=(O||t.f&R)&&t.deps!==null?L:p;y(t,e),t.equals(n)||(t.v=n,t.version=Ft())}function fn(t){qt(t),F(t,0),y(t,M),t.children=t.deps=t.reactions=t.fn=null}const Ct=0,_n=1;let H=Ct,P=!1,x=!1,et=!1;function ot(t){x=t}function at(t){et=t}let g=[],I=0;let a=null;function K(t){a=t}let o=null;function $(t){o=t}let E=null;function cn(t){E=t}let v=null,h=0,m=null;function vn(t){m=t}let Pt=0,O=!1,f=null;function Ft(){return++Pt}function tt(){return f!==null&&f.l===null}function j(t){var u,i;var n=t.f;if(n&k)return!0;if(n&L){var r=t.deps,e=(n&R)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((u=r[s]).reactions??(u.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var l=r[s];if(j(l)&&bt(l),e&&o!==null&&!O&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||y(t,p)}return!1}function pn(t,n,r){throw t}function Lt(t){var T;var n=v,r=h,e=m,s=a,l=O,u=E;v=null,h=0,m=null,a=t.f&(A|Z)?null:t,O=!x&&(t.f&R)!==0,E=null;try{var i=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(F(t,h),_!==null&&h>0)for(_.length=h+v.length,c=0;c<v.length;c++)_[h+c]=v[c];else t.deps=_=v;if(!O)for(c=h;c<_.length;c++)((T=_[c]).reactions??(T.reactions=[])).push(t)}else _!==null&&h<_.length&&(F(t,h),_.length=h);return i}finally{v=n,h=r,m=e,a=s,O=l,E=u}}function hn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&w&&(v===null||!v.includes(n))&&(y(n,L),n.f&(R|U)||(n.f^=U),F(n,0))}function F(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)hn(t,r[e])}function Mt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;Y(r,n),r=e}}function W(t){var n=t.f;if(!(n&M)){y(t,p);var r=o,e=f;o=t,f=t.ctx;try{n&_t||Mt(t),Rt(t);var s=Lt(t);t.teardown=typeof s=="function"?s:null,t.version=Pt}catch(l){pn(l)}finally{o=r,f=e}}}function Yt(){I>1e3&&(I=0,Jt()),I++}function jt(t){var n=t.length;if(n!==0){Yt();var r=x;x=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var l=[];Ht(s,l),dn(l)}}finally{x=r}}}function dn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(M|N))&&j(e)&&(W(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Dt(e):e.fn=null))}}function En(){if(P=!1,I>1001)return;const t=g;g=[],jt(t),P||(I=0)}function z(t){H===Ct&&(P||(P=!0,queueMicrotask(En)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|A)){if(!(r&p))return;n.f^=p}}g.push(n)}function Ht(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&A)!==0,u=l&&(s&p)!==0;if(!u&&!(s&N))if(s&q){l?r.f^=p:j(r)&&W(r);var i=r.first;if(i!==null){r=i;continue}}else s&ft&&e.push(r);var _=r.next;if(_===null){let C=r.parent;for(;C!==null;){if(t===C)break t;var c=C.next;if(c!==null){r=c;continue t}C=C.parent}}r=_}for(var T=0;T<e.length;T++)i=e[T],n.push(i),Ht(i,n)}function Ut(t){var n=H,r=g;try{Yt();const s=[];H=_n,g=s,P=!1,jt(r);var e=t==null?void 0:t();return on(),(g.length>0||s.length>0)&&Ut(),I=0,e}finally{H=n,g=r}}async function _r(){await Promise.resolve(),Ut()}function cr(t){var n=t.f;if(n&M)return t.v;if(a!==null){E!==null&&E.includes(t)&&Qt();var r=a.deps;v===null&&r!==null&&r[h]===t?h++:v===null?v=[t]:v.push(t),m!==null&&o!==null&&o.f&p&&!(o.f&A)&&m.includes(t)&&(y(o,k),z(o))}if(n&w){var e=t;j(e)&&bt(e)}return t.v}function vr(t){const n=a;try{return a=null,t()}finally{a=n}}const yn=~(k|L|p);function y(t,n){t.f=t.f&yn|n}function pr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:rt(!1)})}function hr(t){const n=f;if(n!==null){const u=n.e;if(u!==null){var r=o,e=a;n.e=null;try{for(var s=0;s<u.length;s++){var l=u[s];$(l.effect),K(l.reaction),gt(l.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return{}}function dr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(lt in t)nt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&lt in r&&nt(r)}}}function nt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{nt(t[e],n)}catch{}const r=Vt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Bt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{nn as $,wn as A,Vn as B,$n as C,B as D,ct as E,Bn as F,or as G,rn as H,ur as I,xn as J,ht as K,Rn as L,an as M,fr as N,Ln as O,Fn as P,Pn as Q,Mn as R,lt as S,Yn as T,Un as U,tn as V,Xn as W,ar as X,mn as Y,Zn as Z,J as _,tr as a,D as a0,yt as a1,en as a2,wt as a3,On as a4,Qn as a5,Tn as a6,rr as a7,kt as a8,er as a9,Wn as aa,Gn as ab,Jn as ac,jn as ad,Hn as ae,ir as af,Dn as ag,Bt as ah,tt as ai,St as aj,Kn as ak,bn as al,gt as am,Ut as an,_r as ao,qn as ap,$t as aq,vr as b,f as c,dr as d,Sn as e,sr as f,cr as g,lr as h,Y as i,S as j,d as k,zn as l,hr as m,gn as n,kn as o,pr as p,An as q,it as r,rt as s,In as t,nr as u,Cn as v,st as w,o as x,Nn as y,Vt as z};
