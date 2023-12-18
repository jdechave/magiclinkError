import { CSSProperties } from "react"

export default function PageHeader({ title, style }: { title: string; style?: CSSProperties }) {
   return (
      <h1 className={`text-3xl font-bold text-primary`} style={style}>
         {title}
      </h1>
   )
}
