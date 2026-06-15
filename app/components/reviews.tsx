import reviews from "../../public/reviews.json"
import { ReviewSlider } from "./review-slider"

export function Reviews() {
  return (
    <div className="p-8 w-full gap-8 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-blue-dark">
        Avaliações
      </h2>
      <ReviewSlider 
        reviews={[...reviews]}
      />
    </div>
  )
}
