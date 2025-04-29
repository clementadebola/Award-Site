'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const useAdminAuth = () => {
  const router = useRouter();
  useEffect(() => {
    const isAdmin = localStorage.getItem('admin');
    if (!isAdmin) {
      router.push('/admin/login');
    }
  }, []);
};
