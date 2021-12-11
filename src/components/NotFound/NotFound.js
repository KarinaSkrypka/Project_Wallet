import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';

import styles from './NotFound.module.scss';

const NotFound = () => (
  <div className={styles.container_error}>
    <div className={styles.box}>
      <div className={styles.error}>
        <h1 className={styles.notFound}>404 - Page Not Found!</h1>
        <img
          className={styles.image}
          src="https://i.imgur.com/qIufhof.png"
          alt="imgur"
        />
        <p className={styles.text}>
          Looks like you've followed a broken link or entered a URL that doesn't
          exist on this site.
          <Link className={styles.link} to="/">
            <AiOutlineLeft /> Back to our site
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default NotFound;
