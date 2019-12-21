var tempF = parseFloat(document.getElementById('temp1').textContent);
var wSpeed = parseFloat(document.getElementById('speed1').textContent);
var calculateNums = Math.round(35.74 + (0.6215 * tempF) - (35.75 * Math.pow(wSpeed, 0.16)) + (0.4275 * tempF * Math.pow(wSpeed, 0.16)));
document.getElementById('chill1').textContent = calculateNums;