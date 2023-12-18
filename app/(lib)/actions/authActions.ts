"use server"
import { createClient } from "@/app/(lib)/supabase/server"

export const sendMagicLink = async (email: string, captchaToken: string) => {
   const origin = process.env.NEXT_PUBLIC_REDIRECT_ORIGIN
   const supabase = createClient()

   console.log("origin", origin)
   console.log("email", email)
   console.log("captchaToken", captchaToken)
   const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
         captchaToken,
         emailRedirectTo: `${origin}/auth/callback`
      }
   })
   if (error) {
      console.log("magic link error", error)
      throw new Error("There was an error sending the magic link.")
   }

   console.log("data", data)
   return { success: true }
}
