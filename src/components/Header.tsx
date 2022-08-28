import styles from "./Header.module.css";

import queenclubs from "../img/clubs.svg"

export function Header() {
    return (
        <header className= {styles.header}>
            <img src={queenclubs} alt="Logo Queen Clubs"/>
            <strong>Queen Clubs</strong>
        </header>
    );
}