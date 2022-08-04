import { GitHub } from '@mui/icons-material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='contact'>
      <h1 className="footerTitle">Contact Me</h1>
       <div className="footerTop">
          <div className="outerRing">
          <GitHub className='footerLogo' style={{color:"black"}} onClick={()=>{
          window.location.href = "https://github.com/Shakoor123";
        }}/>
          </div>
          <div className="outerRing">
          <LinkedInIcon className='footerLogo' style={{color:"#0A66C2"}} onClick={()=>{
          window.location.href = "https://www.linkedin.com/in/abdul-shakoor-17a798231?original_referer=http%3A%2F%2Fabdulshakoor.tech%2F";
        }}/>
          </div>
          <div className="outerRing">
          <MailOutlineIcon className='footerLogo' style={{color:"yellow"}} onClick={()=>{
          window.location.href = "mailto:shakoorchachu7@gmail.com";
        }}/>
          </div>
          <div className="outerRing">
          <InstagramIcon className='footerLogo' style={{color:"#C13584"}} onClick={()=>{
          window.location.href = "https://www.instagram.com/shakoor_cbk/";
        }}/>
          </div>
          <div className="outerRing">
          <FacebookIcon className='footerLogo' style={{color:"blue"}} onClick={()=>{
          window.location.href = "https://www.facebook.com/people/Abdul-Shakoor/100065145070584/";
        }}/>
          </div>
          <div className="outerRing">
          <CallSharpIcon className='footerLogo' style={{color:"blue"}} onClick={()=>{
          window.location.href = "tel:+919946530998";
        }}/>
          </div>
       </div>
       <div className="footerCenter"></div>
       <div className="footerBottom">
        <span className="footerText">I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, use the apps.</span>
       </div>
    </div>
  )
}

export default Footer