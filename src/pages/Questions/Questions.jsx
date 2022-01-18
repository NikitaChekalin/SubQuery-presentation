import React from 'react'
import './Questions.scss'
const QuestionItem = ({ question, value }) => {
  return (
    <div className="questions__container__items__item">
      <div className="questions__container__items__item__question">{question} </div>
      <div className="questions__container__items__item__value">{value}</div>
    </div>
  )
}
const Questions = () => {
  return (
    <div className="questions">
      <div className="questions__container">
        <div className="questions__container__title">FAQ </div>
        <div className="questions__container__items">
          {faqData.map((questionItem, index) => (
            <QuestionItem {...questionItem} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

const faqData = [
  {
    question: 'What is a SubQuery?',
    value:
      'SubQuery is platform that allows developers to build complex and intuitive applications faster by making the world’s decentralised data more accessible.',
  },
  {
    question: 'What are the Benefits of SubQuery?',
    value:
      'Fast access , Fluttering structure of data execution and storage, Secure storage ,Dividing structures and reducing the possibility of theft and of course good team and community.',
  },

  {
    question: 'Does the SubQuery have parteners, can they be trusted?',
    value:
      'Of course you can, because partners such as (Binance, Bit.country, Moonbeam etc) are large projects with a large number of users.',
  },
  {
    question: 'Do SubQuery have their own products?',
    value:
      'Of course there is, you can try them on the official website SubQuery , here are their names - SubQuery SDK , SubQuery Projects , SubQuery Explorer , SubQuery Network.',
  },

  {
    question: 'Does SubQuery have training and start-up materials?',
    value:
      'Yes. SubQuery has a tutorial for beginners, which you can use now on the official site in the Get Started section.',
  },
  {
    question: 'I want to become a subquari partner what I need to do?',
    value:
      'You can become a Spartan or an Ambassador until the 23rd of this month if you complete tasks or help the community.',
  },
]
export default Questions
