import { ImageSlider } from "./image-slider"

export function Office() {
  return (
    <div className="w-full p-8 gap-8 flex flex-col justify-center bg-foreground">
      <span className="text-3xl font-bold text-background">
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
