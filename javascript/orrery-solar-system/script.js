// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create Sun
const sunGeometry = new THREE.SphereGeometry(1, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Create Planets
const planets = [];
const planetData = [
    { color: 0xaaaaaa, distance: 2, size: 0.1, speed: 0.02 }, // Example planet
    { color: 0xff0000, distance: 3, size: 0.2, speed: 0.015 },
    { color: 0x00ff00, distance: 4, size: 0.3, speed: 0.01 }
];

planetData.forEach(data => {
    const geometry = new THREE.SphereGeometry(data.size, 16, 16);
    const material = new THREE.MeshBasicMaterial({ color: data.color });
    const planet = new THREE.Mesh(geometry, material);
    planet.distance = data.distance;
    planet.orbitSpeed = data.speed;
    scene.add(planet);
    planets.push(planet);
});

// Position camera
camera.position.z = 10;

// Animation function
function animate() {
    requestAnimationFrame(animate);

    // Rotate planets around the sun
    planets.forEach((planet, index) => {
        const time = Date.now() * 0.0001 * planet.orbitSpeed;
        planet.position.x = Math.cos(time) * planet.distance;
        planet.position.z = Math.sin(time) * planet.distance;
    });

    renderer.render(scene, camera);
}

animate();

// Resize listener
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});