

import Faqs from "@/components/Faq";
import Link from "next/link";

export const metadata = {
  title: "FAQs | Neon Mortgage – Answers to Your Mortgage Queries",
  description: "Find answers to common mortgage questions. Learn about home loans, refinancing, eligibility, and more with Neon Mortgage's expert guidance.",
  alternates: {
        canonical: 'https://neonmortgage.com/faqs',
      },
       openGraph: {
    title: 'Neon Mortgage Dubai - Home Loans & Advice',
    description: 'Get expert mortgage advice and the best loan rates in Dubai with Neon Mortgage.',
    url: 'https://neonmortgage.com/',
    siteName: 'Neon Mortgage',
    images: [
      {
        url: 'https://neonmortgage.com/assets/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Neon Mortgage Logo',
      },
    ],
    type: 'website',
  }
};



export default function Page () {

  

    
    return (
         <div style={{background: 'white'}}>
            
 <section id='about-us-hero' className="page-header">
            <div className="container faq-container">
                <div className="about-hero-wrapper">
                    <div className="about-page-content">
                        <h1 className='primary-heading'>Frequently Asked Questions</h1>
                    </div>
                </div>
            </div>
        </section>

        <section id='faq'>
            <div className="container">
                <div className="faq-wrapper">
                    {/* <div className="faq-intro">
                        <h2 className='primary-heading text-center'>Clear, Tansparent, and Stress-Free</h2>
                        <p className="text text-center">At Neon, we believe in providing complete clarity and transparency at every stage of your mortgage journey. Our goal is to ensure you feel confident and comfortable with every decision you make. That’s why we take the time to address all your questions</p>
                    </div> */}
                    <Faqs />
                </div>
            </div>
        </section>
        </div>
    )
}