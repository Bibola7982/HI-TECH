// SEARCH DEMO DATA
const phones = [
    "iPhone 13 Screen - ₹5000",
    "Samsung S21 Battery - ₹3000",
    "Redmi Note 10 Display - ₹2500"
];

document.getElementById("search").addEventListener("input", function() {
    let value = this.value.toLowerCase();
    let results = phones.filter(p => p.toLowerCase().includes(value));

    document.getElementById("results").innerHTML =
        results.map(r => `<p>${r}</p>`).join("");
});

// WHATSAPP BOOKING
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let model = document.getElementById("model").value;
    let issue = document.getElementById("issue").value;

    let msg = `Name: ${name}%0APhone: ${phone}%0AModel: ${model}%0AIssue: ${issue}`;

    window.open(`https://wa.me/918607777717?text=${msg}`, "_blank");
});
