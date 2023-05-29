let countryButton = document.getElementById('country-button');
countryButton.addEventListener('click', getCountry);

let currentInfoIndex = 0;

function getCountry() {
  let countryInfo = document.getElementById("country-info");
  let url = 'https://raw.githubusercontent.com/hbarry89/Countries-API/main/countries.json'
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let info = data[currentInfoIndex];
      let country = `#: ${info.id} | Country: ${info.country} | Capital: ${info.capital} | Language(s): ${info.languages} | Currency: ${info.currency} | Country Code: ${info.callingCode} | TLD: ${info.internetTLD}`
      countryInfo.textContent = "";
      countryInfo.append(country);
      currentInfoIndex++;
      if (currentInfoIndex >= data.length) {
          currentInfoIndex = 0;
      }
    })
    .catch(function(error) {
      console.error(error);
    })};