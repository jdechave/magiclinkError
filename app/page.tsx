"use client"
import { Form, Formik, FormikProps } from "formik"
import { sendMagicLink } from "./(lib)/actions/authActions"
import { OtpFormValues, SetFieldValueFn } from "./(lib)/typescript/definitions"
import Button from "./(ui)/Buttons/Button"
import PageHeader from "./(ui)/Headers/PageHeader"
import TextInputFormik from "./(ui)/Inputs/TextInputFormik"
import HCaptcha from "@hcaptcha/react-hcaptcha"

export default function OTP() {
   const initialFormValues = {
      email: "",
      captchaToken: "",
      error: "",
      success: false
   }
   const handleSubmit = async (values: OtpFormValues, { setFieldValue }: { setFieldValue: SetFieldValueFn }) => {
      setFieldValue("error", "")
      try {
         const { success } = await sendMagicLink(values.email, values.captchaToken)
         if (success) return setFieldValue("success", true)
      } catch (error: any) {
         console.log(error)
         return setFieldValue("error", error.message)
      }
   }
   return (
      <div className="flex-1 w-full flex flex-col items-center animate-in">
         <PageHeader title="Magic Link Invitation" />
         <Formik initialValues={initialFormValues} onSubmit={handleSubmit} validateOnChange={false} validateOnBlur={false}>
            {(formikProps: FormikProps<OtpFormValues>) => {
               return (
                  <Form className="flex-1 flex flex-col w-full justify-center gap-2 sm:max-w-md" noValidate>
                     <TextInputFormik name="email" label="Email" formik={formikProps} />
                     <div className="m-2">
                        <HCaptcha
                           sitekey="416298bf-fbf9-4eba-a5e8-803089c9a6de"
                           onVerify={token => formikProps.setFieldValue("captchaToken", token)}
                        />
                     </div>
                     <Button type="submit" color="primary" text="Send Magic Link" />
                  </Form>
               )
            }}
         </Formik>
      </div>
   )
}
