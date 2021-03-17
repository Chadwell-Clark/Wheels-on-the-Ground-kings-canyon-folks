
import { displayAttractions, displayAttractionCards } from './attractions/AttractionList.js';
import { getWeatherForecast } from "./weather/WeatherProvider.js";
import { displayEateries } from "./eateries/eateryList.js";
import { makeParkCard } from "./parks/ParkList.js"
import { getParks } from "./parks/ParkProvider.js"
import { showWeather } from "./weather/WeatherList.js";
import { useBizarre } from './attractions/AttractionProvider.js';



//!!!!   define latitude and longitude to get forecast to render
let latitude = 36.1659;
let longitude = -86.7844;



//   ***  Function to start app processes  ***   //

const startWheelsOnTheGround = () => {
    //populating makeParkCard with API data with getParks function here. 
    getParks().then((parkResp) => {
        makeParkCard(parkResp);
    });

	displayAttractions();
	displayEateries();
    
    //!!!!   call weather forecast funtion, passing latitude and longitude as arguments
    //!!!!        Note  arguments will be derived from selected park's coordinates 
    //!!!!              will have to be called after park data with then method
    //   ***  Call getWeatherForecast with coordinates as arguments
    getWeatherForecast(latitude, longitude)
    //   ***  Then parse data (array)  ***   //
    .then((data) => {
        //   ***  Call showWeather with parsed data
      showWeather(data);
    });

}


startWheelsOnTheGround();


const mainEvent = document.querySelector(".main");

mainEvent.addEventListener("change", (event) => {
    console.log(typeof event.target.value)
    if (event.target.id === "bizarreDropdown") {
        displayAttractionCards(event.target.value);
        // const selection = event.target.value
        // const singleCard = useBizarre().find(bizarre => {
        //   return  (bizarre.id === selection)
        // })
        // console.log(selection, "selection")
        // console.log(singleCard, "singleCard")
    }
})

