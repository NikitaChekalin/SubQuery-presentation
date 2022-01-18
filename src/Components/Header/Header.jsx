import './index.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <Link to="/">
            <div className="nav__logo--triangle"></div>
          </Link>
          <Link className="nav__logo--title" to="/">
            <div>SubQuery Presentation </div>
          </Link>
        </div>
        <div className="nav__items">
          <Link to="/" className="nav__item">
            About
          </Link>
          <Link to="/definitions" className="nav__item">
            My Ideas
          </Link>
          <Link to="/questions" className="nav__item">
            FAQ SubQuery
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
