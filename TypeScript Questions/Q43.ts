let array: string[] = ["Atif", "Arif", "Sami"];

function show_magician(array: string[]) 
{
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

function make_great(inputArray: string[]): string[] 
{
    let modifiedArray: string[] = [];
    for (let i = 0; i < inputArray.length; i++) 
    {
        modifiedArray.push("The Great ",inputArray[i]);
    }
    return modifiedArray;
}

console.log("Original Array Magicians:");
show_magician(array);

let a=array;

let modifiedArray: string[] = make_great(a);

console.log("Modified Magicians:");
show_magician(modifiedArray);
