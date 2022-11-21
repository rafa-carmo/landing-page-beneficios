import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import Slider, { Settings } from 'react-slick'

import { Button } from '../Button'

// const Sliders = []

type SliderProps = {
  title: string
  subtitle?: string
  image: string
  button: {
    title?: string
    url: string
  }
}
export interface SliderComponentProps {
  sliders: SliderProps[]
}

export function SliderComponent({ sliders }: SliderComponentProps) {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false
  }

  return (
    <div className="w-full bg-zinc-300 my-4">
      <Slider {...settings}>
        {sliders.map((item) => (
          <div key={item.title} className="md:h-[652px] h-96 relative">
            <div className="w-full h-full flex -mt-6 flex-col items-center justify-center relative z-10 gap-14 ">
              <div className="text-center md:w-2/4 w-3/4 flex flex-col gap-4">
                <h3 className="md:text-7xl text-3xl font-bold text-primary-500">
                  {item.title}
                </h3>
                <h4 className="md:text-4xl">{item.subtitle}</h4>
              </div>
              <button className="bg-primary-500 text-zinc-100 font-light text-lg py-2 px-5 md:py-4 md:px-10 rounded-lg md:rounded-sm hover:bg-primary-300 transition-colors">
                {item.button.title}
              </button>
            </div>

            <div className="absolute top-0 right-0 left-0 bottom-0">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={item.image}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
