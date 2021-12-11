import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import transactionOperations from '../../redux/transactions/transaction-operations';

import styles from './Balance.module.scss';

const Balance = () => {
  const transactions = useSelector(authSelectors.getTransactionsAuth);
  const lastBalance = useSelector(authSelectors.getTransactionAuthBalance);
  const arrBalances = useSelector(authSelectors.getArrTransactionAuthBalance);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionOperations.getTransactions());
  }, [dispatch]);

  const formatSum = sum => {
    return new Intl.NumberFormat('ua-UA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }).format(sum);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>balance</h2>
        <p className={styles.text}>
          <span className={styles.currency}>&#8372;</span>
          {transactions.balance &&
            (transactions.balance >= 0 || transactions.balance < 0) &&
            formatSum(transactions.balance)}
          {(lastBalance >= 0 || lastBalance < 0) && formatSum(lastBalance)}
          {!transactions.balance && arrBalances.length === 0 && formatSum(0)}
        </p>
      </div>
    </>
  );
};

export default Balance;
