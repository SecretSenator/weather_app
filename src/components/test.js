import React,{useState,useEffect} from 'react';

//api: api.openweathermap.org/data/2.5/weather?q={city name}&appid=399081de589444490aec2ab1514d82f4
const Tempapp=()=>{
    const [city,setCity]=useState('');
    const [search,setSearch]=useState('');


    useEffect(()=>{
        const fetchAPI=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=399081de589444490aec2ab1514d82f4`;
            const response=await fetch(url);
            const resjson=await response.json();
            console.log(response);
            setCity(resjson.main);
        }
        fetchAPI();
    },[search])
    
    return(
        <>
           <div className='box'>
                    <div className='inputSearch'>
                        <input type="search"
                               value={search}
                               placeholder="Search Here..."
                               className="input"
                               onChange={(e)=>{
                                   setSearch(e.target.value)
                               }}
                    />                    
                    </div>
                { !city?<p className="err">!!! <br /> No Data Found  <br />Please Enter the City Name</p>
                :(
                    <div>
                        <div id="weathercon">
                    <i className="fas fa-sun" style={{color: '#f6e58d'}}></i> 
                </div>

                <div className="info">
                    <h2 className="location"><i className="fas fa-street-view"> </i> {search}</h2>
                    <p id="date">WED|JUN|2AM</p>
                    <h1 className="temp">{city.temp} °C</h1>
                    <h3 className="tempmin_max">min:{city.temp_min} °C | max:{city.temp_max} °C</h3>
                </div>

                
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
                    </div>
                    
                )
                }          
                
            </div>
        </>
    )
}

export default Tempapp;