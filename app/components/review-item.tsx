import { FaStar, FaRegStar } from "react-icons/fa"

export type ReviewItemProps = {
  reviewer_name: string
  reviewer_image?: string,
  stars: number,
  description: string,
  url?: string
}

export function ReviewItem(props: ReviewItemProps) {
  return (
    <div className="mx-4 gap-2 flex flex-col items-center">
      <Avatar 
        image={props.reviewer_image}
        name={props.reviewer_name}
      />
      <span>{props.reviewer_name}</span>
      <Stars count={props.stars}/>
      <p className="text-justify">{props.description}</p>
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