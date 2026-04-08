import { Helmet } from "react-helmet-async";
import type { SEOProps } from "../types";
import { SEO_DATA } from "../constants";

export default function SEO({
  title = SEO_DATA.title,
  description = SEO_DATA.description,
  image = "/Logo-azul-title.svg",
  url = "http://localhost:5173/",
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
