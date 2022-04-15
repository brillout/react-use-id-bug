import ReactDOM from 'react-dom/client'
import React from 'react'
import { getPage } from 'vite-plugin-ssr/client'
import { PageShell } from './PageShell'

hydrate()

async function hydrate() {
  // We do Server Routing, but we can also do Client Routing by using `useClientRouter()`
  // instead of `getPage()`, see https://vite-plugin-ssr.com/useClientRouter
  const pageContext = await getPage()
  const { Page, pageProps } = pageContext
  const root = ReactDOM.createRoot(document.getElementById('page-view'))
  root.render(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )
}
