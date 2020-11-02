import React from 'react'
import { Slide } from 'react-slideshow-image'
import '../App.css'
import 'react-slideshow-image/dist/styles.css'

const proprietes = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const SlideShow = () => {
  return (
    <div className="slide-container">
      <Slide {...proprietes}>
        <div className="each-slide">
          <div>
            <img src="images/slide-1.png" alt="img1" style={{width: 100 + '%'}}/>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src="images/slide-2.png" alt="img2" style={{width: 100 + '%'}}/>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src="images/slide-3.png" alt="img3" style={{width: 100 + '%'}}/>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src="images/slide-4.png" alt="img4" style={{width: 100 + '%'}}/>
          </div>
        </div>
      </Slide>
    </div>
  )
}
export default SlideShow