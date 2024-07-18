"use client"
import React from 'react'
import Link from 'next/link';

const numberGame = () => {


  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-[#74AA8D] via-[#08605F] to-[#74AA8D]">
        <div className='w-2/3 h-2/3 bg-[#FAF2F0] rounded opacity-80 border border-teal-400 text-center grid col-span-1 content-evenly text-[#292929]'>
            <h1 className="text-4xl md:text-6xl font-bold text-[#E29D65]">Number Game</h1>
            <p className="py-5 px-20 text-lg md:text-3xl leading-loose">The Countdown Number Game:<br></br>
             Combine given numbers to reach the target as quick as possible!<br></br></p>
             <p className="px-20 text-lg md:text-3xl leading-loose">Use the keypads given to input your calculations</p>
             <p className="px-20 text-lg md:text-3xl leading-loose font-bold">Click play to start</p>
            <Link href="/NumberGame/game"><button className="bg-[#E29D65] text-white md:text-2xl w-1/3 mx-auto font-bold py-2 px-4 rounded hover:bg-teal-700 transition duration-300">Play</button></Link>
        </div>
    </div>
  )
};

export default numberGame