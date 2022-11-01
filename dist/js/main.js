(()=>{"use strict";(e=>{const t=document.getElementById("timer-days"),r=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),a=document.getElementById("timer-seconds");let c;const n=e=>e<10?"0"+e:e;c=setInterval((()=>{const e=(()=>{const e=(new Date("11 november 2022").getTime()-(new Date).getTime())/1e3;let t=0,r=0,o=0,a=0;return e>0&&(t=Math.floor(e/60/60/24),r=Math.floor(e/60/60%24),o=Math.floor(e/60%60),a=Math.floor(e%60)),{timeRemaining:e,days:t,hours:r,minutes:o,seconds:a}})();var l,s;t.textContent=e.days>0?`${e.days} ${l=e.days,s=["день","дня","дней"],s[l%100>4&&l%100<20?2:[2,0,1,1,1,2][l%10<5?Math.abs(l)%10:5]]}`:"",r.textContent=n(e.hours),o.textContent=n(e.minutes),a.textContent=n(e.seconds),e.timeRemaining<=0&&clearInterval(c)}),1e3)})(),(()=>{const e=document.querySelector("menu");document.addEventListener("click",(t=>{(t.target.closest(".menu")||t.target.matches("menu>a.close-btn")||t.target.matches("menu>ul>li>a")||e.classList.contains("active-menu")&&!t.target.closest("menu"))&&e.classList.toggle("active-menu")}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),r=e.querySelector(".popup-content");let o,a=-30;const c=()=>{a++,o=requestAnimationFrame(c),a<4?r.style.top=20*a+"px":(cancelAnimationFrame(o),a=-30)};t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",screen.width>768&&requestAnimationFrame(c)}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none")}))})(),[...document.querySelectorAll("a")].filter((e=>/^#.+/.test(e.getAttribute("href")))).forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const r=e.getAttribute("href").substring(1),o=document.getElementById(r);o&&o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}))})),(()=>{const e=document.querySelector(".calc-block"),t=[e.querySelector(".calc-square"),e.querySelector(".calc-count"),e.querySelector(".calc-day")],r=document.querySelectorAll(".form-name"),o=document.querySelectorAll(".form-email"),a=document.querySelectorAll(".form-phone"),c=e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase();t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D/,"")}))})),r.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яё -]/i,"")}))})),r.forEach((e=>{e.addEventListener("blur",(e=>{const t=[];let r;e.target.value=e.target.value.replace(/^[\s\-]+|[\s\-]+$/g,"").replace(/\s{2,}/g," ").replace(/\-{2,}/g,"-"),r=e.target.value.match(/[а-яё\-]+/gi),r&&r.forEach((e=>{if(/\-+/.test(e)){let r=[];e.match(/[а-яё]+/gi).forEach((e=>r.push(c(e)))),t.push(r.join("-"))}else t.push(c(e))})),e.target.value=t.join(" ")}))})),o.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-z@\-_.!~*']/i,"")}))})),a.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d\(\)\-]/,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),r=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const o=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===o?(e.classList.add("active"),r[t].classList.remove("d-none")):(e.classList.remove("active"),r[t].classList.add("d-none"))}))}}))})(),((e,t,r,o="slide-active",a="dot-active")=>{const c=document.querySelector(`.${e}`),n=document.querySelectorAll(`.${t}`),l=document.querySelector(`.${r}`);if(c&&0!==n.length&&l){const e=2e3;let t,r,s=0;const i=()=>{for(let e=0;e<n.length;e++)l.insertAdjacentHTML("beforeend",'<li class="dot"></li>');t=document.querySelectorAll(".dot"),t[0].classList.add(a)},u=(e,t,r)=>{e[t].classList.remove(r)},d=(e,t,r)=>{e[t].classList.add(r)},m=()=>{u(n,s,o),u(t,s,a),s++,s>=n.length&&(s=0),d(n,s,o),d(t,s,a)},g=(e=1500)=>{r=setInterval(m,e)},v=()=>{clearInterval(r)};c.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(u(n,s,o),u(t,s,a),e.target.matches("#arrow-right")?s++:e.target.matches("#arrow-left")?s--:e.target.classList.contains("dot")&&t.forEach(((t,r)=>{e.target===t&&(s=r)})),s>=n.length&&(s=0),s<0&&(s=n.length-1),d(n,s,o),d(t,s,a))})),c.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&v()}),!0),c.addEventListener("mouseleave",(t=>{t.target.matches(".dot, .portfolio-btn")&&g(e)}),!0),i(),g(e)}})("portfolio-content","portfolio-item","portfolio-dots","portfolio-item-active")})();