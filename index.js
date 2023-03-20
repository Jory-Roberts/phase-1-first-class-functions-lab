const returnFirstTwoDrivers = (drivers = []) => drivers.slice(0, 2);

const returnLastTwoDrivers = (drivers = []) => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiplier) {
    
    return function (value) {
        
       return fareMultiplier * value;
    }
}

const fareDoubler = (doubleFare) => doubleFare * 2;

const fareTripler = (tripleFare) => tripleFare * 3;

function selectDifferentDrivers(arrayofDrivers, returnFirstTwoDrivers) {
    
    return returnFirstTwoDrivers(arrayofDrivers);
}