let money =0;
let debt=0;
let boughtItems = [];


calcMoney();
function calcMoney(){
    
    for(let i = 0; i < savedInfo.length; i++){
        money += savedInfo[i].rating * 100;
        console.log(savedInfo[i].rating);
        
        console.log(money);
        
    }
}

displayMoney();
function displayMoney(){
    pullDebt();
document.getElementById("currencyDisplay").innerHTML = `${money-debt} $$`; 
}




displayAllShopItems();
pullBoughtItems();
function displayAllShopItems(){
let s = "";

for(let i = 0; i< shopItems.length;i++){
    s+=`
    <div class="shopItem" id="shopItem${i}">
        <div class="itemSymbol" id="itemSymbol${i}">
            <img src="${shopItems[i].cover}" alt="icon">
        </div>
        <h2 class="itemName">${shopItems[i].title}</h2>
        <div class="buyBTN">
            <p class="itemPrice" onclick="buyItem(${i})">${shopItems[i].price} $$</p>
        </div>
    </div>    
    `
    console.log(`itemSymbol${i}`);
    
   
}

document.getElementById('content').innerHTML = s;


for(let i = 0; i< shopItems.length;i++){
document.getElementById(`itemSymbol${i}`).style.backgroundColor = `${shopItems[i].color}`;
}
}

function buyItem(index){
if(shopItems[index].buyable && money -(debt + shopItems[index].price) >= 0){
    debt += shopItems[index].price;

    boughtItems.push(index);
shopItems[index].buyable = false;
document.getElementById(`shopItem${index}`).classList.add('bought');
document.getElementById(`shopItem${index}`).querySelector('.itemPrice').innerHTML = "Bought";

pushBoughtItems();
pushDebt();
displayMoney();
}


}

function pushDebt(){
    localStorage.setItem('debt', JSON.stringify(debt));
}
function pullDebt(){
    debt = JSON.parse(localStorage.getItem('debt')) ?? 0;
}

function pushBoughtItems(){
    localStorage.setItem('boughtItems', JSON.stringify(boughtItems));
}
function pullBoughtItems(){
    boughtItems = JSON.parse(localStorage.getItem('boughtItems')) ?? [];
    console.log(boughtItems);
    

for(let i = 0; i< shopItems.length;i++){
if(boughtItems.includes(i)){
    console.log(i);
    
    shopItems[i].buyable = false;
    console.log(document.getElementById(`shopItem${i}`));
    
document.getElementById(`shopItem${i}`).classList.add('bought');
document.getElementById(`shopItem${i}`).querySelector('.itemPrice').innerHTML = "Bought";
}
}
}