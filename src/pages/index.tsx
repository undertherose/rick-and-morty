import { Characters, Episodes } from "@/Components";
import { Character, Episode } from "@/types";
import { GetServerSideProps } from "next";
import styles from "@/styles/Home.module.css";
import getEpisodes from "@/services/getEpisodes";

export default function Home({ characters, currEpisode, episodes }: any) {

  return (
    <div className={styles.row}>
        <Episodes episodes={episodes} currEpisode={currEpisode} />
        <div className={styles.container}>
            {currEpisode !== "none" && <h1 className={styles.characterTitle}>{characters.length} Characters in episode "{currEpisode.name}"</h1>}
            <Characters characters={characters} />
        </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<{
    characters: Character[]
}> = async (context) => {
    const episodeId = context.query.eps;

    let characters: Character[] = [];
    let currEpisode: Episode | "none" = "none";

    if (episodeId === undefined) {
        const res = await fetch(`https://rickandmortyapi.com/api/character`);
        const { results } = await res.json();
        characters = results;
    } else {
        const res = await fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`);
        const data = await res.json();
        characters = await Promise.all(data.characters.map(async (charURL: string) => {
        const res = await fetch(charURL);
        const { id, name, image } = await res.json();
        return { id, name, image } as Character
        }))
        currEpisode = data;
    }

    const episodes = await getEpisodes();

    return {
            props: {
            characters,
            currEpisode,
            episodes
            }
    }
}