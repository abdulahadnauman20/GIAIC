let Guest_List2:string[]=["Ali","Fateh","Saad"]
for (var i=0; i<Guest_List2.length; i++){
console.log(Guest_List2[i],"is Invited to Dinner");
}
console.log(Guest_List2[0],"Couldn't Make it to Dinner")
Guest_List2[0]="Shahzaib"
console.log("=========================================================");
for (var i=0; i<Guest_List2.length; i++){
    console.log(Guest_List2[i],"is Invited to Dinner in Updated List");
    }
console.log("========================================================="); 
console.log("We Found a Bigger Dinner Table now!");
Guest_List2.unshift("Abdul Basit");
console.log(Guest_List2); 
Guest_List2.splice(2,0,"Abdul Samad");
console.log("=========================================================");
console.log(Guest_List2); 
console.log(Guest_List2.push("Taha"));
console.log("=========================================================");
console.log("Full Final List is ",Guest_List2);

