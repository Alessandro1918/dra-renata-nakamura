"use client"
// from npm package "react-slick":
// import Slider from "react-slick"
import dynamic from "next/dynamic"
const Slider = dynamic(() => import("react-slick"), { ssr: false })
// from npm package "slick-carousel":
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export function ImageSlider(props: { images: string[] }) {

  function PrevArrow(props: any) {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="flex items-center justify-center cursor-pointer absolute left-0 top-1/2 z-10 -translate-y-1/2 p-2 size-6 bg-gray-800/50 text-white font-bold text-lg"
      >
        {"<"}
      </button>
    )
  }

  function NextArrow(props: any) {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="flex items-center justify-center cursor-pointer absolute right-0 top-1/2 z-10 -translate-y-1/2 p-2 size-6 bg-gray-800/50 text-white font-bold text-lg"
      >
        {">"}
      </button>
    )
  }

  return (
    <div className="w-96 aspect-auto rounded-lg">
      <Slider 
        arrows
        autoplay
        autoplaySpeed={5000}  // step time - ms
        speed={1000} // transition time
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
      >
        {props.images.map((e, i) => (
          <img
            key={i}
            src={e}
            className="w-full h-full object-cover rounded-lg"
          />
        ))}
      </Slider>
    </div>
  )
}
