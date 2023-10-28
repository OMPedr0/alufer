"use client"

import Home from "./home/page";
import { useRouter, usePathname } from 'next/navigation';


export default function Page() {

  const router = useRouter();

  const pathname = usePathname();


  if (pathname === '/') {
    router.push('/home');
  }
  return (
      <Home/>
  )
}
