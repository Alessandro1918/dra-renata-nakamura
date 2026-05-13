import { ImageSlider } from "./image-slider"

export function Office() {
  return (
    <div className="w-full p-8 gap-8 flex flex-col zitems-center justify-center">
      <span className="text-primary text-3xl font-bold">
        Consultório:
      </span>
      <ImageSlider 
        images={[
          "/assets/office/consult1.jpg", 
          "/assets/office/consult2.jpg"
        ]}
      />
    </div>
  )
}
