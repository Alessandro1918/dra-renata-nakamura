"use client"
import { useState, useEffect } from "react"
// from npm package "react-slick":
import Slider from "react-slick"
// import dynamic from "next/dynamic"
// const Slider = dynamic(() => import("react-slick"), { ssr: false })
// from npm package "slick-carousel":
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { ReviewItem, ReviewItemProps } from "./review-item"

export function ReviewSlider(props: { reviews: ReviewItemProps[] }) {

  const [ isDesktop, setIsDesktop ] = useState(false)

  // Any screen width equal or below the value hardcoded here is "mobile"
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
        autoplaySpeed={3000} // step time
        speed={1000} // transition time
        slidesToShow={isDesktop? 3 : 1}
        responsive={[
          {
            // lg:
            breakpoint: 1024,
            settings: {slidesToShow: 3}
          }, {
            // md:
            breakpoint: 768,
            settings: {slidesToShow: 2}
          }, {
            // Largest breakpoint with same "slidesToShow" as "mobile".
            // Copy this value to the "useEffect" above
            // sm:
            breakpoint: 640,
            settings: {slidesToShow: 1}
          }
        ]}
      >
        {props.reviews.map(e => (
          <ReviewItem key={e.reviewer_name} {...e} />
        ))}
      </Slider>
    </div>
  )
}
