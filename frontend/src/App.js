import React, { useEffect, useState } from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import {
    getContacts,
    createContact,
    updateContact,
    deleteContact,
} from './services/contactService';

function App() {
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);

    const fetchContacts = async () => {
        const res = await getContacts();
        setContacts(res.data);
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    const handleSave = async (contact) => {
        if (contact.id) {
            await updateContact(contact);
        } else {
            await createContact(contact);
        }
        setSelectedContact(null);
        fetchContacts();
    };

    const handleDelete = async (id) => {
        await deleteContact(id);
        fetchContacts();
    };

    const handleEdit = (contact) => {
        setSelectedContact(contact);
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Contact List Manager</h1>
            <ContactForm contact={selectedContact} onSave={handleSave} />
            <ContactList
                contacts={contacts}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default App;
