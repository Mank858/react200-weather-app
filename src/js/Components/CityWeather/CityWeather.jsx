import React from 'react';

export default class CityWeather extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { searchedCity, icon, lat, lon, temp, pressure,
            humidity, Lowtemp, Hightemp, Wind } = this.props
        return (
            <div className="card border-info">
                <div className="card-header text-info bg-gradient-info">City Information</div>
                {searchedCity != '' ? <div className='card-body'>
                    <h3 className='label'>{searchedCity}</h3>
                    <img src={`http://openweathermap.org/img/w/${icon}.png`} />
                    <p className='label'>Lat/Long:<span className='latoutput'> {lat},{lon}</span></p>
                </div> : <div className='card-body'>
                <br />
                <br />
                <br />
                <br />
                <br />
                </div> }
                <hr />
                <div className='card-body back'>

                    <div className='row'>
                        <div className='col-md-4'>
                            <p className='label'>Temperature (F)</p>
                            <p className='output'>{temp}˚</p>
                        </div>
                        <div className='col-md-4'>
                            <p className='label'>Pressure</p>
                            <p className='output'>{pressure}</p>
                        </div>
                        <div className='col-md-4'>
                            <p className='label'>Humdity</p>
                            <p className='output'>{humidity}%</p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-4'>
                            <p className='label'>Lowest Temp (F)</p>
                            <p className='output'>{Lowtemp}˚</p>
                        </div>
                        <div className='col-md-4'>
                            <p className='label'>Highest Temp (F)</p>
                            <p className='output'>{Hightemp}˚</p>
                        </div>
                        <div className='col-md-4'>
                            <p className='label'>Wind Speed</p>
                            <p className='output'>{Wind} mph</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}