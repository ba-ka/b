const BannerSecond = ({ title }: { title?: string }) => {
  return (
    <div>
        <div className="relative h-48 md:h-96 block bg-left-bottom bg-[url('https://cdn.discordapp.com/attachments/813998309038620682/950946353029189662/gip.png')]">
            <div className="h-full w-full bg-gray-900/[0.25] absolute"></div>
            <div className="h-full sm:container sm:mx-auto">
              <div className="h-full flex items-center">
                  <div className="w-full align-middle text-left z-[2]">
                  <h1 className="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center text-gray-50">{title}</h1>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default BannerSecond
