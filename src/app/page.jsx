'use client';
import AuthContext from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {

  const router = useRouter();

  if (!token) return router.push('/signin')

  return (
    <>
    <AuthContext.AuthProvider>{children}</AuthContext.AuthProvider>
    <h1>Estou na home</h1>
    </>
  );
}
