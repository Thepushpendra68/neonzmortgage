
import Link from "next/link";

export const metadata = {
  title: "About Us | Neon Mortgage – Your Trusted Mortgage Partner",
  description: "Discover Neon Mortgage, a leading mortgage consultancy in Dubai. We provide expert guidance, competitive rates, and hassle-free home financing solutions.",
  alternates: {
        canonical: 'https://neonmortgage.com/about-us/',
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

export default function About() {

    

    return (
         <div style={{background: 'white'}}>
        <section id='about-us-hero' className='page-header about-page'>
            <div className="container">
                <div className="about-hero-wrapper">
                    <div className="about-herodes" style={{alignSelf: 'start', padding: '30px', backgroundColor:'rgba(0,0,0,.7)', borderRadius: '0 0 40px 0'}}>
                    <p className='text text-light'>At Neon, we go beyond being just a mortgage advisor—we’re your trusted partner in turning homeownership dreams into reality. Established by a group of seasoned banking professionals who saw the need for a smooth, comprehensive mortgage solution, we’re dedicated to supporting you every step of the way. Our team is here to provide expert advice and guidance throughout your mortgage application process, ensuring you secure the best possible deal on your mortgage or home loan in the UAE.</p>
                    </div>
                    <div className="about-page-content">
                        <h1 className='primary-heading' style={{whiteSpace: 'nowrap'}}>About Us</h1>
                    </div>
                </div>
            </div>
        </section>

        <section id='leadership'>
            <div className="container">
                <div className="leadership-intro">
                    <h2 className='primary-heading text-center'>Meet the Leadership Team</h2>
                    <p className='text text-center'>Their titles reflect more than just roles—they represent years of expertise in the UAE mortgage and a shared dedication to helping you navigate the mortgage process with confidence and ease.</p>
                </div>

                <div className="row leaders-row gx-3 gy-3">
                    <div className='col-sm-12 col-md-12 col-lg-6'>
                        <div className="leader">
                            <div className="leader-thumb">
                                <img src="/assets/images/t1.png" alt="Mortgage in Dubai" />
                            </div>
                            <div className="leader-info">
                                <h3 className='secondary-heading'><strong>Datta Bondre</strong></h3>
                                <p className="text">Director Mortgages </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6'>
                        <div className="leader">
                            <div className="leader-thumb">
                                <img src="/assets/images/harjinder.png" alt="Mortgage in Dubai" />
                            </div>
                            <div className="leader-info">
                                <h3 className='secondary-heading'><strong>Harjinder Singh</strong></h3>
                                <p className="text">Director Mortgages </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id='consultant'>
            
                <h2 className='consultant-heading text-center'>Why have more than 1,000 homeowners <br/>
                <img height={30} width="auto" src="/assets/images/consultant-heading.png" alt="Mortgage in Dubai" />
                placed their trust in NEON? The reasons are straightforward:</h2>
            <div className="consultaint-content">
                <div className="container">
                    <div className="row gx-3 gy-3">
                        <div className="col-sm-12 col-lg-4">
                            <div className="consultant-card consultant-card-1">
                                <div className="consultant-card-inner">
                                    <div className="card-icon">
                                        
<svg width="77" height="66" viewBox="0 0 77 66" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M75.4149 32.8407L67.7359 17.5716C67.524 17.1495 67.2307 16.773 66.8727 16.4638C66.5146 16.1546 66.0989 15.9185 65.6492 15.7693C65.1995 15.62 64.7247 15.5603 64.2518 15.5937C63.779 15.6271 63.3174 15.7528 62.8934 15.9638L55.0069 19.8739L38.8008 15.6105C38.6037 15.5585 38.3963 15.5585 38.1992 15.6105L21.9931 19.8739L14.1066 15.9488C13.6826 15.7379 13.221 15.6121 12.7482 15.5787C12.2753 15.5453 11.8005 15.605 11.3508 15.7543C10.9011 15.9036 10.4854 16.1396 10.1273 16.4488C9.76928 16.7581 9.47594 17.1345 9.26406 17.5566L1.58511 32.8407C1.37316 33.2628 1.24681 33.7223 1.21327 34.1929C1.17974 34.6636 1.23968 35.1362 1.38967 35.5839C1.53965 36.0315 1.77675 36.4453 2.08743 36.8017C2.3981 37.1581 2.77626 37.4501 3.20031 37.661L11.4086 41.7477L28.1772 53.6696C28.2993 53.7568 28.4372 53.8198 28.5832 53.8553L47.8332 58.6456C48.0335 58.6978 48.244 58.6977 48.4442 58.6452C48.6444 58.5928 48.8277 58.4898 48.9762 58.3462L65.6816 41.7178L73.8027 37.6759C74.2267 37.465 74.6049 37.173 74.9156 36.8166C75.2262 36.4603 75.4633 36.0464 75.6133 35.5988C75.7633 35.1512 75.8233 34.6786 75.7897 34.2079C75.7562 33.7372 75.6298 33.2777 75.4179 32.8557L75.4149 32.8407ZM60.075 43.9034L48.886 34.9814C48.6543 34.7964 48.3621 34.7032 48.0656 34.7198C47.7691 34.7364 47.4892 34.8615 47.2798 35.0712C41.4176 40.9513 34.8455 40.1938 30.6496 37.5262C30.4952 37.4276 30.365 37.2957 30.2686 37.1402C30.1723 36.9847 30.1124 36.8097 30.0932 36.6281C30.0726 36.4532 30.092 36.276 30.1498 36.1096C30.2076 35.9432 30.3024 35.7919 30.427 35.667L43.7998 22.7541H54.6008L63.5039 40.4813L60.075 43.9034ZM3.67254 34.8257C3.57635 34.5291 3.60009 34.2069 3.73871 33.9275L11.4297 18.6284C11.5284 18.4307 11.68 18.264 11.8679 18.1467C12.0558 18.0294 12.2727 17.9661 12.4944 17.9638C12.6805 17.9649 12.8638 18.009 13.0298 18.0925L20.2486 21.6852L11.4928 39.113L4.2741 35.5203C4.1329 35.4495 4.0071 35.3518 3.90388 35.2326C3.80066 35.1134 3.72205 34.9751 3.67254 34.8257ZM47.755 56.1576L29.3893 51.5858L13.5682 40.3376L22.6939 22.1553L38.5 18.0057L47.4392 20.3589H43.3125C42.9992 20.3586 42.6981 20.48 42.4733 20.6972L28.7276 33.9694C28.3451 34.3502 28.0534 34.8117 27.8742 35.3198C27.695 35.828 27.6329 36.3697 27.6924 36.9049C27.7519 37.4402 27.9315 37.9552 28.2179 38.4121C28.5044 38.8689 28.8903 39.2558 29.3472 39.5442C35.3268 43.3495 42.6207 42.5381 48.1942 37.5053L58.3516 45.6069L47.755 56.1576ZM73.3214 34.8257C73.2719 34.9751 73.1933 35.1134 73.0901 35.2326C72.9869 35.3518 72.8611 35.4495 72.7199 35.5203L65.5011 39.113L56.7514 21.6852L63.9701 18.0925C64.2541 17.9549 64.5811 17.9339 64.8805 18.0342C65.1799 18.1344 65.4277 18.3479 65.5703 18.6284L73.2493 33.9125C73.3959 34.1946 73.424 34.523 73.3275 34.8257H73.3214Z" fill="black"/>
</svg>

                                    </div>
                                    <div className="card-content">
                                        <p className="text">As independent advisors, we always prioritize your best interests and ensure that our recommendations are tailored to your needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4">
                            <div className="consultant-card consultant-card-2">
                                <div className="consultant-card-inner">
                                    <div className="card-content">
                                        <h3 className='secondary-heading text-light'><strong>5+ YEARS OF<br/> EXPERTISE</strong></h3>
                                        <p className="text text-light">Our team brings over 5+ years of experience in the mortgage industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4">
                            <div className="consultant-card consultant-card-3">
                                <div className="consultant-card-inner">
                                    <div className="card-icon">
                                        

                                    <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50.9985 22.5016C50.9985 22.1038 50.8405 21.7223 50.5592 21.441C50.2779 21.1597 49.8964 21.0017 49.4986 21.0017C49.1008 21.0017 48.7193 21.1597 48.438 21.441C48.1567 21.7223 47.9987 22.1038 47.9987 22.5016H50.9985ZM9.0013 22.5016C9.0013 22.1038 8.84327 21.7223 8.56199 21.441C8.2807 21.1597 7.89919 21.0017 7.5014 21.0017C7.1036 21.0017 6.72209 21.1597 6.44081 21.441C6.15952 21.7223 6.0015 22.1038 6.0015 22.5016H9.0013ZM54.4363 29.5633C54.7179 29.8449 55.0999 30.0032 55.4982 30.0032C55.8965 30.0032 56.2785 29.8449 56.5601 29.5633C56.8418 29.2816 57 28.8996 57 28.5013C57 28.103 56.8418 27.721 56.5601 27.4394L54.4363 29.5633ZM28.5 1.50261L29.5619 0.44066C29.4226 0.300977 29.2571 0.190154 29.0749 0.114539C28.8926 0.0389227 28.6973 0 28.5 0C28.3027 0 28.1074 0.0389227 27.9251 0.114539C27.7429 0.190154 27.5774 0.300977 27.4381 0.44066L28.5 1.50261ZM0.439865 27.4394C0.158224 27.721 0 28.103 0 28.5013C0 28.8996 0.158224 29.2816 0.439865 29.5633C0.721506 29.8449 1.10349 30.0032 1.50179 30.0032C1.9001 30.0032 2.28208 29.8449 2.56372 29.5633L0.439865 27.4394ZM13.501 57H43.499V54.0001H13.501V57ZM50.9985 49.5004V22.5016H47.9987V49.5004H50.9985ZM9.0013 49.5004V22.5016H6.0015V49.5004H9.0013ZM56.5601 27.4394L29.5619 0.44066L27.4381 2.56456L54.4363 29.5633L56.5601 27.4394ZM27.4381 0.44066L0.439865 27.4394L2.56372 29.5633L29.5619 2.56456L27.4381 0.44066ZM43.499 57C45.488 57 47.3955 56.2099 48.802 54.8034C50.2084 53.3969 50.9985 51.4894 50.9985 49.5004H47.9987C47.9987 50.6938 47.5246 51.8383 46.6808 52.6822C45.8369 53.5261 44.6924 54.0001 43.499 54.0001V57ZM13.501 54.0001C12.3076 54.0001 11.1631 53.5261 10.3192 52.6822C9.47537 51.8383 9.0013 50.6938 9.0013 49.5004H6.0015C6.0015 51.4894 6.79162 53.3969 8.19805 54.8034C9.60448 56.2099 11.512 57 13.501 57V54.0001Z" fill="white"/>
</svg>


                                    </div>
                                    <div className="card-content">
                                        <p className="text text-light">We provide free, no-obligation initial consultations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id='our-consultant'>
            <div className='member-intro'>
            <div className="container"> <p className="text"><strong>OUR CONSULTANT</strong></p></div>
            </div>
            <div className="container">
                <div className="row gy-3 gx-3" style={{justifyContent: "center"}}>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="consultant-member">
                            <img src="/assets/images/da.png" alt="Mortgage in Dubai" />
                            <p className="text text-center">Darren Dsouza</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="consultant-member">
                            <img src="/assets/images/t4.webp" alt="Mortgage in Dubai" />
                            <p className="text text-center">Anjana Kochhar</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="consultant-member">
                            <img src="/assets/images/jo.png" alt="Mortgage in Dubai" />
                            <p className="text text-center">Johnson Jacob</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="consultant-member">
                            <img src="/assets/images/sy.png" alt="Mortgage in Dubai" />
                            <p className="text text-center">Sayed Harice</p>
                        </div>
                    </div>
                       <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="consultant-member">
                            <img src="/assets/images/aditi.webp" alt="Mortgage in Dubai" />
                            <p className="text text-center">Aditi Singh</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id='why-chose'>
            <div className="container">
            <div className="why-choose-intro">
                    <h2 className='primary-heading text-center'>Why Choose NEON?</h2>
                    <p className='text text-center'>Our leadership team brings together more than a century of combined experience in banking and financial services. We are dedicated to redefining the mortgage experience by focusing on innovation, trust, precision, and efficiency.</p>
                </div>

                <div className="row maximize-row">
                    <div className="col-md-12 col-lg-6" style={{padding: '0'}}>
                        <div className="maximize-left expert-left">
                            <h2 className="primary-heading text-light max-heading">EXPERT ADVICE<br/> YOU CAN TRUST</h2>
                            <p className="text text-light">Our leadership team brings together more than a century of combined experience in banking and financial services. We are dedicated to redefining the mortgage experience by focusing on innovation, trust, precision, and efficiency.</p>
                       
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6" style={{padding: '0'}}>
                        <div className="maximize-right expert-right">
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="speed">
            <div className="container">
                
                <div className="about-content">
                
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <div className="about-content" style={{marginBottom: '15px'}}>
                        <h2 className="primary-heading">Speed and convenience,<br/> Wherever You Are</h2>
                        <p className="text">Whether you’re at home, at work, or traveling abroad, our advisors are always within reach—just a call or click away. We manage deadlines meticulously to ensure a seamless and stress-free experience for you.</p>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="about-right speed-right">
                             
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id='faq'>
            <div className="container">
                <div className="faq-wrapper">
                    <div className="faq-intro">
                        <h2 className='primary-heading text-center'>Clear, Transparent and Stress Free</h2>
                        <p className="text text-center">At Neon, we believe in providing complete clarity and transparency at every stage of your mortgage journey. Our goal is to ensure you feel confident and comfortable with every decision you make. That’s why we take the time to address all your questions.</p>
                    </div>
                    {/* <div className="faqs">
                        <div className={`faq-item ${faqState == 1 ? 'active-faq' : ''}`} onClick={() => setFaqState(1)}>
                            <div className="faq-header">
                                <p className="text"><strong>1. How do I get a mortgage in Dubai as an expat?</strong></p>
                                <div className="faq-icon">
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4439 0.438315L12.5039 1.49932L6.72694 7.27832C6.63437 7.37147 6.52429 7.4454 6.40304 7.49585C6.28179 7.54629 6.15176 7.57227 6.02044 7.57227C5.88911 7.57227 5.75908 7.54629 5.63783 7.49585C5.51658 7.4454 5.4065 7.37147 5.31394 7.27832L-0.466064 1.49932L0.593936 0.439315L6.01894 5.86332L11.4439 0.438315Z" fill="black"/>
</svg>
</div>
                            </div>
                            <div className="faw-content">
                                <p className="text-sm">To get a mortgage in Dubai as an expat, you typically need to be employed or self-employed with a stable income. Most banks require a valid UAE residence visa, a minimum monthly income, and a clean credit history. Neon Mortgage can help guide you through the full process.</p>
                                
                            </div>
                        </div>

                        <div className={`faq-item ${faqState == 2 ? 'active-faq' : ''}`} onClick={() => setFaqState(2)}>
                            <div className="faq-header">
                                <p className="text"><strong>2. What is the minimum down payment for a mortgage in Dubai?</strong></p>
                                <div className="faq-icon">
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4439 0.438315L12.5039 1.49932L6.72694 7.27832C6.63437 7.37147 6.52429 7.4454 6.40304 7.49585C6.28179 7.54629 6.15176 7.57227 6.02044 7.57227C5.88911 7.57227 5.75908 7.54629 5.63783 7.49585C5.51658 7.4454 5.4065 7.37147 5.31394 7.27832L-0.466064 1.49932L0.593936 0.439315L6.01894 5.86332L11.4439 0.438315Z" fill="black"/>
</svg>
</div>
                            </div>
                            <div className="faw-content">
                               <p className="text-sm">For UAE Nationals, the minimum down payment of 15% is required of the Property Value. For the residents of UAE, the minimum down payment is 20% of the property value for properties under AED 5 million. For non-residents, it’s typically 25%. This can vary by bank and mortgage type.</p>
                            </div>
                        </div>

                        <div className={`faq-item ${faqState == 3 ? 'active-faq' : ''}`} onClick={() => setFaqState(3)}>
                            <div className="faq-header">
                                <p className="text"><strong>3. Can non-residents get a mortgage in the UAE?</strong></p>
                                <div className="faq-icon">
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4439 0.438315L12.5039 1.49932L6.72694 7.27832C6.63437 7.37147 6.52429 7.4454 6.40304 7.49585C6.28179 7.54629 6.15176 7.57227 6.02044 7.57227C5.88911 7.57227 5.75908 7.54629 5.63783 7.49585C5.51658 7.4454 5.4065 7.37147 5.31394 7.27832L-0.466064 1.49932L0.593936 0.439315L6.01894 5.86332L11.4439 0.438315Z" fill="black"/>
</svg>
</div>
                            </div>
                            <div className="faw-content">
                                <p className="text-sm">Yes, non-residents can apply for a mortgage in the UAE. However, the available loan-to-value (LTV) ratio is lower (usually 75%), and fewer banks offer mortgages to non-residents. We help non-resident investors find the best deals.</p>
                            </div>
                        </div>

                        <div className={`faq-item ${faqState == 4 ? 'active-faq' : ''}`} onClick={() => setFaqState(4)}>
                            <div className="faq-header">
                                <p className="text"><strong>4. What is the current mortgage interest rate in Dubai?</strong></p>
                                <div className="faq-icon">
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4439 0.438315L12.5039 1.49932L6.72694 7.27832C6.63437 7.37147 6.52429 7.4454 6.40304 7.49585C6.28179 7.54629 6.15176 7.57227 6.02044 7.57227C5.88911 7.57227 5.75908 7.54629 5.63783 7.49585C5.51658 7.4454 5.4065 7.37147 5.31394 7.27832L-0.466064 1.49932L0.593936 0.439315L6.01894 5.86332L11.4439 0.438315Z" fill="black"/>
</svg>
</div>
                            </div>
                            <div className="faw-content">
                                <p className="text-sm">Mortgage interest rates in Dubai typically range between 3.5% to 5.5%, depending on the bank, loan type (fixed or variable), and applicant profile. Use our mortgage calculator to get an estimate based on today’s rates.</p>
                            </div>
                        </div>

                        <div className={`faq-item ${faqState == 5 ? 'active-faq' : ''}`} onClick={() => setFaqState(5)}>
                            <div className="faq-header">
                                <p className="text"><strong>5. What documents are required to apply for a mortgage in Dubai?</strong></p>
                                <div className="faq-icon">
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4439 0.438315L12.5039 1.49932L6.72694 7.27832C6.63437 7.37147 6.52429 7.4454 6.40304 7.49585C6.28179 7.54629 6.15176 7.57227 6.02044 7.57227C5.88911 7.57227 5.75908 7.54629 5.63783 7.49585C5.51658 7.4454 5.4065 7.37147 5.31394 7.27832L-0.466064 1.49932L0.593936 0.439315L6.01894 5.86332L11.4439 0.438315Z" fill="black"/>
</svg>
</div>
                            </div>
                            <div className="faw-content">
                                <p className="text-sm">"You’ll usually need: <br/>
Passport and Emirates ID<br/>
Salary certificate or trade license<br/>
Bank statements (3–6 months)<br/>
Proof of down payment<br/>
Property details<br/>
We can help you prepare and submit everything."</p>
                            </div>
                        </div>

                        <div className={`faq-item ${faqState == 6 ? 'active-faq' : ''}`} onClick={() => setFaqState(6)}>
                            <div className="faq-header">
                                <p className="text"><strong>6. What is the maximum mortgage tenure in the UAE?</strong></p>
                                <div className="faq-icon">
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4439 0.438315L12.5039 1.49932L6.72694 7.27832C6.63437 7.37147 6.52429 7.4454 6.40304 7.49585C6.28179 7.54629 6.15176 7.57227 6.02044 7.57227C5.88911 7.57227 5.75908 7.54629 5.63783 7.49585C5.51658 7.4454 5.4065 7.37147 5.31394 7.27832L-0.466064 1.49932L0.593936 0.439315L6.01894 5.86332L11.4439 0.438315Z" fill="black"/>
</svg>
</div>
                            </div>
                            <div className="faw-content">
                                <p className="text-sm">The maximum mortgage tenure in the UAE is 25 years, and the loan must be fully repaid before the borrower reaches 65 years of age (salaried) or 70 years (self-employed).</p>
                            </div>
                        </div>

                        <div className={`faq-item ${faqState == 7 ? 'active-faq' : ''}`} onClick={() => setFaqState(7)}>
                            <div className="faq-header">
                                <p className="text"><strong>7. Can I get a mortgage in Dubai for an off-plan property?</strong></p>
                                <div className="faq-icon">
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4439 0.438315L12.5039 1.49932L6.72694 7.27832C6.63437 7.37147 6.52429 7.4454 6.40304 7.49585C6.28179 7.54629 6.15176 7.57227 6.02044 7.57227C5.88911 7.57227 5.75908 7.54629 5.63783 7.49585C5.51658 7.4454 5.4065 7.37147 5.31394 7.27832L-0.466064 1.49932L0.593936 0.439315L6.01894 5.86332L11.4439 0.438315Z" fill="black"/>
</svg>
</div>
                            </div>
                            <div className="faw-content">
                                <p className="text-sm">Yes, many banks in the UAE offer mortgages for off-plan properties, but they usually require a higher down payment and only apply once a certain percentage of the project is completed.</p>
                            </div>
                        </div>

                        <div className={`faq-item ${faqState == 8 ? 'active-faq' : ''}`} onClick={() => setFaqState(8)}>
                            <div className="faq-header">
                                <p className="text"><strong>8. What are the types of mortgage interest rates in Dubai?</strong></p>
                                <div className="faq-icon">
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4439 0.438315L12.5039 1.49932L6.72694 7.27832C6.63437 7.37147 6.52429 7.4454 6.40304 7.49585C6.28179 7.54629 6.15176 7.57227 6.02044 7.57227C5.88911 7.57227 5.75908 7.54629 5.63783 7.49585C5.51658 7.4454 5.4065 7.37147 5.31394 7.27832L-0.466064 1.49932L0.593936 0.439315L6.01894 5.86332L11.4439 0.438315Z" fill="black"/>
</svg>
</div>
                            </div>
                            <div className="faw-content">
                                <p className="text-sm">"You can choose between: <br/>
<strong>Fixed-rate mortgages:</strong> Stable monthly payments for a fixed term.<br/>
<strong>Variable/floating-rate mortgages:</strong> Rates change based on EIBOR and market conditions."</p>
                            </div>
                        </div>

                        <div className={`faq-item ${faqState == 9 ? 'active-faq' : ''}`} onClick={() => setFaqState(9)}>
                            <div className="faq-header">
                                <p className="text"><strong>9. Can we refinance our Mortgage in Dubai?</strong></p>
                                <div className="faq-icon">
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4439 0.438315L12.5039 1.49932L6.72694 7.27832C6.63437 7.37147 6.52429 7.4454 6.40304 7.49585C6.28179 7.54629 6.15176 7.57227 6.02044 7.57227C5.88911 7.57227 5.75908 7.54629 5.63783 7.49585C5.51658 7.4454 5.4065 7.37147 5.31394 7.27832L-0.466064 1.49932L0.593936 0.439315L6.01894 5.86332L11.4439 0.438315Z" fill="black"/>
</svg>
</div>
                            </div>
                            <div className="faw-content">
                                <p className="text-sm">Absolutely. Refinancing lets you switch to a lender offering a lower rate or better terms. Neon Mortgage can help you compare refinancing options to save on interest.</p>
                            </div>
                        </div>

                        <div className={`faq-item ${faqState == 10 ? 'active-faq' : ''}`} onClick={() => setFaqState(10)}>
                            <div className="faq-header">
                                <p className="text"><strong>10. How much can I borrow for a mortgage in Dubai?</strong></p>
                                <div className="faq-icon">
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4439 0.438315L12.5039 1.49932L6.72694 7.27832C6.63437 7.37147 6.52429 7.4454 6.40304 7.49585C6.28179 7.54629 6.15176 7.57227 6.02044 7.57227C5.88911 7.57227 5.75908 7.54629 5.63783 7.49585C5.51658 7.4454 5.4065 7.37147 5.31394 7.27832L-0.466064 1.49932L0.593936 0.439315L6.01894 5.86332L11.4439 0.438315Z" fill="black"/>
</svg>
</div>
                            </div>
                            <div className="faw-content">
                                <p className="text-sm">Your borrowing limit depends on your income, existing liabilities, credit score, and the value of the property. Typically, banks allow monthly repayments not to exceed 50% of your income.</p>
                            </div>
                        </div>
                    </div> */}

<div style={{display:'flex', justifyContent:'center'}}>
<ul class="bullet-list bullet-list-dark" style={{margin: '0 auto', width:'auto'}}>
    <li class="text">Am I eligible for a mortgage in the UAE?</li>
    <li class="text">How long does mortgage pre approval take?</li>
    <li class="text">What documents do I need to get started for a mortgage?</li>
    <li class="text">Which banks offer the best mortgage rates in Dubai?</li>
    <li class="text">What is the best mortgage rate I can get right now?</li>
    </ul>
</div>
                    <p className="text text-center" style={{marginTop:'30px', marginBottom:'10px'}}><strong>Our advisors will thoroughly answer your questions before moving forward with your mortgage application, ensuring you have all the information you need to make informed decisions.</strong></p>
                    <Link href='/journey'><button className="btn btn-primary btn-center btn-rounded">
                    <span className="text text-light">Get Started</span>
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M13.3536 6.35353L8.35359 11.3535C8.25971 11.4474 8.13237 11.5002 7.99959 11.5002C7.86682 11.5002 7.73948 11.4474 7.64559 11.3535C7.55171 11.2596 7.49896 11.1323 7.49896 10.9995C7.49896 10.8668 7.55171 10.7394 7.64559 10.6455L11.7926 6.49953L0.999595 6.49953C0.866986 6.49953 0.739809 6.44686 0.646041 6.35309C0.552273 6.25932 0.499595 6.13214 0.499595 5.99953C0.499595 5.86692 0.552273 5.73975 0.646041 5.64598C0.739809 5.55221 0.866986 5.49953 0.999595 5.49953L11.7926 5.49953L7.64559 1.35353C7.55171 1.25965 7.49896 1.13231 7.49896 0.999533C7.49896 0.866757 7.55171 0.73942 7.64559 0.645533C7.73948 0.551646 7.86682 0.498901 7.99959 0.498901C8.13237 0.498901 8.25971 0.551646 8.35359 0.645533L13.3536 5.64553C13.4002 5.69198 13.4371 5.74715 13.4623 5.8079C13.4875 5.86865 13.5005 5.93377 13.5005 5.99953C13.5005 6.0653 13.4875 6.13042 13.4623 6.19117C13.4371 6.25191 13.4002 6.30709 13.3536 6.35353Z" fill="white"/>
                    </svg>
                </button></Link>
                </div>
            </div>
        </section>

        <section id='guidance'>
            <div className="container">
                <div className="row gx-3 gy-3">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="guide-left">
                            <h2 className="text text-light"><strong>Guidance for Every Step of Your Mortgage Journey</strong></h2>
                            <p className='guide-heading text-light'>Our advisors will thoroughly answer your questions before moving forward with your mortgage application, ensuring you have all the information you need to make informed decisions</p>
                            <Link href='/journey'><button className="btn btn-secondary btn-rounded">
                                <span className="text">Get Started</span>
                                
<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.74277 0.757208L9.74277 7.82828C9.74277 7.96105 9.69002 8.08839 9.59614 8.18228C9.50225 8.27616 9.37491 8.32891 9.24214 8.32891C9.10936 8.32891 8.98202 8.27616 8.88814 8.18228C8.79425 8.08839 8.7415 7.96105 8.7415 7.82828L8.74221 1.96424L1.11041 9.59604C1.01664 9.68981 0.889463 9.74249 0.756855 9.74249C0.624246 9.74249 0.49707 9.68981 0.403301 9.59604C0.309533 9.50227 0.256854 9.3751 0.256854 9.24249C0.256854 9.10988 0.309533 8.9827 0.403301 8.88894L8.0351 1.25713L2.17107 1.25784C2.03829 1.25784 1.91096 1.20509 1.81707 1.11121C1.72318 1.01732 1.67044 0.889984 1.67044 0.757208C1.67044 0.624432 1.72318 0.497095 1.81707 0.403208C1.91095 0.309321 2.03829 0.256576 2.17107 0.256576H9.24214C9.3079 0.256493 9.37304 0.269386 9.43382 0.294516C9.4946 0.319645 9.54982 0.356518 9.59632 0.403023C9.64283 0.449527 9.6797 0.504749 9.70483 0.565526C9.72996 0.626303 9.74285 0.691441 9.74277 0.757208Z" fill="black"/>
</svg>

                            </button></Link>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="guide-right">
                            <div className="guide-right-image"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id='mission'>
            <div className="container">
                <div className="row gx-3 gy-3">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="mission-left">
                            <div className='mission-intro'>
                                
<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.9541 12.9771L19.964 17.9672M24.9541 12.9771V6.98853L30.9426 1V6.98853H36.9312L30.9426 12.9771H24.9541Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.6248 1H18.9656C15.4123 1 11.9389 2.05366 8.98444 4.02774C6.03002 6.00183 3.72733 8.80767 2.36756 12.0904C1.00778 15.3732 0.652006 18.9855 1.34521 22.4705C2.03842 25.9555 3.74947 29.1566 6.262 31.6691C8.77453 34.1817 11.9757 35.8927 15.4607 36.5859C18.9457 37.2791 22.5579 36.9234 25.8407 35.5636C29.1235 34.2038 31.9293 31.9011 33.9034 28.9467C35.8775 25.9923 36.9312 22.5188 36.9312 18.9656V18.3073" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.7465 20.9614C28.3857 22.728 27.553 24.3639 26.3369 25.6953C25.1209 27.0266 23.5669 28.0037 21.8401 28.5227C20.1133 29.0416 18.2781 29.0832 16.5296 28.6428C14.7811 28.2024 13.1845 27.2966 11.9095 26.0216C10.6345 24.7466 9.72867 23.15 9.2883 21.4015C8.84793 19.653 8.88944 17.8178 9.40843 16.091C9.92741 14.3642 10.9045 12.8102 12.2358 11.5942C13.5672 10.3781 15.2031 9.54543 16.9697 9.18457" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<h2 className='guide-heading'>OUR MISSION</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <p className="text">We want to help as many individuals as possible realize their dream of homeownership in the UAE. Setting the Standard for Mortgage Excellence.</p>
                        <hr />
                        <p className="text">Whether you are a first-time buyer, a nonresident wanting to settle in the UAE, or a homeowner who wants to use the surplus value of your home for renovation or investments, we know all the challenges you may face and how to address them.</p>
                    </div>
                </div>
            </div>
        </section>




        
        </div>
    )
} 