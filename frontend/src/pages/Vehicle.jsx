import "./Vehicle.css";

const Vehicle = () => {
  return (
    <div className="container-vehicle">
      <div className="container-left">
        <div className="container-left-picture">
          <div className="picture-vehicle" />
        </div>
        <div className="container-left-title">
          <span className="title-vehicle">Voiture de ouf</span>
        </div>
      </div>
      <div className="container-rigth">
        <div className="info-vehicle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          distinctio a et, accusamus, repudiandae atque, maiores id illo dolorum
          magnam aliquam iste quibusdam laudantium tempora fuga praesentium
          voluptate sint autem.
        </div>
        <div className="buy-button">
          <button type="button">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
