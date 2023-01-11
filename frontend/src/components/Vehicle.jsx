import "./Vehicle.css";

const Vehicle = (title, logo, name) => {
  return (
    <div className="icon">
      <img src={logo} alt={title || name} />
      <h3>{title || name}</h3>
    </div>
  );
};

export default Vehicle;
