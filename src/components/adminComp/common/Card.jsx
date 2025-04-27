'use client';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 300px;
`;

const Title = styled.h4`
  margin-bottom: 10px;
  color: #333;
`;

const Value = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const AdminCard = ({ title, value }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Card>
  );
};

export default AdminCard;
