let countryButton = document.getElementById('country-button');
countryButton.addEventListener('click', getCountry);

let currentInfoIndex = 0;

async function getCountry() {
    try {
        let countryInfo = document.getElementById("country-info");
        let url = 'https://raw.githubusercontent.com/hbarry89/Countries-API/main/v1/country.json';
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Unable to fetch country data.");
        }

        const data = await response.json();
        let info = data[currentInfoIndex];

        let country = `<span class="country-property">#:</span> ${info.id} <br>
            <span class="country-property">Country:</span> ${info.country} <br>
            <img src="${info.flag}" width="300" height="200" alt="${info.country} Flag"> <br>
            <img src="${info.map}" width="300" height="200" alt="${info.country} Map"> <br>
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
    } catch (error) {
        console.error(error);
    }
}