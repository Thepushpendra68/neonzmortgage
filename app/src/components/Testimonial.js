'use client';
import dynamic from "next/dynamic";
import Script from "next/script";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

const Slider = dynamic(() => import('react-slick'), {
  ssr: false,
});
// import Slider from "react-slick";
import Hometab from "@/components/Hometab";


export default function Testimonail () {



    return (
//           <Slider {...settings} sp>
//                 <div className="testimonial-card">
//                             <div className="testimonail-content">
//                                 <p className="text text-light">&quot;Darren came highly recommended and it really was an absolute pleasure working with him. Very Organized Professional, Approachable and Genuine. What more can I say...
// He made the entire mortgage process smooth and stress free. I too can highly recommend him for sure!
// &quot;</p>
//                             </div>
//                             <div className="testimonail-footer">
//                                 <span className="testimonial-user text-light">Nora Tauro</span>
//                                 <img src="/assets/images/stars.png" alt="Mortgage Rates Dubai" />
//                             </div>
//                         </div>
//                         <div className="testimonial-card">
//                             <div className="testimonail-content">
//                                 <p className="text text-light">I had an excellent experience working with Datta. They made the entire home mortgage process smooth, stress-free, and efficient. Their professionalism, expertise, and clear communication stood out, and they were always available to answer my questions. They truly went above and beyond to ensure I got the best deal possible.</p>
//                             </div>
//                             <div className="testimonail-footer">
//                                 <span className="testimonial-user text-light">Navid Niksirat</span>
//                                 <img src="/assets/images/stars.png" alt="Mortgage Rates Dubai" />
//                             </div>
//                         </div>
//                         <div className="testimonial-card">
//                             <div className="testimonail-content">
//                                 <p className="text text-light">Working with Datta was a fantastic experience. He&apos;s highly professional, approachable, and genuinely understands his clients&apos; needs. Buying my first property with his guidance was smooth and enjoyable. Looking forward to more opportunities with him—highly recommended!</p>
//                             </div>
//                             <div className="testimonail-footer">
//                                 <span className="testimonial-user text-light">Muhammad Ali</span>
//                                 <img src="/assets/images/stars.png" alt="Mortgage Rates Dubai" />
//                             </div>
//                         </div>
//                         <div className="testimonial-card">
//                             <div className="testimonail-content">
//                                 <p className="text text-light">10/10 Amazing ! Darren is the best mortgage broker I&apos;ve ever had and he&apos;s the best. After going through a lot of trouble meeting a developer, I finally got approved for a mortgage and purchased a new house with Darren&apos;s help.</p>
//                             </div>
//                             <div className="testimonail-footer">
//                                 <span className="testimonial-user text-light">YOON JUNG LEE</span>
//                                 <img src="/assets/images/stars.png" alt="Mortgage Rates Dubai" />
//                             </div>
//                         </div>
//                 </Slider>

<div>
     <ReactGoogleReviews layout="carousel" featurableId={'1841b103-dd58-4c7e-ba86-b1e720f1b91f'} />
    {/* <Script src="https://static.elfsight.com/platform/platform.js" async></Script>
<div className="elfsight-app-5c5c2771-e0bd-4e4c-9d37-e885b6555593" data-elfsight-app-lazy></div> */}
</div>
    )
}