import LoginForm from '../../components/AuthForms/LoginForm';
import AuthHeading from '../../components/AuthHeading';
import AuthNav from '../../components/AuthForms/AuthNav';
import GoogleAuth from '../../components/AuthForms/GoogleAuth';
import BgPageContainer from '../../components/BgPageContainer';
import ImgContentContainer from '../../components/AuthForms/ImgContentContainer';
import AuthContentContainer from '../../components/AuthForms/AuthContentContainer';
import routes from '../../assets/routes';
import useSizeScreen from '../../hooks/useSizeScreen';
import { LoginImgPage } from '../../components/IconBtn/LoginImgPage';

import styles from './LoginPage.module.scss';

export default function LoginPage() {
  const sizeScreen = useSizeScreen();

  return (
    <BgPageContainer bgContainer="BgPageContainer">
      <ImgContentContainer>
        {sizeScreen >= 768 && sizeScreen < 1280 && (
          <LoginImgPage svg={styles.svgLoginImg} />
        )}
        {sizeScreen >= 1280 && <LoginImgPage svg={styles.svgLoginImg} />}
      </ImgContentContainer>

      <AuthContentContainer authContainer="LoginContainer">
        <AuthContentContainer authContainer="LoginFormContainer">
          <AuthHeading text="Wallet" />
          <LoginForm />
          <GoogleAuth />
          <AuthNav content="Sign up" path={routes.signup} />
        </AuthContentContainer>
      </AuthContentContainer>
    </BgPageContainer>
  );
}
