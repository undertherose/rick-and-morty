const URL = "https://rickandmortyapi.com/api/episode";

export default async function getEpisodes() {
    const episodes = [];

    let res = await fetch(URL);
    let data = await res.json();
    episodes.push(...data.results);
    while (data.info.next !== null) {
        res = await fetch(data.info.next);
        data = await res.json();
        episodes.push(...data.results);
    }

    return episodes.map(({ id, name }) => ({ id, name }));
}
