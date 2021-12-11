import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../../redux/auth/auth-operations';
import authSelectors from '../../../redux/auth/auth-selectors';
import ButtonMain from '../../ButtonMain';
import Spinner from '../../Spinner';

import styles from './LogoutForm.module.scss';

export default function LogoutForm({ onClose }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getLoading);

  const handleClickCancel = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleClickLogout = () => {
    dispatch(authOperations.logOut());
    onClose();
  };

  return (
    <div className={styles.Form}>
      <p className={styles.Text}>Are you sure you want to quit?</p>
      <ButtonMain
        handleClick={handleClickLogout}
        contentBtn="Yes"
        button="Button"
      />

      <ButtonMain
        handleClick={handleClickCancel}
        contentBtn="No"
        button="ButtonSecondary"
      />

      {isLoading && <Spinner />}
    </div>
  );
}

LogoutForm.propTypes = {
  onClose: PropTypes.func,
};
