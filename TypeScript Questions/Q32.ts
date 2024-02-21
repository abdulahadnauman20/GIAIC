let current_users: string[] = ["Abdul Ahad", "Ali", "Shees", "Shayan", "Shahzaib"];
let new_users: string[] = ["Abdul Basit", "Ali Asif", "Shees", "Shayan", "Saad"];
if (current_users.length === 0) 
{
    console.log("We Need to Find Users");
} 
else {
    for (let i = 0; i < new_users.length; i++) 
    {
        const new_user = new_users[i];
        const lowernewuser = new_user.toLowerCase();
        const isUsed = current_users.some(current_user => current_user.toLowerCase() === lowernewuser);
        if (isUsed) 
        {
            console.log(new_user, "is already used User");
        } else 
        {
            console.log(new_user, "is Available");
        }
    }
}
