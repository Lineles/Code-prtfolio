let userArr = [{
    name: "Brian",
    lastLoggedOn: 5,
    location: "Illinois",
    contributions: 79
  }, {
    name: "Brent",
    lastLoggedOn: 30,
    location: "Austria",
    contributions: 25
  }, {
    name: "Selene",
    lastLoggedOn: 2,
    location: "Illinois",
    contributions: 116
  }, ];
  
  function getAll() {
    let allUsers = [];
    for (let i = 0; i < userArr.length; i++) {
      allUsers.push(userArr[i]);
    }
    return allUsers;
  }
  
  function checkExistingUser(e) {
    for (let i = 0; i < userArr.length; i++) {
      if (userArr[i].name === e.currentTarget.name.value) {
        console.log(userArr[i]);
        return true;
      }
    }
    console.log("User does not exist");
    return false;
  }
  
  function checkLastLogin() {
    let results = [];
    for (let i = 0; i < userArr.length; i++) {
      if (userArr[i].lastLoggedOn > 10) {
        results.push(userArr[i]);
      }
    }
    return results;
  }
  
  function checkLocation(e) {
    let results = [];
    for (let i = 0; i < userArr.length; i++) {
      if (userArr[i].location === e.currentTarget.location.value) {
        results.push(userArr[i]);
      }
    }
    if (results.length > 0) {
     console.log(results);
     return results;
    } else {
      console.log("No results found");
      return false;
    }
  }
  
  function checkContributions(e) {
    var validContributions = [];
    for (i = 0; i < userArr.length; i++){
      if(userArr[i].contributions > e.currentTarget.contributions.value){
        validContributions.push(userArr[i]);
      }
    }
    if(validContributions.length > 0){
      console.log(validContributions);
      return validContributions;
    } else {
      console.log("No results found");
      return false;
    }
  }
  
  function deleteUser() {
    for(i = 0; i < userArr.length; i++){
      if(userArr[i].name === "Selene") {
        userArr.splice(userArr[i]);
      console.log("User deleted successfully");
      return true;
      }
    }
    console.log("User not found"); 
  }