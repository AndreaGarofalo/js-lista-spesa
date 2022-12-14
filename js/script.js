console.log("JS OK");

const shoppingList = ["mele", "acqua", "pasta", "dentifricio"];

const listElement = document.getElementById("list");

let i = 0;

while (i < shoppingList.length) {
  const item = document.createElement("li");
  item.innerText = shoppingList[i];
  listElement.appendChild(item);
  i++;
}
