export default function ComponentsPage({ params }: { params: { slug: string } }) {
  return (
    <div>ComponentsPage - Slug: {params.slug}</div>
  )
}
