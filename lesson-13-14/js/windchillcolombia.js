var tempF = parseFloat(document.getElementById('temp3').textContent);
var wSpeed = parseFloat(document.getElementById('speed3').textContent);
var calculateNums = Math.round(35.74 + (0.6215 * tempF) - (35.75 * Math.pow(wSpeed, 0.16)) + (0.4275 * tempF * Math.pow(wSpeed, 0.16)));
document.getElementById('chill3').textContent = calculateNums;