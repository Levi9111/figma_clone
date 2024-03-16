'use client';

import { fabric } from 'fabric';
import Live from '@/components/Live';
import Navbar from '@/components/Navbar';
import { useEffect, useRef } from 'react';
import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import { initializeFabric } from '@/lib/canvas';

// export const initializeFabric = ({
//   fabricRef,
//   canvasRef,
// }: {
//   fabricRef: React.MutableRefObject<fabric.Canvas | null>;
//   canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
// }) => {
//   // get canvas element
//   const canvasElement = document.getElementById('canvas');

//   // create fabric canvas
//   const canvas = new fabric.Canvas(canvasRef.current, {
//     width: canvasElement?.clientWidth,
//     height: canvasElement?.clientHeight,
//   });

//   // set canvas reference to fabricRef so we can use it later anywhere outside canvas listener
//   fabricRef.current = canvas;

//   return canvas;
// };

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas>(null);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = initializeFabric({ fabricRef, canvasRef });
  }, []);

  return (
    <main className='h-screen overflow-hidden '>
      <Navbar />
      <section className='flex h-full flex-row'>
        <LeftSidebar />
        <Live />
        <RightSidebar />
      </section>
    </main>
  );
}
