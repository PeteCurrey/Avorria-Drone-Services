import { notFound } from 'next/navigation'
import { getSeoPageByUrl } from '@/lib/seo-registry-mock'
import SEOTemplate from '@/components/seo/SEOTemplate'
import { Metadata } from 'next'

interface PageProps {
  params: Promise<{
    industry: string;
    service: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry, service } = await params
  const url = `/industries/${industry}/${service}`
  const page = getSeoPageByUrl(url)
  
  if (!page) return { title: 'Page Not Found' }
  
  return {
    title: page.seoTitle,
    description: page.metaDescription,
    alternates: {
      canonical: page.canonicalUrl
    },
    robots: {
      index: page.indexabilityStatus === 'Index',
      follow: true
    }
  }
}

export default async function ServiceSectorPage({ params }: PageProps) {
  const { industry, service } = await params
  const url = `/industries/${industry}/${service}`
  const page = getSeoPageByUrl(url)
  
  if (!page || page.status === 'Draft') {
    notFound()
  }
  
  return <SEOTemplate page={page} />
}
