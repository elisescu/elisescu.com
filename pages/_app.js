import '../styles/index.css'
import posthog from 'posthog-js'

if (typeof window !== 'undefined') {
  posthog.init('phc_OisA5lvLboCSR3VzYhqmXqNNQf0A91yybVKXMJiHNu5', {
    api_host: 'https://eu.posthog.com',
  })
}

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
