import { InputTypeOptions } from "@/app/(lib)/typescript/definitions"
import { Field, FormikProps } from "formik"
import { CSSProperties } from "react"

interface TextInputFormikProps {
   name: string
   label: string
   formik: FormikProps<any>
   type?: InputTypeOptions
   placeholder?: string
   required?: boolean
   onFocus?: () => void
   onBlur?: () => void
   containerStyle?: CSSProperties
   labelStyle?: CSSProperties
   inputStyle?: CSSProperties
   ariaDescribedBy?: string
}

export default function TextInputFormik({
   name,
   label,
   formik,
   type = "text",
   placeholder = "",
   required = false,
   onFocus,
   onBlur,
   containerStyle,
   labelStyle,
   inputStyle,
   ariaDescribedBy
}: TextInputFormikProps) {
   return (
      <div className="form-control w-full" style={containerStyle}>
         <label className="label label-text" htmlFor={name} style={labelStyle}>
            {label}
         </label>
         <Field
            type={type}
            name={name}
            placeholder={placeholder}
            className="input input-bordered w-full rounded-3xl bg-transparent h-auto"
            required={required}
            style={inputStyle}
            onFocus={() => {
               onFocus && onFocus()
            }}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
               formik.handleBlur(e)
               onBlur && onBlur()
            }}
            aria-describedby={ariaDescribedBy}
         />
      </div>
   )
}
