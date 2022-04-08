//Train ticket calculation

//Declaration
//Name
const formBtn = document.getElementById("generate");
const formSelect = document.getElementById("age");

//Elaboration
generate.addEventListener("click",
    function() {
        //Price calculation with km and age
        const userKm = parseInt(document.getElementById("km"));
        console.log("km");
        const userAge = parseInt(document.getElementById("age"));
        console.log("age");
        //Price calculation
        let price = 0.21;

        let cost;

        cost = price * userKm;

        if ('Minorenne') {
            cost = cost - (cost * 20 / 100);
        }   else if ('Maggiorenne' >=65) {
            cost = cost - (cost * 40 / 100);
        }   else {
            cost = price * userKm;
        }
        //Final Output
        //Showing the price for each age
        document.getElementById('price').innerHTML = cost;
    }
);