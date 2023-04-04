import PropTypes from 'prop-types'
import { ContactList } from './ContactList'
import { Filter } from "./Filter";
import { ContactForm } from "./ContactForm";
import css from './App.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from './redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from './redux/api';
import { selectIsLoadingState } from "./redux/selectors";
import { selectErrorState } from "./redux/selectors";
import { Audio } from 'react-loader-spinner'


export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterVal = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoadingState);
  const Error = useSelector(selectErrorState);


  const loweredFilter = filterVal.toLocaleLowerCase();
  const filteredContacts = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(loweredFilter))

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div className={(css.appWrap)}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading ? <Audio /> : <ContactList filteredContacts={filteredContacts} />}
      {Error && <h2>Sorry, our service has got a problem</h2>}
    </div >
  )
}

App.propTypes = {
  Contacts: PropTypes.array,
  Filter: PropTypes.string
};