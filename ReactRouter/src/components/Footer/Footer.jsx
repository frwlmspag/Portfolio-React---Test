import './footer.css'
import Socials from '../Socials/Socials'
import kofi from '../../assets/kofi.png'

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__contents">
        <div className="ko-fi">
          <a href="https://ko-fi.com/imcodecounter" target="_blank" rel="noopener noreferrer">
            <img src={kofi}/>
          </a>
        </div>
        <div className='footer__socials'>
              <Socials/>
        </div>
      </div>
    </div>
  )
}

export default Footer