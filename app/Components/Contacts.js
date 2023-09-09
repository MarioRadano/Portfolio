import styles from '../CSS modules/contacts.module.css'
import Image from 'next/image'

export default function Contacts() {


    return (<>
    <div className={styles.section}>
        <h2>Contact me!</h2>
        <h3>E-mail:radanomario@hotmail.it</h3>
        <div className={styles.images}>
            <a href='https://github.com/MarioRadano'>
                <Image
                src='/github.png'
                width={60}
                height={60}
                alt='Github'
                />
            </a>
            <a href='https://www.linkedin.com/in/mario-radano-9b0841159/'>
                <Image
                src='/linkedin.png'
                width={60}
                height={60}
                alt='LinkedIn'
                />
            </a>
            <a href='https://drive.google.com/drive/folders/1Yuu4216gGWVrQdSfIDSfOOgCuVM4DLui?usp=drive_link'>
                <Image
                src='/drive.png'
                width={60}
                height={60}
                alt='Google Drive'
                />
            </a>
        </div>
    </div>
    
    
    </>)
}