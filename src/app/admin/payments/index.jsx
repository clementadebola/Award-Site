'use client';
import styled from 'styled-components';
import PaymentOverview from '@/components/payments/PaymentOverview';

const Payments = () => {
  return (
    <Container>
      <h2>Payment Overview</h2>
      <PaymentOverview />
    </Container>
  );
};

export default Payments;

const Container = styled.div`
  padding: 2rem;
  background: #f0f2f5;
`;
