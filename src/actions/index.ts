'use server'

import { db } from "@/db"
import { redirect } from "next/navigation"

export async function editSnippet(id: number, code: string) {
   // update data from db (prisma)
   await db.snippet.update({
    where: {id},
    data: {code},
   })
   
   // after updating, redirect the user to the snippet id
   redirect(`/snippets/${id}`)
}

export async function deleteSnippet(id: number) {
   await db.snippet.delete({
      where: {id},
   })
   redirect('/')
}

export async function createSnippet(formState: {message: string}, formData: FormData ) {

   try {
      // check the user's inputs and make sure they're valid
   const title = formData.get('title');
   const code = formData.get('code');

   // validation error for title
   if (typeof title !== 'string' || title.length < 3) {
      return {
         message: 'Title must be longer'
      }
   }

   // validation error for code
   if (typeof code !== 'string' || code.length < 10) {
      return {
         message: 'Code must be longer'
      }
   }

   // create a new snippet record in the database
   await db.snippet.create({
       data: {
           title,
           code,
       }
   })
   // console.log(snippet);

   } catch (error: unknown) {
      if (error instanceof Error) {
         return {
            message: error.message
         }
      } else {
         return {
            message: 'Unknown error'
         }
      }
   }
   // redirect user back to root route
   redirect('/'); 
}