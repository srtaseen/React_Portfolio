import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import { useState, useEffect } from 'react'
import {
  mernPortfolio,
  ecommercePortfolio,
  reactPortfolio,
  htmlPortfolio,
} from '../../data'

export default function Portfolio() {
  const [selected, setSelected] = useState('mern')
  const [data, setData] = useState([])
  const list = [
    {
      id: 'mern',
      title: 'MERN Web APP',
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Web App',
    },
    {
      id: 'react',
      title: 'React App',
    },
    {
      id: 'html',
      title: 'HTML Website',
    },
  ]

  useEffect(() => {
    switch (selected) {
      case 'mern':
        setData(mernPortfolio)
        break
      case 'ecommerce':
        setData(ecommercePortfolio)
        break
      case 'react':
        setData(reactPortfolio)
        break
      case 'html':
        setData(htmlPortfolio)
        break
      default:
        setData(mernPortfolio)
    }
  }, [selected])

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className='container'>
        {data.map((d) => (
          <div className='item' key={d.id}>
            <img src={d.img} alt={d.title} />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
