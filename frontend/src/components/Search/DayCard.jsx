function DayCard(props) {
  return (
    <div className="day-card">
      <div className="day">{props.date}</div>
      <img src={props.icon} className="icon"/>
      <div className="max">{props.max}&deg;C</div>
      <div className="min">{props.min}&deg;C</div>
    </div>
  )
}


export default DayCard;