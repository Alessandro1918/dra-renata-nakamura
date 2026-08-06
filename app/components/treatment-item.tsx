type TreatmentItemProps = {
  title: string,
  description: string
}

export function TreatmentItem({ title, description }: TreatmentItemProps) {
  return (
    <div className="p-4 flex flex-col gap-2 bg-white rounded-lg shadow-lg">
      <span className="font-bold">
        {title}
      </span>
      <p>
        {description}
      </p>
    </div>
  )
}