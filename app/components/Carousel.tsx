import Image from 'next/image'
import React from 'react'

const Carousel = () => {
  const carouselItems = [
    {
      image: '/advogados.png',
      url: ''
    },
    {
      image: '/advogados.png',
      url: ''
    },
    {
      image: '/advogados.png',
      url: ''
    },
    {
      image: '/advogados.png',
      url: ''
    }
  ]
  return (
    <>    <div className="flex mt-20 space-x-10 overflow-x-hidden">
      {carouselItems && carouselItems.map((item) => (
        <div className="shrink-0" key={item.url}>
          <Image className="object-fill" src={item.image} width={600} height={600} alt={item.url} />
        </div>
      ))}
    </div>
      <div className="flex mt-20 space-x-10 overflow-x-hidden">
        {carouselItems && carouselItems.map((item) => (
          <div className="shrink-0" key={item.url}>
            <Image className="object-fill" src={item.image} width={600} height={600} alt={item.url} />
          </div>
        ))}
      </div>
    </>

  )
}

export default Carousel