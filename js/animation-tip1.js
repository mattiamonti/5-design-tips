function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}
// animazione caricamento 100%
const loading_number = document.getElementById("loading-value");
animateValue(loading_number, 0, 100, 1500);


gsap.to("#loading-container", {
    opacity: 0, duration: 0.3, delay: 2
})

gsap.to("#cover", {
    x: -3000, opacity: 1, duration: 2, ease: 'in', delay: 2.2
});

gsap.to("#arrow-tip1", {
    x: '50%', delay: 3, duration: 1, yoyo: true, repeat: -1, repeatDelay: 0.2, ease: "power1.inOut"
});


