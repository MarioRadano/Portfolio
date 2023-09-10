import styles from '../CSS modules/infos.module.css'
import Journey from './Journey'


export default function Infos() {

    const bachelor = {
        title: `Bachelor's Degree`,
        sub: `in Psychological Sciences and Techniques`,
        year: `Years: 2017-2021`,
        image: '/bachelor.png'
    }

    const internship = {
        title: `Internship`,
        sub: `at Accomazzi dot net, as Digital Marketing Specialist and Web Designer.`,
        year: `Year: 2023`,
        image: '/accomazzi.png'
    }

    const masters = {
        title: `Master's Degree`,
        sub: `in  Communication Theory and Technology, cross-departmental course between psychology and computer science.`,
        year: `Years: 2021-2024`,
        image:'/masters.png'
    }

    const barman = {
        title: `Barman and Waiter`,
        sub:  'in multiple evening venues and pubs, between Milan and Turin.',
        year: '2018-2021',
        image: '/barman.png',
    }

    return (<>

    <div className={styles.section}>

        <div className={styles.title}>
            <h1>My journey</h1>
        </div>
        <Journey experience={masters}/>
        <Journey experience={internship}/>
        <Journey experience={bachelor}/>
        <Journey experience={barman} />
    </div>
    
    
    </>)
}