async function getCountry() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/hbarry89/Countries-API/main/country.json");

        if (!response.ok) {
            throw new Error("Unable to fetch country data.");
        }

        const countryData = await response.json();
        console.log(countryData);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

getCountry();