async function findnearbyCity(data) {
    const temp = fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${data}/nearbyCities?radius=100`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
            "x-rapidapi-key": "ce8b34b1c7mshb4dbf9883179fd6p1f633ejsn7080ab266405"
        }
    });

    return (await temp).json();
}

function findcity() {
    const temp = fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${inputCity}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
            "x-rapidapi-key": "ce8b34b1c7mshb4dbf9883179fd6p1f633ejsn7080ab266405"
        }
    });

    return temp;
}

var city = {};
const inputCity = "new york";
const inputCountry = "US";

findcity()
.then(result => result.json())
.then((data) => {
    for(var i = 0; i < data.data.length; i++){
        
        if(data.data[i].countryCode == inputCountry){
            city.id = data.data[i].wikiDataId
            city.name = data.data[i].city;
            city.country = data.data[i].country;

            console.log(data);
            break;
        }
    }
});

console.log(city);

function test(){
    setTimeout(function(){
        findnearbyCity(city.id)
        .then(data => console.log(data))
    }, 2000);
}

test();