import RoadmapItem from './RoadmapItem/RoadmapItem'
import './index.scss'
const Technologies = () => {
  const roadMapItems = [
    {
      title: 'Q1',
      text: 'Start using Testnet. Creating SQL  tokens by generation',
      background: 'radial-gradient(#1fe4f5, #398cb9)',
    },
    {
      title: 'Q2',
      text: 'Public Testnet start. SubQuery Network.Explorer Beta',
      background: 'radial-gradient(#fbc1cc, #fa99b2)',
    },
    {
      title: 'Q3',
      text: 'Run in a centralize  exchange.Mainnet launch',
      background: 'radial-gradient(#76b2fe, #b69efe)',
    },
    {
      title: 'Q4',
      text: 'SubQuery parachain action',
      background: 'radial-gradient(#60efbc, #58d5c9)',
    },
  ]
  return (
    <section className="roadmap">
      <div className="roadmap__container">
        <div className="roadmap__title">Roadmap 2022</div>
        <div className="roadmap__items">
          {roadMapItems.map((item) => (
            <RoadmapItem {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
