function makeSandwich(items: string[]) 
{
    console.log("Sandwich Items:");
    if (items.length == 0) 
    {
        console.log("No Items Selected");
    }
    else
    {
        for (let i = 0; i < items.length; i++)
        {
        console.log("You Ordered Sandwich with:",items[i]);
        }
    }
}
makeSandwich(["Chicken", "Cheese", "White bread"]);
makeSandwich(["Beef", "Cheese", "Bran bread"]);
makeSandwich(["Mutton", "Cheese", "White bread"]);
