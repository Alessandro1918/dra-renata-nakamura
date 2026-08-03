"use client"
// from npm package "react-slick":
import Slider from "react-slick"
// import dynamic from "next/dynamic"
// const Slider = dynamic(() => import("react-slick"), { ssr: false })
// from npm package "slick-carousel":
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

type ClinicItemProps = {
  src: string,
  description: string
}

// export function ClinicSlider(props: { images: string[] }) {
export function ClinicSlider(props: {images: ClinicItemProps[]}) {

  function PrevArrow(props: any) {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="flex items-center justify-center cursor-pointer absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-r-lg size-6 bg-gray-600/50 text-white font-bold text-lg"
      >
        {/* {"<"} */}
        <FaAngleLeft className="size-5" />
      </button>
    )
  }

  function NextArrow(props: any) {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="flex items-center justify-center cursor-pointer absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-l-lg size-6 bg-gray-600/50 text-white font-bold text-lg"
      >
        {/* {">"} */}
        <FaAngleRight className="size-5" />
      </button>
    )
  }

  return (
    <div className="w-90 md:w-96 aspect-auto rounded-lg overflow-hidden">
      <Slider 
        arrows
        autoplay
        autoplaySpeed={5000}  // step time - ms
        speed={1000} // transition time
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
      >
        {/* {props.images.map(e => ( */}
        {props.images.map(e => (
          <img
            key={e.description}
            src={e.src}
            alt={e.description}
            title={e.description}
            className="w-full h-full" // images 2:1
            // className="w-full min-w-72 md:min-w-96 max-h-52 md:max-h-64 object-cover" // images 1:2, to be cropped 2:1
          />
        ))}
      </Slider>
    </div>
  )
}
