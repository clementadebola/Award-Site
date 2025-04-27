'use client';
import styled from 'styled-components';
import { useState } from 'react';
import { addContestants } from '@/utils/api';

const AddContestants = () => {
  const [name, setName] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();
    await addContestants({ name });
    alert('Contestant Added!');
  };

  return (
    <FormWrapper>
      <h2>Add Contestants</h2>
      <form onSubmit={handleAdd}>
        <input 
          type="text" 
          placeholder="Contestants Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          required 
        />
        <button type="submit">Add</button>
      </form>
    </FormWrapper>
  );
};

export default AddContestants;

const FormWrapper = styled.div`
  padding: 2rem;
  background: white;
  max-width: 500px;
  margin: 2rem auto;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    input, button {
      padding: 0.8rem;
      border-radius: 5px;
    }

    button {
      background: #0070f3;
      color: white;
      border: none;
      cursor: pointer;
    }
  }
`;
