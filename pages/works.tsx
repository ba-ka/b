import { NextPage } from "next"
import Layout from "../components/layout"

const Works: NextPage = () => {
  const worksList = [
    { title: "empugaris.com", url: "https://empugaris.com/", description: "web slicing" },
    { title: "sehatcruises.com", url: "https://sehatcruises.com/", description: "web slicing" },
    { title: "duplen.id", url: "https://duplen.id/", description: "web slicing and design" },
    { title: "jaktel.com", url: "https://jaktel.com/", description: "web slicing" },
    { title: "phmi.co.id", url: "https://phmi.co.id/", description: "web slicing" }
  ]
  return (
    <Layout title="works">
      <div className="sm:container sm:mx-auto pt-8 sm:pt-12 px-6 sm:px-0">
        {worksList?.map((item) => (
          <figure className="bg-gray-50 border border-gray-900 mb-6" key={item?.title}>
            <div className="p-6 md:p-8 text-left space-y-4">
              <h2 className="text-4xl">{item.title}</h2>
              <blockquote>
                <p className="text-lg">
                  {item.description}
                </p>
              </blockquote>
              <a target="_blank" href={item.url} className="inline-block mt-3 mb-6 sm:mb-0 text-lg border border-gray-900 py-2 px-6 bg-transparent text-gray-900 hover:bg-gray-900 hover:text-gray-50 duration-200">
                <span className="text-md sm:text-lg duration-200">view</span>
              </a>
            </div>
          </figure>
          ))}
      </div>
    </Layout>
  )
}

export default Works
