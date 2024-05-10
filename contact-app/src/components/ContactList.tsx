import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Contact } from '../types/Contact';
import { DataGrid, GridColDef, GridToolbar, GridActionsCellItem, GridRowId } from '@mui/x-data-grid';
import { Button } from '@mui/material';

interface ContactsListProps {
    onEdit: (contact: Contact) => void;  // Callback to trigger editing a contact
    onDelete: (contact: Contact) => void;  // Callback to trigger delete a contact
}

export const ContactsList: React.FC<ContactsListProps> = ({ onEdit, onDelete }) => {
    const [contacts, setContacts] = useState<Contact[]>([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get<Contact[]>('https://localhost:44364/api/contacts');
                setContacts(response.data);
            } catch (error) {
                console.error('Failed to fetch contacts', error);
            }
        };
        fetchContacts();
    }, []);

    
    const handleEditClick = (id: GridRowId) => {
        const contact = contacts.find(c => c.id === id);
        if (contact) {
            onEdit(contact);
        }
    };

    const handleDeleteClick = (id: GridRowId) => {
        const contact = contacts.find(c => c.id === id);
        if (contact) {
            onDelete(contact);
        }
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'firstName', headerName: 'First name', width: 150 },
        { field: 'lastName', headerName: 'Last name', width: 150 },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'phone', headerName: 'Phone', width: 150 },
        {
            field: 'actions',
            headerName: 'Actions',
            type: 'actions',
            width: 200,
            getActions: (params) => [
                <GridActionsCellItem
                    icon={<span>Edit</span>}
                    label="Edit"
                    onClick={() => handleEditClick(params.id)}
                />,
                <GridActionsCellItem
                    icon={<span>Delete</span>}
                    label="Delete"
                    onClick={() => handleDeleteClick(params.id)}
                />
            ],
        },
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={contacts}
                columns={columns}
                slots={{
                    toolbar: GridToolbar,
                }}
                disableRowSelectionOnClick
            />
        </div>
    );
};
