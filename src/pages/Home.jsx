import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [randomBeer, setRandomBeer] = useState([])
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
    .then(res => res.json())
    .then(data => {
      setRandomBeer(data)
    })
  }, [])

  return ( 
    <section>
      <article>
        <div>
          <Link to="/all"> All Beers</Link>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nobis aliquam possimus.</p>
        </div>
        <div>
          <Link to={`/detail/${randomBeer._id}`}>Random Beer</Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sequi commodi natus!</p>
        </div>
      </article>
    </section>
   );
}
 
export default Home;
