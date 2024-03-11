//is api me bh .then k bad .catch lgana ha eror k lye & loader imgae gif 
// import { useEffect, useState } from 'react';
// import './App.css';

// function App() {

//   const [weatherData, setWeatherData] = useState([])

//   useEffect(() => {
//     getData()
//   }, [])

//   const getData = () => {
//     fetch('https://api.weatherapi.com/v1/forecast.json?key=91b4369798474fee84b51233233010&q=${location}&days=3&aqi=no')
//     .then(res => res.json())
//     .then(res => {
//       console.log(res);

//       let current = res.current
//       let location = res.location

//       setWeatherData(res)
//     })
//   }

//   return (
//     <div className="App">
//       <div className="header">Weather App</div>

//       <div>
//         <input type="text" placeholder='Enter Any City' />

//         <button>Search</button>
//       </div>

//       <div>
//         {weatherData.location && weatherData.current &&
//        <h2>{weatherData.location.country}</h2> &&
//        <h4>{weatherData.current.feelslike_c       }</h4> &&
//        <h2>{weatherData.current.humidity}</h2> 
//        }
//       </div>

//     </div>
//   );
// }

// export default App;



import { useEffect, useState } from 'react';
function App() {

  const [weatherData, setWeatherData] = useState([])
  const [cityName, setcityName] = useState('')

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {

    // if (!cityName.trim()) {
    //   alert('Please enter a city name');
    //   return;
    // } 

    fetch(`https://api.weatherapi.com/v1/forecast.json?key=91b4369798474fee84b51233233010&q=${cityName}&days=3&aqi=no`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setWeatherData(res)

      setcityName('')
    })
    .catch(error => {
      console.error('Error:', error);
      alert(error.message)
      // Handle error here
    })
  
  }

  // if (!cityName) {
  //   return <div>
  //     <h1>loading</h1>
  //   </div>
  // }
  

  return (
    <div className="App">
      <div className="header">Weather App</div>

      <div>
        <input type="text" placeholder='Enter Any City' onChange={(e) => setcityName(e.target.value)} value={cityName}/>

        <button onClick={getData}>Search</button>
      </div>

      
    <div>
        {weatherData.current && (
        <>
        <h4>Cloud:- {weatherData.current.cloud}</h4>   
       <h4>{weatherData.current.condition.text}</h4>
       <img src={weatherData.current.condition.icon} alt="" />

       <h4>feelslike: {weatherData.current.feelslike_c}</h4>
       <p>humidity: {weatherData.current.humidity}</p>
       <h3>temp: {weatherData.current.temp_c} C</h3> 
       <h3>wind speed: {weatherData.current.wind_degree} C</h3>
       <h3>pressure: {weatherData.current.pressure_in} C</h3>


       <h4>Sunset: {weatherData.forecast.forecastday[0].astro.sunset}</h4>
       <h4>Sunrise: {weatherData.forecast.forecastday[0].astro.sunrise}</h4>
       <p>Moonset: {weatherData.forecast.forecastday[0].astro.moonset}</p>
       <p>Moonrise: {weatherData.forecast.forecastday[0].astro.moonrise}</p>
       <p>moon_phase: {weatherData.forecast.forecastday[0].astro.moon_phase}</p>
{/* astro me 2 din future ka bh bta raha ha agay kia ha forecast */}

<p>Aveg humidity: {weatherData.forecast.forecastday[0].day.avghumidity}</p>
<p>averg temp C: {weatherData.forecast.forecastday[0].day.avgtemp_c} C</p>
<p>day aver km: {weatherData.forecast.forecastday[0].day.avgvis_km}</p>

<p>max temp_c: {weatherData.forecast.forecastday[0].day.maxtemp_c} C</p>
<p>max temp_F: {weatherData.forecast.forecastday[0].day.maxtemp_f}</p>
{/* ------------------------------------------------------------------ */}

       <h2>Country; {weatherData.location.country}</h2>
       <p>{weatherData.location.localtime}</p>
       <p>region: {weatherData.location.region}</p>
       <p>City-Name: {weatherData.location.name}</p>
      </>
       )}
      </div>

    </div>
  );
}

export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

