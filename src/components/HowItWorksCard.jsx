const HowItWorksCard = ({ step, title, description, image }) => {
  return (
    <div className="howitworks-card">
      <div className="howitworks-step bg-">{step}</div>
      <div className="howitworks-title">{title}</div>
      <p className="howitworks-description mt-2">{description}</p>
      {/* <img src={image} className="howitworks-image" alt="" /> */}
      {image && <div className="howitworks-image">{image}</div>}
    </div>
  );
};

export default HowItWorksCard;
