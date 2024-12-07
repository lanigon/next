'use client'

import styles from '@/styles/test.module.css'
import BackButton from '@/components/utils/backbutton'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

const imgs = ["/image.jpg", "/image.jpg", "/image.jpg", "/image.jpg", "/image.jpg", "/image.jpg"]

export default function Playground(){
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const router = useRouter()
  const toDynamic = () => {
    router.push(`/playground/dynamic/344?problem=test`)
  }
  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, 100, 100);
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(canvas.width, 0)
        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.lineTo(0, 0)
        ctx.closePath()
        ctx.stroke()
      }
    }
  },[])
  return(
    <div className='h-full'>
      <BackButton />
      <div className='grid grid-cols-[400px_1fr_400px] items-center justify-center min-h-screen'>
        {/* gridtest */}
        <div className='grid grid-rows-[50px_1fr_1fr] gap-x-6 grid-cols-[200px_200px] mb-5 items-center justify-items-center'>
          <h1 className={styles.halo}>data</h1>
          <button className={`${styles.primary} ${styles.animateR}`} onClick={toDynamic}>buaa</button>
          <p className={styles.light}>6660</p>
          <p>323</p>
          <p>6660</p>
          <p>323</p>
        </div>
        {/* image */}
        <div className='flex flex-col items-center w-full'>
          <h1 className='mb-4 font-extrabold font-mc'>imagetest</h1>
          <Image src="/image.jpg" alt="test" width={100} height={100} className={`${styles.animatebounce} my-3`} />
          <div className='w-[400px] h-[100px] border-l-2 border-r-2 overflow-hidden relative'>
            <div className={`flex justify-center gap-x-8 absolute ${styles.animateSlide}`}>
              {imgs.concat(imgs).map((url, index)=>(
                <div key={index} className='w-[100px]'>
                  <Image src={url} alt="test" width={100} height={100} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* canvas */}
        <canvas ref={canvasRef} width="150" height="150"></canvas>
      </div> 
    </div>
  )
}
