    <section id="rates" className="relative bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-orange-400/5 to-blue-900/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#FF6B35] sm:text-5xl">
            <span className="text-5xl sm:text-6xl">Rates</span>
            <div className="text-2xl sm:text-3xl text-[#2DD4BF]">Simple & Transparent</div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rates.map((rate, index) => (
            <div 
              key={index}
              className="relative p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden backdrop-blur-sm border border-white/20 before:absolute before:inset-0 before:-z-10 before:content-[''] before:bg-gradient-to-r before:animate-gradient-flow"
              style={{
                '--gradient-start': index === 0 ? '#FF6B35' : index === 1 ? '#FF4D6D' : index === 2 ? '#845EC2' : '#FFD93D',
                '--gradient-mid': index === 0 ? '#FF4D6D' : index === 1 ? '#845EC2' : index === 2 ? '#FFD93D' : '#FF8C42',
                '--gradient-end': index === 0 ? '#FF8C42' : index === 1 ? '#FF6B35' : index === 2 ? '#FF4D6D' : '#845EC2'
              } as React.CSSProperties}
            >
              <div className="flex flex-col items-center relative z-10">
                <div className={`flex items-center justify-center w-12 h-12 rounded-md text-white
                  bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)]`}>
                  <rate.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900 text-center">{rate.name}</h3>
                <p className="mt-2 text-base text-gray-700 text-center">{rate.description}</p>
                <p className="mt-4 text-2xl font-bold text-[#2DD4BF]">{rate.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> 