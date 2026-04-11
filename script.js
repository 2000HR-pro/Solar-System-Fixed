/**
 * Planet Data in Professional English
 */
const planetsData = {
    sun: { n: "The Sun", d: "0 km", m: "N/A", t: "5,500°C", tx: "The heart of our solar system, a massive star providing light and energy to all planets." },
    mercury: { n: "Mercury", d: "58M km", m: "0", t: "167°C", tx: "The smallest planet and the closest to the Sun, completing an orbit in just 88 days." },
    venus: { n: "Venus", d: "108M km", m: "0", t: "464°C", tx: "Earth's 'evil twin' with a thick atmosphere that traps heat, making it the hottest planet." },
    earth: { n: "Earth", d: "150M km", m: "1", t: "15°C", tx: "Our home, the only planet known to support life, with vast oceans and a protective atmosphere." },
    mars: { n: "Mars", d: "228M km", m: "2", t: "-65°C", tx: "The Red Planet, home to Olympus Mons, the largest volcano in the entire solar system." },
    jupiter: { n: "Jupiter", d: "778M km", m: "95", t: "-110°C", tx: "A massive gas giant, so large that all other planets in the solar system could fit inside it." },
    saturn: { n: "Saturn", d: "1.4B km", m: "146", t: "-140°C", tx: "Famous for its spectacular ring system composed of billions of ice and rock particles." },
    uranus: { n: "Uranus", d: "2.8B km", m: "27", t: "-195°C", tx: "An ice giant that tilts so far on its axis that it actually orbits the Sun on its side." },
    neptune: { n: "Neptune", d: "4.5B km", m: "14", t: "-201°C", tx: "The most distant planet, known for its deep blue color and supersonic, freezing winds." }
};

/**
 * Update and Show Side Panel
 */
function showPlanet(id) {
    const data = planetsData[id];
    if(!data) return;

    document.getElementById('p-name').innerText = data.n;
    document.getElementById('p-dist').innerText = data.d;
    document.getElementById('p-moons').innerText = data.m;
    document.getElementById('p-temp').innerText = data.t;
    document.getElementById('p-desc').innerText = data.tx;
    
    document.getElementById('side-panel').classList.add('active');

    // Subtle vibration feedback
    if (navigator.vibrate) navigator.vibrate(10);
}

/**
 * Initialize Background Stars
 */
function initStars() {
    const field = document.getElementById('star-field');
    const count = window.innerWidth < 768 ? 100 : 250;
    
    field.innerHTML = ''; // Clear for resize
    for(let i=0; i < count; i++) {
        const s = document.createElement('div');
        s.className = 'star';
        const size = Math.random() * 2 + 'px';
        s.style.width = size; s.style.height = size;
        s.style.left = Math.random() * 100 + '%';
        s.style.top = Math.random() * 100 + '%';
        s.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
        field.appendChild(s);
    }
}

window.onload = initStars;
window.onresize = initStars;
