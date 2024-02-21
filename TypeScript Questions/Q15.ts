let Guest_List:string[]=["Ali","Fateh","Saad"]
for (var i=0; i<Guest_List.length; i++){
console.log(Guest_List[i],"is Invited to Dinner");
}
console.log(Guest_List[0],"Couldn't Make it to Dinner")
Guest_List[0]="Shahzaib"
console.log("=========================================================");
for (var i=0; i<Guest_List.length; i++){
    console.log(Guest_List[i],"is Invited to Dinner in Updated List");
    }
    