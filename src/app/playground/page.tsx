'use client'

import styles from '@/styles/test.module.css'
import BackButton from '@/components/utils/backbutton'

export default function Playground(){
  return(
    <div>
      <BackButton />
      <div className='grid grid-rows-[50px_1fr_1fr] grid-cols-[1fr_1fr]'>
        <h1>data</h1>
        <button className={styles.primary}>Button</button>
        <p>6660</p>
        <p>323</p>
        <p>6660</p>
        <p>323</p>
      </div>
      <div>
        <h1>imagetest</h1>
      </div>
    </div>
  )
}
