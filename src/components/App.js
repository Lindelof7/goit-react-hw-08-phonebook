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


export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoadingState);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div >
      <Suspense fallback={<Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
      />}>
        <nav className={(css.navWrap)}>
          <NavLink to="/" id="sidebar">Phonebook</NavLink>
          <div className={(css.navMarginWrap)}>
            <NavLink to="/login" id="sidebar">Login</NavLink>
            <NavLink to="/register" id="sidebar">Register</NavLink>
          </div>
        </nav>
        <Routes >
          <Route path="/" element={<Phonebook />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} >
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