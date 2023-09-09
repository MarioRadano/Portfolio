'use client'
import {useState} from 'react'
import styles from '../CSS modules/project.module.css'
import Image from 'next/image'

export default function Project({project}){
    const [details, setDetails] = useState(null)
    const containerStyle = {
        backgroundImage: `url(${project?.imageBg})`,
        backgroundSize: '101% 100.5%',
        backgroundPosition: 'center',
        
    };
    

    return(<>
    
   {project && <div className={`${styles.container} ${details ? styles.visible : ''}`} style={containerStyle} onClick={() => details ? setDetails(null) : setDetails(true)}>
     <Image 
    src={project.image}
    width={200}
    height={200}
    alt='icon'/>
    <h2>{project.name}</h2>
    <p>{project.description}</p>
    <a href={project.link}><button><h3>TAKE A LOOK</h3></button></a>
    </div> 
}
    </>)
}