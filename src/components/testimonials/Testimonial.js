import './testimonial.css'
import React from 'react'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// Import swiper core and required modules
import { Pagination } from 'swiper'

import {Swiper , SwiperSlide} from 'swiper/react'


// Import Swiper Styles
import 'swiper/css'
import 'swiper/css/pagination';

const Testimonial = () => {
  const data =[
    {
      avatar:AVTR1,
      name:"Tina Snow",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ducimus sequi rem labore similique nesciunt earum nam veritatis illo provident?"
    },
    {
      avatar:AVTR2,
      name:"Shatta Wale",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ducimus sequi rem labore similique nesciunt earum nam veritatis illo provident?"
    },
    {
      avatar:AVTR3,
      name:"Kwame Despite",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ducimus sequi rem labore similique nesciunt earum nam veritatis illo provident?"
    },
    {
      avatar:AVTR4,
      name:"Nama Ama McBrown",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ducimus sequi rem labore similique nesciunt earum nam veritatis illo provident?"
    }
 
    
  ]
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>  
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      
      modules={[Pagination]}
       
      spaceBetween =  {40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
    

        {
          data.map(({avatar , name , review}) => {
            return(

              <SwiperSlide className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt='imgage' />
                  
                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>
                    {review}
            
                  </small>
            </SwiperSlide>

            )
          })
        }
         

        
      
      </Swiper>
    </section>
  )
}

export default Testimonial
