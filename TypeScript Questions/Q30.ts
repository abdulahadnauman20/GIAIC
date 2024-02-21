let username:string[] =["admin","Abdul Ahad","Abdul Samad","Ali","Fateh"];
for (var i = 0; i < username.length;i++)
{
    let usernames=username[i];
    if(usernames=="admin")
    {
        console.log("Hello admin, would you like to see a status report?");
    }
    else
    {
        console.log("Hello",usernames,"thank you for logging in again.");
    }
}