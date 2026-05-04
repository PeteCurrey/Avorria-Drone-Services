// app/blog/[slug]/page.tsx
import { redirect } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function BlogArticleRedirect({ params }: Props) {
  const { slug } = await params
  redirect(`/resources/${slug}`)
}
