import { useEffect, useState } from "react";
import FloatFooterUsers from "../assets/images/FloatFooterUsers.png"
import CreditCard from "../assets/images/CreditCard.svg"
import ClockIcon from "../assets/images/ClockIcon.svg"
import { Link } from "react-router-dom";


const FloatingFooter = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.body.scrollHeight;

            const topThreshold = 400; // Set top height visibility
            const bottomThreshold = 300; // Set bottom height visibility

            if (
                scrollTop > topThreshold &&
                scrollTop + windowHeight < docHeight - bottomThreshold
            ) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`floating-footer d-none d-lg-block ${visible ? "show" : "hide"}`}>
            <div className="floating-footer-content">
                <div className="footer-left w-100">
                    <img src={FloatFooterUsers} alt="Users" className="users-img" />
                    <div className="font-poppins fw-600 float-title">
                        Join with our Thousands of professionals Now!
                    </div>
                    <Link to={"https://dash.leadcrm.io/signup"} target="_blank">
                        <button className="trial-btn"><span className="trial-btn-txt font-exo2 fw-600">Get a Free Trial Now!</span></button>
                    </Link>
                </div>


                <div className="footer-right">
                    <div className="footer-item">
                        <img src={CreditCard} className="creditCard" alt="Card" />
                        <div className="font-poppins fw-600 float-sub-txt">No Credit Card <span className="fw-400">Required</span></div>
                    </div>
                    <div className="footer-item">
                        <img src={ClockIcon} className="clockIcon" alt="Free Trial" />
                        <div className="font-poppins fw-600 float-sub-txt">14 Days Free <span className="fw-400">Trial</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FloatingFooter;
