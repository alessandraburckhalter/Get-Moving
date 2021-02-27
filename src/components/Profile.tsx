import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'
import { useContext } from 'react'

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/alessandraburckhalter.png" alt="Ale github" />
            <div>
                <strong>Alessandra Burckhalter</strong>
                
                <p>
                <img src="icons/level.svg" alt="level" />
                Level {level}
                </p>
            </div>
        </div>
    )
}