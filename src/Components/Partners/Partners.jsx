import PartnerItem from './PartnerItem/PartnerItem'
import binanceLogo from '../../assets/imgs/services/binance.png'
import bitcountryLogo from '../../assets/imgs/services/bitcountry.png'
import moonbeamLogo from '../../assets/imgs/services/moonbeam.png'
import cardanoLogo from '../../assets/imgs/services/cardano.png'

import './index.scss'
const Partners = () => {
  const partners = [
    {
      img: binanceLogo,
      title: 'Binance',
      subtitle: 'Operate the worlds biggest bitcoin exchange and altcoin',
    },
    {
      img: bitcountryLogo,
      title: ' Bit.Country',
      subtitle: 'Network with an open protocol for managing & incentivizing communities using gamification',
    },
    {
      img: moonbeamLogo,
      title: 'MoonBeam',
      subtitle:
        'New Polkadot smart contract platform that makes it easy to build natively interoperable blockchain applications',
    },
    {
      img: cardanoLogo,
      title: 'Cardano',
      subtitle:
        'Cardano is a blockchain platform that aims to be a decentralized application (DApp) development platform with a multi-asset ledger',
    },

  ]
  return (
    <div className="partners">
      <div className="partners__container">
        <div className="partners__title">Partners</div>
        <div className="partners__items">
          {partners.map((item, index) => (
            <PartnerItem key={item.subtitle + index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Partners
