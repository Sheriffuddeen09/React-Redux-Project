import watch from './product/watch2.jpg'
import hp from './product/hp laptop.png'
import iphoneii from './product/iphone 13.jpg'
import ring from './product/ring.jpg'
import tele from './product/tele.webp'
import watche from './product/watch.jpg'
import iphonei from './product/iphone 11.jpg'
import jean from './product/jeans2.png'
import shirt from './product/shirt.webp'

import Icon from './images/gg.jpg'
import laptop from './images/hp laptop.png'
import imagea from './images/image-1.jpeg'
import imageb from './images/image-2.jpeg'
import imagec from './images/image-3.jpeg'
import imaged from './images/theme 2.jpg'
import logoa from './images/Logo-1.png'
import themeb from './images/themmes.jpg'
import trust from './images/trust in Allah.jpg'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'

const SliderPost = () =>{


    return(
            <div className='postslide'>
        <Swiper  
        freeMode= {true}
        grabCursor={true}
        slidesPreview={4}
        spaceBetween={-830}>
            <SwiperSlide>
            <div className="imapad"> 
            <img className='imalist' src={watch} alt='order' width={140} height={200}/>
            <img className='shortimg' src={Icon} alt='order' width={40} height={40}/>
            <p className='shift'>Watch</p>
            <p className='amo'>1</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="imapad"> 
            <img className='imalist' src={tele} alt='order' width={140} height={200}/>
            <img className='shortimg' src={laptop} alt='order' width={40} height={40}/>
            <p className='shift'>Television</p>
            <p className='amo'>1</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="imapad"> 
            <img className='imalist speima' src={hp} alt='order' width={140} height={200}/>
            <img className='shortimg' src={imagea} alt='order' width={40} height={40}/>
            <p className='shift'>Laptop</p>
            <p className='amo'>1</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="imapad"> 
            <img className='imalist' src={iphoneii} alt='order' width={140} height={200}/>
            <img className='shortimg' src={imageb} alt='order' width={40} height={40}/>
            <p className='shift'>Iphone 13</p>
            <p className='amo'>1</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="imapad"> 
            <img className='imalist' src={watche} alt='order' width={140} height={200}/>
            <img className='shortimg' src={imagec} alt='order' width={40} height={40}/>
                <p className='shift'>Watch</p>
                <p className='amo'>1</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="imapad"> 
            <img className='imalist' src={shirt} alt='order' width={140} height={200}/>
            <img className='shortimg' src={imaged} alt='order' width={40} height={40}/>
                <p className='shift'>Shirt</p>
                <p className='amo'>1</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="imapad"> 
            <img className='imalist' src={ring} alt='order' width={140} height={200}/>
            <img className='shortimg' src={logoa} alt='order' width={40} height={40}/>
                <p className='shift'>Ring</p>
                <p className='amo'>1</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="imapad"> 
            <img className='imalist' src={iphonei} alt='order' width={140} height={200}/>
            <img className='shortimg' src={trust} alt='order' width={40} height={40}/>
                <p className='shift'>Iphone 11</p>
                <p className='amo'>1</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="imapad"> 
             <img className='imalist' src={jean} alt='order' width={140} height={200}/>
             <img className='shortimg' src={themeb} alt='order' width={40} height={40}/>
            <p className='shift'>Jean</p>
            <p className='amo'>1</p>                
            </div>
            </SwiperSlide>
     </Swiper>
            </div>
    )
}
export default SliderPost