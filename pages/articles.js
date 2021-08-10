import styles from '../styles/article.module.css';
import {server} from '../config';

import ArticleItem from '../comps/articleItem';

export default function Movies(props) {
  //console.log(props.posts);
  return (
    <div>

      <div className={styles.grid}>
        {props.posts.map(e => 
          <ArticleItem key={e.id} article={e} />
          )}
      </div>

    </div>
  )
}

export const getStaticProps = async () => {
 // const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=' + 6);
 const res = await fetch(server + 'articles');
 const posts = await res.json();

  return { props: { posts} };
}
