import React, { useEffect, useState } from 'react';
import { ContactForm } from './components/ContactForm';
import { ContactsList } from './components/ContactList';
import axios from 'axios';
import { Contact } from './types/Contact';
import { Backdrop, CircularProgress } from '@mui/material';

function App() {
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState<Contact>({
    id: undefined,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleSaveContact = async (contact: Contact) => {
    setLoading(true);
    setTimeout( async () => {
      if (contact.id) {
        await axios.put(`https://localhost:44364/api/contacts/${contact.id}`, contact);
      } else {
        await axios.post('https://localhost:44364/api/contacts', contact);
      }
      setLoading(false);
    },500);    
  };

  const handleDeleteContact = async (contact: Contact) => {
    setLoading(true);
    setTimeout( async () => {
      await axios.delete(`https://localhost:44364/api/contacts/${contact.id}`);
      setLoading(false);
    },500);    
  };

  return (
    <div>
      <h1>Contact Manager</h1>
      <ContactForm 
        initialContact={contact}
        onSave={handleSaveContact}
         />
      {loading ? <Backdrop open={true}><CircularProgress /></Backdrop> :  <ContactsList onEdit={ (contact) => {setContact(contact);}} onDelete={handleDeleteContact}/>}
    </div>
  );
}

export default App;
