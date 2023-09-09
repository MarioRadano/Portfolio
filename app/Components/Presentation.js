import styles from '../CSS modules/presentation.module.css'
import Image from 'next/image'
import photo from './images/foto.jpg'

export default function Presentation() {



    return(<>
    <div className={styles.container} id="first">

    <div className={styles.textbox}>
        <h2>Welcome to </h2><h1>Mario Radano's Portfolio</h1>
    </div>
   
    <div className={styles.frame}>
        <Image 
        src={photo}
        alt="my photo"
        width={200}
        priority
        />
    </div>
    <div className={styles.badges}>
        <Image 
            src='/react-icon.svg'
            alt="react"
            width={50}
            height={50}
            />
            <Image 
            src='/html-icon.png'
            alt="html5"
            width={50}
            height={50}
            />
            <Image 
            src='/css-icon.png'
            alt="css"
            width={50}
            height={50}
            />
            <Image 
            src='/js-icon.png'
            alt="javascript"
            width={50}
            height={50}
            />
            <Image 
            src='/bootstrap-icon.png'
            alt="bootstrap"
            width={50}
            height={50}
            />
            <Image 
            src='/figma-icon.png'
            alt="figma"
            width={50}
            height={50}
            />
            </div>
    </div>
    </>)
}