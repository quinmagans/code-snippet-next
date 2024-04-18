'use client'
import * as actions from "@/actions";
import { useFormState } from "react-dom";


export default function SnippetCreatePage() {
    // call useFormstate from react-dom
    // first argument, call the actions
    // second argument, the initial state
    // first state: formState is an object that updated and changed overtime communicated from server actions to page or client
    // second state: action is the updated version of server action
    const [formState, action] = useFormState(actions.createSnippet, {message: ""})
     
  return (
   <form action={action}>
    <h3 className="font-bold m-3">Create a new snippet</h3>
    <div className="flex flex-col gap-4">
        <div className="flex gap-4">
            <label className="w-12" htmlFor="title">
                Title
            </label>
            <input name="title" className="border rounded p-2 w-full" id="title" />

        </div>
        <div className="flex gap-4">
            <label className="w-12" htmlFor="code">
                Code
            </label>
            <textarea name="code" className="border rounded p-2 w-full" id="code" />

        </div>
        {formState.message ? <div className="my-2 p-2 bg-red-200 border rounded border-red-400">{formState.message}</div> : null}
        <button type="submit" className="rounded p-2 bg-blue-200">
            Create
        </button>
    </div>
   </form>
  )
}