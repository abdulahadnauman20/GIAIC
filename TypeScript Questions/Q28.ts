let age=10;

if(age<2)
{
    console.log("Person is Baby");
}
else if(age>2 && age<4)
{
    console.log("Person is Toddler");
}
else if(age>4 && age<13)
{
    console.log("Person is Kid");
}
else if(age>13 && age<20)
{
    console.log("Person is Teenager");
}
else if(age>20 && age<65)
{
    console.log("Person is Adult");
}
else if(age>65)
{
    console.log("Person is Elder");
}
else
{
    console.log("Invalid Age Entered: ");
}
