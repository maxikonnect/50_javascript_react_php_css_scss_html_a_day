let now = new Date(); // The current time
console.log(now);

let now1 = new Date(0); // The current time
console.log(now1);//Thu Jan 01 1970 00:00:00 GMT+0000 (Greenwich Mean Time)

let century = new Date(2100, // Year 2100
    0, // January
   1, // 1st
   2, 3, 4, 5); // 02:03:04.005, local time

console.log(century);


/* If you want to specify a
date and time in UTC (Universal Coordinated Time, aka GMT), then you can use the
Date.UTC(). This static method takes the same arguments as the Date() constructor,
interprets them in UTC, and returns a millisecond timestamp that you can pass to the
Date() constructor:
// Midnight in England, January 1, 2100 */
let century1 = new Date(Date.UTC(2100, 0, 1));
console.log(century1);

//the day was wednesday 19th february 2025 2: 55
console.log(now.getDate());// 19 Day of month
console.log(now.getDay());//3
console.log(now.getFullYear())//2025 year
console.log(now.getHours())//14 hours from midnight
console.log(now.getMilliseconds())//
console.log(now.getMinutes())//55 (55 minutes pass 2)
console.log(now.getMonth()) //1 january is 0 and february is 1

console.log(new Date(h))


let d = new Date(2020, 0, 1, 17, 10, 30); // 5:10:30pm on New Year's Day 2020
d.toString() // => "Wed Jan 01 2020 17:10:30 GMT-0800 (Pacific Standard Time)"
d.toUTCString() // => "Thu, 02 Jan 2020 01:10:30 GMT"
d.toLocaleDateString() // => "1/1/2020": 'en-US' locale
d.toLocaleTimeString() // => "5:10:30 PM": 'en-US' locale
d.toISOString() // => "2020-01-02T01:10:30.000Z"
