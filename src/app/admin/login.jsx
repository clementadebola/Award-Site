'use client';
import styled from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

const Login = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    router.push('/admin');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Admin Login</h2>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <button type="submit">Login</button>
      </Form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f7fa;
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  input {
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  button {
    background: #0070f3;
    color: white;
    padding: 0.8rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
