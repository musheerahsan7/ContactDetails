import React, { useState, useEffect } from 'react';
import { Contact } from '../types/Contact';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface Props {
    initialContact?: Contact;  // This can be undefined for new contact or defined for editing
    onSave: (contact: Contact) => void;  // Handles both save and update
}

export const ContactForm: React.FC<Props> = ({ initialContact, onSave }) => {
    const [contact, setContact] = useState<Contact>({
        id: undefined,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    // Effect to populate form when an initialContact is provided
    useEffect(() => {
        if (initialContact) {
            setContact(initialContact);
        }
    }, [initialContact]);

    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContact({
            ...contact,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSave(contact);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="fname"
                autoFocus
                value={contact.firstName}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={contact.lastName}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={contact.email}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={contact.phone}
                onChange={handleChange}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                {contact.id ? 'Update Contact' : 'Save Contact'}
            </Button>
        </Box>
    );
};
