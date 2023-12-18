export type ColorOptions = "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "light" | "dark" | "white" | "black" | "link"

export type InputTypeOptions =
   | "text"
   | "password"
   | "email"
   | "number"
   | "tel"
   | "url"
   | "search"
   | "date"
   | "datetime-local"
   | "time"
   | "week"
   | "month"
   | "file"
   | "image"
   | "color"

export type ButtonTypeOptions = "button" | "submit" | "reset"

export type OtpFormValues = {
   email: string
   captchaToken: string
   error: string
   success: boolean
}

export type SetFieldValueFn = (field: string, value: any, shouldValidate?: boolean) => void
