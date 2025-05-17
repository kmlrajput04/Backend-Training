import https from "https";
import chalk from "chalk";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
})

// Your API Key: 76d873dad23537de237e3ec5

const apikey = "76d873dad23537de237e3ec5";
const url = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;

const convertCurrency = (amount, rate) => {
    return (amount * rate).toFixed(2);
}

https.get(url, (res) => {
    let data = ""
    res.on("data", (chunk) => {
        data += chunk;
    })

    res.on("end", () => {
        const rates = JSON.parse(data).conversion_rates;
        
        rl.question("Enter the amount in USD: ", (amount) => {
          rl.question("Enter the target currency: ", (currency) => {

            const rate = rates[currency.toUpperCase()];
            if (rate){
                console.log(`${amount} USD is approximately ${convertCurrency(amount, rate)} ${currency}`)
            }else{
                console.log("Invalid currency code");
            }
           rl.close();
          }) 

    })
})
})


// currency_converter.js