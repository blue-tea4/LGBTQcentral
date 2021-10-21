var lgbtqFacts = ["1/5 LGBTQ people have experienced a hate crime due to their identity", "72 countries criminalize same sex relationships","The first state to decriminalize homosexuality was Illinois in 1961","Same sex mairrage became legal in the US only in 2015", "90% of LGBTQ+ students hear anti-LGBTQ+ coments in school. On average a high schooler will hear 26 slurs per day", "28% of LGBTQ+ students drop out of school due to harassment"];

var showQuoteButton= document.getElementById("factButton");

var quoteDisplay = document.getElementById("factOutput");

var clickCountThree = 0;

showQuoteButton.addEventListener("click", displayQuote);

function displayQuote(){
  quoteDisplay.innerHTML = lgbtqFacts[clickCountThree];
  clickCountThree++;
  if (clickCountThree == lgbtqFacts.length){
    clickCountThree= 0;
  }

}