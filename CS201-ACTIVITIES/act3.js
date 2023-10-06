let password = promt("Enter your password?");
if (password.legth ==8){
    console.log("Welcome");
}
else if(password == ""){
    console.log("Please provide a password");
}
else if(password.legth<8){
    console.log("Password is too short");
}
else if(password.length>8){
    console.log("Too Password & Password should be 8 characters");
}