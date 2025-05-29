function Popular(props) {
  return (
    <div className="card">
      <div>
        <div className="card-city">{props.city}</div>
        <div className="card-temp">{props.temperature}&deg;C</div>
        <div className="card-weather">{props.text}</div>
      </div>
      <div>
        {/* <FaSun className="weather-icon" /> */}
        <img src={props.icon} className="weather-icon"/>
        </div>
    </div>
  )
}

export default Popular;