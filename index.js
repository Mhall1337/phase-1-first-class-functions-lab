// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
     return drivers.slice(0, 2)
}
const returnLastTwoDrivers = function(drivers){
   return drivers.slice(2, drivers.length)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function(fare){
        return fare * int
    }
}
const fareDoubler = function(fare){
    return fare * 2
}
const fareTripler = function(fare){
    return fare * 3
}
function selectDifferentDrivers(drivers, selectedDrivers){
if (selectedDrivers === returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers)
}
else if(selectedDrivers === returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers)
}
}
