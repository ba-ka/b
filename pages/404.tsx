import Link from 'next/link'
import type { NextPage } from 'next'
import Layout from '../components/layout'

const Contact: NextPage = () => {
  return (
    <Layout title="404 not found">
      <div className="sm:container sm:mx-auto pt-8 sm:pt-8 px-6 sm:px-0 text-center">
        <Link href="/">
        <a>
            go back home
        </a>
        </Link>
      </div>
    </Layout>
  )
}

export default Contact
