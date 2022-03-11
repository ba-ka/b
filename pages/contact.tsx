import type { NextPage } from 'next'
import Layout from '../components/layout'

const Contact: NextPage = () => {
  return (
    <Layout title="contact">
      <div className="sm:container sm:mx-auto pt-8 sm:pt-12 px-6 sm:px-0">
        other than in the list are fake
        <ul className="list-disc pl-6">
            <li><a target="_blank" rel="noopener noreferrer" href="https://ba-ka.org/discord">discord (server invite)</a> / datoyacx#5006 (personal)</li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://ba-ka.org/github">github</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.roblox.com/groups/6503101/bakahu">roblox</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCvFbESDODki3LoaeVlqNv4A">youtube</a></li>
        </ul>
      </div>
    </Layout>
  )
}

export default Contact
