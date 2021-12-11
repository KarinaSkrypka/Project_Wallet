// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useLocation } from 'react-router-dom';
// import authOperations from '../../../redux/auth/auth-operations';

import ButtonIcon from '../../ButtonIcon';
import { Google } from '../../IconBtn/Google';
import { BASE_URL } from '../../../assets/constants';

import styles from './GoogleAuth.module.scss';

const GoogleAuth = () => {
  // const dispatch = useDispatch();
  // const search = useLocation().search;
  // const token = new URLSearchParams(search).get('token');

  // useEffect(() => {
  //   if (token) dispatch(authOperations.getUserByGoogleAuth(token));
  // });

  // useEffect(
  //   () => dispatch(authOperations.getUserByGoogleAuth(token)),
  //   [dispatch],
  // );

  const onGoogleAuthSubmit = () => {
    window.open(`${BASE_URL}/api/users/google-user`, '_self');
  };

  return (
    // <a
    //   className={styles.Link}
    //   href="https://personal-expenses.herokuapp.com/api/users/google-user"
    // >
    <ButtonIcon
      onClick={onGoogleAuthSubmit}
      btnClass="BtnGoogle"
      type="submit"
      aria-label="Open Google form"
    >
      <Google svg={styles.svgGoogle} />
      Log in with Google
    </ButtonIcon>
    // </a>
  );
};

export default GoogleAuth;
