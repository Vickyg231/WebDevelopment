/**Vicky Guo, Kevin Wang, Section 83 PD. 5/6 12/5/2021*/
shoppingList = [];
var countA = 0;
var countR = 0;
var item;
var temp;


/**The function adds the food into the list. */
function add() 
{
  countA = 0;
  /**This variable is used to check if the food   *is able to be added; the area to check        *duplicate
  */
  var add = true;
  if (shoppingList.length == 0 )
  {
    shoppingList.push(food.value);
    alerts.innerHTML = "Item Added";
  }
  else{
    for (var i = 0;i <shoppingList.length;i++)
    {
      if (food.value == shoppingList[i])
      {
        alerts.innerHTML = "Alert: Item is already in list, therefore it can't be added";
        add = false;
      }
    }

    /**If the item is not found in the list, then it will be added into the list */
    if (add == true)
    {
      alerts.innerHTML = "Item Added";
      shoppingList.push(food.value);
    }
  }
  display();
};

/** Check if the item can be removed from the list */
function remove() 
{
  countA = 0;
  if (quantity.value > shoppingList.length)
  {
    alerts.innerHTML = "Alert: Item can not be found, therefore it was not removed";
  }
  else
  {
   shoppingList.splice(quantity.value-1,1);
   alerts.innerHTML = "Alert: Item has been removed";
  }
  display();
};


/**Moving the item up of the list */
function moveUp() 
{
  countR = 0;
  countA++;
  if (quantity.value == 1)
  {
    alerts.innerHTML = "Alert: Item is already at the top of the list. It can't be moved up anymore";
  }

  else if (countA == 1)
  {
    item = shoppingList[quantity.value-1];
    temp = shoppingList[quantity.value-2];
    shoppingList[quantity.value-2] = item;
    shoppingList[quantity.value-1] = temp;
    alerts.innerHTML = "Alert:Item has been moved up the list.";
  }
  /**Using the count to move the item in the list */
  else if (countA != 1)
  {
    if ((countA - quantity.value) == 0)
    {
      alerts.innerHTML = "Alert: Item is already at the top of the list. It can't be moved up anymore";
    }
    else
    {
      item = shoppingList[quantity.value-countA];
      temp = shoppingList[quantity.value-countA-1];
      shoppingList[quantity.value-countA-1] = item;
      shoppingList[quantity.value-countA] = temp;
      alerts.innerHTML = "Alert:Item has been moved up the list.";
    }
  }
  display();
};

/** Moving the items down the list  */
function moveDown() 
{
  countA = 0;
  countR++;
  if (quantity.value > shoppingList.length)
  {
    alerts.innerHTML = "Alert: Item can not be moved down as it does not exist.";
  }
  else if (quantity.value == shoppingList.length)
  {
    alerts.innerHTML = "Alert: Item can not be moved down as it is already at the bottom";
  }
  else if (countR == 1)
  {
    item = shoppingList[quantity.value-1];
    temp = shoppingList[quantity.value];
    shoppingList[quantity.value-1] = temp;
    shoppingList[quantity.value] = item;
  }
  /**The count ensures that the list can be moved before it is moved down. */
  else if (countR != 1)
  {
    if ((countR - shoppingList.length) == 0)
    {
      alerts.innerHTML = "Alert: Item can not be moved down anymore since it's already at the bottom";
    }
    else
    {
      item = shoppingList[countR-1];
      temp = shoppingList[countR];
      shoppingList[countR] = item;
      shoppingList[countR-1] = temp;
    }
  }
  display();
  
};

function display()
{
  displayFood.innerHTML = "1: " + shoppingList[0];
  for (var i = 1; i<shoppingList.length;i++)
  {
    displayFood.innerHTML += "<br />" + (i+1) + ": " + shoppingList[i];
  }
}
