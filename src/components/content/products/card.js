import React, { useState, useEffect } from "react";

function Card() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.jsonbin.io/b/620d9bd74bf50f4b2dff1d6e/3`, {
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
    <>
      {data?.flatMap((item) => (
        <div className="showcase" key={item.id}>
          <div className="showcase-image">
            <img src={item.image} alt={item.name}></img>
          </div>
          <div className="showcase-info">
            <div className="showcase-info__tile">
              <h4>{item.name}</h4>
            </div>
            <div className="showcas-info__first-section">
              <div className="showcase-info_first-section-modal">
                <span>
                  <h5>{item.model}</h5>
                </span>
                <span className="circle">●</span>
                <span>
                  <h5>{item.km} KM</h5>
                </span>
              </div>
              <div className="showcase-info_first-section-price">
                <h3>AED {item.price}</h3>
              </div>
            </div>
            <div className="showcas-info__second-section">
              <p>{item.date}</p>
              <p>{item.location}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
