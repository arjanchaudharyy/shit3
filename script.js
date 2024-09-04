document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.getElementById('stars');
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 200}%`;
        star.style.left = `${Math.random() * 200}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starsContainer.appendChild(star);
    }
});