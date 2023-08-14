"use client";
import Carousel from 'react-bootstrap/Carousel';

import Image from 'next/image';
import Image1 from "../../../public/images/image 1.png"
import Image2 from "../../../public/images/image 2.png"
import Image3 from "../../../public/images/image 3.png"

import "./MainSlider.css"

export default function MainSlider() {
  return (
    <div className="px-28 pt-5 main-slider">
      <Carousel>
        <Carousel.Item>
          <div className='slider__main-1 w-full h-[500px]'>
            <Image src={Image1} alt='Picture' className='h-full w-full object-cover' />
          </div>
          <Carousel.Caption>
            <div>
              <p>Social Development</p>
              <h3 className='font-bold'>Women promote peace</h3>
              <p className='text-sm'>An information network is supporting women activists to boost their participation in peace processes.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='slider__main-2 w-full h-[500px]'>
            <Image src={Image2} alt='Picture' className='h-full w-full object-cover' />
          </div>
          <Carousel.Caption>
            <div>
              <p>Social Development</p>
              <h3 className='font-bold'>Women promote peace</h3>
              <p className='text-sm'>An information network is supporting women activists to boost their participation in peace processes.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='slider__main-3 w-full h-[500px]'>
            <Image src={Image3} alt='Picture' className='h-full w-full object-cover' />
          </div>
          <Carousel.Caption>
            <div>
              <p>Social Development</p>
              <h3 className='font-bold'>Women promote peace</h3>
              <p className='text-sm'>An information network is supporting women activists to boost their participation in peace processes.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
