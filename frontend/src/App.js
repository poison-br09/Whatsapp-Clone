import { lazy, Suspense } from 'react';

import { GoogleOAuthProvider } from '@react-oauth/google';

//components
import UserProvider from './context/UserProvider';
import AccountProvider from './context/AccountProvider';

// import Loader from './components/loader/Loader';

const Messenger = lazy(() => import('./components/messenger'));

function App() {
  const clientId='481130798152-efhjnosfk1b62vnlkokvl0886k7h825i.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <UserProvider>
        <AccountProvider>
          {/* <Suspense fallback={<Loader />}>
            // <Messenger/>
          </Suspense> */}
          <Messenger/>
        </AccountProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
