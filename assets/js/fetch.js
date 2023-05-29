async function getCountry() {
  const response = await fetch("https://raw.githubusercontent.com/hbarry89/Countries-API/main/countries.json");
  const countryData = await response.json();
  console.log(countryData);
}

getCountry();