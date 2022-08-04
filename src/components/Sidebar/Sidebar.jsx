import { GitHub } from '@mui/icons-material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="icons">
      <div className="line"></div>
      
        <GitHub className='github' onClick={()=>{
          window.location.href = "https://github.com/Shakoor123";
        }}/>
      
        <div className="line"></div>
        <LinkedInIcon className='linkedIn' onClick={()=>{
          window.location.href = "https://www.linkedin.com/in/abdul-shakoor-17a798231?original_referer=http%3A%2F%2Fabdulshakoor.tech%2F";
        }}/>
        <div className="line"></div>
        <InstagramIcon className='instagram' onClick={()=>{
          window.location.href = "https://www.instagram.com/shakoor_cbk/";
        }}/>
        <div className="line"></div>
        <TwitterIcon className='twitter' onClick={()=>{
          window.location.href = "https://www.facebook.com/people/Abdul-Shakoor/100065145070584/";
        }}/>
        <div className="line"></div>
      </div>
    </div>
  )
}

export default Sidebar