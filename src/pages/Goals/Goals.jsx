import './index.scss'
const GoalItem = ({ question, value }) => {
  return (
    <div className="definitions__container__items__item">
      <div className="definitions__container__items__item__question">{question} </div>
      <div className="definitions__container__items__item__value">{value}</div>
    </div>
  )
}
const Terms = () => {
  return (
    <div className="definitions">
      <div className="definitions__container">
        <div className="definitions__container__title"> My Ideas for SubQuery</div>
        <div className="definitions__container__items">
          {definitionData.map((questionItem, index) => (
            <GoalItem {...questionItem} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

const definitionData = [
  {
    question: 'Social Development',
    value:
      'I think SubQuery needs a TikTok account. It would help SubQuery become more popular in different countries and attract new creative people.',
  },
  {
    question: 'Merchandise',
    value:
      'This is a time when people take a lot of photos and selfies, and I think that the promotion of SubQuery through merch makes sense.It could be t-shirts, hoodies, mugs, stationery, car stickers ',
  },
  {
    question: 'Refferal System',
    value:
      'My idea is to make a prototype referral system, as practice shows, this is a very good solution for the scalability of projects .Now everyone has a phone and google accounts, you could make an easy authorization in the referral system for which would accrue bonuses (less commission, unique NFT)',
  },
  {
    question: 'Personal Development Cards for Ambassador and Spartans',
    value:
      'All people when they experience professional burnout .My idea is to create cards for spartans and ambassadors with skills and what they want to achieve or learn.',
  },
  {
    question: 'Rest',
    value:
      'I propose that SubQuery make branches in each country or city, so that participants could see each other, exchange impressions, spend time together. ',
  },
]
export default Terms
