import { Container, Row, Col, Button } from "react-bootstrap";
import LeadCrmLogo from "../assets/images/LeadCrmLogo.png"
import ChromeImg from "../assets/images/chromeImg.png"
import FacebookIcon from "../assets/images/FacebookIcon.png"
import InstagramIcon from "../assets/images/InstagramIcon.png"
import XIcon from "../assets/images/XIcon.png"
import LinkedinIcon from "../assets/images/LinkedinIcon.png"
import { Link } from "react-router-dom";


const footerData = {
  socials: [
    { name: "Facebook", link: "https://www.facebook.com/leadcrm.io/", icon: FacebookIcon },
    { name: "Twitter", link: "https://x.com/LeadCRM_io", icon: XIcon },
    { name: "LinkedIn", link: "https://www.linkedin.com/company/leadcrm-io/", icon: LinkedinIcon },
    { name: "Instagram", link: "https://www.instagram.com/leadcrmio/", icon: InstagramIcon },
  ],
  columns: [
    {
      title: "Integrations",
      items: [
        "HubSpot",
        "Salesforce",
        "Pipedrive",
        { text: "Close.io", badge: "Coming Soon" },
        { text: "Insightly", badge: "Coming Soon" },
      ],
    },
    {
      title: "Alternative",
      items: ["Surfe VS LeadCRM", "Linkmatch Alternative"],
    },
    {
      title: "Legal",
      items: ["Privacy Policy", "Terms of Use"],
    },
  ],
  contact: [
    { text: "support@leadcrm.io" },
    { text: "+1 231-538-7466" },
    { text: "Help Center" },
  ],
};

const Footer = () => {

  const btnContent = (
    <div className="btn-footer-container">
      <div className="btn-txtContent-container">
        <div className="footer-content-available">Available in</div>
        <div className="content-chrome">Chrome</div>
      </div>
      <div className="content-chromeImg-container">
        <img src={ChromeImg} className="chromeImg" alt="" />
      </div>
    </div>
  )

  return (
    <footer className="footer">
      <Container>
        <Row className="footer-top">
          <Col lg={3} xs={12} className="footer-col d-flex d-lg-block flex-column align-items-center">
            <div className="footer-logo">
              <img src={LeadCrmLogo} className="leadCrmLogo" alt="LeadCRM" />
            </div>
            <p className="footer-desc font-poppins fw-400">
              LeadCRM is LinkedIn integration tool for your CRM.
            </p>
            <div className="footer-socials">
              {footerData.socials.map((social, idx) => (
                <a key={idx} href={social.link} target="_blank" aria-label={social.name}>
                  <img src={social.icon} alt={social.name} />
                </a>
              ))}
            </div>
          </Col>

          {/* Map over Columns */}
          {footerData.columns.map((col, colIdx) => (
            <Col
              key={colIdx}
              lg={2}
              md={6}
              xs={6}
              className="footer-col pt-4 pt-lg-0"
            >
              <div className="font-poppins mb-4 footer-col-title">{col.title}</div>
              <ul className="font-poppins fw-400">
                {col.items.map((item, idx) =>
                  typeof item === "string" ? (
                    <li key={idx}>{item}</li>
                  ) : (
                    <li key={idx}>
                      {item.text}{" "}
                      <span className="badge font-poppins">{item.badge}</span>
                    </li>
                  )
                )}
              </ul>
            </Col>
          ))}

          {/* Contact Us */}
          <Col lg={3} md={6} xs={12} className="footer-col pt-4 pt-lg-0">
            <div className="font-poppins footer-col-title">Contact Us</div>
            <ul className="font-poppins fw-400">
              {footerData.contact.map((c, index) => (
                <li key={index}>{c.text}</li>
              ))}
            </ul>
            <div>
              <Link to={"https://www.leadcrm.io/linkedin-chrome-extension/"} target="_blank">
                <Button className="footer-btn mt-3">
                  {btnContent}
                </Button>
              </Link>
            </div>
          </Col>
        </Row>

        {/* Bottom */}
        <Row className="footer-bottom">
          <Col xs={12}>
            <p className="footer-disclaimer font-poppins fw-400">
              Disclaimer: LeadCRM is not endorsed or certified by LinkedIn. All
              LinkedIn(tm) logos and trademarks displayed on this tool are
              property of LinkedIn. LeadCRM is distributed AS IS. Your use of
              LeadCRM is at your own risk.
            </p>
            <div className="footer-separator"></div>
            <p className="footer-copy font-poppins fw-400">
              Copyright © 2025 LeadCRM. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
