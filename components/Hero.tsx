import HeroSlider from "./HeroSlider"

const Hero = () => {
  return (
    <section className='h-[80v] lg:h-[912px] bg-hero bg-cover bg-center bg-no-repeat' id="home">
      <div className="container mx-auto">
        {/* slider */}
        <HeroSlider />
      </div>
    </section>
  )
}

export default Hero