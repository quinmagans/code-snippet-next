import EditForm from "@/components/EditForm";
import { db } from "@/db";
import { notFound } from "next/navigation";


interface Props {
    params: {
        id: string
    }
}
export default async function EditPage(props: Props) {
    const id = parseInt(props.params.id);
    const snippet = await db.snippet.findFirst({
        where: {
            id
        }
    })
    if (!snippet) {
        return notFound();
    }
  return (
    <div>
       <EditForm snippet={snippet} />
    </div>
  )
}
