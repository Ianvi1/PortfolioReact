import Avatar from '../../img/20230602_175119.jpg'

import "../components/sidebar.sass"
import InformationContainer from './InformationContainer'
import SocialNetworks from './SocialNetworks'

const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Ian Vieira"/>
    <p className="title">Desenvolvedor</p>
    <SocialNetworks/>
    <InformationContainer/>
    <a href="" className="btn">
      Download curriculo
    </a>
  </aside>
}

export default Sidebar