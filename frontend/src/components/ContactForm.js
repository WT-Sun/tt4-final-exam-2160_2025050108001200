import React, { useState, useEffect } from 'react';

function ContactForm({ contact, onSave }) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        isFavorite: false,
    });

    useEffect(() => {
        if (contact) {
            setFormData(contact);
        } else {
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                isFavorite: false,
            });
        }
    }, [contact]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <h4>{formData.id ? 'Edit Contact' : 'Add Contact'}</h4>
            <div className="mb-2">
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-2">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-2">
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="form-check mb-2">
                <input
                    type="checkbox"
                    name="isFavorite"
                    checked={formData.isFavorite}
                    onChange={handleChange}
                    className="form-check-input"
                    id="favoriteCheck"
                />
                <label className="form-check-label" htmlFor="favoriteCheck">
                    Mark as Favorite
                </label>
            </div>
            <button type="submit" className="btn btn-success">
                {formData.id ? 'Update Contact' : 'Add Contact'}
            </button>
        </form>
    );
}

export default ContactForm;
