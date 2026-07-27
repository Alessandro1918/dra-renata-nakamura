import { RiToothLine } from "react-icons/ri"
import { FaChevronRight } from "react-icons/fa6"
// https://thenounproject.com
// SVG as plain <img/>. No react component, no customizable props. Color hardcoded into the svg file.

export type TreatmentStepProps = {
  index: string,
  icon: string,
  title: string,
  description: string
}

export function TreatmentStep(props: TreatmentStepProps) {
  return (
    <div className="mx-auto w-full lg:w-96 relative flex flex-row gap-4 items-center justify-center">
      {/* <RiToothLine className="text-blue-dark size-8 lg:size-12 shrink-0" /> */}
      <img 
        src={props.icon}
        className="size-12"
      />
      <div className="flex flex-col gap-4">
        <span className="text-blue-dark text-xl font-bold">
          {props.index}
        </span>
        <span className="text-blue-dark font-bold">
          {props.title}
        </span>
        <p>
          {props.description}
        </p>
      </div>
      {
        props.index != "05" &&
        <FaChevronRight className="text-blue-dark size-10 absolute right-0 lg:-right-6 z-10" />
      }
    </div>
  )
}
