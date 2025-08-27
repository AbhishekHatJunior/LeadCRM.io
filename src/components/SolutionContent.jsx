import { Row, Col } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SolutionContent = ({ title, badgeTxt, heading1, highlight1, heading2, highlight2, image1, image2, cardColor, link1, link2 }) => {
    return (
        <div className="solution-content">
            <p className="solution-subtext font-exo2 fw-400 d-flex flex-column flex-md-row">
                <div>{title}</div>
                <div className="tag ms-md-2">{badgeTxt}</div>
            </p>

            <Row>
                <Col lg={6} xs={12} className="sol-card-col">
                    <div className={`solution-box ${cardColor}`}>
                        <div className="d-flex flex-column gap-2">
                            <div className="sol-tackle-title font-exo2 fw-600">
                                {heading1}
                            </div>
                            <Link to={link1} target="_blank" className="linkTag">
                                <div className="highlight font-exo2 fw-600">{highlight1}<FaChevronRight className="chevron-right-icon" size={16} /></div>
                            </Link>
                        </div>
                        <img src={image1} alt="Solution Left" className="solution-image" />
                    </div>
                </Col>

                <Col lg={6} xs={12} className="sol-card-col">
                    <div className={`solution-box ${cardColor}`}>
                        <div className="d-flex flex-column gap-2">
                            <div className="sol-tackle-title font-exo2 fw-600">
                                {heading2}
                            </div>
                            <Link to={link2} target="_blank" className="linkTag">
                                <div className="highlight font-exo2 fw-600">{highlight2}<FaChevronRight className="chevron-right-icon" size={16} /></div>
                            </Link>
                        </div>
                        <img src={image2} alt="Solution Left" className="solution-image" />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default SolutionContent;
