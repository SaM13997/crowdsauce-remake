'use client'

import Image from 'next/image'
import { Luxurious_Script } from 'next/font/google'
import AOS from 'aos'
import 'aos/dist/aos.css' 
import { useEffect, useRef } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import anime from 'animejs'
import numeral from 'numeral'

const luxurious = Luxurious_Script({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
export default function Home() {

  const textRef = useRef(null)
  useEffect(() => {
    AOS.init({
      // once:true
    })
    // anime({
		// 	targets: textRef.current,
		// 	innerText: [0, 8940000],
		// 	easing: 'linear',
		// 	round: true,
		// 	update: function (a) {
		// 		const value = a.animations[0].currentValue
		// 		const formattedNumber = numeral(value).format('0,000,000')
		// 		textRef.current.innerHTML = formattedNumber
		// 	},
		// })

  },[])

  const lenis = useLenis(({ scroll }) => {
		// called every scroll
	})



	return (
		<ReactLenis root>
			<main className="px-20 max-w-screen-4xl mx-auto">
				<header
					data-aos="fade"
					className="flex  py-12 justify-between items-center max-w-screen-xl w-full  mx-auto"
				>
					<div className="flex justify-center items-center gap-1">
						<img
							src="https://www.crowdsauce.co/cs.svg"
							className="h-9"
							alt="logo"
						/>
						<div className="flex flex-col leading-tight">
							<p className="text-neutral-200 uppercase ">Crowdsauce</p>
							<p className="text-gray-400 uppercase ">London, UK</p>
						</div>
					</div>
					<button className="px-12 py-4 uppercase rounded-full bg-[#FF5F5F]/80 text-neutral-800">
						Let&apos;s talk
					</button>
				</header>
				<main>
					<div className="hero max-w-4xl h-full mx-auto">
						<div
							className="flex justify-center z-20 h-[90vh] w-full 
          items-center relative"
						>
							<img
								data-aos="zoom-out"
								data-aos-delay="150"
								className="absolute h-full w-full"
								src="https://www.crowdsauce.co/img/hero.webp"
								alt=""
							/>
							<p
								data-aos="zoom-in"
								data-aos-delay="200"
								className="hero-text text-zinc-200 text-[8rem] leading-[0.85] text-pretty text-center my-auto z-20"
							>
								<span className="italic">FORWARD-THINKING</span> EVENT MARKETING
							</p>
						</div>
						<p
							data-aos="fade"
							data-aos-delay="300"
							data-aos-duration="2000"
							className={`${luxurious.className} top-0 -left-[25%] absolute text-[50dvw] text-neutral-700/50`}
							style={{ zIndex: -1 }}
						>
							Crowdsauce
						</p>
					</div>
					<div className="lines-section h-[400px]  overflow-hidden max-w-5xl mx-auto">
						<div
							data-aos="zoom-in-down"
							className="flex mt-36 items-center justify-center gap-16 "
						>
							<p className="uppercase text-zinc-400">technology</p>
							<div className="h-[2px] bg-zinc-400 w-full">.</div>
							<p className="uppercase text-zinc-400">creativity</p>
						</div>
						<div className="h-[2px] bg-gradient-to-r from-zinc-400 to-black w-full me-20 rotate-90">
							.
						</div>
					</div>
					<div className="flex flex-col pt-20 mx-auto max-w-screen-lg">
						<p className="text-start text-4xl text-zinc-400">
							DIGITAL AGENCY DELIVERING{' '}
							<span className="font-bold text-zinc-300 ">UNIQUE</span> TOUCH
							POINTS THAT SELL MORE TICKETS.
						</p>
						<div className="blob-container w-full h-[380px] my-32 flex justify-between items-end">
							<div
								data-aos="fade-up"
								data-aos-delay=""
								className="blob flex flex-col gap-8 justify-center items-center uppercase bg-neutral-700/90 rounded-full p-4 size-64"
							>
								<p
									className={`${luxurious.className} text-[10vw] text-zinc-200 leading-[0.5]`}
								>
									106
								</p>
								<div className="flex flex-col justify-center items-center leading-none">
									<p className="text-zinc-300 text-lg">events launched</p>
									<p className="text-zinc-400/70">in 2023</p>
								</div>
							</div>
							<div
								data-aos="fade-down"
								data-aos-delay="200"
								className="blob flex mb-auto flex-col gap-8 justify-center items-center uppercase bg-neutral-700/90 rounded-full p-4 size-64"
							>
								<p
									className={`${luxurious.className} text-[10vw] text-zinc-200 leading-[0.5]`}
								>
									111,000+
								</p>
								<div className="flex flex-col justify-center items-center leading-none">
									<p className="text-zinc-300 text-lg">tickets sold</p>
									<p className="text-zinc-400/70">in 2023</p>
								</div>
							</div>
							<div
								data-aos="fade-up"
								data-aos-delay=""
								className="blob flex flex-col gap-8 justify-center items-center uppercase bg-neutral-700/90 rounded-full p-4 size-64"
							>
								<p
									className={`${luxurious.className} text-[10vw] text-zinc-200 leading-[0.5]`}
								>
									£1.80
								</p>
								<div className="flex flex-col justify-center items-center leading-none">
									<p className="text-zinc-300 text-lg">AVG COST PER REG</p>
									<p className="text-zinc-400/70">in 2023</p>
								</div>
							</div>
						</div>
						<p className="text-start text-4xl [word-spacing:14px] mx-auto w-max text-zinc-400">
							<span className="font-bold text-zinc-300 uppercase mr-3">
								trusted by
							</span>
							THE FRONT-RUNNERS IN DANCE MUSIC...
						</p>
					</div>
					<div className="clients max-w-screen-2xl mx-auto grid grid-cols-6 gap-23 w-full py-24 mb-24 border-b-[60px] border-neutral-700 ">
						<img
							className="size-40"
							src="https://www.crowdsauce.co/clients/logos/boundary.svg"
							alt=""
						/>
						<img
							className="size-40"
							src="https://www.crowdsauce.co/clients/logos/boundary.svg"
							alt=""
						/>
						<img
							className="size-40"
							src="https://www.crowdsauce.co/clients/logos/boundary.svg"
							alt=""
						/>
						<img
							className="size-40"
							src="https://www.crowdsauce.co/clients/logos/boundary.svg"
							alt=""
						/>
						<img
							className="size-40"
							src="https://www.crowdsauce.co/clients/logos/boundary.svg"
							alt=""
						/>
						<img
							className="size-40"
							src="https://www.crowdsauce.co/clients/logos/boundary.svg"
							alt=""
						/>
					</div>
					<p className="text-center relative text-8xl w-3/5 mx-auto text-zinc-200 leading-[0.85] py-32">
						PROMOTERS LOVE THE SAUCE{' '}
						<span
							data-aos="fade-up"
							className={`${luxurious.className} absolute bottom-0 -top-[10%] -left-[30%] -translate-x-[70%] translate-y-[40%] -z-10 text-zinc-500/10 text-[50rem]`}
						>
							Sauce?
						</span>
					</p>
					<div className="flex flex-col gap-20 pb-48 max-w-screen-2xl mx-auto border-b-[50px] border-neutral-700">
						<div>
							<p className="w-1/2 italic text-sm text-zinc-400 uppercase leading-[1.2] mx-auto">
								/
							</p>
							<p className="text-left w-1/2 text-4xl text-zinc-400 uppercase leading-[1.2] mx-auto">
								OUR PROPRIETARY SOFTWARE{' '}
								<span className="text-zinc-200 font-bold">
									AUTOMATES MUNDANE TASKS
								</span>{' '}
								WHICH{' '}
								<span className="text-zinc-200 font-bold">
									FREES UP YOUR TIME
								</span>{' '}
								SO YOU CAN FOCUS ON MORE IMPORTANT STUFF.
							</p>
						</div>
						<div>
							<p className="w-1/2 italic text-sm text-zinc-400 uppercase leading-[1.2] mx-auto">
								{'//'}
							</p>

							<p className="text-left w-1/2 text-4xl text-zinc-400 uppercase leading-[1.2] mx-auto">
								TRUST THAT YOUR BUDGET IS IN{' '}
								<span className="text-zinc-200 font-bold">SAFE HANDS</span>. OUR
								FORMULA HAS BEEN{' '}
								<span className="text-zinc-200 font-bold">
									TESTED ON HUNDREDS OF EVENTS
								</span>{' '}
								AROUND THE WORLD.
							</p>
						</div>
						<div>
							<p className="w-1/2 italic text-sm text-zinc-400 uppercase leading-[1.2] mx-auto">
								{ "///"}
							</p>
							<p className="text-left w-1/2 text-4xl text-zinc-400 uppercase leading-[1.2] mx-auto">
								ACCESS THE{' '}
								<span className="text-zinc-200 font-bold">NEXT GENERATION</span>{' '}
								OF CREATIVE & TECHNICAL TALENT VIA AGILE MANAGEMENT SO YOU CAN
								LAUNCH WITH{' '}
								<span className="text-zinc-200 font-bold">MINIMAL FUSS.</span>
							</p>
						</div>
					</div>
					<p className="text-center relative text-8xl w-3/5 mx-auto text-zinc-200 leading-[0.85] py-32">
						SOFTWARE SOLUTIONS{' '}
						<span
							data-aos="fade-up"
							className={`${luxurious.className} absolute bottom-0 -top-[10%] -left-[45%] -z-10 text-zinc-500/10 text-[50rem]`}
						>
							Solutions
						</span>
					</p>
					<p className="text-pretty w-1/2 text-4xl text-zinc-400 uppercase leading-[1.2] mx-auto">
						NEVER UNDERESTIMATE THE POWER OF CAPTIVATING NEW AUDIENCES AND
						COLLECTING THEIR DATA - NO MATTER HOW BIG YOUR BRAND IS.
					</p>
				</main>
			</main>
		</ReactLenis>
	)
}
