'use client';
import { useState } from 'react';
import contactImg from '../assets/img/contact-img.svg';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        family: '',
        email: '',
        phone: '',
        message: ''
    });

    const [responseMessage, setResponseMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' ou 'error'

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (res.status === 200) {
            setResponseMessage('Méssage envoyé avec succès.');
            setMessageType('success');

            // Vider les champs du formulaire après 10 secondes
            setTimeout(() => {
                setFormData({
                    name: '',
                    family: '',
                    email: '',
                    phone: '',
                    message: ''
                });
                setResponseMessage('');
                setMessageType('');
            }, 5000); // 5000 millisecondes = 5 secondes
        } else {
            setResponseMessage(data.errors ? data.errors.join(' ') : 'Erreur inconnue.');
            setMessageType('error');
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <Image src={contactImg} alt="contact us" width={200} height={200} />
                    </Col>
                    <Col md={6}>
                        <h2>Me contacter</h2>
                        {responseMessage && (
                            <p
                                className="text-center bg-white p-2"
                                style={{
                                    color: messageType === 'success' ? '#3e8e41' : 'red',
                                    fontSize: '18px'
                                }}
                            >
                                {responseMessage}!!!
                            </p>
                        )}
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        required
                                        placeholder="Prenom"
                                        value={formData.name}
                                        onChange={handleChange}
                                        name="name"
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        required
                                        placeholder="Nom de famille"
                                        value={formData.family}
                                        onChange={handleChange}
                                        name="family"
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="email"
                                        required
                                        placeholder="Address Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="tel"
                                        required
                                        placeholder="Télephone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </Col>
                                <Col sm={12} className="px-1">
                                    <textarea
                                        rows="6"
                                        required
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        name="message"
                                    ></textarea>
                                    <input type="submit" className="form-control" value="Envoyer" />
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
