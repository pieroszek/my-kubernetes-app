document.getElementById('runawayBtn').addEventListener('mouseover', function(event) {
    const btn = event.target;
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;
    btn.style.left = `${newX}px`;
    btn.style.top = `${newY}px`;
});
