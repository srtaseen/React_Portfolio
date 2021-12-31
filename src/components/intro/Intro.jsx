import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {
  const textRef = useRef()
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Full Stack Web', 'MERN Ecommerce', 'React Website'],
    })
  }, [])
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/man.png' alt='man' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi there, I'm</h2>
          <h1>Md. Showkat Alamgir</h1>
          <h3>
            Developer <span ref={textRef}></span>
          </h3>
        </div>
        <a href='#portfolio'>
          <img src='assets/down.png' alt='down' />
        </a>
      </div>
    </div>
  )
}
