const accountId = 144553
let accountEmail = "pranali@gamil.com"
var accountPassword = "12345"
accountCity = "Nagpur"
let accountState;  //it return undefined because we cannot assign any value

// accountId = 22  // not allowed

accountEmail = "hfkjlak@gmail.com"
accountPassword = "212122121"
accountCity = "Pune"

console.log(accountId)

/*
please do not use var
because of issue in block scope and functional scope.
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) //it print the data in tabular format.