import styles from '../CSS modules/project.module.css'
import Project from './Project'


export default function ProjectsSection() {

    const eCommerce = {
        name:"E-commerce",
        description:"One-page e-commerce built with React (Next.js 13). Products are retrieved from an external API, and it is fully responsive.",
        image:"/e-commerce.svg", 
        imageBg:'/e-commerce-bg.png' ,
        link:'https://fake-e-commerce.vercel.app/'
    }
    const goodrive = {
        name:"Goodrive",
        description:"Responsive website built with HTML, CSS (Bootstrap), and JavaScript that sponsors new technologies for safe driving.",
        image:'/goodrive.png',
        imageBg:'/goodrive-bg.png',
        link: 'https://goodrive.vercel.app/'
    }
    const miRifiuto = {
        name:'MiRifiuto',
        description: 'UX Design process of an app to promote proper recycling (user personas, interviews, usability testing, wireframing, and cognitive walkthroughs).',
        image: '/mi-rifiuto.png',
        imageBg: '/mi-rifiuto-bg.png',
        link: 'https://drive.google.com/drive/folders/1qPRR3Mgg390AeKmOEa0NYLjvy_4Jax3t?usp=sharing'
    }

    return(<>
    <div className={styles.section} id="second">
        <div className={styles.title}>
            <h1>Projects</h1>
            <h3>(hover for details)</h3>
        </div>
        <div className={styles.projects}>
            <Project project={eCommerce}/>
            <Project project={goodrive}/>
            <Project project={miRifiuto}/>
        </div>
    </div>
    
    </>)
}