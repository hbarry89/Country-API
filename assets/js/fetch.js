async function getCountries() {
  const response = await fetch("https://raw.githubusercontent.com/hbarry89/Countries-API/main/countries.json");
  const countriesData = await response.json();
  console.log(countriesData);
}

getCountries();