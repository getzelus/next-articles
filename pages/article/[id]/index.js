import styles from '../../../styles/article.module.css';
import {server} from '../../../config';
import {useRouter} from 'next/router';
import Link from 'next/link';

export default function Article(props) {

    const router = useRouter();
    const id = router.query.id;

  return (
      <>
          <h1>{props.article.title}</h1>
          <p>{props.article.body}</p>
          <p>
              <Link href='/articles'>Go back</Link>
          </p>
      </>
   
  )

}


export const getServerSideProps = async (context) => {
    const id = context.params.id;
   // const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
   const res = await fetch(server + 'articles/' + id);
    const article = await res.json();
  
    return { props: {article} };
}

//getstaticprops

/*
export const getStaticPaths = async () => {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles = await res.json();
  
    const ids = articles.map(e => e.id);
    const paths = ids.map(e => 
        { params: {id: e.toString()} }
    );
    
    return { paths, fallback: false};
}
*/
  