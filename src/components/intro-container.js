import React from "react"
import styles from "./intro-container.module.css"

export default function IntroContainer(props){
    return(
        <div className={styles.cardcontainer}>
            <card className={styles.rcorners}>
                <img src="../../assets/images/prof-pic.jpg" className={styles.profpic} alt="Ananth's pic" /> 
                <div className={styles.description}>
                    <h2 className={styles.username}>{props.username}</h2>
                    <p className={styles.excerpt}>{props.excerpt}</p>
                </div>
            </card>
        </div>
    )
}
