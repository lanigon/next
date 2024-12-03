'use client'

import styles from '@/styles/test.module.css'
import BackButton from '@/components/utils/backbutton'
import Image from 'next/image';

export default function Playground(){
  return(
    <div>
      <BackButton />
      <div className='grid grid-rows-[50px_1fr_1fr] grid-cols-[1fr_1fr] mb-5'>
        <h1>data</h1>
        <button className={styles.primary}>Button</button>
        <p>6660</p>
        <p>323</p>
        <p>6660</p>
        <p>323</p>
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='mb-4'>imagetest</h1>
        <Image src="/image.jpg" alt="test" width={100} height={100} />
      </div>
    </div>
  )
}
