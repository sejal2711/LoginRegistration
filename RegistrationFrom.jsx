import React, { useState } from 'eact';
import { Container, Form, Button } from 'eact-bootstrap';
import axios from 'axios';
import { useHistory } from 'eact-router-dom';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/register', { name, dateOfBirth, email, password });
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      history.push('/protected');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="dateOfBirth">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" value={dateOfBirth} onChange={(event) => setDateOfBirth(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterForm;