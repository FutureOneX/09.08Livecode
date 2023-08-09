import { Link } from "react-router-dom";


const BeerItem = (props) => {
  return ( 
    <article>
      <img src={props.image} alt="Beer Image" />
      <div>
        <h2>{props.name}</h2>
        <h3>{props.tagline}</h3>
        <p>Created by: {props.name}</p>
        <Link to={`/detail/${props.id}`}>Detail</Link>
      </div>
    </article>
  );
}

export default BeerItem;