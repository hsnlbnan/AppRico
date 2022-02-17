import React, { useState, useEffect } from "react";

function Card() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.jsonbin.io/b/620d9bd74bf50f4b2dff1d6e`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })

      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  return (
    <div className="showcaseContainer">
      {data?.map((item) => (
        <div className="showcase" key={item.id}>
          <div className="showcase-image">
            <img src={item.image} alt={item.name}></img>
          </div>
          <h4>{item.name}</h4>
        </div>
      ))}
    </div>
  );
}

export default Card;
