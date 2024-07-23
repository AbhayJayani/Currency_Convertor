const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (const select of dropdowns) {
  for (const curr in countryList) {
    const newopt = document.createElement("option");
    newopt.innerText = curr;
    newopt.value = curr;
    if (select.name === "from" && curr === "USD") {
      newopt.selected = "selected";
    } else if (select.name === "to" && curr === "INR") {
      newopt.selected = "selected";
    }
    select.append(newopt);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  const curr = element.value;
  const cntry = countryList[curr];
  const img = element.parentElement.querySelector("img");
  img.src = `https://flagsapi.com/${cntry}/flat/64.png`;
};

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  const amt = document.querySelector(".amount input");
  let amtval = parseFloat(amt.value);
  if (amtval <= 0 || isNaN(amtval)) {
    amtval = 1;
    amt.value = 1;
  }
  const URL = `${BASE_URL}/${fromcurr.value.toLowerCase()}.json`;
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch exchange rate: ${response.statusText}`);
    }
    const data = await response.json();
    const rate = data[fromcurr.value.toLowerCase()][tocurr.value.toLowerCase()];
    const finalamt = amtval * rate;
    msg.innerText = `${amtval} ${fromcurr.value} equals to ${finalamt.toFixed(2)} ${tocurr.value}`;
  } catch (error) {
    msg.innerText = `Error: ${error.message}`;
  }
});
