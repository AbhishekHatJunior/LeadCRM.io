import { Container, Row, Col } from "react-bootstrap";
import HowItWorksCard from "../../components/HowItWorksCard";
import ButtonComponent from "../../components/ButtonComponent";

import CardImg1 from "../../assets/images/CardImg1.png";
import CardImg2 from "../../assets/images/CardImg2.png";
import CardImg3 from "../../assets/images/CardImg3.png";
import CardImg4 from "../../assets/images/CardImg4.png";
import CardArrows from "../../assets/images/CardArrows.png"
import Ball from "../../assets/images/Ball.png"


const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Install the Extension",
      description:
        "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
      image: <img src={CardImg1} alt="Step 1" />,
    },
    {
      step: "2",
      title: "Browse LinkedIn",
      description:
        "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
      image: <img src={CardImg2} alt="Step 2" />,
    },
    {
      step: "3",
      title: "Get Enriched Data",
      description:
        "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.",
      image: <img src={CardImg3} alt="Step 3" />,
    },
    {
      step: "4",
      title: "Sync to CRM Instantly",
      description:
        "Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow ups.",
      image: <img src={CardImg4} alt="Step 4" />,
    },
  ];

  return (
    <section className="howitworks-section">
      <Container>
        <Row>
          <Col xs={12} className="hit-title-col">
            <p className="howitworks-heading">How it Works</p>
            <p className="howitworks-subheading">
              From setup to success in <span>4 simple steps</span>
            </p>
          </Col>
        </Row>

        <Row className="howitworks-row">
          <img src={CardArrows} className="cardArrows" alt="" />
          {steps.map((item, index) => (
            <Col key={index} xs={12} sm={6} lg={3} className="howitworks-col">
              <HowItWorksCard
                step={item.step}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <ButtonComponent text="Try LeadCRM Now →" btnColor={"btnGreen"} link="https://dash.leadcrm.io/login" />
          </Col>
        </Row>
      </Container>

      <img src={Ball} alt="circle" className="circle-img d-none d-xl-block" />
    </section>
  );
};

export default HowItWorks;
