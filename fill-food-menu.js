let orderArray = [];

const populateFood = async function() {
    // console.dir(menuFile);
    $.getJSON("menu-items.json", function(menuData) {
        // console.dir(menuData.menu[0].items[0]);
        console.dir(menuData);
        const foodMenuElement = document.getElementById("food-menu"); // step 1: get parent element from document
        console.dir(foodMenuElement);
        // go through each category
        menuData.menu.forEach(category => {
            // section and heading

            categoryHeading = document.createElement("p"); // step 2: create new element
            categoryHeading.innerText = category.name; // step 3: create content
            categoryHeading.classList.add("headerlabel");

            foodMenuElement.appendChild(categoryHeading); // step 4: append child

            let categorySize = 0;
            category.items.forEach(item => {
                itemRow = document.createElement("div");

                itemRow.classList.add("itemrow");
                // items
                itemName = document.createElement("h2"); // step 2: create element
                itemName.innerText = item.name; // step 3: create content
                /*itemName.classList.add("labelrow");*/
                itemRow.appendChild(itemName); // step 4: append child
                itemDesc = document.createElement("p");
                itemDesc.innerText = item.description;
                itemRow.appendChild(itemDesc);
                if (item.image) {
                    itemImage = document.createElement("img");
                    itemImage.setAttribute("src", item.image); //setAttribute
                    // itemImage.style.background
                    itemRow.appendChild(itemImage);
                    categorySize++;
                }
                itemPrice = document.createElement("h2");
                itemPrice.innerText = '$' + item.price;
                itemRow.appendChild(itemPrice);
                // button for online ordering
                button = document.createElement("button");
                button.innerText = "Add to Online Order";
                button.onclick = function() {
                    orderArray.push(item);
                    updateCart(orderArray);
                }
                itemPrice.appendChild(button);


                foodMenuElement.appendChild(itemRow); // step 4: append child 
                itemRow.childNodes.forEach(child => {
                    child.classList.add("subboxes");
                });
                /*categorySize++;
                console.log(categorySize + category.name);
                categorySection.setAttribute("style", "grid-row: span " + categorySize);*/
                /*for each loop here*/
            });
        });
    });
}