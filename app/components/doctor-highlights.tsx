import { IconType } from "react-icons"
import { PiGraduationCap } from "react-icons/pi"
import { IoRibbonOutline, IoDesktopOutline } from "react-icons/io5"
import { RiToothLine } from "react-icons/ri"

type HighlightProps = {
  icon: IconType
  text: string,
}

export function DoctorHighLights() {
  return (
    <section className="-mb-8 p-4 w-full grid grid-cols-2 sm:grid-cols-4 items-center justify-center">
      <Highlight icon={PiGraduationCap} text="Graduada em Odontologia desde 2011"/>
      <Highlight icon={IoRibbonOutline} text="Especialista em Ortodontia desde 2016"/>
      <Highlight icon={RiToothLine} text="Atendimento particular e personalizado"/>
      <Highlight icon={IoDesktopOutline} text="Planejamento digital e scanner intraoral"/>
    </section>
  )
}

function Highlight({ icon: Icon, text }: HighlightProps) {
  return (
    <div className="w-52 p-4 sm:p-2 flex flex-row gap-2 items-center justify-self-center">
      <Icon className="text-blue-dark size-8 sm:size-12"/>
      <span className="text-blue-dark font-semibold text-xs sm:text:sm">{text}</span>
    </div>
  )
}
