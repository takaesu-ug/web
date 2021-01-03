import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { BasicFooter } from './footers/BasicFooter'
import { BasicHeader } from './headers/BasicHeader'

type Props = {
  title?: string
  description?: string
  ogImage?: string
  ogType?: string
  className?: string
}

export const BasicLayout: React.FC<Props> = ({ title, description, ogImage, ogType, children }) => {
  // TODO: configでデフォルトを設定するhooksとかほしいかも
  const siteName = 'TAKAS.DEV'
  const pageTitle = title || siteName
  const pageDescription = description || ''
  // TODO: 以下のようなのもあるからogタグ系はSSRかSSGで生成時に設定できるようにする
  const router = useRouter()
  const pagePath = router.pathname

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:url" content={pagePath} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content={ogType || 'website'} />
        {ogImage ?? <meta property="og:image" content={ogImage} />}

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BasicHeader />
      <div>{children}</div>
      <BasicFooter siteName={siteName} />
    </>
  )
}
