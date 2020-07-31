function priceFunction(){
    document.getElementById('basic').innerHTML = "$"+localStorage.getItem("basic");
    document.getElementById('unlimited').innerHTML = "$"+localStorage.getItem("unlimited");
    document.getElementById('plus').innerHTML = "$"+localStorage.getItem("plus");
    
}

function testFunction(){
    //getting variables from form
    var travelCost = document.getElementById("Cost").value;
    var age = document.getElementById("Age").value;
    var country = document.getElementById("Country").value;
    
    //will be returning quoteTotal
    var riskTotal = 0;
    
    console.log(levelThreeRisk(country));
    //check for high risk
    if(levelThreeRisk(country)){
        riskTotal = (travelCost * 0.025).toFixed(2);
    }
    if(levelFourRisk(country)){
        riskTotal = (travelCost * 0.05).toFixed(2);
    }
    //console log debugging
    console.log(country);
    console.log(age);
    console.log(travelCost);
    console.log(riskTotal);
    
    //declaring vars for our different quotes
    var basicQuote = 0, plusQuote = 0, unlimitedQuote = 0;

    //calculating different quotes
    basicQuote = (parseFloat(travelCost * 0.03) + parseFloat(riskTotal)).toFixed(2);
    plusQuote = (parseFloat(travelCost * 0.06) + parseFloat(riskTotal)).toFixed(2);
    unlimitedQuote = (parseFloat(travelCost * 0.09) + parseFloat(riskTotal)).toFixed(2);
    
    //since we are not using a database I needed to store the variables locally
    localStorage.setItem("basic", basicQuote);
    localStorage.setItem("plus", plusQuote);
    localStorage.setItem("unlimited", unlimitedQuote);
    window.open("pricing.html", "_self");
    //printing for debugging
    //document.write('<p> Basic: ' + basicQuote +'<br></br>Plus: ' + plusQuote +'<br></br>Unlimited: ' + unlimitedQuote +'</p>');
}

function levelThreeRisk(country){
    let travelAdvisory3 = ["Lebanon", "Burundi", "Turkmenistan", "Israel", "Tajikistan", "Micronesia", "Azerbaijan", "South Korea", "Italy", "Pakistan", "Democratic Republic of the Congo", "Niger", "Nigeria", "Guinea-Bissau", "Chad", "Sudan", "Honduras", "Nicaragua"];
    return travelAdvisory3.includes(country);
}

function levelFourRisk(country){
    let travelAdvisory4 = ["China", "Burkina Faso", "Iraq", "Indonesia", "Mongolia", "Haiti", "Iran", "Afghanistan", "Mali", "Venezuela", "Yemen", "South Sudan", "Syria", "Somalia", "North Korea", "Libya", "Central African Republic"];
    return travelAdvisory4.includes(country);
}
