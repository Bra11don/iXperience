var array = []
var worldData = ''
var countryData = ''

async function worldCountries(){
    var url = "https://api.covid19api.com/countries"
    // const coutries = await fetch(url, {
    //     method: 'GET',
    //     headers:{
    //         'Content-Type':'application/json'
    //     }
    $.get(url,function(worldCountries){
        for (let i = 0; i < worldCountries.length-1; i++) {      
            array.push(worldCountries[i].Country);
            $("#selectCountry").append("<option value= "+ array[i] +">" + array[i] +"</option>")      
        }
    })
    return array;
}
worldCountries()

function worldInit(){
    var url = "https://api.covid19api.com/summary"

    $.get(url, function(worldData){
        // percentageOfWorldRecovery = (worldData.Global.TotalRecovered / worldData.Global.TotalConfirmed) * 100

        worldData = `
        <td> ${worldData.Global.TotalConfirmed}</td>
        <td> ${worldData.Global.TotalRecovered}</td>
        <td> ${worldData.Global.TotalDeaths}</td>
        `
        $("#worldData").html(worldData)
    })
}
worldInit()

function countryInit(){
    var url = "https://api.covid19api.com/summary"

    $.get(url, function(countryData){
        for(var count = 0;count <countryData.Countries.length-1;count++){
            var selected = $("#selectCountry").find("option:selected").text()
            if(countryData.Countries[count].Country == selected){
                // percentageOfCountryRecovery = (countryData.Countries[count].TotalRecovered / countryData.Countries[count].TotalConfirmed) * 100

                countryData = `
                <td> ${countryData.Countries[count].TotalConfirmed}</td>
                <td> ${countryData.Countries[count].TotalRecovered}</td>
                <td> ${countryData.Countries[count].TotalDeaths}</td>`
                $("#countryData").html(countryData)
                break
            }
        }
    })
}
countryInit()

