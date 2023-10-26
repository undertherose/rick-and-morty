import React from "react";
import Card from "./Card"
import { Character } from "../types";
import styles from "../styles/Characters.module.css";

export interface ICharactersProps {
    characters: Character[]
}

const Characters = ({characters}:ICharactersProps) => {
    return (

            <div className={styles.charactersContainer}>
                {characters.map((character:Character) => (
                    <Card
                        key={character.id}
                        character={character}>
                    </Card>
                ))}
            </div>

    );
};
export default Characters