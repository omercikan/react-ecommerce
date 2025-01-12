import React from 'react'
import Helmet from 'react-helmet'
import AdvancedSeo from './advancedSeo';

interface Seos {
  title: string;
  description?: string;
  keywords?: string
}

const Seo: React.FC<Seos> = ({title, description, keywords}) => {
  return (
    <>
      <Helmet>
          <title>{title}</title>
          <meta name='description' content={description}/>
          <meta name='keywords' content={keywords}/>
          <meta property='og:title' content={title}/>
      </Helmet>

      <AdvancedSeo />
    </>
  )
}

export default Seo;