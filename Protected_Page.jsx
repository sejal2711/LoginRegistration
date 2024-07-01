import React from 'eact';
import { Container, Table } from 'eact-bootstrap';

const ProtectedPage = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Container>
      <h1>Welcome, {user.name}!</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.dateOfBirth}</td>
            <td>{user.email}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default ProtectedPage;