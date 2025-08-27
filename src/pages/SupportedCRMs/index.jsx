import SupportImg from "../../assets/images/SupportImg.png"
import SuppFlowImg from "../../assets/images/SuppFlowImg.png"
import ButtonComponent from '../../components/ButtonComponent';
import Collaboration from "../../assets/images/Collaboration.png"


const SupportedCRMs = () => {


  return (
    <section className="supported-crms">
      <div className='img-title-container'>
        <div>
          <div className='suppImg-container'><img src={SupportImg} alt="" /></div>
          <div className='supp-title-container'><span className='supp-title font-exo2 fw-600'>Our Supported LeadCRM</span></div>
        </div>
        <div className='supp-desc font-exo2 fw-400'><span>LeadCRM provides Native Integrations with popular CRM tools to make the most out of your LinkedIn prospecting.
          We don’t want you to miss any revenue opportunity on the internet!</span></div>

      </div>

      <div className='suppFlowImg-container'><img src={SuppFlowImg} className='suppFlowImg' alt="" /></div>

      <div className='supp-btn-container'>
        <ButtonComponent text={"Lets Integrate your CRM Now!"} btnColor={"btnGreen"} link="https://dash.leadcrm.io/signup?utm=homepage" />
      </div>

      <img src={Collaboration} className="d-none d-sm-block collaboration" alt="" />
    </section>
  );
};

export default SupportedCRMs;