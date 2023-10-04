import "./testimonial.css";
import map from "../../asssets/testimonials/map-1-1.png";
import Client1 from "../../asssets/testimonials/client 1.jpg";
import Client2 from "../../asssets/testimonials/client 2.jpg";
import Client3 from "../../asssets/testimonials/client 3.jpg";
import Client4 from "../../asssets/testimonials/client 4.jpg";
import React, { useState, useEffect } from 'react';
import { Carousel, CarouselItem } from "react-bootstrap";

export default function Testimonals() {

    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
          quote:
            'I have tried a lot of food delivery services but Plate is something out of this world! Their food is really healthy and it tastes great, which is why I recommend this company to all my friends!',
          author: 'Peter Lee',
          imgSrc: 'https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png',
        },
        {
          quote:
            'Another testimonial goes here...',
          author: 'John Doe',
          imgSrc: 'https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-02-306x306.png',
        },
        {
          quote:
            'And one more testimonial...',
          author: 'Jane Smith',
          imgSrc: 'https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png',
        },
      ];
    
      const handleIndicatorClick = (index) => {
        setActiveTestimonial(index);
      };
    
      useEffect(() => {
        document.querySelectorAll('.slider .swiper-pagination span').forEach((element, i) => {
          element.textContent = `${i + 1}`.padStart(2, '0');
        });
      }, []);
  return (
    <>
         <section className="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block">
            <ol className="carousel-indicators tabs">
              {testimonials.map((_, index) => (
                <li
                  key={index}
                  className={index === activeTestimonial ? 'active' : ''}
                  onClick={() => handleIndicatorClick(index)}
                >
                  <figure>
                    <img
                      src={testimonials[index].imgSrc}
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                </li>
              ))}
            </ol>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-interval="false"
              data-ride="carousel"
            >
              <h3>WHAT OUR CLIENTS SAY</h3>
              <h1>TESTIMONIALS</h1>
              <div className="carousel-inner">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === activeTestimonial ? 'active' : ''}`}
                  >
                    <div className="quote-wrapper">
                      <p>{testimonials[index].quote}</p>
                      <h3>{testimonials[index].author}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <ol className="carousel-indicators indicators">
                {testimonials.map((_, index) => (
                  <li
                    key={index}
                    className={index === activeTestimonial ? 'active' : ''}
                    onClick={() => handleIndicatorClick(index)}
                  ></li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>

   
    </>
  );
}
