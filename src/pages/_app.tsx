import styles from "../styles/App.module.css";
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Rick and Morty Characters</h1>
            <div className={styles.row}>
                <Component {...pageProps} />
            </div>
        </div>
    );
}
