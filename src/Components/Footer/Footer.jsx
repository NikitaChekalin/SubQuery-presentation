import './Footer.scss'
import { ReactComponent as SubqueryLogo } from '../../assets/imgs/subquery-logo.svg'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <div className="footer__rights">All Rights Reserved</div>
          <div className="footer__privacy">Copyright © 17.01.2022 Nikita Chekalin </div>
        </div>
        <a href="https://subquery.network/" className="footer__link">
          <SubqueryLogo />
        </a>
      </div>
    </footer>
  )
}

export default Footer
