import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
           <div className={styles.authorAndTime}>
            <strong>Ericlys Moreira</strong>
            <time title='11 de julho ás 8:00h' dateTime='2022-07-11 08:00:00'>Cerca de 1h atrás</time>
           </div>

           <button onClick={handleDeleteComment} title='Deletar comentário' >
            <Trash size={24} />
           </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}