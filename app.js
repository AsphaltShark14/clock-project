const clock = document.querySelector('.clock');

const tick = () => {
    
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html1 = `
    <span>${h}</span> : 
    <span>${m}</span> : 
    <span>${s}</span>
    `;

    const html2 = `
    <span>${h}</span> : 
    <span>${m}</span> : 
    <span>0${s}</span>
    `;

    if (s > 9) { clock.innerHTML = html1; } else { clock.innerHTML = html2;}

}

setInterval(tick, 1000);