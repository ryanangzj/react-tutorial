// import swimmer from "../images/swimmer.png";
// import wedding from "../images/wedding-photography.png";
// import mountain_bike from "../images/mountain-bike.png";
// import star from "../../public/images/star_1.png";

export function Card(prop) {
  let badgeText;
  if (prop.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (prop.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={prop.coverImg} alt="" className="card-image"></img>
      <div className="card-stats">
        <img src={"images/star_1.png"} alt="" className="star-image"></img>
        <span> {prop.stats.rating} </span>
        <span className="card-review-count">({prop.stats.reviewCount}) • </span>
        <span className="card-location">{prop.location}</span>
      </div>
      <p className="card-title">{prop.title}</p>
      <p className="card-price">
        <span className="bold">From ${prop.price}</span> / person
      </p>
    </div>
  );
}
