'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Header from '@/components/header';
import Test from '@/components/test';

// export default function Home({params: { domain }}: { params: { domain: string}}) {
//   return (
//     <main className={styles.main}>
//       <Header />
//       <div className={styles.content}>
//         <Test domain={domain}></Test>
//       </div>
//     </main>
//   )
// }
import HomeFiveMain from '@/components/home-5';

export default function Home({params: { domain }}: { params: { domain: string}}) {
  return (
    
      <HomeFiveMain></HomeFiveMain>
    
  )
}