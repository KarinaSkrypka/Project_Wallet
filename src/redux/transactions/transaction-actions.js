import { createAction } from '@reduxjs/toolkit';

// getTransactions
export const getTransactionsRequest = createAction(
  'transaction/getTransactionsRequest',
);
export const getTransactionsSuccess = createAction(
  'transaction/getTransactionsSuccess',
);
export const getTransactionsError = createAction(
  'transaction/getTransactionsError',
);

// addTransactions
export const addTransactionsRequest = createAction(
  'transaction/addTransactionsRequest',
);
export const addTransactionsSuccess = createAction(
  'transaction/addTransactionsSuccess',
);
export const addTransactionsError = createAction(
  'transaction/addTransactionsError',
);

export const filterTransRequest = createAction(
  'transaction/filterTransRequest',
);
export const filterTransSuccess = createAction(
  'transaction/filterTransSuccess',
);
export const filterTransError = createAction('transaction/filterTransError');

//get statistics
export const getStatisticsRequest = createAction(
  'transactions/getStatisticsRequest',
);
export const getStatisticsSuccess = createAction(
  'transactions/getStatisticsSuccess',
);
export const getStatisticsError = createAction(
  'transactions/getStatisticsError',
);

///////////////////////
// edit/delete

// editTransactions
// export const editTransactionsRequest = createAction(
//   'transaction/editTransactionsRequest',
// );
// export const editTransactionsSuccess = createAction(
//   'transaction/editTransactionsSuccess',
// );
// export const editTransactionsError = createAction(
//   'transaction/editTransactionsError',
// );

// deleteTransactions
// export const deleteTransactionsRequest = createAction(
//   'transaction/deleteTransactionsRequest',
// );
// export const deleteTransactionsSuccess = createAction(
//   'transaction/deleteTransactionsSuccess',
// );
// export const deleteTransactionsError = createAction(
//   'transaction/deleteTransactionsError',
// );
