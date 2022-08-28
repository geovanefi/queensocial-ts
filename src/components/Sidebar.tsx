import {PencilLine} from 'phosphor-react';
import { Avatar } from './Avatar';
import styles  from './Sidebar.module.css';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
            src="https://blog.nitorinfotech.com/wp-content/uploads/2015/03/Next-Generation-BI-Platforms.jpg" 
            alt="Foto de Perfil" />

            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/93933011?v=4" />"
                
                <strong>Geovane Felicio</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size="20"/> Editar Profile
                </a>
            </footer>
        </aside>
    );
}