import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import authSelectors from '../redux/auth/auth-selectors';

export default function PublicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/dashboard" /> : children;
}

////////////////////////

// import { useSelector } from 'react-redux';
// import { Redirect, Route } from 'react-router-dom';
// import authSelectors from '../redux/auth/auth-selectors';

// export default function PublicRoute({
//   children,
//   restricted = false,
//   redirectTo = '/',
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   const shouldRedirect = isLoggedIn && restricted;

//   return (
//     <Route {...routeProps}>
//       {shouldRedirect ? <Redirect to={redirectTo} /> : children}
//     </Route>
//   );
// }
