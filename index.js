// Code your solution in this file!
function logDriverNames(drivers) {
  for (const driver of drivers) {
    console.log(driver.name);
  }
}

function logDriversByHometown(drivers, location) {
  drivers.filter (function(driver) {
    return driver.hometown === location;
  }).map (function(driver) {
    console.log(driver.name)
  })
}
// also works
// function logDriversByHometown(drivers, location) {
//   for (const driver of drivers) {
//     if (driver.hometown === location) {
//       console.log(driver.name);
//     }
//   }
// }
const revenueSorter = function(rev1, rev2) {
  return rev1 - rev2;
}


function driversByRevenue(drivers) { //.slice() makes a copy (non-destructive), and the sort works on negative, 0, or positive to do its sorting.  compare the revenues to return that value to be sorted.
  return drivers.slice().sort(function(a, b) {return a.revenue - b.revenue})
}

function driversByName(drivers) { //localeCompare works around issues comparing lowercase to uppercase? I think?
  return drivers.slice().sort(function(a, b) {return a.name.localeCompare(b.name)})
}

function currentTotal(total, driver) {
  return driver.revenue + total
}

function totalRevenue(drivers) { //reduce does whatever is in the first arguments function on each item in 'drivers', and 'sums' (whatever that analogy is for an empty array, for summing, etc) it onto the starting point of the second argument
  return drivers.reduce(currentTotal, 0)
}

//works, but doesnt use reduce.
// function totalRevenue(drivers) {
//   let total = 0
//   for (const driver of drivers) {
//     total += driver.revenue
//   }
//   return total
// }

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
