import PublicHeader from '@/components/view/Header/PublicHeader'
import Image from 'next/image'
import {getServerSession} from "next-auth"
import { authOptions } from '@/lib/AuthOptions';

export default async function Home() {

  const session=await getServerSession(authOptions);
  console.log("session", session)
  return <>
  <PublicHeader/>
  
  </>
}
