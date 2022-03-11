import type { NextPage } from 'next'
import Layout from '../components/layout'

const Games: NextPage = () => {
  const gamesList = [
    { title: "GHOST ID Project", url: "https://www.roblox.com/games/5253868577/gip", description: "Game about fighting the ghost using weapon. This game is inspired by zombie game in Roblox." }
  ]
  return (
    <Layout title="games">
      <div className="sm:container sm:mx-auto pt-8 sm:pt-12 px-6 sm:px-0">
        {gamesList?.map((item) => (
          <figure className="bg-gray-50 border border-gray-900 mb-6">
            <div className="p-6 md:p-8 text-left space-y-4">
              <h2 className="text-4xl">{item.title}</h2>
              <blockquote>
                <p className="text-lg">
                  {item.description}
                </p>
              </blockquote>
              <a target="_blank" href={item.url} className="inline-block mt-3 mb-6 sm:mb-0 text-lg border border-gray-900 py-2 px-6 bg-transparent text-gray-900 hover:bg-gray-900 hover:text-gray-50 duration-200">
                <span className="text-md sm:text-lg duration-200">play</span>
              </a>
            </div>
          </figure>
        ))}
      </div>
    </Layout>
  )
}

export default Games
