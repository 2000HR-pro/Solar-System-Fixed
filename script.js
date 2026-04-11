/**
 * Planetary Knowledge Base
 * Units: Distance (km), Moons (count), Temperature (Celsius)
 */
const planetsData = {
    sun: { 
        n: "The Sun", 
        d: "0 km", 
        m: "N/A", 
        t: "5,500°C", 
        tx: "A nearly perfect sphere of hot plasma at the center of our system, providing the energy that sustains life on Earth." 
    },
    mercury: { 
        n: "Mercury", 
        d: "58M km", 
        m: "0", 
        t: "167°C", 
        tx: "The smallest planet and the closest to the Sun. It has a cratered surface similar to the Moon." 
    },
    venus: { 
        n: "Venus", 
        d: "108M km", 
        m: "0", 
        t: "464°C", 
        tx: "Often called Earth's twin due to its size, but shrouded in a thick, toxic atmosphere that traps heat." 
    },
    earth: { 
        n: "Earth", 
        d: "150M km", 
        m: "1", 
        t: "15°C", 
        tx: "Our home planet. It is the only place we know of so far that's inhabited by living things." 
    },
    mars: { 
        n: "Mars", 
        d: "228M km", 
        m: "2", 
        t: "-65°C", 
        tx: "Known as the Red Planet. It features massive volcanoes and a desert-like, cold landscape." 
    },
    jupiter: { 
        n: "Jupiter", 
        d: "778M km", 
        m: "95", 
        t: "-110°C", 
        tx: "The largest planet in our system. A gas giant with a Great Red Spot, a storm larger than Earth." 
    },
    saturn: { 
        n: "Saturn", 
        d: "1.4B km", 
        m: "146", 
        t: "-140°C", 
        tx: "Adorned with a dazzling, complex system of icy rings, making it one of the most iconic planets." 
    },
    uranus: { 
        n: "Uranus", 
        d: "2.8B km", 
        m: "27", 
        t: "-195°C", 
        tx: "An ice giant that is unique for rotating on its side, almost at a 90-degree angle." 
    },
    neptune: { 
        n: "Neptune", 
        d: "4.5B km", 
        m: "14", 
        t: "-201°C", 
        tx: "The most distant major planet. It is dark, cold, and whipped by supersonic winds." 
    }
};

/**
 * Populates and displays the info panel for a selected planet
 * @param {string} id - The planet identifier
 */
function showPlanet(id) {
    const data = planetsData[id];
    
    // UI Update Logic
    document.getElementById('p-name').innerText = data.n;
    document.getElementById('p-dist').innerText = data.d;
    document.getElementById('p-moons').innerText = data.m;
    document.getElementById('p-temp').innerText = data.t;
    document.getElementById('p-desc').innerText = data.tx;
    
    // Panel Activation
    document.getElementById('side-panel').classList.add('active');

    // Haptic feedback for mobile devices
    if (window.navigator.vibrate) {
        window.navigator.vibrate(15);
    }
}

/**
 * Generates a dynamic, twinkling star field in the background
 */
function initUniverse() {
    const field = document.getElementById('star-field');
    const starCount = window.innerWidth < 768 ? 120 : 250;
    
    for(let i=0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 2 + 'px';
        star.style.width = size;
        star.style.height = size;
        
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Randomize twinkle duration and delay for realism
        star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
        star.style.animationDelay = Math.random() * 5 + 's';
        
        field.appendChild(star);
    }
}

// Initialization on load
window.onload = initUniverse;

// Responsive recalculation on resize
window.onresize = () => {
    document.getElementById('star-field').innerHTML = '';
    initUniverse();
};
