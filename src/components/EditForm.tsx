'use client'
import * as actions from '@/actions'
import Editor from "@monaco-editor/react"
import type { Snippet } from "@prisma/client"
import { useState } from "react"


// props from the Server Component
interface Props {
    snippet: Snippet
}

export default function EditForm({ snippet }: Props) {
  const [code, setCode] = useState(snippet.code)
  
  const handleEditorChange = (value: string = "") => {
    setCode(value)
  }
  // function to edit snippet
  // call the server action in client component
  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code)
  return (
    <div>
      <Editor height="40vh" theme="vs-dark" language="javascript" defaultValue={snippet.code} options={{minimap: {enabled: false}}} onChange={handleEditorChange} />
      <form action={editSnippetAction}>
        <button type='submit' className='p-2 border rounded'>Save</button>
      </form>
    </div>

  )
}
