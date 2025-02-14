import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ChallengeBox.module.css'
import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'

export function ChallengeBox() {
    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completeChallenge()
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();

    }
  

    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
              <div className={styles.challengeActive}>
                  <header>Win {activeChallenge.amount} xp</header>

                <main>
                    <img src={`icons/${activeChallenge.type}.svg`}/>
                    <strong>New challenge</strong>
                    <p>{activeChallenge.description}</p>
                </main>

                <footer>
                    <button
                        type="button"
                        className={styles.challengeFailedButton}
                        onClick={handleChallengeFailed}
                    >
                        Failed
                    </button>

                    <button
                        type="button"
                        className={styles.challengeSuccededButton}
                        onClick={handleChallengeSucceeded}
                    >
                        Completed
                    </button>
                </footer>

              </div>
            ) : (
                <div className={styles.challengeNotActive}>
                <strong>Complete a cycle to get another challenge</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level up" />
                    Level up by completing challenges
                </p>
            </div>
            )}
            
        </div>
    )
}