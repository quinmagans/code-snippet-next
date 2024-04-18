'use client'


interface Props {
    error: Error;
}

export default function ErrorPage({ error }: Props) {
  return (
    <div>{error.message}</div>
  )
}
