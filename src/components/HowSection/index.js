import React, {useState, useEffect} from 'react'

//components
import Card from './Card';

//styles
import styles from './HowSection.module.css';

export default function HowSection() {
    const [howTos, setHowTos] = useState([])

    const getAllHowTos = async () => {
    await fetch('https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge')
    .then(res => res.json())
    .then(data => setHowTos(data.sort((a,b) => a.stepNumber - b.stepNumber)))
    }

    useEffect(() => {
    getAllHowTos();
    },[])

    return (
        <div className={styles.how_wrapper}>
            {howTos ? 
            <>
            <h2 className={styles.how_title}>How It Works</h2>
            <div className={styles.how_section}>
            {howTos.map(step => (
              <Card key={step.id}
                    stepNumber={step.stepNumber}
                    title={step.versionContent.sort((a,b) => 
                        new Date(b.effectiveDate) - new Date(a.effectiveDate))[0].title}
                    body={step.versionContent.sort((a,b) => 
                        new Date(b.effectiveDate) - new Date(a.effectiveDate))[0].body}
                      />
                      ))}
            </div>
            </>
            : null }
        </div>
    )
}

