import { Helmet } from 'react-helmet-async'

/**
 * SEO Component for dynamic meta tags
 * Usage: <SEO title="Page Title" description="Page description" image="/path/to/image.jpg" />
 */
export default function SEO({
  title = 'Lachi - Authentic Nepali Flavors in Every Bite!',
  description = 'Experience authentic Nepali cuisine at Lachi. Enjoy traditional dishes like momo, thukpa, chowmein, and more. Delicious flavors delivered to your doorstep or visit us today!',
  image = '/assets/images/hero-banner.png',
  logo = '/assets/images/logo/logo.jpeg',
  pathname = '/',
  articlePublishedTime,
  articleModifiedTime,
  section,
  tags,
}) {
  const baseUrl = 'https://lachi.com'
  const fullUrl = `${baseUrl}${pathname || '/'}`
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`
  const fullLogoUrl = logo.startsWith('http') ? logo : `${baseUrl}${logo}`

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Lachi" />
      {articlePublishedTime && <meta property="article:published_time" content={articlePublishedTime} />}
      {articleModifiedTime && <meta property="article:modified_time" content={articleModifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags && tags.map((tag, index) => <meta key={index} property="article:tag" content={tag} />)}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={title} />

      {/* Additional SEO Enhancements */}
      <meta name="geo.region" content="NP-01" />
      <meta name="geo.placement" content="30" />
      <meta name="geo.position" content="26.8098;88.0833" />
      <meta name="ICBM" content="26.8098, 88.0833" />

      {/* Facebook Profile */}
      <meta property="fb:page_id" content="" />

      {/* Logo for Pinterest and other platforms */}
      <meta name="p:domain_verify" content="" />
      <link rel="image_src" href={fullLogoUrl} />
    </Helmet>
  )
}
