import { Container, Row, Col } from "react-bootstrap";
import BadgeComponent from "../../components/BadgeComponent";
import RedCardImg from "../../assets/images/RedCardImg.png"
import GreenCardImg from "../../assets/images/GreenCardImg.png"
import CrossImg from "../../assets/images/CrossImg.png"
import LeadCrmIcon from "../../assets/images/LeadCrmIcon.png"
import BidirectImg from "../../assets/images/BidirectImg.png"
import ContactImg from "../../assets/images/ContactImg.png"
import AiImg from "../../assets/images/AiImg.png"
import OverlayImg from "../../assets/images/OverlayImg.png"
import ButtonComponent from "../../components/ButtonComponent"
import SaveHoursImage from "../../assets/images/SaveHoursImage.png"
import CursorIcon from "../../assets/images/CursorIcon.png"
import CustomFieldIcon from "../../assets/images/CustomFieldIcon.png"
import WaterfallIcon from "../../assets/images/WaterfallIcon.png"
import DealIcon from "../../assets/images/DealIcon.webp"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const leftChallenges = [
  {
    text: "Manual Data Entry",
    badge: { text: "3+ Hours wasted daily" },
    desc: "Copying LinkedIn contacts to CRM manually plus losing conversation history"
  },
  {
    text: "Incomplete Data",
    badge: { text: "60% Data Incomplete" },
    desc: "LinkedIn profiles missing Email and Phones from 700M+ Database"
  },
  {
    text: "No CRM Visibility",
    badge: { text: "Zero contact available" },
    desc: "Can’t see existing CRM contacts when browsing LinkedIn profiles"

  },
  {
    text: "Limited Productivity",
    badge: { text: "No smart assistance" },
    desc: "Writing messages manually plus no AI assistant for reply, Invite or comments"
  }
];

const rightChallenges = [
  {
    text: "Complete Bi-Directional Sync",
    desc: "Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.",
    image: BidirectImg
  },
  {
    text: "700M+ Contacts + Enrichment",
    desc: "Get verified emails and phone numbers from a vast global database.",
    image: ContactImg
  },
  {
    text: "CRM Overlay on LinkedIn",
    desc: "See full CRM insights directly on LinkedIn profiles without switching tabs.",
    image: OverlayImg
  },
  {
    text: "AI Response + Templates + Bulk Exports",
    desc: "Save time with AI-crafted replies, pre-built templates, and one-click data exports.",
    image: AiImg
  }
];

const CarouselItems = [
  {
    id: 1,
    icon: ContactImg,
    description: <div className="carousel-item-desc">Access to <span className="fw-600">700M+ Contacts</span></div>
  },
  {
    id: 2,
    icon: CursorIcon,
    description: <div className="carousel-item-desc"><span className="fw-600">One click push</span> to CRM</div>
  },
  {
    id: 3,
    icon: CustomFieldIcon,
    description: <div className="carousel-item-desc"><span className="fw-600">Custom Field</span> Mapping</div>
  },
  {
    id: 4,
    icon: WaterfallIcon,
    description: <div className="carousel-item-desc">Advanced <span className="fw-600">Waterfall Enrichment</span></div>
  },
  {
    id: 5,
    icon: DealIcon,
    description: <div className="carousel-item-desc">Seamless <span className="fw-600">Deal Management</span></div>
  },
  {
    id: 6,
    icon: AiImg,
    description: <div className="carousel-item-desc">Advanced <span className="fw-600">AI Productivity</span></div>
  },
  {
    id: 7,
    icon: BidirectImg,
    description: <div className="carousel-item-desc"><span className="fw-600">Bulk Export</span> & Enrich</div>
  },
]


const ChallengesSection = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };

  return (
    <section className="challenges-section">
      <Container className="p-0 carousel-container">
        <div>
          <Slider {...settings}>
            {CarouselItems.map((item, index) => (
              <div key={item.id} className="carousel-item-div">
                <div><img src={item.icon} className="carousel-item-img" alt={item.description} /></div>
                <div className="d-flex align-items-center">{item.description}</div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>


      <Container className="text-center">
        <p className="challenges-heading">Every LinkedIn Prospector faces these daily challenges</p>
      </Container>

      <Container className="challenges-cards">
        <Row className="align-items-stretch justify-content-center challenges-row">
          {/* Left Card */}
          <Col lg={5} className="challenges-card red-card">
            <div className="challenges-img-container">
              <img src={RedCardImg} className="cardImg" alt="" />
            </div>

            <div className="challenges-content-container">
              <p className="challenges-card-title card-title-red">Without LeadCRM</p>
              <div className="gap-3 d-flex flex-column">
                {leftChallenges.map((item, index) => (
                  <div key={index} className="d-flex gap-4">
                    <div className="challenges-icon-div"><img src={CrossImg} className="crossImg" alt="" /></div>
                    <div className="d-flex flex-column gap-1">
                      <div><span className="challenges-li-title">{item.text}</span> <BadgeComponent text={item.badge.text} color={"red"} /></div>
                      <div className="challenges-li-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          {/* VS Divider */}
          <Col lg={1} className="vs-divider d-none d-lg-flex justify-content-center align-items-center">
            <div className="vs-line"></div>
            <span className="vs-text">vs</span>
            <div className="vs-line"></div>
          </Col>

          {/* Right Card */}
          <Col lg={5} className="challenges-card green-card">
            <div className="challenges-img-container">
              <img src={GreenCardImg} className="cardImg" alt="" />
            </div>
            <div className="challenges-content-container">
              <div className="title-container-green">
                <p className="challenges-card-title card-title-green">With LeadCRM</p>
                <img src={LeadCrmIcon} className="leadCrmIcon" alt="LeadCrm Icon" />
                <div>
                  <BadgeComponent text={"4+ Hours/day Saved"} color={"green"} />
                </div>
              </div>
              <div className="gap-3 d-flex flex-column">
                {rightChallenges.map((item, index) => (
                  <div key={index} className="d-flex gap-4">
                    <div className="challenges-icon-div"><img src={item.image} className="greenCardImg" alt="" /></div>
                    <div className="d-flex flex-column gap-1">
                      <div><span className="challenges-li-title">{item.text}</span></div>
                      <div className="challenges-li-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        {/* Bottom Button & Note */}
        <Row className="justify-content-center challenges-btn-row">
          <Col md="auto" className="challenged-btn-container">
            <div className="text-center">
              <ButtonComponent text={"Start Using LeadCRM Now"} btnColor={"btnGreen"} link="https://dash.leadcrm.io/signup" />
            </div>
            <span className="d-none d-xl-block"><img src={SaveHoursImage} className="saveHoursImage" alt="Img" /></span>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChallengesSection;
