/* Joke function API for the joke section */

document.getElementById("joke").textContent = "";
document.getElementById("punchline").textContent = "";

const api_url = "https://official-joke-api.appspot.com/random_joke";

async function getJoke() {
    const response = await fetch(api_url);
    const data = await response.json();

    const { setup, punchline } = data;

    document.getElementById('joke').textContent = setup;
    document.getElementById('punchline').textContent = punchline;
}

/* End of the Joke Function API for the joke section */

/* Currency API Information */

const urlCurrencyApi = "https://freecurrencyapi.net/api/v1/rates?apikey=3ef93680-da4f-11eb-962d-bde501fb54e8";

async function getCurrency() {

  const response = await fetch(urlCurrencyApi);
  const object = await response.json();

  const keys = Object.keys(object.data["2021-07-01"]);
  const values = Object.values(object.data["2021-07-01"]);
  const entries = Object.entries(object.data["2021-07-01"]);

  const symb = ["-currency-dollar",
                "-currency-yen",
                "-cash-coin",
                "-cash-stack",
                "-coin",
                "-currency-pound",
                "-currency-dollar",
                "-currency-exchange",
                "-cash-stack",
                "-currency-yen",
                "-currency-dollar",
                "-cash",
                "-cash-coin",
                "-cash-stack",
                "-coin",
                "-currency-pound",
                "-currency-dollar",
                "-currency-exchange",
                "-currency-bitcoin",
                "-currency-yen",
                "-currency-dollar",
                "-cash",
                "-cash-coin",
                "-cash-stack",
                "-coin",
                "-currency-pound",
                "-currency-dollar",
                "-currency-exchange",
                "-currency-bitcoin",
                "-currency-yen",
                "-currency-bitcoin",
                "-currency-yen",
              ];

  document.getElementById("card-wrapper").innerHTML = "";

  buildTemplate();

  function buildTemplate(){
    let myDiv = document.getElementById("card-wrapper");
    
    for( let i=0; i<keys.length; i++){
      let cardTemplate = `
                        <div class="feature col my-4">
                          <span class="feature-icon bg-primary bg-gradient">
                            <i class="bi bi${symb[i]}"></i>
                          </span>
                          <span id="currencyValue" class="display-6 ms-4 text-primary">${values[i]}</span>
                          <h2>${keys[i]} to EUR </h2>
                          <p>This is the number of ${keys[i]} needed to buy an EURO</p>
                          <a href="#" class="icon-link">
                            Call to action
                            <i class="bi bi-chevron-right"></i>
                          </a>
                        </div>
    `; 
      myDiv.innerHTML += cardTemplate;
    }
  }


}

getCurrency().catch(error => {
    console.error(error);
});

/* End of Currency Api thing*/

