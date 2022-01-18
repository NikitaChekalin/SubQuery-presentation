import './index.scss'

const RoadmapItem = ({ background, url, title, text }) => {
  return (

    <a href={url} className="card">
      <div className="card__inner" style={{ background: background }}>
        <div className="card__inner__container">
          <div className="card__inner__container__title">{title}</div>
          <div className="card__inner__container__subtitle">{text}</div>
        </div>
      </div>
    </a>
  )
}

export default RoadmapItem
