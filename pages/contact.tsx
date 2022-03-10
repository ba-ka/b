import type { NextPage } from 'next'
import Layout from '../components/layout'

const Contact: NextPage = () => {
  return (
    <Layout title="contact">
      <div className="sm:container sm:mx-auto pt-8 sm:pt-12 px-6 sm:px-0">
        other than in the list are fake
        <ul className="list-disc pl-6">
            <li><a target="_blank" rel="noopener noreferrer" href="https://ba-ka.org/discord">discord</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://ba-ka.org/github">github</a></li>
        </ul>
      </div>
    </Layout>
  )
}

export default Contact
