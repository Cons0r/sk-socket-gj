import{D as l,F as i,S as c,i as d,s as f,G as u,H as m,I as g,J as h,q as p,o as _,v as P}from"../chunks/vendor-641c7987.js";const r=i;r.dark=l(!1);r.oldtoggle=r.toggle;r.oldenable=r.enable;r.getDark=()=>{const s=window.localStorage.getItem("nightwind-mode");if(typeof s=="string")return s==="dark";const a=window.matchMedia("(prefers-color-scheme: dark)");return typeof a.matches=="boolean"?a.matches:!1};r.mount=()=>{r.dark.set(r.getDark()),function(){function s(){const n=window.localStorage.getItem("nightwind-mode");if(typeof n=="string")return n;const e=window.matchMedia("(prefers-color-scheme: dark)");return typeof e.matches=="boolean"&&e.matches?"dark":"light"}s()=="light"?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark")}()};r.toggle=()=>{let s;r.dark.subscribe(n=>s=n)(),r.dark.set(!s),r.oldtoggle()};r.enable=s=>{r.dark.set(s),r.oldenable(s)};function w(s){let n;const a=s[1].default,e=u(a,s,s[0],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,o){e&&e.m(t,o),n=!0},p(t,[o]){e&&e.p&&(!n||o&1)&&m(e,a,t,t[0],n?h(a,t[0],o,null):g(t[0]),null)},i(t){n||(p(e,t),n=!0)},o(t){_(e,t),n=!1},d(t){e&&e.d(t)}}}function k(s,n,a){let{$$slots:e={},$$scope:t}=n;return P(()=>{r.mount()}),s.$$set=o=>{"$$scope"in o&&a(0,t=o.$$scope)},[t,e]}class y extends c{constructor(n){super();d(this,n,k,w,f,{})}}export{y as default};