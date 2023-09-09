'use client'
import styles from '../CSS modules/infos.module.css'
import Image from 'next/image'
import {useEffect} from 'react'


export default function Journey({experience}) {

const handleMouse = (e) => {
    const card = e.target.closest(`.${styles.container}`)
    if (card) {
        const x = -((45 * (e.clientY - window.innerHeight / 2)) / window.innerHeight / 2)
      const y = (45 * (e.clientX - window.innerWidth / 2)) / window.innerWidth / 2

      card.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`
      card.style.webkitTransform = `rotateX(${x}deg) rotateY(${y}deg)`
    }
}
const handleDeviceOrientation = (event) => {
    const cardMobile = document.querySelectorAll(`.${styles.container}`)
    
    cardMobile.forEach((cardMobile) => {
      const x = -((45 * (event.beta - 90)) / 180)
      const y = (45 * event.gamma) / 90

      cardMobile.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`
      cardMobile.style.webkitTransform = `rotateX(${x}deg) rotateY(${y}deg)`
    })

  }

  useEffect(() => {
    window.addEventListener('deviceorientation', handleDeviceOrientation)
    }, [])

        
 
    return(<>
    
    <div className={styles.container} onMouseMove={handleMouse}>
        <div className={styles.textbox}>
            <h2>{experience.title}</h2>
            <h3>{experience.sub}</h3>
            <p>{experience.year}</p>
        </div>
        <Image
        src={experience.image}
        width={150}
        height={0}
        style={{height: 'auto'}}
        alt={experience.title}
        />
    </div>
    
    
    </>)
}