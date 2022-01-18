import './About.scss'
import arrowUp from '../../assets/imgs/arrowUp.png'
import spartan from '../../assets/imgs/spartan.png'
import Roadmap from '../../Components/Roadmap/Roadmap'
import Partners from '../../Components/Partners/Partners'

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__left">
          <button className="about__left--button">
            <a className="about__left--button--link" href="https://subquery.network/">
              <span className="about__left--button--link--title">SubQuery</span> start making future together
            </a>
            <img className="about__left--button--img" src={arrowUp} alt="ArrowUp"></img>
          </button>
          <div className="about__left--info">
            <div className="about__left--info--title">Making the world’s decentralised data more accessible</div>
            <div className="about__left--info--subtitle">Start revolution crypto with SubQuery</div>
            <div className="about__left--info--text">
              SubQuery mission is to help teams create products that allow us to move to a decentralised future
            </div>
          </div>
        </div>
        <div className="about__right">
          <img className="about__right--photo" src={spartan} alt="TraidingView"></img>
        </div>
      </div>
      <Roadmap />
      <Partners />
    </section>
  )
}

export default About
