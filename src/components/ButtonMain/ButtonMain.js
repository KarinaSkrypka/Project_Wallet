import React from 'react';
import PropTypes from 'prop-types';

import styles from './ButtonMain.module.scss';

const ButtonMain = ({ handleClick, contentBtn, disabled, type, button }) => (
  <button
    disabled={disabled}
    onClick={handleClick}
    className={styles[`${button}`]}
    type={type}
  >
    {contentBtn}
  </button>
);

ButtonMain.defaultProps = {
  handleClick: () => null,
  disabled: false,
  type: 'button',
};

ButtonMain.propTypes = {
  handleClick: PropTypes.func,
  contentBtn: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

export default ButtonMain;
