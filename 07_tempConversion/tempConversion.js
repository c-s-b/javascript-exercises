const ftoc = function(temp) {
toCelsius = Math.round( (temp - 32) * (5/9) * 10) /10;

return toCelsius;
};

const ctof = function(temp) {
toFahrenheit = Math.round( (temp * (9/5) + 32) * 10) /10;

return toFahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
