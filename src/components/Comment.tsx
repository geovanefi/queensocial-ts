import { Trash} from 'phosphor-react'
import { ThumbsUp} from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css'

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) =>void;
}

export function Comment({content, onDeleteComment}: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function acaoDeletarCom(){
        onDeleteComment(content);
    };

    function newLikeComment(){
        setLikeCount((state) => {
            return state + 1
        });
        // Atualização da situação (valor), dela mesma
    };

    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src="https://github.com/geovanefi.png" 
                alt=""
                //onClick={() => alert("Hello, word!")}
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Cliente de exemplo</strong>
                            <time title="12 de julho às 08:15h" dateTime="2022-07-11 08:13:38">Comentado há 1h</time>
                        </div>
                        <button onClick={acaoDeletarCom} title="Deletar Comentário">
                        <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    
                    <button onClick={newLikeComment}>
                    <ThumbsUp /> Gostei <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
    //button onClick={() => setLikeCount(likeCount + 1)} - só executa a funcao apos o click.
}