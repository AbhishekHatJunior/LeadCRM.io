import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import LogoutImg from "../../assets/images/LogoutImg.png"
import LeadCrmLogo from "../../assets/images/LeadCrmLogo.png"
import { Link } from "react-router-dom";

const NavbarComponent = () => {

  const navItems = [
    {
      name: "Product"
    },
    {
      name: "Pricing"
    },
    {
      name: "Resources"
    },
    {
      name: "Company"
    },
  ]


  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="logo">
          <img src={LeadCrmLogo} className="leadCrmLogo" alt="" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="nav-collapse-container">
          <Nav className="nav-links">
            {navItems.map((item) => (
              <Nav.Link href="#"><span className="navItems">{item.name}</span> <IoIosArrowDown className={`navbar-arrow ${item.name === "Pricing" ? "d-none" : ""}`} /></Nav.Link>
            ))}
          </Nav>
          <div className="nav-buttons">
            <Link to={"https://dash.leadcrm.io/signup"} target="_blank">
              <Button className="free-account-btn">
                <span className="free-acount-txt">Get Your Free Account</span>
              </Button>
            </Link>
            <Link to={"https://dash.leadcrm.io/login"} target="_blank">
              <Button className="login-btn">
                <img src={LogoutImg} className="logoutImg me-1" alt="" /> <span className="login-txt">Login</span>
              </Button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
