import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ButtonComponent = ({ text, btnColor, onClick, link }) => {
  return (
    <Link to={link} target="_blank">
      <Button className={`custom-btn ${btnColor}`} onClick={onClick}>
        <span className="btn-txt">{text}</span>
      </Button>
    </Link>
  );
};

export default ButtonComponent;
