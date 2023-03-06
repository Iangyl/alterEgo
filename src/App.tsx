import React, { Fragment, lazy, ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import session from 'redux-persist/lib/storage/session';
import { ISession } from 'redux/app/app.types';
import { useAppSelector } from 'redux/hooks';

const Home = lazy(() => import('pages/Home'));
const News = lazy(() => import('pages/News'));
const SignIn = lazy(() => import('pages/SignIn'));
const Profile = lazy(() => import('pages/Profile'));

const ProtectedRoute = ({
  session,
  redirectPath = '/',
  children,
}: {
  session: ISession;
  redirectPath?: string;
  children: JSX.Element;
}) => {
  if (session.accessStatus !== 'open') {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

function App() {
  const session = useAppSelector((state) => state.session);
  return (
    <Routes>
      <Fragment>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute session={session}>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Fragment>
    </Routes>
  );
}

export default App;
