export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          AI for Wise Guys
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Simple Starts to Super Skills – AI Made Easy for All Ages
        </p>
        <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-10">
          Whether you're a curious teen or a lifelong learner, master AI fundamentals and advanced techniques in one comprehensive course.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#pricing" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            View Pricing
          </a>
          <a href="#features" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
