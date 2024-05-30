import css from './App.module.css';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { useAppDispatch } from '../hooks/hooks';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIsLoading,getError } from '../redax/contacts/contacts-selector';
import { fetchContacts } from '../operation';
import { Loader } from './Loader/Loader';

export const App = () => {

const dispatch=  useAppDispatch();
const isLoading = useSelector(getIsLoading);
const error = useSelector(getError);

 useEffect(() => {
   dispatch(fetchContacts())
  
 }, [dispatch])
 
    return (
    <div className={css.container}>
      <h1>Phonebook</h1>

      <ContactForm  />

      <h2>Contacts</h2>
      {isLoading && !error && <Loader/>}
      <Filter />
      <ContactsList/>
    </div>
  );
};
