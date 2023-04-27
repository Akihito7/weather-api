import { variaveis } from "./variaveis.js";

class buscarTemperatura{
    
    static search(nameCity){
        
        const URL = `http://api.weatherapi.com/v1/current.json?key=aaf989f67863408ab88160156232604&q=${nameCity}&aqi=no`;
        
        return fetch(URL).then(data => data.json()).then(data => { 
            
            const temperature = data.current.temp_c;
            const name = data.location.name;
            const region = data.location.region;
            const humidity = data.current.humidity;
            const feelsLike = data.current.feelslike_c;
            const wind = data.current.wind_mph;
            
            return {
                temperature,
                name,
                region,
                humidity,
                feelsLike,
                wind   
            }
        });
    }
    async mostrarTemperatura(){
        
        let city = variaveis.inputHmtl.value;
        const response =  await buscarTemperatura.search(city);
        variaveis.temperaturaHtml.innerHTML = response.temperature;
        variaveis.infoCidadeHtml.innerHTML = response.name;
        variaveis.infoRegiao.innerHTML = response.region;
        variaveis.sensaocaoTermicaHtml.innerHTML = response.feelsLike;
        variaveis.umidadeHtml.innerHTML = response.humidity;
        variaveis.ventoHtml.innerHTML = response.wind;
        variaveis.inputHmtl.value = "";
        
    }

    inicializador(){
      variaveis.buttonHtml.addEventListener("click", this.mostrarTemperatura)
    }
}
export {buscarTemperatura};