"use client"
import { useState, useEffect } from "react"
// from npm package "react-slick":
import Slider from "react-slick"
// import dynamic from "next/dynamic"
// const Slider = dynamic(() => import("react-slick"), { ssr: false })
// from npm package "slick-carousel":
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { FaStar, FaRegStar } from "react-icons/fa"

type ReviewProps = {
  reviewer_name: string
  reviewer_image?: string,
  stars: number,
  description: string,
  url?: string
}

export function ReviewSlider(props: { reviews: ReviewProps[] }) {

  const [ isDesktop, setIsDesktop ] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(min-width: 640px)")
    function update() {
      setIsDesktop(media.matches)
    }
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  return (
    <div className="w-full">
      <Slider 
        arrows
        autoplay
        autoplaySpeed={5000}  // step time
        speed={1000} // transition time
        slidesToShow={isDesktop? 3 : 1}
        responsive={[
          {
          breakpoint: 1024,
          settings: {slidesToShow: 3}
          }, {
            breakpoint: 768,
            settings: {slidesToShow: 2}
          } , {
            breakpoint: 640,
            settings: {slidesToShow: 1}
          }
        ]}
      >
        {props.reviews.map(e => (
          <div key={e.reviewer_name}>
            <div className="sm:px-8 gap-2 flex flex-col items-center">
              <Avatar 
                image={e.reviewer_image}
                name={e.reviewer_name}
              />
              <span>{e.reviewer_name}</span>
              <Stars count={e.stars}/>
              <p className="text-justify">{e.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

function Avatar(props: {image?: string, name: string}) {
  function getInitials(name: string) {
    return `${name.split(" ")[0][0]}${name.split(" ")[name.split(" ").length-1][0]}`
  }
  return (
    <div className="relative size-12 rounded-full bg-blue-dark flex items-center justify-center">
      {
        props.image
          ? <img className="size-12 rounded-full" src={props.image} />
          : <span className="text-white text-xl">{getInitials(props.name)}</span>
      }
      <img 
        src="/assets/logo-google.png"
        className="absolute size-6 mt-8 ml-8 bg-white rounded-full p-0.5"
      />
    </div>
  )
}

function Stars(props: {count: number}) {
  // ex: 4 stars out of 5: x x x x o
  return (
    <div className="flex flex-row gap-1">
      {
        [...Array(props.count)].map((_, i) =>
          <FaStar key={i} className="text-yellow-400" />
        )
      }
      {
        [...Array(5 - props.count)].map((_, i) => 
          <FaRegStar key={i} className="text-yellow-400" />
        )
      }
    </div>
  )
}
