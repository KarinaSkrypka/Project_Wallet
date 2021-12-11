import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors';

import styles from './ChartBalance.module.scss';

export default function ChartBalance() {
  const transactions = useSelector(authSelectors.getTransactionsAuth);
  const lastBalance = useSelector(authSelectors.getTransactionAuthBalance);
  const arrBalances = useSelector(authSelectors.getArrTransactionAuthBalance);

  const formatSum = sum => {
    return new Intl.NumberFormat('ua-UA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }).format(sum);
  };

  return (
    <>
      <div>
        <p className={styles.balance}>
          &#8372;
          {transactions.balance &&
            (transactions.balance >= 0 || transactions.balance < 0) &&
            formatSum(transactions.balance)}
          {(lastBalance >= 0 || lastBalance < 0) && formatSum(lastBalance)}
          {!transactions.balance && arrBalances.length === 0 && formatSum(0)}
        </p>
      </div>
    </>
  );
}
