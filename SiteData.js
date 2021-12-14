// date uses mm/dd/yy

var websiteCreationDate = new Date("10/17/2020");
var currentDate = new Date();
var updateDate = new Date("12/14/2021");

function getDaysSince(date1, date2)
{
    var daysSince = date2.getTime() - date1.getTime();
    daysSince = daysSince / (1000 * 3600 * 24);
    daysSince = Math.round(daysSince * 100) / 100;
    return daysSince;
}

document.getElementById("currentDate").innerHTML = "Age - " + getDaysSince(websiteCreationDate, currentDate) + " days.";
document.getElementById("daysSinceUpdate").innerHTML = "Days since update - " + getDaysSince(updateDate, currentDate) + ".";