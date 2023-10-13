 const allUsers=["Anurag","Alka","Manish","Mithun","Vinay","Ruchi","Rahul","Firoz"]

function isUserPresent(user){
  if(allUsers.includes(user)){
    console.log(`yes,${user} is valid user`);
    return true;
  }
  else {
    console.log(`No ,${user} is not valid user`);
    return true;
  }
  
}
isUserPresent("Mithun")