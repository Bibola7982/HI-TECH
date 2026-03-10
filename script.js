const phoneDatabase={

"iphone 11":{
display:"₹5500",
battery:"₹2200",
camera:"₹2500"
},

"iphone 11 pro":{
display:"₹6500",
battery:"₹2500",
camera:"₹3000"
},

"iphone 12":{
display:"₹7500",
battery:"₹2800",
camera:"₹3500"
},

"samsung s21":{
display:"₹5500",
battery:"₹2000",
camera:"₹2600"
},

"redmi note 10":{
display:"₹2200",
battery:"₹1200",
camera:"₹1500"
}

};

const search=document.getElementById("search");
const suggestions=document.getElementById("suggestions");
const result=document.getElementById("result");

const models=Object.keys(phoneDatabase);

search.addEventListener("input",function(){

let value=this.value.toLowerCase();

suggestions.innerHTML="";

if(value==="") return;

let filtered=models.filter(m=>m.includes(value));

filtered.forEach(m=>{

let div=document.createElement("div");

div.innerText=m;

div.onclick=()=>showPhone(m);

suggestions.appendChild(div);

});

});

function showPhone(model){

let data=phoneDatabase[model];

result.innerHTML=`

<h3>${model}</h3>

<p>Display : ${data.display}</p>

<p>Battery : ${data.battery}</p>

<p>Camera : ${data.camera}</p>

<a href="https://wa.me/918607777717?text=I need repair for ${model}">Consult on WhatsApp</a>

`;

suggestions.innerHTML="";

}
