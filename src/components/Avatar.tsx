import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({hasBorder = true, ...props}: AvatarProps) {
    
    return (
        <img 
            className={hasBorder ? styles.avatarBorder : styles.avatar} 
            {...props}
        />
    );
}

//Os objetos contidos dento da desestruturação, busca-se as propriedades hasBorder e src. Então se faz um if com: Se hasBorder for verdadeiro (?), usa avatarBorder, se for falso (:), usa o avatar.

// hasBorde alocado no Comment.jsx na linha 9 como false. Todos os outros receberam true; conforme linha 3 desse codigo.