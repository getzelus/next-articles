import styles from '../styles/header.module.css';

export default function Header(props) {
    return (
      <div>
        <h1 className={styles.title}>
          <span>Webdev</span> News
        </h1>

        <p className={styles.description}>
          Keep up to date with news 
        </p>


        <style jsx>
          {`
            .title{
              color: red
            }
          `}
        </style>



      </div>    
    );
  }
  