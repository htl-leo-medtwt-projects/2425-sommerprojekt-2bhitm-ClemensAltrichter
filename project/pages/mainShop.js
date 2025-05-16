
displayAllShopItems();

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
            <p class="itemPrice">${shopItems[i].price} $$</p>
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
