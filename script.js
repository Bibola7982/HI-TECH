// Database Simulation
let repairData = [];
const brands = ["Apple", "Samsung", "Xiaomi", "Vivo", "Oppo", "Realme"];
const models = ["iPhone 15", "iPhone 14", "Galaxy S24", "Redmi Note 13", "V29", "Reno 11"];

// Generate 500+ mock models for demo
for(let i=0; i<520; i++) {
    let brand = brands[Math.floor(Math.random()*brands.length)];
    let modelName = models[Math.floor(Math.random()*models.length)] + " Pro " + i;
    repairData.push({
        model: `${brand} ${modelName}`,
        display: 1500 + (i % 5000),
        battery: 500 + (i % 1000),
        camera: 800 + (i % 2000),
        port: 300,
        speaker: 250
    });
}

// Search & Auto-suggest
const searchInput = document.getElementById('phone-search');
const suggestions = document.getElementById('suggestions');
const resultsContainer = document.getElementById('price-results');

searchInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    suggestions.innerHTML = '';
    if(val.length < 2) return;

    const filtered = repairData.filter(d => d.model.toLowerCase().includes(val)).slice(0, 5);
    
    filtered.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = item.model;
        div.onclick = () => showRepairPrice(item);
        suggestions.appendChild(div);
    });
});

function showRepairPrice(item) {
    suggestions.innerHTML = '';
    searchInput.value = item.model;
    resultsContainer.innerHTML = `
        <div class="repair-card animate-in">
            <h3>${item.model} Repair Prices</h3>
            <div class="repair-item"><span>Display Replacement</span> <strong>₹${item.display}</strong></div>
            <div class="repair-item"><span>Battery Replacement</span> <strong>₹${item.battery}</strong></div>
            <div class="repair-item"><span>Camera Repair</span> <strong>₹${item.camera}</strong></div>
            <div class="repair-item"><span>Charging Port</span> <strong>₹${item.port}</strong></div>
            <a href="https://wa.me/1234567890?text=I need repair for ${item.model}" class="btn-primary" style="display:block; text-align:center; margin-top:1rem; text-decoration:none;">Chat on WhatsApp</a>
        </div>
    `;
}

// Booking Form logic
document.getElementById('repair-form').onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('cust-name').value;
    const model = document.getElementById('cust-model').value;
    const issue = document.getElementById('cust-issue').value;
    const msg = `Hello, I am ${name}. My ${model} has an issue: ${issue}.`;
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(msg)}`);
};

// Dark Mode
document.getElementById('theme-toggle').onclick = () => {
    const body = document.body;
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
};
