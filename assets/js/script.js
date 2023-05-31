let countryButton = document.getElementById('country-button');
countryButton.addEventListener('click', getCountry);

let currentInfoIndex = 0;

function getCountry() {
  let countryInfo = document.getElementById("country-info");
  let url = 'https://raw.githubusercontent.com/hbarry89/Countries-API/main/country.json';
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let info = data[currentInfoIndex];

      let country = `<span class="country-property">#:</span> ${info.id} <br>
      <span class="country-property">Country:</span> ${info.country} <br>
      <img src="${info.flag}" width="200" height="200" alt="Afghanistan Flag">
      <span class="country-property">Capital:</span> ${info.capital} <br>
      <span class="country-property">Language(s):</span> ${info.languages} <br>
      <span class="country-property">Currency:</span> ${info.currency} <br>
      <span class="country-property">Country Code:</span> ${info.callingCode} <br>
      <span class="country-property">TLD:</span> ${info.internetTLD}`;

      countryInfo.innerHTML = country;
      currentInfoIndex++;
      if (currentInfoIndex >= data.length) {
        currentInfoIndex = 0;
      }
    })
    .catch(function(error) {
      console.error(error);
    });
}