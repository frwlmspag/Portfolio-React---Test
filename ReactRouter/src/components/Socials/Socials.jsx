import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Twitter from '../../assets/twitter.png'

const Socials = () => {
  return (
    <div className="socialICons">
        <a href="https://github.com/frwlmspag" target="_blank" rel="noopener noreferrer">
          <img src={Github}/>
        </a>
        <a href="https://www.instagram.com/frwlmspag/" target="_blank" rel="noopener noreferrer">
          <img src={Instagram}/>
        </a>
        <a href="https://twitter.com/frwlmspag" target="_blank" rel="noopener noreferrer">
          <img src={Twitter}/>
        </a>
    </div>
  )
}

export default Socials