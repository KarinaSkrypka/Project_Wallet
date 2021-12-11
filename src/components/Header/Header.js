import { useState } from 'react';
import AuthHeading from '../AuthHeading';
import UserMenu from './UserMenu';
import Modal from '../Modal';
import ButtonIcon from '../ButtonIcon';
import LogoutForm from './LogoutForm';
import { HiX } from 'react-icons/hi';
import useSizeScreen from '../../hooks/useSizeScreen';

import styles from './Header.module.scss';

export default function Header() {
  const sizeScreen = useSizeScreen();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onOpenModal = e => {
    setShowModal(true);
  };

  return (
    <header className={styles.Header}>
      <div className={styles.HeaderContainer}>
        <AuthHeading text="Wallet" />
        <UserMenu onClick={onOpenModal} />

        {showModal && (
          <Modal onClose={toggleModal}>
            <LogoutForm onClose={toggleModal} />
            {sizeScreen > 767 && (
              <ButtonIcon
                btnClass="ButtonIconClose"
                onClick={toggleModal}
                aria-label="Close modal"
              >
                <HiX />
              </ButtonIcon>
            )}
          </Modal>
        )}
      </div>
    </header>
  );
}
