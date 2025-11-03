document.addEventListener('DOMContentLoaded', ()=>{
const scoreEl = document.getElementById('score');
const percentEl = document.getElementById('percent');
let s = 0;
const target = 76;
const pct = 65;
const step = Math.max(1, Math.floor(target/30));
const t = setInterval(()=>{
s += step;
if(s >= target){ s = target; clearInterval(t); }
scoreEl.textContent = s;
},20);


// percent
let p = 0; const tp = setInterval(()=>{
p++;
percentEl.textContent = p + "%";
if(p >= pct) clearInterval(tp);
},12);


document.getElementById('continue').addEventListener('click', ()=>{
alert('Continue clicked — customize behaviour in JS.');
})
})