const BadgeComponent = ({ text, color }) => {
  return (
    <div className={`badge-component ${color}`}>
      <span className="badge-txt">{text}</span>
    </div>
  );
};

export default BadgeComponent;
