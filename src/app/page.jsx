'use client';
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();

  const token = false

  if (!token) return router.push('/signin')

  return (
    <>
    <h1>Estou na home</h1>
    </>
  );
}
