import { db } from "@/db";
import Link from "next/link";

// on demand caching 

export default async function Home() {
  // get all the snippets of the database
  const snippets = await db.snippet.findMany()

  const renderedSnippets = snippets.map((snip) => {
    return (
      <Link key={snip.id} href={`/snippets/${snip.id}`} className="flex justify-between items-center p-2 border rounded">
        <div>{snip.title}</div>
        <div>View</div>

      </Link>
    )
  })
  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href="/snippets/new" className="border p-2 rounded">New</Link>
      </div>
      <div className="flex flex-col gap-2">
      {renderedSnippets}
      </div>
      </div>
  );
}
