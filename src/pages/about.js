import React from 'react'
import Nav_bar from "../components/header & footer/navbar/navbar";
import Footer from '../components/header & footer/footer/footer'
import Testimonals from '../components/about/testimonials/testimonial';
import Team from '../components/about/team/team';
// import Banner from '../components/about/BannerPage/banner';
import Abouts from "../components/about/abouts/about"

export default function About() {
  return (
    <>
     <Nav_bar/>
     <Abouts/>
     {/* <Banner/> */}
     <Team/>
     <Testimonals />
    <Footer />
    </>
  )
}
