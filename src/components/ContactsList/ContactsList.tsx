import css from './ContactsList.module.css';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import {getfilteredContacts} from '../../redax/contacts/contacts-selector';
import { deleteContact } from '../../operation';
import { IContact } from '../../interfaces/contacts-interfaces';

import { useAppDispatch } from '../../hooks/hooks';



type typeOnDeleteContact= (id: string) => void;


export const ContactsList = () => {

const contacts:IContact[] = useSelector(getfilteredContacts);
const dispatch = useAppDispatch();

const onDeleteContact:typeOnDeleteContact = (id:string) => {
  dispatch(deleteContact(id));
};


  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
};
