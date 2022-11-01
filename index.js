// Code your solution here
// findMatchin- ths function takes an array of driver's names and a string as arguments, 
// and returns the matching list of drivers.The function should be case insensitive

// drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, NombreIntroducido) {
  return drivers.filter(function (conductor) { return conductor.toLowerCase() === NombreIntroducido.toLowerCase() })
}

function fuzzyMatch(drivers, NombrePerson) {
    return drivers.filter(function(conductor) {
      return conductor.toLowerCase().substring(0, NombrePerson.length) === NombrePerson.toLowerCase().substring(0, NombrePerson.length)
      
    })
}

function matchName(drivers, string){
    return drivers.filter (
      
      function (driverOfDrivers) {
        return driverOfDrivers.name === string
      })
  
    
  }
  console.log(matchName(drivers, "Sally"));
  

  
