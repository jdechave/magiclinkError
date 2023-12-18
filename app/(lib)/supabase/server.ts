import { createServerClient, type CookieOptions } from "@supabase/ssr"
import { cookies } from "next/headers"

export const createClient = () => {
   const cookieStore = cookies()
   return createServerClient(
      "https://jujxrbmcxpjxczjettap.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1anhyYm1jeHBqeGN6amV0dGFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyOTY3NzcsImV4cCI6MjAxNjg3Mjc3N30.BX8R3iq5VQP2DoDxadRzxhTqUjj-NXVneTT-c0Zcgeg",
      {
         cookies: {
            get(name: string) {
               return cookieStore.get(name)?.value
            },
            set(name: string, value: string, options: CookieOptions) {
               try {
                  cookieStore.set({ name, value, ...options })
               } catch (error) {
                  // The `set` method was called from a Server Component.
                  // This can be ignored if you have middleware refreshing
                  // user sessions.
               }
            },
            remove(name: string, options: CookieOptions) {
               try {
                  cookieStore.set({ name, value: "", ...options })
               } catch (error) {
                  // The `delete` method was called from a Server Component.
                  // This can be ignored if you have middleware refreshing
                  // user sessions.
               }
            }
         }
      }
   )
}
