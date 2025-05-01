import axios from 'axios';

const API_URL = '/api/contacts';

export const getContacts = () => axios.get(API_URL);

export const getContact = (id) => axios.get(`${API_URL}/${id}`);

export const createContact = (contact) => axios.post(API_URL, contact);

export const updateContact = (contact) =>
    axios.put(`${API_URL}/${contact.id}`, contact);

export const deleteContact = (id) => axios.delete(`${API_URL}/${id}`);
