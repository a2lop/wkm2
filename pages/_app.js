import 'tailwindcss/tailwind.css'
import Layout from '../app/components/layout/Layout'
import { AuthProvider } from '@utils'

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AuthProvider>
    )
}

export default MyApp
