import { GitHub } from '@mui/icons-material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="icons">
      <div className="line"></div>
        <GitHub className='github'/>
        <div className="line"></div>
        <LinkedInIcon className='linkedIn'/>
        <div className="line"></div>
        <InstagramIcon className='instagram'/>
        <div className="line"></div>
        <TwitterIcon className='twitter'/>
        <div className="line"></div>
      </div>
    </div>
  )
}

export default Sidebar