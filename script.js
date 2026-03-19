const data = [
    { name: "iPhone 13 Screen", price: "₹5000" },
    { name: "Samsung S21 Battery", price: "₹3000" },
    { name: "Redmi Note 10 Display", price: "₹2500" }
];

document.getElementById("search").addEventListener("input", function () {
    let value = this.value.toLowerCase();
    let results = data.filter(item => item.name.toLowerCase().includes(value));

    document.getElementById("results").innerHTML =
        results.map(item => `
            <div class="card">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
            </div>
        `).join("");
});

document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let model = document.getElementById("model").value;
    let issue = document.getElementById("issue").value;

    let msg = `Name: ${name}%0APhone: ${phone}%0AModel: ${model}%0AIssue: ${issue}`;

    window.open(`https://wa.me/918607777717?text=${msg}`);
});
