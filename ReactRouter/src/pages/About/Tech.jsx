import Html from '../../assets/tech/html.svg'
import Css from '../../assets/tech/css.svg'
import Js from '../../assets/tech/javascript.svg'
import Rjs from '../../assets/tech/reactjs.svg'
import Tcss from '../../assets/tech/tcss.svg'
import Gh1 from '../../assets/tech/github1.svg'

const Tech = () => {
  return (
    <div className="techStack__Con">
        <img src= { Html } className='tech__Html'/>
        <img src= { Css } className='tech__Css'/>
        <img src= { Js } className='tech__Js'/>
        <img src= { Rjs } className='tech__Rjs'/>
        <img src= { Tcss } className='tech__Tcss'/>
        <img src= { Gh1 } className='tech__Gh1'/>
    </div>
  )
}

export default Tech