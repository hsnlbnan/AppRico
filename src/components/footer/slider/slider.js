import Carousel from "react-elastic-carousel";
import Card from "../../content/products/card";
import data from "../../../data.json";
function slider() {
  return (
    <Carousel itemsToShow={5} key={data.id}>
      {data?.map((data) => (
        <img
          className="testimonialImages d-block w-50"
          src={data.image}
          alt={data.name}
        />
      ))}
    </Carousel>
  );
}

export default slider;
