import { Container } from 'react-bootstrap';
import ProductHunt from "../../assets/images/ProductHunt.png"
import ButtonComponent from '../../components/ButtonComponent';
import { FaArrowRightLong } from "react-icons/fa6";


const CTA = () => {

  const btnContent = (
    <div>Get Started Today <FaArrowRightLong className='ms-2' size={17} /></div>
  )

  return (
    <section className="cta-section">
      <Container>
        <div className="">
          <p className="cta-title font-exo2 fw-600">Join Thousands of Professionals Using LeadCRM</p>
        </div>

        <div className='mt-4'>
          <img src={ProductHunt} className='productHunt' alt="" />
        </div>

        <div className='d-flex justify-content-center mt-5'>
          <ButtonComponent text={btnContent} btnColor={"btnGreen"} link="https://dash.leadcrm.io/login" />
        </div>
      </Container>
    </section>
  );
};

export default CTA;
