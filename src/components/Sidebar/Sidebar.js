import Media from 'react-media';
import Navigation from '../Navigation';
import Currency from '../Currency';
import Balance from '../Balance';

import styles from './Sidebar.module.scss';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div>
        <Navigation />
        <Balance />
      </div>
      <div>
        <Media
          queries={{
            tablet: '(min-width: 768px)',
          }}
        >
          {({ tablet }) => <>{tablet && <Currency />}</>}
        </Media>
      </div>
    </aside>
  );
}
