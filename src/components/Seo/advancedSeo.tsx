import React from 'react';
import { Helmet } from 'react-helmet';

const AdvancedSeo: React.FC = () => {
  return (
    <Helmet>
      {/* Favicon */}
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      
      {/* SEO Meta Tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Trendly offers the latest fashion and tech products at great prices with fast delivery and excellent service. Shop now for the best trends in fashion, electronics, and accessories." />
      <meta name="keywords" content="e-commerce, fashion, technology, electronics, clothing, accessories, online shopping, fast delivery, quality products" />
      <meta name="author" content="Trendly" />
      <link rel="canonical" href="https://react-ecommerce-omer.netlify.app/" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Trendly - Latest Fashion & Tech Products" />
      <meta property="og:description" content="Trendly offers the latest fashion and tech products at unbeatable prices. Quality products, fast delivery, and great customer service right here." />
      <meta property="og:image" content="https://react-ecommerce-omer.netlify.app//images/og-image.jpg" />
      <meta property="og:url" content="https://react-ecommerce-omer.netlify.app/" />
      <meta property="og:type" content="website" />

      {/* X Card Meta Tags */}
      <meta name="x:card" content="summary_large_image" />
      <meta name="x:title" content="Trendly - Latest Fashion & Tech Products" />
      <meta name="x:description" content="Trendly offers the latest fashion and tech products at unbeatable prices. Quality products, fast delivery, and great customer service right here." />
      <meta name="x:image" content="https://react-ecommerce-omer.netlify.app//images/x-card.jpg" />
      <meta name="x:url" content="https://react-ecommerce-omer.netlify.app/" />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Trendly",
            "url": "https://react-ecommerce-omer.netlify.app/",
            "description": "Trendly offers the latest fashion and tech products at the best prices with fast delivery.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://react-ecommerce-omer.netlify.app//search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "sameAs": [
              "https://www.facebook.com/trendly",
              "https://x.com/trendly"
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

export default AdvancedSeo;
