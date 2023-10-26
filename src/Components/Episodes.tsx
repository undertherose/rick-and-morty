import React from "react";
import { Episode } from "../types";
import styles from "../styles/Episodes.module.css";
import { useRouter } from "next/router";

export interface IEpisodesProps {
    episodes: Episode[];
    currEpisode: Episode;
}

export default function Episodes({ episodes, currEpisode }: IEpisodesProps) {

    const router = useRouter();
    function handleClick(episode:Episode){
        if(episode.name === currEpisode.name){
            router.push("/")
        } else {
            router.push(`?eps=${episode.id}`)
        }
    }

    return (
        <div className={styles.episodesBar}>
            <h1 className={styles.episodeTitle}>Episodes</h1>
            <div className={styles.episodesList}>
                {episodes.map((episode: Episode) => (
                    <div className={`${styles.episode} ${episode.name === currEpisode.name ? styles.selectedEpisode : styles.unselectedEpisode
                        }`}
                        key={episode.id}
                        onClick={()=>handleClick(episode)}
                    >{episode.name}</div>
                ))
                }
            </div>
        </div>
    );
};

