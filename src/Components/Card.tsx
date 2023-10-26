import React, { PropsWithChildren } from "react";
import { Character } from "../types";
import styles from "../styles/Card.module.css";


const Card: React.FC<PropsWithChildren<{ character: Character }>> = ({ character }) => {

    return (
        <div className={styles.card}>
            <img
                className={styles.image}
                src={character.image}
            />
            <h3 className={styles.body}>{character.name}</h3>
        </div>
    );
};

export default Card;