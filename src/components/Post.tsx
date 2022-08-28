import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';

import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

interface Author {
    name: string;
    job: string;
    avatarUrl: string;
}
interface PostProps {
    author: Author;
    publishAt: Date;
    content: Content[];
}
interface Content{
    type: 'paragraph' | 'link' | 'text';
    content: string;
}

export function Post ({author, publishAt, content}: PostProps){

    const [comments, setComments] = useState([
        'Parabens!'
    ])

    const [newCommentText, setNewCommentText] = useState('')


    const formatDate = format(publishAt, "d 'de' LLLL 'às' HH:mm 'h'", {
        locale: ptBR,
    })

    const relativePublishAdd = formatDistanceToNow(publishAt, {
        locale: ptBR,
        addSuffix: true,
    })

    const newCommentEmpty = newCommentText.length === 0;

    //console.log(newCommentText);

    function newCreateComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function newCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete: string){
        //Conseito = novo valor na memoria.
        const comentarioRemovido = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(comentarioRemovido);
    }

    function newCommentInvalid (event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("Esse campo é obrigatorio");
    }
    
    return (

        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.job}</span>
                    </div>
                </div>

                <time 
                    title={formatDate} 
                    dateTime={publishAt.toISOString()} >
                    {relativePublishAdd}
                </time> 
            </header>
            
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type ==='paragraph'){
                        return <p key={line.content}>{line.content}</p>;
                    } else if(line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={newCreateComment} className={styles.areaForm}>
                <strong>Deixe seu Comentarios</strong>
                <textarea 
                    name="comment"
                    placeholder="Gostou?"
                    value={newCommentText}
                    onChange={newCommentChange}
                    onInvalid={newCommentInvalid}
                    required
                />
                <footer>
                    
                    <button type="submit" disabled={newCommentEmpty} >Publicar</button>
                </footer>
            </form>
            
            <div className={styles.commentList}>
                {comments.map(comment =>{
                    return <Comment 
                        key={comment}
                        content={comment} 
                        onDeleteComment={deleteComment}
                    />
                })}
            </div>   


        </article>
    );
}
