let array:string[] = ["Atif","Arif","Sami"];
function show_magician(array:string[]) 
{
    for (var i = 0; i < array.length;i++)
    {
 console.log(array[i]);   
    }
}
show_magician(array)
function make_great()
{
    for(var i = 0; i < array.length;i++)
    { 
    console.log("The Great",array[i]) ;
    }
}
make_great()