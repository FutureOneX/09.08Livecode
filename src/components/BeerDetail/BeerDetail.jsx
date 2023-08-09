import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BeerDetail = () => {
  const [allBeerDetail, setAllBeerDetail] = useState([])

  const params = useParams()

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
    .then(res => res.json())
    .then(data => setAllBeerDetail(data))
  }, [])

  const filteredBeer = allBeerDetail.filter((beer) => {
    return beer._id === params.id
  })


  return ( 
    <section>
      {filteredBeer.map((beer) =>
      <div key={beer._id}>
      <img src={beer.image_url} alt="Beer Image" />
      <h2>{beer.name}</h2>
      <h3>{beer.tagline}</h3>
      <p>First brewed: {beer.first_brewed}</p>
      <p>Attenuation level: {beer.attenuation_level}</p>
      <p>{beer.description}</p>
      </div>
      )}
    </section>
  );
}

export default BeerDetail;