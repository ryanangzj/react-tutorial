export function Section(props) {
  console.log(props);

  let isLine;

  return (
    <div className="section-item">
      <img src={props.item.img} alt="" className="image"></img>
      <div>
        <span className="location-details">
          <img
            src="images/location-pin.png"
            alt=""
            className="location-pin"
          ></img>
          <h3 className="country">{props.item.country}</h3>
          <h4 className="google-maps-text">View on Google Maps</h4>
        </span>
        <h1 className="name">{props.item.name}</h1>
        <h2 className="date">{props.item.date}</h2>
        <p className="desc">{props.item.desc}</p>
      </div>
    </div>
  );
}
