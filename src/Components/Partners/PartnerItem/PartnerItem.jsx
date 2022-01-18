import './index.scss'
const PartnerItem = ({ img, title, subtitle }) => {
  return (
    <div className="item">
      <div className="item--photo">
        <img src={img} alt="Settings"></img>
      </div>
      <div className="item--info">
        <div className="item--info--title">{title}</div>
        <div className="item--info--subtitle">{subtitle}</div>
      </div>
    </div>
  )
}

export default PartnerItem
