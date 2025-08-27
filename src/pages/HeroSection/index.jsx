import { Container, Row, Col } from "react-bootstrap";
import RocketImg from "../../assets/images/RocketImg.png"
import VectorFirst from "../../assets/images/VectorFirst.png"
import VectorSecond from "../../assets/images/VectorSecond.png"
import VectorThird from "../../assets/images/VectorThird.png"
import RatingsImage from "../../assets/images/RatingsImage.webp"
import ButtonComponent from "../../components/ButtonComponent";
import ChromeImg from "../../assets/images/ChromeImg.png"
import HeroLineImg from "../../assets/images/HeroLineImg.png"


const HeroSection = () => {

  const btnContent = (
    <div className="btn-content-container">
      <div className="btn-txtContent-container">
        <div className="content-available">Available in</div>
        <div className="content-chrome">Chrome Web Store</div>
      </div>
      <div className="content-chromeImg-container">
        <img src={ChromeImg} className="chromeImg" alt="" />
      </div>
    </div>
  )

  return (
    <section className="hero-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10} className="hero-main-col">
            <div className="hero-badge text-center">
              <span>
                <img src={RocketImg} alt="LeadCRM Icon" />
              </span>
              <span className="ms-1">Thousands of Professionals using LeadCRM</span>
            </div>
            <div className="hero-title">
              <div>LinkedIn CRM Integration</div>
              <div className="bg-">
                <span className="">Capture, Sync and Enrich</span> in{" "}
                <span className="highlight-blue with-line">
                  Both Ways
                  <img src={HeroLineImg} alt="highlight line" className="hero-line" />
                </span>
              </div>
            </div>

            <p className="sub-text">
              Automatically sync LinkedIn prospects to your CRM and overlay
              existing CRM contacts on LinkedIn profiles. Complete
              bi-directional integration with HubSpot, Salesforce, and Pipedrive.
            </p>

            {/* Works With Logos */}
            <div className="works-with">
              <div className="works-with-content">
                <div className="works-with-txt">Works with</div>

                <div className="work-elements-container">
                  <div className="work-elements element-first">
                    <img src={VectorFirst} className="vector-first" alt="Company Logo" />
                  </div>
                  <div className="work-elements element-second">
                    <img src={VectorSecond} className="vector-second" alt="Company Logo" />
                  </div>
                  <div className="work-elements element-third">
                    <img src={VectorThird} className="vector-third" alt="Company Logo" />
                  </div>
                </div>
              </div>
            </div>

            {/* Ratings */}
            <div className="ratings">
              <img src={RatingsImage} className="ratings-image" alt="Company Ratings" />
            </div>

            {/* Buttons */}
            <div className="hero-buttons">
              <ButtonComponent text={btnContent} btnColor={"btnDark"} link="https://chromewebstore.google.com/detail/leadcrm-ai-sales-companio/hpncohefniamkphainmdcghaljbiaiol" />
              <ButtonComponent text={"Get a Free Trial Now!"} btnColor={"btnGreen"} link="https://dash.leadcrm.io/signup" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
