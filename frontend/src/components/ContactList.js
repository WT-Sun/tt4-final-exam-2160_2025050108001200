import React from 'react';

function ContactList({ contacts, onEdit, onDelete }) {
    return (
        <div className="mt-4">
            <h3>Contacts</h3>
            {contacts.length === 0 ? (
                <p>No contacts found.</p>
            ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Favorite</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((c) => (
                            <tr key={c.id}>
                                <td>{c.fullName}</td>
                                <td>{c.email}</td>
                                <td>{c.phone}</td>
                                <td>{c.isFavorite ? '✅' : '❌'}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-primary me-2"
                                        onClick={() => onEdit(c)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => onDelete(c.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ContactList;
