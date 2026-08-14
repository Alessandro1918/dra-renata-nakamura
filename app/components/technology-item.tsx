import { IoMdCheckmarkCircleOutline } from "react-icons/io"

export function TechItem(props: { text: string }) {
  return (
    <span className="flex flex-row items-center gap-2">
      <IoMdCheckmarkCircleOutline className="size-5" />
      {props.text}
    </span>
  )
}
