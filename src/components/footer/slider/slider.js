import Carousel from "react-elastic-carousel";
import data from "../../../data.json";

export const breakpoint = [
  { width: 550, itemsToShow: 1.7 },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 4.8 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
];

function slider() {
  return (
    <div className="slider_Footer">
      <h5>What Looking For</h5>
      <h6>Show All ({data.length})</h6>
      <Carousel
        breakPoints={breakpoint}
        pagination={false}
        itemPadding={[10, 10]}
        key={data.id}
      >
        {data?.map((data) => (
          <div className="carousel-item">
            <img className="" src={data.image} alt={data.name} />
            <div className="carousel-item_info">
              <div>
                <p>For {data.status}</p>
                <h4>{data.name}</h4>
              </div>
              <h3>$ {data.price}</h3>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default slider;
