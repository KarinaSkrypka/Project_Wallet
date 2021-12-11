import { useState, useEffect } from 'react';
import { createArrCurrency } from './funcCreateArrCurrency';
import styles from './Currency.module.scss';

export default function Currency() {
  const [USD, setUSD] = useState({ buy: '00.00', sale: '00.00' });
  const [EUR, setEUR] = useState({ buy: '00.00', sale: '00.00' });
  const [RUB, setRUB] = useState({ buy: '00.00', sale: '00.00' });
  // const [CHF, setCHF] = useState({ buy: '00.00', sale: '00.00' });
  // const [BTC, setBTC] = useState({ buy: '00.00', sale: '00.00' });

  useEffect(() => {
    createArrCurrency()
      .then(data => {
        data.forEach(({ ccy, buy, sale }) => {
          if (ccy === 'USD') {
            setUSD({ buy: buy, sale: sale });
          } else if (ccy === 'EUR') {
            setEUR({ buy: buy, sale: sale });
          } else if (ccy === 'RUR') {
            setRUB({ buy: buy, sale: sale });
            // } else if (ccy === 'CHF') {
            //   setCHF({ buy: buy, sale: sale });
            // } else if (ccy === 'BTC') {
            //   setBTC({ buy: buy, sale: sale });
          }
        });
      })
      .catch(err => err);
  }, []);

  return (
    <div className={styles.currency}>
      <ul className={styles.currencyList}>
        <li className={styles.currencyTitle}>Currency</li>
        <li className={styles.currencyTitle}>Buy</li>
        <li className={styles.currencyTitle}>Sell</li>
      </ul>

      <ul className={styles.currencyPriceList}>
        <li className={styles.currencyPrice}>
          <span>USD</span>
          <span>{USD.buy}</span>
          <span>{USD.sale}</span>
        </li>
        <li className={styles.currencyPrice}>
          <span>EUR</span>
          <span>{EUR.buy}</span>
          <span>{EUR.sale}</span>
        </li>
        <li className={styles.currencyPrice}>
          <span>RUB</span>
          <span>{RUB.buy}</span>
          <span>{RUB.sale}</span>
        </li>
        {/* <li className={styles.currencyPrice}>
          <span>CHF</span>
          <span>{CHF.buy}</span>
          <span>{CHF.sale}</span>
        </li>
        <li className={styles.currencyPrice}>
          <span>BTC</span>
          <span>{BTC.buy}</span>
          <span>{BTC.sale}</span>
        </li> */}
      </ul>
    </div>
  );
}
