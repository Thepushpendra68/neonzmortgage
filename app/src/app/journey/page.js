import Application from "@/components/applixation/Application";

export const metadata = {
  title: "Find the Best Mortgage in Dubai-Fast & Hassle-Free Approval",
  description: "Looking for a mortgage in Dubai? Fill out our quick form to get tailored mortgage solutions with the best rates and expert guidance.",
  alternates: {
        canonical: 'https://neonmortgage.com/journey',
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

export default function Journey () {
    return (
        <div>
           <Application />
           
            <section id="journey-cta">
                <div className="container">
                    <div className="journey-cta-intro" style={{marginBottom:'40px'}}>
                        <h2 className="primary-heading text-center">Your Dream Home is Just a Click Away!</h2>
                        <p style={{width:'100%',maxWidth:'600px', margin:'20px auto 0 auto'}} className="text text-center">Take the next step toward homeownership with confidence. Our mortgage specialists will guide you through every detail and ensure you get the best financing option in Dubai.</p>
                    </div>
                    <div className="row g-3">
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <div className="buy-card" style={{padding:'15px', minHeight:'80px'}}>
                                    <h3 className="text"><strong>✅ Lowest Mortgage Rates</strong></h3>
                                    <ul>
                                        <li className="text-sm">Access the most competitive rates in the UAE.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <div className="buy-card" style={{padding:'15px', minHeight:'80px'}}>
                                    <h3 className="text"><strong>✅ Quick & Hassle-Free Process</strong></h3>
                                    <ul>
                                        <li className="text-sm">Get pre-approval faster with our experts.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <div className="buy-card" style={{padding:'15px', minHeight:'80px'}}>
                                    <h3 className="text"><strong>✅ Tailored Mortgage Solutions</strong></h3>
                                    <ul>
                                        <li className="text-sm">Personalized options for residents & non-residents.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3" >
                                <div className="buy-card" style={{padding:'15px', minHeight:'80px'}}>
                                    <h3 className="text"><strong>✅ Trusted Mortgage Advisors</strong></h3>
                                    <ul>
                                        <li className="text-sm">Decades of experience in UAE home financing.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <button style={{marginTop:'30px'}} className="btn btn-primary btn-rounded btn-noicon btn-center">🚀 Apply Now & Get Pre-Approved Faster!</button>
                </div>
            </section>
        </div>
    )
}