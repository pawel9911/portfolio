import{r as o,G as h,p as g,a as d,u as m,j as e,m as r,L as i,b as v,O as f}from"./index-BQl1hx4p.js";const j=(t,s,n)=>{const a=s-t;return((n-t)%a+a)%a+t};function b(...t){const s=o.useRef(0),[n,a]=o.useState(t[s.current]),l=o.useCallback(c=>{s.current=typeof c!="number"?j(0,t.length,s.current+1):c,a(t[s.current])},[t.length,...t]);return[n,l]}function N(t){return h({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(t)}function w(t){return h({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0.198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.471 7.591 0.4 0.074 0.547-0.174 0.547-0.385 0-0.191-0.008-0.821-0.011-1.489-2.226 0.484-2.695-0.944-2.695-0.944-0.364-0.925-0.888-1.171-0.888-1.171-0.726-0.497 0.055-0.486 0.055-0.486 0.803 0.056 1.226 0.824 1.226 0.824 0.714 1.223 1.872 0.869 2.328 0.665 0.072-0.517 0.279-0.87 0.508-1.070-1.777-0.202-3.645-0.888-3.645-3.954 0-0.873 0.313-1.587 0.824-2.147-0.083-0.202-0.357-1.015 0.077-2.117 0 0 0.672-0.215 2.201 0.82 0.638-0.177 1.322-0.266 2.002-0.269 0.68 0.003 1.365 0.092 2.004 0.269 1.527-1.035 2.198-0.82 2.198-0.82 0.435 1.102 0.162 1.916 0.079 2.117 0.513 0.56 0.823 1.274 0.823 2.147 0 3.073-1.872 3.749-3.653 3.947 0.287 0.248 0.543 0.735 0.543 1.481 0 1.070-0.009 1.932-0.009 2.195 0 0.213 0.144 0.462 0.55 0.384 3.177-1.059 5.466-4.057 5.466-7.59 0-4.418-3.582-8-8-8z"},child:[]}]})(t)}function y(t){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"},child:[]}]})(t)}function k(t){return h({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 6l16 0"},child:[]},{tag:"path",attr:{d:"M4 12l16 0"},child:[]},{tag:"path",attr:{d:"M4 18l16 0"},child:[]}]})(t)}const C=[d.root,d.dashboard],p=()=>o.useMemo(()=>Object.values(d).map(s=>({isVisibleOnNavigation:!C.includes(s),name:g[s],path:s})),[]),M={open:{clipPath:"circle(120vh at 50% -1vh)",transition:{type:"spring",stiffness:20,restDelta:2,when:"beforeChildren"}},closed:{clipPath:"circle(1vh at 50% -1vh)",transition:{delay:.3,type:"spring",stiffness:400,damping:40,when:"afterChildren"}}},V={open:{transition:{staggerChildren:.1}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}},u=(t=!0)=>({open:{y:0,opacity:1,transition:{y:{stiffness:1e3,velocity:-100}}},closed:{y:t?-50:50,opacity:0,transition:{y:{stiffness:1e3}}}}),z=()=>{const[t,s]=b(!1,!0),n=p(),a=m();return e.jsxs("nav",{children:[e.jsxs(r.button,{onClick:()=>s(),animate:t?{transform:"rotate(180deg)"}:{},whileHover:{scale:1.1},whileTap:{scale:.9},className:`p-2 w-10 h-10 inline-flex items-center justify-center rounded-full 
        text-red-600 hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-300 relative z-10`,children:[e.jsx("span",{className:"sr-only",children:"Open mobile menu"}),t?e.jsx(y,{}):e.jsx(k,{})]}),e.jsx(r.div,{animate:t?"open":"closed",variants:M,className:"fixed inset-0 bg-nav pt-32 p-6",children:e.jsxs("div",{className:"container mx-auto h-full grid grid-rows-[1fr_auto] gap-7",children:[e.jsx(r.ul,{variants:V,className:"flex flex-col gap-7 pt-8",children:n.map(({isVisibleOnNavigation:l,name:c,path:x})=>l?e.jsx(r.li,{whileHover:{scale:1.05},whileTap:{scale:.95},variants:u(),className:`${a.pathname===x&&"text-red-600"} text-center font-bold hover:text-red-600 transition-all bg-primary rounded-3xl mx-auto w-full py-2.5 sm:py-3 sm:text-2xl max-w-sm sm:max-w-lg`,children:e.jsx(i,{className:"block",to:x,children:c})},x):null)}),e.jsx("div",{children:e.jsxs("ul",{className:"flex justify-center gap-5",children:[e.jsx(r.li,{whileHover:{scale:1.05},whileTap:{scale:.95},variants:u(!1),children:e.jsx(i,{to:"https://github.com/pawel9911",children:e.jsx(w,{className:"text-3xl sm:text-5xl"})})}),e.jsx(r.li,{whileHover:{scale:1.05},whileTap:{scale:.95},variants:u(!1),children:e.jsx(i,{to:"https://www.linkedin.com/in/pawel-grzybek/",children:e.jsx(N,{className:"text-3xl sm:text-5xl"})})})]})})]})})]})},H=()=>{const t=p(),s=m();return e.jsx("nav",{children:e.jsx("ul",{className:"flex gap-8",children:t.map(({isVisibleOnNavigation:n,name:a,path:l})=>n?e.jsx("li",{className:`${s.pathname===l&&"text-red-600 border-b-2 border-red-600"} font-medium hover:text-red-600 transition-all`,children:e.jsx(i,{to:l,children:a})},l):null)})})},L=()=>e.jsx("header",{className:"h-32 lg:h-40 flex items-center",children:e.jsxs("div",{className:"container mx-auto flex items-center justify-between",children:[e.jsx(i,{to:d.home,children:e.jsxs("p",{className:"text-6xl font-semibold relative",children:["Paweł",e.jsx("span",{className:"text-red-600",children:" G"}),e.jsx("span",{className:"absolute bottom-0 translate-y-1/4 border inline-block rounded-full p-[2px]",children:e.jsx(v,{className:"text-base"})})]})}),e.jsx("div",{className:"hidden lg:flex",children:e.jsx(H,{})}),e.jsx("div",{className:"lg:hidden",children:e.jsx(z,{})})]})}),O=()=>e.jsxs(e.Fragment,{children:[e.jsx(L,{}),e.jsx(f,{})]});export{O as default};
