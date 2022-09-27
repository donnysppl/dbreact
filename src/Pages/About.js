import React from 'react';
import Header from '../Component/header/Header';
import Footer from '../Component/footer/Footer';
import About_half_1 from '../img/about-half-1.jpg';
import About_half_2 from '../img/about-half-2.jpg';
import About_half_3 from '../img/about-half-3.jpg';
import About_half_4 from '../img/about-half-4.jpg';
import made_in_india from '../img/made-in-india.jpg';


import './css/about.css'

const About = () => {
  return (
    <>
      <Header></Header>
      <section className="ptb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading-div">
                <h1 className="page-title text-center">
                  ABOUT US
                </h1>
              </div>
            </div>
          </div>

          <div className="about-half-divs">
            <div className="row">
              <div className="col-md-6">
                <div className="about-half-contact-div">
                  <p><strong>FRIENDLY TECHNOLOGY</strong></p>
                  <p>Friendly technology is a way of getting on the side of the human. This is proof that we can see innovation as an emotion. We can rely on friendly technology, we can trust it.</p>
                  <p>For more than 120 years, thanks to the reliability and quality of its products, generations of families have trusted the Thomson brand to accompany everyone’s daily life in their home and beyond</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-half-img-div">
                  <img src={About_half_1} alt="About_half_1" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>

          <div className="about-half-divs">
            <div className="row">
              <div className="col-md-6">
                <div className="about-half-img-div">
                  <img src={About_half_2} alt="About_half_2" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-half-contact-div">
                  <p><strong>AFFORDABLE AND FAIR PRICES</strong></p>
                  <p>High-tech products should not be so expensive. The Thomson brand is committed to offering you reliable and high-performance high-tech products and household appliances, at the best affordable price to preserve your purchasing power.</p>
                </div>
              </div>
            </div>

            <div className="about-half-divs">
              <div className="row">
                <div className="col-md-6">
                  <div className="about-half-contact-div">
                    <p><strong>PROVEN TECHNOLOGY</strong></p>
                    <p>Technology should always be easy to use. The Thomson brand is committed to using proven technologies to bring you the best in picture, sound, and home comfort, with great ease of use.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-half-img-div">
                    <img src={About_half_3} alt="About_half_3" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>

            <div className="about-half-divs">
              <div className="row">
                <div className="col-md-6">
                  <div className="about-half-img-div">
                    <img src={About_half_4} alt="About_half_4" className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-half-contact-div">
                    <p><strong>SUSTAINABLE PRODUCTS</strong></p>
                    <p>Planned obsolescence is not an option. The Thomson brand is committed to building durable products, to stand the longevity test of time, so you can enjoy them for many years at home, without any breakdowns or defects.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-full-contact-section left-part">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="about-full-contact-div text-start">
                <p>Straight out of Europe with over 120 years of heritage, Thomson has always led the Audio and Visual tech revolution. Today the brand is known for its cutting-edge design, innovative technologies and outstanding performance. That’s why its products are called European Youth Machines.</p>

                <p>In 2018 the Technicolor SA Thomson re-entered India nearly 15 years after it exited the market with Super Plastronics Private Limited as its official brand licensee and manufacturing partner. Only within a few months of its launch, Thomson has been able to compete directly with the then market leaders and currently is one of the Top 3 online selling television brands in India in the affordable price category in India.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-full-contact-section right-part">
        <div className="container">
          <div className="row">
            <div className="col-md-10 ms-auto">            
              <div className="about-full-contact-div text-end">
                <p>Thomson India is a completely make-in-India brand given SPPL’s experience, leadership and overall strength as an OEM. The brand also became the first in the country to be granted the license by Google to manufacture the ANDROID software thus completely ensuring the brand’s end to end backward integration.</p>

                <p>Thomson re-launched itself in 2018 with Non-SMART TV range and has quickly mustered up an impressive and innovative portfolio of TVs with innovative technologies, made in India equipment, software and at a price accessible for all. Currently Thomson has more than xx TV models across the SMART and Non-SMART TV ranges. The company has taken customization to greater heights given its focus on customization right from the television, remote design and that of the ANDROID version too.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-full-contact-section left-part">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="about-full-contact-div text-start">
                <p>Thomson Home have now wide varieties of Appliances from Televisions, Washing Machines, Air Conditioners to Coolers.</p>

                <p>We are on people’s side. For us, innovation and emotion go hand in hand. We rely on friendly technology that everyone can trust, so much so, that we can be easily called the best TV in India. For over 120 years, thanks to the reliability and quality of our products, generations of families have trusted Thomson. We make day-to-day life easier, in homes and beyond and this enables us to bring for people, the best smart TV in India. The five pillars that make us the best in class are: Trust, Sharing, Innovation, Simplicity, Style.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-full-contact-section right-part">
        <div className="container">
          <div className="row">
            <div className="col-md-10 ms-auto">            
              <div className="about-full-contact-div text-end">
                <p>Let’s tell you more about this European legend. To do this let’s go back 100 years and start listing a few of the many innovations and inventions Thomson has enriched the tech world with. In the 1920s Thomson was involved with the transmission of the 1st radio program. And then some years later it had the 1st patents for radar technology. Then came the 1950s and 60s, this decades saw incredible developments. Color television tech (SECAM) was invented and then first Thomson refrigerators were launched.</p>

                <p>Today the Thomson label can be seen across the World. If you hear great music pouring out of a home or a bunch of fun-loving teens dancing to their own tune chances are a Thomson product is involved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-full-contact-section left-part">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="about-full-contact-div text-start">
                <p>In India Thomson is following the same path that is now a part of history. Here again, the technology being introduced is at the top. Build quality and the materials that are being used are supreme. And the proof of the pudding is that the music that pours out is so rich and powerful it gets your body tingling.</p>

                <p>That’s probably why in just a short time Thomson is the preferred brand of most youth in India today. You too can join this family. Check out the Thomson range of products and pick up one. Once you do you will see that there is no going back to other names. It will always be Thomson for you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-full-contact-section right-part">
        <div className="container">
          <div className="row">
            <div className="col-md-10">            
              <div className="about-full-contact-div">
                <p>Thomson India is a completely make-in-India brand given SPPL’s experience, leadership and overall strength as an OEM.</p>
              </div>
            </div>
            <div className="col-md-2">            
              <div className="about-full-contact-div">
                <img src={made_in_india} alt="made_in_india" className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  )
}

export default About