const CallToAction = () => {
    return (
      <section className="relative h-96 w-full bg-primaryRed">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('/cta-background.jpg')", 
            opacity: 0.6 
          }}
        ></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 max-w-2xl">
            ELEVATE YOUR BRAND WITH CUSTOM SOLUTIONS
          </h2>
          <p className="text-white text-lg mb-8 max-w-xl">
            From concept to creation, we offer end-to-end branding services tailored to your unique vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/contact" 
              className="px-8 py-3 bg-white text-black font-bold hover:bg-gray-200 transition-colors"
            >
              Get a Quote
            </a>
            <a 
              href="/portfolio" 
              className="px-8 py-3 border border-white text-white font-bold hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              See Our Work
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default CallToAction;