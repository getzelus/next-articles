import styles from '../styles/article.module.css';
import Link from 'next/link';

export default function ArticleItem(props) {

  return (
    <Link href='/article/[id]' as={'/article/' + props.article.id} >
      <div className={styles.card}>
        <h3>{props.article.title}</h3>
        <p>{props.article.body}</p>
      </div>
    </Link>
  )
}
