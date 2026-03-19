const phones = [
    {name:"iPhone 13 Screen", price:"₹5000"},
    {name:"iPhone 14 Display", price:"₹6500"},
    {name:"iPhone 15 Screen", price:"₹9000"},
    {name:"Samsung S21 Battery", price:"₹3000"},
    {name:"Samsung S22 Screen", price:"₹7000"},
    {name:"Vivo V25 Display", price:"₹2500"},
    {name:"Oppo A78 Screen", price:"₹2200"},
    {name:"Realme Narzo Display", price:"₹2000"}
];

// SEARCH
function searchData(value){
    let results = phones.filter(p => p.name.toLowerCase().includes(value));
    document.getElementById("results").innerHTML =
        results.map(p=>`
        <div class="card">
            <h4>${p.name}</h4>
            <p>${p.price}</p>
        </div>
        `).join("");
}

document.getElementById("search").addEventListener("input", function(){
    searchData(this.value.toLowerCase());
});

// QUICK BUTTON
function quickSearch(model){
    document.getElementById("search").value = model;
    searchData(model.toLowerCase());
}

// WHATSAPP
document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let model = document.getElementById("model").value;
    let issue = document.getElementById("issue").value;

    let msg = `Name:${name}%0APhone:${phone}%0AModel:${model}%0AIssue:${issue}`;

    window.open(`https://wa.me/918607777717?text=${msg}`);
});
