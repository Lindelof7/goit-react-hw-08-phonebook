import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/api';
import { Audio } from 'react-loader-spinner'
import { Suspense } from "react";
import { Phonebook } from './Phonebook';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './Login';
import { Register } from './Register';
import css from './App.module.css'
import { ErrorMessage } from './ErrorMessage';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from './UserMenu';
import { WelcomePage } from './WelcomePage';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';


export const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, isRefreshing } = useAuth();

  // if (isLoggedIn) {
  //   dispatch(fetchContacts())
  // }

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])

  useEffect(() => {
    console.log(123)
    dispatch(fetchContacts())
  }, [dispatch])

  return ( !isRefreshing &&
    <div className={(css.appWrap)}>
      <Suspense fallback={<Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
      />}>
        <nav className={(css.navWrap)}>
          <NavLink to="/" id="sidebar">Home</NavLink>
          <NavLink to="/phonebook" id="sidebar">Phonebook</NavLink>
          <div className={(css.navMarginWrap)}>
            {isLoggedIn
              ?
               <UserMenu/>
              :
              <>
                <NavLink to="/login" id="login">Login</NavLink>
                <NavLink to="/register" id="register">Register</NavLink>
              </>
            }
          </div>
        </nav>
        <Routes >
          <Route path="/" element={<WelcomePage />} />
          <Route path="/phonebook" element={<PrivateRoute component={Phonebook} redirectTo='/login' />} />
          <Route path="/login" element={<RestrictedRoute component={Login}  redirectTo='/phonebook'/>}/>
          <Route path="/register" element={<RestrictedRoute component={Register}  redirectTo='/phonebook'/>} >
            <Route path="*" element={<ErrorMessage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  )
}

App.propTypes = {
  Contacts: PropTypes.array,
  Filter: PropTypes.string
};