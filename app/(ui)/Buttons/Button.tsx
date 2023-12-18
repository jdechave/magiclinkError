import { ButtonTypeOptions, ColorOptions } from "@/app/(lib)/typescript/definitions"
import { CSSProperties } from "react"

export default function Button({
   type,
   color,
   text,
   disabled = false,
   svg,
   buttonStyle,
   textStyle,
   onClick
}: {
   type: ButtonTypeOptions
   color: ColorOptions
   text: string
   disabled?: boolean
   svg?: JSX.Element
   buttonStyle?: CSSProperties
   textStyle?: CSSProperties
   onClick?: () => void
}) {
   const bgColor = {
      primary: "bg-primary",
      secondary: "bg-secondary",
      success: "bg-success",
      info: "bg-info",
      warning: "bg-warning",
      danger: "bg-danger",
      light: "bg-light",
      dark: "bg-dark",
      white: "bg-white",
      black: "bg-black",
      link: "bg-link"
   }[color]

   return (
      <button
         type={type}
         className={`${bgColor} hover:opacity-80 rounded-3xl px-4 py-2 text-white flex justify-center gap-2`}
         style={buttonStyle}
         disabled={disabled}
         onClick={onClick}
      >
         {svg && svg}
         <span style={textStyle}>{text}</span>
      </button>
   )
}
