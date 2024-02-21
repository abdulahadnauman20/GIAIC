let locations:string[]=["Makkah","Madinah","Dubai","Islamabad","Turkey"];
for(let i=0;i<locations.length;i++) 
{
console.log(locations[i]);
}
console.log("------------Alphabetical Order--------------------------------");
let sorted=locations.sort();
for(let i=0;i<locations.length;i++) 
{
console.log(sorted[i]);
}

console.log("--------------------------------------------");
for(let i=locations.length-1;i>=0;i--) 
{
console.log(sorted[i]);
}

console.log(locations);
console.log("--------------------------------------------");
for(let i=locations.length-1;i>=0;i--) 
{
console.log(locations[i]);
}

console.log("--------------------------------------------");
console.log(locations);
console.log("--------------------------------------------");

// for(let i=locations.length;i>=0;i--) 
// {
// console.log(locations[i]);
// }
// console.log("--------------------------------------------");
// console.log(locations);
// Will Create Indexing Error Will Show undefined

for(let i=locations.length-1;i>=0;i--) 
{
console.log(locations[i]);
}
console.log("--------------------------------------------");
console.log(locations);
// corrected