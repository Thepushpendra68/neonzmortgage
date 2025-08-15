import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export const metadata = {
  title: "Products | Neon Mortgage – Best Home Loan Solutions",
  description: "Explore our mortgage products, including home loans, refinancing, and investment property financing. Get the best rates and expert guidance with Neon Mortgage.",
  alternates: {
        canonical: 'https://neonmortgage.com/products',
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

export default function Products () {
    return (
        <div style={{background: '#fff'}}>
          
          
        <section id='about-us-hero' className="page-header">
            <div className="container">
                <div className="about-hero-wrapper">
                    <div className="about-page-content">
                        <h1 className='primary-heading'>Mortgage Products</h1>
                    </div>
                </div>
            </div>
        </section>

         <section id="new-purchase">
            <div className="container">
                <div className="dream-intro">
                    <h2 className="primary-heading text-center">Dream Home in Dubai? Get the Right Mortgage!</h2>
                    <p className="text text-center">Buying property in Dubai or UAE? Whether you&apos;re salaried, self-employed, or a freelancer, you can secure a mortgage tailored to your needs.</p>
                </div>

                <div className="dream-content">
                    <div className="dream-top">
                        <div className="row">
                            <div className="col-sm-12 col-md-12- col-lg-4">
                                <h3 className="secondary-heading text-light">Best Mortgage Rates Dubai, <br/> Competitive rates for all:</h3>
                            </div>
                            <div className="col-sm-12 col-md-12- col-lg-8">
                                <div className="dream-top-right">
                                    <ul className="icon-list">
                                        <li className="icon-list-item">
                                            <span className="icon-list-icon">
                                                
<svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clip-rule="evenodd" d="M22 1.76125L9.67886 17L0 9.02075L1.8262 6.85306L9.26796 12.9864L19.7743 0L22 1.76125Z" fill="#48E054"/>
</svg>

                                            </span>
                                            <span className="text icon-list-text text-light">Salaried? Enjoy lower rates with stable income.</span>
                                        </li>
                                        <li className="icon-list-item">
                                            <span className="icon-list-icon">
                                                
<svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clip-rule="evenodd" d="M22 1.76125L9.67886 17L0 9.02075L1.8262 6.85306L9.26796 12.9864L19.7743 0L22 1.76125Z" fill="#48E054"/>
</svg>

                                            </span>
                                            <span className="text icon-list-text text-light">Business owner? Approval possible with and without financials.</span>
                                        </li>
                                        <li className="icon-list-item">
                                            <span className="icon-list-icon">
                                                
<svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clip-rule="evenodd" d="M22 1.76125L9.67886 17L0 9.02075L1.8262 6.85306L9.26796 12.9864L19.7743 0L22 1.76125Z" fill="#48E054"/>
</svg>

                                            </span>
                                            <span className="text icon-list-text text-light">Freelancer/YouTuber? 1+ years of income history helps.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dream-bottom">
                        <h3 className="secondary-heading"><strong>Quick Tips</strong></h3>
                        <div className="row g-3">
                            <div className="col-sm-12 col-md-12 col-lg-4">
                                <div className="dream-card">
                                    <div className="dream-icon">
                                        
<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2917 4.25004V16.3334M16.3334 10.2917H4.25004M16.3334 35.6667L11.5 40.5M11.5 40.5L6.66671 45.3334M11.5 40.5L16.3334 45.3334M11.5 40.5L6.66671 35.6667M45.3334 11.5H35.6667M45.3334 41.7084H35.6667M45.3334 34.4584H35.6667M50.1667 26H1.83337M26 50.1667V1.83337" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<p className="text">Use a mortgage calculator UAE to estimate payments.</p>
                                    
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className="dream-card">
                                    <div className="dream-icon">
                                        

                                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M38.8841 26.8031C40.4891 24.2855 41.339 21.3607 41.3334 18.375C41.3334 9.69917 34.3009 2.66667 25.6251 2.66667C22.5233 2.66667 19.6317 3.56567 17.1969 5.11596C15.5766 5.20738 13.9729 5.49049 12.4192 5.95938C13.5993 4.70315 14.9526 3.62167 16.4381 2.74763C19.2039 1.1179 22.3544 0.255697 25.5647 0.25H25.6251C35.6349 0.25 43.7501 8.36517 43.7501 18.375C43.7501 18.5377 43.7481 18.7 43.744 18.862L43.7416 18.92C43.6563 21.9648 42.7999 24.9382 41.2524 27.562C40.3784 29.0475 39.2969 30.4008 38.0407 31.5809C38.5011 30.0548 38.7911 28.4549 38.8841 26.8031Z" fill="black"/>
<path fillRule="evenodd" clip-rule="evenodd" d="M24.1411 20.3893C23.8079 19.4468 23.1907 18.6307 22.3744 18.0535C21.5581 17.4764 20.583 17.1665 19.5833 17.1667V15.9584H17.1666V17.1667C15.8847 17.1667 14.6553 17.6759 13.7489 18.5824C12.8425 19.4888 12.3333 20.7182 12.3333 22C12.3333 23.2819 12.8425 24.5113 13.7489 25.4177C14.6553 26.3241 15.8847 26.8334 17.1666 26.8334V31.6667C16.1153 31.6667 15.22 30.9961 14.8865 30.056C14.837 29.9022 14.7572 29.7599 14.6517 29.6375C14.5463 29.515 14.4174 29.415 14.2726 29.3433C14.1278 29.2716 13.9701 29.2296 13.8088 29.2199C13.6476 29.2102 13.486 29.2329 13.3336 29.2867C13.1813 29.3406 13.0413 29.4244 12.9219 29.5333C12.8026 29.6421 12.7062 29.7738 12.6387 29.9206C12.5711 30.0673 12.5336 30.2262 12.5285 30.3876C12.5233 30.5491 12.5506 30.71 12.6088 30.8608C12.9419 31.8033 13.5591 32.6194 14.3754 33.1965C15.1917 33.7737 16.1669 34.0835 17.1666 34.0834V35.2917H19.5833V34.0834C20.8651 34.0834 22.0945 33.5741 23.0009 32.6677C23.9074 31.7613 24.4166 30.5319 24.4166 29.25C24.4166 27.9682 23.9074 26.7388 23.0009 25.8324C22.0945 24.9259 20.8651 24.4167 19.5833 24.4167V19.5834C20.6345 19.5834 21.5299 20.254 21.8634 21.1941C21.9129 21.3479 21.9927 21.4902 22.0981 21.6126C22.2036 21.735 22.3325 21.8351 22.4773 21.9068C22.622 21.9785 22.7797 22.0205 22.941 22.0302C23.1023 22.0399 23.2639 22.0172 23.4162 21.9633C23.5685 21.9095 23.7085 21.8257 23.8279 21.7168C23.9473 21.6079 24.0436 21.4762 24.1112 21.3295C24.1788 21.1827 24.2162 21.0239 24.2214 20.8624C24.2265 20.701 24.1992 20.5401 24.1411 20.3893ZM17.1666 19.5834C16.5256 19.5834 15.911 19.838 15.4577 20.2912C15.0045 20.7444 14.7499 21.3591 14.7499 22C14.7499 22.641 15.0045 23.2557 15.4577 23.7089C15.911 24.1621 16.5256 24.4167 17.1666 24.4167V19.5834ZM19.5833 31.6667C20.2242 31.6667 20.8389 31.4121 21.2921 30.9589C21.7453 30.5057 21.9999 29.891 21.9999 29.25C21.9999 28.6091 21.7453 27.9944 21.2921 27.5412C20.8389 27.088 20.2242 26.8334 19.5833 26.8334V31.6667Z" fill="black"/>
<path fillRule="evenodd" clip-rule="evenodd" d="M36.5 25.625C36.5 35.6348 28.3848 43.75 18.375 43.75C8.36517 43.75 0.25 35.6348 0.25 25.625C0.25 15.6152 8.36517 7.5 18.375 7.5C28.3848 7.5 36.5 15.6152 36.5 25.625ZM34.0833 25.625C34.0833 34.3008 27.0508 41.3333 18.375 41.3333C9.69917 41.3333 2.66667 34.3008 2.66667 25.625C2.66667 16.9492 9.69917 9.91667 18.375 9.91667C27.0508 9.91667 34.0833 16.9492 34.0833 25.625Z" fill="black"/>
</svg>
</div>

<p className="text">Loans cover up to 80-85% of property value.</p>
                                    
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className="dream-card">
                                    <div className="dream-icon">
                                        

                                   
<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clip-rule="evenodd" d="M10.3835 12.3279C15.9687 14.4849 22.68 14.4849 28.2641 12.3255C30.6956 14.8914 32.7119 17.8209 34.2401 21.0084C35.2514 21.1638 36.2198 21.4491 37.1278 21.8469C35.4729 17.6208 32.6733 13.5131 29.6639 10.4375L33.9479 4.175C33.2472 3.71874 32.5164 3.31036 31.7606 2.95266C28.9309 1.57838 24.386 0 19.3806 0C14.2708 0 9.60296 1.64681 6.75584 3.03964C6.47286 3.1788 6.20845 3.3141 5.96258 3.44554C5.46738 3.71227 5.04988 3.96046 4.72284 4.175L8.97671 10.4375C-0.985319 20.9191 -8.40755 41.7466 19.3806 41.7466C21.2827 41.7568 23.1835 41.6406 25.0702 41.3986C24.3219 40.7788 23.6545 40.0673 23.0836 39.281C21.9455 39.3769 20.7112 39.4256 19.3806 39.4271C12.6716 39.4271 8.46411 38.1619 5.95099 36.4223C3.54456 34.7557 2.48805 32.514 2.33845 29.8907C2.18305 27.1654 3.01689 23.9842 4.57904 20.7637C6.06928 17.6927 8.14982 14.7366 10.3835 12.3279ZM26.9107 10.354L30.3411 5.34053C27.1519 5.57015 23.3561 6.31933 19.703 7.377C17.0936 8.13082 14.1955 8.01601 11.5095 7.52081C10.833 7.39554 10.1611 7.24623 9.4951 7.07315L11.7218 10.3517C16.4952 12.0507 22.1384 12.0507 26.9107 10.354ZM9.05093 4.54148C9.97871 4.81749 10.9471 5.05755 11.9305 5.23963C14.4239 5.69888 16.9255 5.76614 19.0582 5.14801C21.5448 4.4233 24.074 3.85356 26.6312 3.44206C24.4973 2.79957 22.0027 2.31945 19.3794 2.31945C15.3842 2.31945 11.6591 3.43394 9.05093 4.54148Z" fill="black"/>
<path fillRule="evenodd" clip-rule="evenodd" d="M19.3329 25.5139C20.5169 25.5139 21.5978 25.9581 22.4177 26.6887C21.985 27.4404 21.638 28.2383 21.3832 29.0673C21.1859 28.6947 20.8907 28.3829 20.5295 28.1655C20.1682 27.9481 19.7545 27.8333 19.3329 27.8334V32.4723C19.9324 32.4723 20.4787 32.245 20.8904 31.8715C20.8449 32.739 20.897 33.6088 21.0458 34.4647C20.5006 34.681 19.9194 34.792 19.3329 34.7917V35.9514H17.0134V34.7917C16.0539 34.7919 15.118 34.4945 14.3345 33.9406C13.5511 33.3866 12.9587 32.6034 12.6389 31.6987C12.5365 31.4087 12.5535 31.0898 12.6862 30.8123C12.8188 30.5348 13.0563 30.3214 13.3464 30.2189C13.6364 30.1165 13.9553 30.1335 14.2328 30.2662C14.5103 30.3988 14.7237 30.6363 14.8262 30.9264C14.9861 31.3786 15.2824 31.7701 15.6741 32.0469C16.0658 32.3238 16.5337 32.4724 17.0134 32.4723V27.8334C15.7831 27.8334 14.6032 27.3446 13.7332 26.4747C12.8633 25.6047 12.3745 24.4248 12.3745 23.1945C12.3745 21.9642 12.8633 20.7843 13.7332 19.9143C14.6032 19.0443 15.7831 18.5556 17.0134 18.5556V17.3959H19.3329V18.5556C20.2923 18.5554 21.2283 18.8528 22.0117 19.4068C22.7952 19.9607 23.3876 20.7439 23.7073 21.6486C23.758 21.7922 23.78 21.9444 23.7719 22.0965C23.7638 22.2486 23.7258 22.3976 23.6601 22.535C23.5944 22.6724 23.5023 22.7955 23.389 22.8974C23.2757 22.9992 23.1435 23.0777 22.9999 23.1284C22.8563 23.1791 22.7041 23.201 22.552 23.1929C22.3999 23.1848 22.2509 23.1468 22.1135 23.0811C21.9761 23.0155 21.8529 22.9233 21.7511 22.8101C21.6493 22.6968 21.5708 22.5646 21.5201 22.421C21.3601 21.9687 21.0639 21.5772 20.6722 21.3004C20.2804 21.0235 19.8125 20.8749 19.3329 20.875V25.5139ZM17.0134 20.875C16.3982 20.875 15.8083 21.1194 15.3733 21.5544C14.9383 21.9894 14.694 22.5793 14.694 23.1945C14.694 23.8096 14.9383 24.3996 15.3733 24.8346C15.8083 25.2696 16.3982 25.5139 17.0134 25.5139V20.875Z" fill="black"/>
<path d="M31.5761 31.5602L30.604 32.4561L29.5133 31.205L32.3931 28.5532L35.272 31.2066L34.1814 32.4569L33.21 31.561V35.2716H31.5761V31.5602Z" fill="black"/>
<path fillRule="evenodd" clip-rule="evenodd" d="M32.4729 41.75C34.9335 41.75 37.2933 40.7726 39.0332 39.0326C40.7732 37.2927 41.7506 34.9329 41.7506 32.4722C41.7506 30.0116 40.7732 27.6518 39.0332 25.9119C37.2933 24.1719 34.9335 23.1945 32.4729 23.1945C30.0122 23.1945 27.6524 24.1719 25.9125 25.9119C24.1725 27.6518 23.1951 30.0116 23.1951 32.4722C23.1951 34.9329 24.1725 37.2927 25.9125 39.0326C27.6524 40.7726 30.0122 41.75 32.4729 41.75ZM32.4729 39.4306C34.3183 39.4306 36.0882 38.6975 37.3931 37.3925C38.6981 36.0876 39.4312 34.3177 39.4312 32.4722C39.4312 30.6268 38.6981 28.8569 37.3931 27.552C36.0882 26.247 34.3183 25.5139 32.4729 25.5139C30.6274 25.5139 28.8575 26.247 27.5526 27.552C26.2476 28.8569 25.5145 30.6268 25.5145 32.4722C25.5145 34.3177 26.2476 36.0876 27.5526 37.3925C28.8575 38.6975 30.6274 39.4306 32.4729 39.4306Z" fill="black"/>
</svg>
</div>

<p className="text">Rates vary based on income type, credit score & property.</p>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="stress">

                    <div className="stress-top">
                    <div className="row">
                            <div className="col-sm-12 col-md-12- col-lg-6">
                                <h3 className="secondary-heading"><strong>Why stress? We&apos;ll help you</strong></h3>
                            </div>
                            <div className="col-sm-12 col-md-12- col-lg-6">
                                <div className="dream-top-right">
                                    <ul className="icon-list">
                                        <li className="icon-list-item">
                                            <span className="icon-list-icon">
                                                
<svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clip-rule="evenodd" d="M22 1.76125L9.67886 17L0 9.02075L1.8262 6.85306L9.26796 12.9864L19.7743 0L22 1.76125Z" fill="#48E054"/>
</svg>

                                            </span>
                                            <span className="text icon-list-text">Compare home loan in Dubai/UAE options.</span>
                                        </li>
                                        <li className="icon-list-item">
                                            <span className="icon-list-icon">
                                                
<svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clip-rule="evenodd" d="M22 1.76125L9.67886 17L0 9.02075L1.8262 6.85306L9.26796 12.9864L19.7743 0L22 1.76125Z" fill="#48E054"/>
</svg>

                                            </span>
                                            <span className="text icon-list-text">Get pre-approved fast.</span>
                                        </li>
                                        <li className="icon-list-item">
                                            <span className="icon-list-icon">
                                                
<svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clip-rule="evenodd" d="M22 1.76125L9.67886 17L0 9.02075L1.8262 6.85306L9.26796 12.9864L19.7743 0L22 1.76125Z" fill="#48E054"/>
</svg>

                                            </span>
                                            <span className="text icon-list-text">Find your perfect payment plan.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="stress-bottom">
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <div className="stress-bottom-left">
                                    <h3 className="consultant-heading" style={{marginBottom: '20px'}}><strong>Your keys are waiting, let&apos;s make it happen!</strong></h3>
                                    <Link href='/journey'><button className="btn btn-primary btn-rounded">
                    <span className="text text-light">Free Consultation</span>
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M13.3536 6.35353L8.35359 11.3535C8.25971 11.4474 8.13237 11.5002 7.99959 11.5002C7.86682 11.5002 7.73948 11.4474 7.64559 11.3535C7.55171 11.2596 7.49896 11.1323 7.49896 10.9995C7.49896 10.8668 7.55171 10.7394 7.64559 10.6455L11.7926 6.49953L0.999595 6.49953C0.866986 6.49953 0.739809 6.44686 0.646041 6.35309C0.552273 6.25932 0.499595 6.13214 0.499595 5.99953C0.499595 5.86692 0.552273 5.73975 0.646041 5.64598C0.739809 5.55221 0.866986 5.49953 0.999595 5.49953L11.7926 5.49953L7.64559 1.35353C7.55171 1.25965 7.49896 1.13231 7.49896 0.999533C7.49896 0.866757 7.55171 0.73942 7.64559 0.645533C7.73948 0.551646 7.86682 0.498901 7.99959 0.498901C8.13237 0.498901 8.25971 0.551646 8.35359 0.645533L13.3536 5.64553C13.4002 5.69198 13.4371 5.74715 13.4623 5.8079C13.4875 5.86865 13.5005 5.93377 13.5005 5.99953C13.5005 6.0653 13.4875 6.13042 13.4623 6.19117C13.4371 6.25191 13.4002 6.30709 13.3536 6.35353Z" fill="white"/>
                    </svg>
                </button></Link>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-8">
                                <div className="stress-bottom-right">
                                    <Image width={500} height={500} src="/assets/images/stress.png" alt="Mortgage in Dubai" />
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
         </section>

         <section id="re-finance">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="lower-payment-left">
                            <h2 className="text-light consultant-heading" style={{marginBottom: '10px'}}>Lower Your Payments with<br/> Mortgage Refinancing in Dubai!</h2>
                            <p className="text text-light">Stuck with high mortgage rates? Refinance and save!</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                    <div className="lower-payment-right">
                            <div className="lower-pament-row lower-pament-row-b">
                               <h4 className="text-light secondary-heading"><strong>01 Why Refinance?</strong></h4>
                               <ul className="bullet-list">
                                <li className="text text-light">Reduce monthly payments instantly.</li>
                                <li className="text text-light">Switch to better interest rates.</li>
                                <li className="text text-light">Adjust loan terms to suit your needs.</li>
                               </ul>
                            </div>
                            <div className="lower-pament-row lower-pament-row-b">
                               <h4 className="text-light secondary-heading"><strong>02 Great For</strong></h4>
                               <ul className="bullet-list">
                                <li className="text text-light">Homeowners with existing mortgages.</li>
                                <li className="text text-light">Those wanting better loan terms.</li>
                                <li className="text text-light">Anyone seeking extra cash flow.</li>
                               </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>

         <section id="lower-cta">
            <div className="container">
                <div className="lower-cta-wrapper">
                    <div className="row">
                        <div className="col-ssm-12 col-md-6">
                            <div className="lower-cta-left">
                                <h2 className="consultant-heading" style={{marginBottom: '20px'}}><strong>Rates Won&apos;t Stay Low Forever!</strong></h2>
                                <Link href='/journey'><button className="btn btn-primary btn-rounded">
                    <span className="text text-light">Check Now</span>
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M13.3536 6.35353L8.35359 11.3535C8.25971 11.4474 8.13237 11.5002 7.99959 11.5002C7.86682 11.5002 7.73948 11.4474 7.64559 11.3535C7.55171 11.2596 7.49896 11.1323 7.49896 10.9995C7.49896 10.8668 7.55171 10.7394 7.64559 10.6455L11.7926 6.49953L0.999595 6.49953C0.866986 6.49953 0.739809 6.44686 0.646041 6.35309C0.552273 6.25932 0.499595 6.13214 0.499595 5.99953C0.499595 5.86692 0.552273 5.73975 0.646041 5.64598C0.739809 5.55221 0.866986 5.49953 0.999595 5.49953L11.7926 5.49953L7.64559 1.35353C7.55171 1.25965 7.49896 1.13231 7.49896 0.999533C7.49896 0.866757 7.55171 0.73942 7.64559 0.645533C7.73948 0.551646 7.86682 0.498901 7.99959 0.498901C8.13237 0.498901 8.25971 0.551646 8.35359 0.645533L13.3536 5.64553C13.4002 5.69198 13.4371 5.74715 13.4623 5.8079C13.4875 5.86865 13.5005 5.93377 13.5005 5.99953C13.5005 6.0653 13.4875 6.13042 13.4623 6.19117C13.4371 6.25191 13.4002 6.30709 13.3536 6.35353Z" fill="white"/>
                    </svg>
                </button></Link>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="lower-right lower-right-row">
                                <h3 className="secondary-heading"><strong>03 Fast & Easy Process</strong></h3>
                                <ul className="bullet-list bullet-list-dark">
                                    <li className="text">Free eligibility check.</li>
                                    <li className="text">Compare best offers.</li>
                                    <li className="text">Save thousands per year.</li>
                                    <li className="text">100% focused on refinancing benefits.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>

         <section id="equity-release">
            <div className="unlock-intro">
                <h2 className="primary-heading text-center">Unlock Your Home&apos;s Value with Equity Release in Dubai!</h2>
                <p className="text text-center">Own a property in Dubai? Access funds without selling using equity release!</p>
            </div>
            <div className="container">
                <div className="unlock-wrapper">
                    <div className="unlock-top">
                        <div className="unlock-left">
                            <h2 className="secondary-heading text-light"><strong>How it Works</strong></h2>
                        </div>
                        <div className="unlock-right">
                            <div className="unlock-card">
                                <h3 className="primary-heading">01</h3>
                                <p className="text">Borrow against your home&apos;s current value.</p>
                            </div>
                            <div className="unlock-card">
                                <h3 className="primary-heading">02</h3>
                                <p className="text">Keep ownership while accessing funds.</p>
                            </div>
                            <div className="unlock-card">
                                <h3 className="primary-heading">03</h3>
                                <p className="text">Use for investments, renovations, or other goals.</p>
                            </div>
                            <div className="unlock-card">
                                <h3 className="primary-heading">04</h3>
                                <p className="text">Use funds for the business purpose.</p>
                            </div>
                        </div>
                    </div>

                    <div className="unlock-bottom">
                        <h2 className="text-light secondary-heading"><strong>Key Benefits</strong></h2>
                        <ul className="icon-list-horizantol">
                            <li>
                                <span>
                                
<svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clip-rule="evenodd" d="M22 1.76125L9.67886 17L0 9.02075L1.8262 6.85306L9.26796 12.9864L19.7743 0L22 1.76125Z" fill="#28E938"/>
</svg>

                                </span>
                                <span className="text-sm text-light">Competitive rates (often lower than personal loans).</span>
                            </li>
                            <li>
                                <span>
                               
<svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clip-rule="evenodd" d="M22 1.76125L9.67886 17L0 9.02075L1.8262 6.85306L9.26796 12.9864L19.7743 0L22 1.76125Z" fill="#28E938"/>
</svg>

                                </span>
                                <span className="text-sm text-light">Flexible repayment options.</span>
                            </li>
                            <li>
                                <span>
                               
<svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clip-rule="evenodd" d="M22 1.76125L9.67886 17L0 9.02075L1.8262 6.85306L9.26796 12.9864L19.7743 0L22 1.76125Z" fill="#28E938"/>
</svg>

                                </span>
                                <span className="text-sm text-light">Fast approval for qualified homeowners.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
         </section>

         <section id="unlock-cta">
            <div className="container">
                <div className="unlock-cta-wrapper">
                    <div className="unlock-cta-top">
                        <h2 className="consultant-heading" style={{marginBottom: '0'}}><strong>Fast approval for qualified homeowners</strong></h2>
                        <Link href='/journey'><button className="btn btn-primary btn-rounded">
                    <span className="text text-light">Free Assessment</span>
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M13.3536 6.35353L8.35359 11.3535C8.25971 11.4474 8.13237 11.5002 7.99959 11.5002C7.86682 11.5002 7.73948 11.4474 7.64559 11.3535C7.55171 11.2596 7.49896 11.1323 7.49896 10.9995C7.49896 10.8668 7.55171 10.7394 7.64559 10.6455L11.7926 6.49953L0.999595 6.49953C0.866986 6.49953 0.739809 6.44686 0.646041 6.35309C0.552273 6.25932 0.499595 6.13214 0.499595 5.99953C0.499595 5.86692 0.552273 5.73975 0.646041 5.64598C0.739809 5.55221 0.866986 5.49953 0.999595 5.49953L11.7926 5.49953L7.64559 1.35353C7.55171 1.25965 7.49896 1.13231 7.49896 0.999533C7.49896 0.866757 7.55171 0.73942 7.64559 0.645533C7.73948 0.551646 7.86682 0.498901 7.99959 0.498901C8.13237 0.498901 8.25971 0.551646 8.35359 0.645533L13.3536 5.64553C13.4002 5.69198 13.4371 5.74715 13.4623 5.8079C13.4875 5.86865 13.5005 5.93377 13.5005 5.99953C13.5005 6.0653 13.4875 6.13042 13.4623 6.19117C13.4371 6.25191 13.4002 6.30709 13.3536 6.35353Z" fill="white"/>
                    </svg>
                </button></Link>
                    </div>

                    <div className="unlock-cta-bottom">
                        <h3 className="secondary-heading"><strong>Perfect For</strong></h3>
                        <div className="perfect-wrapper">
                            <div className="perfect-card">
                                <div className="perfect-icon">
                                    
<svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 22.4799H7.038V13.5353H13.962V22.4799H19.5V8.79858L10.5 1.90018L1.5 8.79858V22.4799ZM0 24V8.03851L10.5 0L21 8.03851V24H12.462V15.0555H8.538V24H0Z" fill="black"/>
</svg>

                                </div>
                                <span className="text">Property owners needing liquidity.</span>
                            </div>

                            <div className="perfect-card">
                                <div className="perfect-icon">
                                    

                                <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 0V8.01879H23.4352V2.74393L14.0465 12.3665L9.35208 7.55521L1.10024 16L0 14.8724L9.35208 5.27486L14.0465 10.0861L22.3227 1.60376H17.176V0H25Z" fill="black"/>
</svg>


                                </div>
                                <span className="text">Investors wanting to expand portfolios.</span>
                            </div>

                            <div className="perfect-card">
                                <div className="perfect-icon">
                                    

                                
<svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.125 1.25H3.875C2.35622 1.25 1.125 2.48122 1.125 4V15C1.125 16.5188 2.35622 17.75 3.875 17.75H23.125C24.6438 17.75 25.875 16.5188 25.875 15V4C25.875 2.48122 24.6438 1.25 23.125 1.25Z" stroke="black" stroke-width="1.375"/>
<path d="M3.875 5.375H8M19 13.625H23.125" stroke="black" stroke-width="1.375" stroke-linecap="round"/>
<path d="M13.5 12.25C15.0188 12.25 16.25 11.0188 16.25 9.5C16.25 7.98122 15.0188 6.75 13.5 6.75C11.9812 6.75 10.75 7.98122 10.75 9.5C10.75 11.0188 11.9812 12.25 13.5 12.25Z" stroke="black" stroke-width="1.375"/>
</svg>



                                </div>
                                <span className="text">Those funding major expenses.</span>
                            </div>

                             <div className="perfect-card">
                                <div className="perfect-icon">
                                    

                                
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
  <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
</svg>



                                </div>
                                <span className="text">Business funds in your account.
</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>

         <section id="non-resident">
            <div className="container">
                <div className="buy-wrapper">
                    <div className="buy-top">
                        <div className="buy-intro">
                            <h2 className="primary-heading text-center">Buy Dubai Property as a Non-Resident, Yes, You Can!</h2>
                            <p className="text text-center">Dreaming of owning a Dubai home but live abroad? We make it possible!</p>
                        </div>
                        <div className="row g-3">
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="buy-card">
                                    <h3 className="secondary-heading"><strong>Non-Resident Mortgage</strong></h3>
                                    <ul>
                                        <li className="text">Finance up to 60-65% of property value.</li>
                                        <li className="text">Competitive interest rates.</li>
                                        <li className="text">No UAE residency required.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="buy-card">
                                    <h3 className="secondary-heading"><strong>Who Qualifies?</strong></h3>
                                    <ul>
                                        <li className="text">Expats with international income.</li>
                                        <li className="text">Investors seeking Dubai real estate.</li>
                                        <li className="text">Those planning future relocation.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="buy-card">
                                    <h3 className="secondary-heading"><strong>Fast-Track Your Approval</strong></h3>
                                    <ul>
                                        <li className="text">Simple online application.</li>
                                        <li className="text">English-speaking advisors.</li>
                                        <li className="text">Special investor rates.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buy-bottom">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="buy-bottom-left">
                                    <h3 className="consultant-heading text-light" style={{marginBottom: '20px'}}><strong>Your Dubai Home Awaits, Get Pre-Approved Today!</strong></h3>
                                    <Link href='/journey'><button className="btn btn-secondary btn-rounded">
                    <span className="text">Free Eligibility Check</span>

                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.451987 1.58023L1.51299 0.520235L7.29199 6.29723C7.38514 6.3898 7.45907 6.49988 7.50952 6.62113C7.55997 6.74238 7.58594 6.87241 7.58594 7.00373C7.58594 7.13506 7.55997 7.26509 7.50952 7.38634C7.45907 7.50759 7.38514 7.61767 7.29199 7.71023L1.51299 13.4902L0.452987 12.4302L5.87699 7.00523L0.451987 1.58023Z" fill="black"/>
</svg>

                </button></Link>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="buy-bottom-right">
                                    <Image width={500} height={350} src="/assets/images/buy-img.png" alt="Mortgage in Dubai" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>

         <section id="handover-payment">
            <div className="process-intro">
                <h2 className="primary-heading text-center">Need Help With Your Property&apos;s Final Payment? We Can Help!</h2>
                <p className="text text-center">That moment when your Dubai property is ready but the handover payment is due - stressful, right? Don&apos;t worry! Whether you&apos;re salaried, self-employed, or a freelancer, a handover payment mortgage can save the day.</p>
            </div>
           
            <div className="process-wrapper">
                <div className="container">
                <div className="row g-3">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="process-card">
                            <div className="process-number">
                                <span className="text">01</span>
                            </div>
                            <h3 className="secondary-heading"><strong>How it works</strong></h3>
                            <ul>
                                <li className="text">Finance 70-80% of your remaining balance.</li>
                                <li className="text">Get competitive rates from the lowest margin</li>
                                <li className="text">Fast approval (often within 72 hours).</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="process-card">
                            <div className="process-number">
                                <span className="text">02</span>
                            </div>
                            <h3 className="secondary-heading"><strong>Who Qualifies?</strong></h3>
                            <ul>
                                <li className="text">Salaried professionals - easiest approval with steady income.</li>
                                <li className="text">Business owners - approved based on company or the personal statements.</li>
                                <li className="text">Freelancers/creators - possible with consistent income history.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="process-card">
                            <div className="process-number">
                                <span className="text">03</span>
                            </div>
                            <h3 className="secondary-heading"><strong>Why It&apos;s Smarter Choice</strong></h3>
                            <ul>
                                <li className="text">Lower interest rates.</li>
                                <li className="text">Higher loan amounts.</li>
                                <li className="text">Discount from the developer on the post handover payments.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="process-card">
                            <div className="process-number">
                                <span className="text">04</span>
                            </div>
                            <h3 className="secondary-heading"><strong>Quick Checklist</strong></h3>
                            <ul>
                                <li className="text">Use a mortgage calculator UAE to estimate payments.</li>
                                <li className="text">Compare home loan rates in Dubai.</li>
                                <li className="text">Get pre-approved before your payment deadline.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
           
         </section>

         <section id="process-cta">
            <div className="container process-cta-container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2 className="secondary-heading text-center"><strong>Don&apos;t risk losing your deposit! Get expert help to secure your property with a handover payment solution</strong></h2>
                <Link href='/journey'><button className="btn btn-primary btn-center btn-rounded">
                    <span className="text text-light">Check Your Eligibility Now</span>
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M13.3536 6.35353L8.35359 11.3535C8.25971 11.4474 8.13237 11.5002 7.99959 11.5002C7.86682 11.5002 7.73948 11.4474 7.64559 11.3535C7.55171 11.2596 7.49896 11.1323 7.49896 10.9995C7.49896 10.8668 7.55171 10.7394 7.64559 10.6455L11.7926 6.49953L0.999595 6.49953C0.866986 6.49953 0.739809 6.44686 0.646041 6.35309C0.552273 6.25932 0.499595 6.13214 0.499595 5.99953C0.499595 5.86692 0.552273 5.73975 0.646041 5.64598C0.739809 5.55221 0.866986 5.49953 0.999595 5.49953L11.7926 5.49953L7.64559 1.35353C7.55171 1.25965 7.49896 1.13231 7.49896 0.999533C7.49896 0.866757 7.55171 0.73942 7.64559 0.645533C7.73948 0.551646 7.86682 0.498901 7.99959 0.498901C8.13237 0.498901 8.25971 0.551646 8.35359 0.645533L13.3536 5.64553C13.4002 5.69198 13.4371 5.74715 13.4623 5.8079C13.4875 5.86865 13.5005 5.93377 13.5005 5.99953C13.5005 6.0653 13.4875 6.13042 13.4623 6.19117C13.4371 6.25191 13.4002 6.30709 13.3536 6.35353Z" fill="white"/>
                    </svg>
                </button></Link>
            </div>
         </section>

         <section id="under-constructon">
           <div className="container">
           <div className="smart-intro">
                <h2 className="primary-heading text-light text-center">Smart Investing: Under Construction & Under Construction Resale Properties in Dubai.</h2>
                <p className="text text-light text-center">Smart Investing: Under Construction & Under Construction Resale Properties in Dubai.</p>
            </div>

            <div className="row g-0">
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="smart-card">
                        <div>
                        <span className="smart-number text-light">01</span>
                        <h3 className="secondary-heading text-light">Under Construction Purchases</h3>
                        </div>
                        <ul>
                            <li className="text text-light">Mortgage for under construction resale property in Dubai at the market value instead of original price.</li>
                            <li className="text text-light">Flexible Payment Plans (installments during construction).</li>
                            <li className="text text-light">Capital Appreciation Potential (buy early, profit at completion).</li>
                        </ul>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="smart-card">
                        <div>
                        <span className="smart-number text-light">02</span>
                        <h3 className="secondary-heading text-light">Under Construction Resale</h3>
                        </div>
                        <ul>
                            <li className="text text-light">Great Deals Available (original buyers needing quick exits).</li>
                            <li className="text text-light">Immediate Equity (buy at current prices, not launch prices).</li>
                            <li className="text text-light">Shorter Wait Times (closer to completion than new launches).</li>
                        </ul>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="smart-card">
                        <div>
                        <span className="smart-number text-light">03</span>
                        <h3 className="secondary-heading text-light">Why Consider These Options?</h3>
                        </div>

                        <ul>
                            <li className="text text-light">For Investors: Build portfolio with smaller initial capital.</li>
                            <li className="text text-light">For End-Users: Secure future home at today&apos;s prices.</li>
                            <li className="text text-light">For Flippers: Profit from pre-completion price jumps.</li>
                        </ul>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="smart-card">
                       <div>
                       <span className="smart-number text-light">04</span>
                       <h3 className="secondary-heading text-light">Need Financing? We offer</h3>
                       </div>
                        <ul>
                            <li className="text text-light">Special mortgage solutions for off-plan.</li>
                            <li className="text text-light">Under Construction Resale purchase loans.</li>
                            <li className="text text-light">Expert market advice.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="smart-cta">
                <div className="smart-cta-heading">
                    
<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.4993 46C30.7224 46 32.5636 44.6931 33 43H22C22.4364 44.6931 24.2762 46 27.4993 46Z" fill="#D0CFCE"/>
<path d="M33.5298 10.8037C33.5298 10.8037 25.3123 8.52583 21.3009 11.6398C17.2896 14.7538 17 21.9187 17 21.9187C17.3931 23.3769 19.8395 27.5148 19.8395 27.5148C20.2024 28.1151 21.3533 32.4441 22.0226 35H32.7195C33.3014 33.1254 35.6423 26.3354 35.948 25.637C36.3404 24.7389 37.0097 22.9908 37.3476 22.3312C38.1606 20.7439 38.1311 19.3444 37.7091 17.7011C36.7967 14.1529 36.0468 13.2713 33.5291 10.8023L33.5298 10.8037Z" fill="#FCEA2B"/>
<path d="M27.18 8.00197C21.4053 8.00197 16.0123 12.4409 16.0123 18.0475C16.0123 18.7569 15.8337 21 16.836 21C16.836 21 18.4557 15.8556 22.4957 12.7493C26.5356 9.64292 33 10.3003 33 10.3003C32.5506 8.9559 29.2436 8 27.182 8L27.18 8.00197Z" fill="white"/>
<path d="M27.3933 34.5892V26.7756M31.3001 26.7756H23.4865M38.2237 19.2303C38.2237 21.8381 37.0556 23.0965 35.767 26.1016C35.4379 26.8685 33.0113 34.8575 33.0113 34.8575H21.7752C21.7752 34.8575 19.8244 27.2206 19.4547 26.5989C17.9037 23.9826 16.5629 22.077 16.5629 19.2303C16.5629 13.2484 21.412 8.3999 27.3933 8.3999C33.3745 8.3999 38.2237 13.249 38.2237 19.2303Z" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M32.7333 42.1606C32.7333 44.2809 30.3441 46 27.3966 46C24.4492 46 22.0599 44.2809 22.0599 42.1606H32.7333Z" stroke="black" stroke-width="0.424" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.1515 39.6673L32.6351 37.3965" stroke="black" stroke-width="0.49125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.833 40.3805L32.6154 39.6083M22.1711 37.4553L25.9536 36.6831" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<h2 className="secondary-heading"><strong>Pro Tip: Always check:</strong></h2>
                </div>

                <ul className="icon-list">
                    <li>
                        <span>
                            
<svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8789 8.81674L14.0038 10.8457C14.5001 11.3194 15.2631 11.5965 16.0715 11.5965H20M20 11.5965L17.4827 9.19303M20 11.5965L17.4827 14M1 3.40348H4.92848C5.73693 3.40348 6.49987 3.68088 6.9962 4.15461L9.15586 6.21662M1 11.5965H4.92848C5.73693 11.5965 6.49987 11.3194 6.9962 10.8457L14.0038 4.15461C14.5001 3.68058 15.2631 3.40348 16.0715 3.40348H20M20 3.40348L17.4827 1M20 3.40348L17.4827 5.80697" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </span>
                        <span className="text">Developer Track Record.</span>
                    </li>

                    <li>
                        <span>

                        <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.27125 14.625H5C5.11667 14.625 5.22333 14.6542 5.32 14.7125C5.41667 14.7708 5.49292 14.8583 5.54875 14.975L7.5 18.8338L11.9525 9.97751C12.0692 9.73834 12.2558 9.61876 12.5125 9.61876C12.7683 9.61876 12.955 9.73834 13.0725 9.97751L15.3975 14.6263H18.7288C18.5763 12.3413 17.6596 10.4158 15.9788 8.85001C14.2979 7.28417 12.305 6.50084 10 6.50001C7.695 6.49918 5.70208 7.28209 4.02125 8.84876C2.34042 10.4154 1.42375 12.3408 1.27125 14.625ZM10 24C12.305 24 14.2979 23.2171 15.9788 21.6513C17.6596 20.0854 18.5763 18.16 18.7288 15.875H15C14.8833 15.875 14.7767 15.8458 14.68 15.7875C14.5833 15.7292 14.5071 15.6417 14.4513 15.525L12.5 11.6675L8.04875 20.5463C7.93125 20.7854 7.74458 20.9008 7.48875 20.8925C7.23292 20.8842 7.04583 20.7608 6.9275 20.5225L4.6025 15.875H1.2725C1.425 18.16 2.34167 20.0854 4.0225 21.6513C5.70333 23.2171 7.69583 24 10 24ZM10 25.25C8.61833 25.25 7.32125 24.9892 6.10875 24.4675C4.89625 23.9458 3.83583 23.2308 2.9275 22.3225C2.01917 21.4142 1.30417 20.3533 0.7825 19.14C0.260833 17.9267 0 16.63 0 15.25H1.25C1.25 17.6667 2.10417 19.7292 3.8125 21.4375C5.52083 23.1458 7.58333 24 10 24C12.4167 24 14.4792 23.1458 16.1875 21.4375C17.8958 19.7292 18.75 17.6667 18.75 15.25H20C20 16.6317 19.7392 17.9288 19.2175 19.1413C18.6958 20.3538 17.9808 21.4142 17.0725 22.3225C16.1642 23.2308 15.1033 23.9458 13.89 24.4675C12.6767 24.9892 11.38 25.25 10 25.25ZM0 15.25C0 13.8683 0.260833 12.5713 0.7825 11.3588C1.30417 10.1463 2.01917 9.08584 2.9275 8.17751C3.83583 7.26918 4.89667 6.55417 6.11 6.03251C7.32333 5.51084 8.62 5.25001 10 5.25001C11.2117 5.25001 12.3833 5.46667 13.515 5.90001C14.6467 6.33334 15.685 6.94543 16.63 7.73626L17.5525 6.81251C17.6692 6.69584 17.8129 6.63334 17.9837 6.62501C18.1546 6.61667 18.3058 6.67917 18.4375 6.81251C18.5692 6.94584 18.6358 7.09334 18.6375 7.25501C18.6392 7.41668 18.5725 7.56418 18.4375 7.69751L17.515 8.62001C18.3067 9.56584 18.9188 10.6046 19.3513 11.7363C19.7838 12.8679 20 14.0392 20 15.25H18.75C18.75 12.8333 17.8958 10.7708 16.1875 9.06251C14.4792 7.35418 12.4167 6.50001 10 6.50001C7.58333 6.50001 5.52083 7.35418 3.8125 9.06251C2.10417 10.7708 1.25 12.8333 1.25 15.25H0ZM7.35625 2.12501C7.17792 2.12501 7.02917 2.06543 6.91 1.94626C6.79 1.82626 6.73 1.67751 6.73 1.50001C6.73 1.32251 6.79 1.17376 6.91 1.05376C7.03 0.933759 7.17875 0.874175 7.35625 0.875009H12.6437C12.8221 0.875009 12.9708 0.934592 13.09 1.05376C13.21 1.17376 13.27 1.32251 13.27 1.50001C13.27 1.67751 13.21 1.82626 13.09 1.94626C12.9708 2.06543 12.8225 2.12501 12.645 2.12501H7.35625ZM10 24C7.58333 24 5.52083 23.1458 3.8125 21.4375C2.10417 19.7292 1.25 17.6667 1.25 15.25C1.25 12.8333 2.10417 10.7708 3.8125 9.06251C5.52083 7.35418 7.58333 6.50001 10 6.50001C12.4167 6.50001 14.4792 7.35418 16.1875 9.06251C17.8958 10.7708 18.75 12.8333 18.75 15.25C18.75 17.6667 17.8958 19.7292 16.1875 21.4375C14.4792 23.1458 12.4167 24 10 24Z" fill="black"/>
</svg>


                        </span>
                        <span className="text">Project completion timeline.</span>
                    </li>

                    <li>
                        <span>

                        
<svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.325 10.789L10.84 8.17521C10.6626 8.04215 10.4468 7.97021 10.225 7.97021C10.0032 7.97021 9.78742 8.04215 9.61 8.17521L6.125 10.789M12.275 13.3515L10.225 11.814L8.175 13.3515" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 9.62742C1 6.34947 1 4.7105 1.38745 4.15905C1.77388 3.60862 3.31445 3.08075 6.39663 2.02602L6.98395 1.82513C8.59013 1.2747 9.3927 1 10.225 1C11.0573 1 11.8599 1.2747 13.466 1.82513L14.0534 2.02602C17.1355 3.08075 18.6761 3.60862 19.0625 4.15905C19.45 4.7105 19.45 6.3505 19.45 9.62742V11.2408C19.45 13.8084 18.5921 15.7887 17.4 17.3016M1.19783 13.3C2.07625 17.7054 5.6904 19.9758 8.07148 21.0152C8.8105 21.338 9.18052 21.5 10.225 21.5C11.2705 21.5 11.6395 21.338 12.3785 21.0152C12.972 20.7569 13.6403 20.4207 14.325 19.9963" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
</svg>



                        </span>
                        <span className="text">Escrow account protection.</span>
                    </li>

                    
                </ul>

                <Link href='/journey'><button className="btn btn-primary btn-rounded">
                    <span className="text text-light">Explore Available Projects</span>
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M13.3536 6.35353L8.35359 11.3535C8.25971 11.4474 8.13237 11.5002 7.99959 11.5002C7.86682 11.5002 7.73948 11.4474 7.64559 11.3535C7.55171 11.2596 7.49896 11.1323 7.49896 10.9995C7.49896 10.8668 7.55171 10.7394 7.64559 10.6455L11.7926 6.49953L0.999595 6.49953C0.866986 6.49953 0.739809 6.44686 0.646041 6.35309C0.552273 6.25932 0.499595 6.13214 0.499595 5.99953C0.499595 5.86692 0.552273 5.73975 0.646041 5.64598C0.739809 5.55221 0.866986 5.49953 0.999595 5.49953L11.7926 5.49953L7.64559 1.35353C7.55171 1.25965 7.49896 1.13231 7.49896 0.999533C7.49896 0.866757 7.55171 0.73942 7.64559 0.645533C7.73948 0.551646 7.86682 0.498901 7.99959 0.498901C8.13237 0.498901 8.25971 0.551646 8.35359 0.645533L13.3536 5.64553C13.4002 5.69198 13.4371 5.74715 13.4623 5.8079C13.4875 5.86865 13.5005 5.93377 13.5005 5.99953C13.5005 6.0653 13.4875 6.13042 13.4623 6.19117C13.4371 6.25191 13.4002 6.30709 13.3536 6.35353Z" fill="white"/>
                    </svg>
                </button></Link>
            </div>
           </div>
         </section>

         <section id="commercial">
            <div className="container">
                <div className="container">
                    <div className="commercial-intro">
                        <h2 className="primary-heading text-center">Unlock Your Business Potential with a Commercial Mortgage in Dubai</h2>
                        <p className="text text-center">Looking to expand your business, invest in commercial property, or secure your company&apos;s future? A commercial mortgage in Dubai could be your perfect financial solution.</p>
                    </div>

                    <div className="row g-0 commercial-outer-row">
                        <div className="col-sm-12 col-lg-8">
                            <div className="row g-0 commercial-inner-row">
                                <div className="col-sm-12 col-lg-6">

                                <div className="commercial-card commercial-card-1">
                                <h3 className="secondary-heading text-light"><strong>Why Choose a Commercial Mortgage?</strong></h3>
                                <ul className='bullet-list'>
                                    <li className="text text-light">Purchase Office Spaces, Retail Units, or Warehouses.</li>
                                    <li className="text text-light">Competitive Interest Rates.</li>
                                    <li className="text text-light">Flexible Repayment Terms.</li>
                                    <li className="text text-light">Finance Up to 60% of Property Value.</li>
                                </ul>
                            </div>

                                </div>

                                <div className="col-sm-12 col-lg-6">

<div className="commercial-card commercial-card-2">
<h3 className="secondary-heading"><strong>Who Can Apply?</strong></h3>
<ul className='bullet-list bullet-list-dark'>
    <li className="text">Business Owners – Grow your operations with the right space.</li>
    <li className="text">Investors – Build your commercial property portfolio.</li>
    <li className="text">Entrepreneurs – Secure a long-term asset for your company.</li>
   
</ul>
</div>

</div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4">
                            <div className="commercial-card commercial-card-3">
                                <h3 className="secondary-heading"><strong>Fast & Easy Approval Process</strong></h3>
                                <ul className='bullet-list bullet-list-dark'>
                                    <li className="text">Check Eligibility – Quick, no-obligation assessment.</li>
                                    <li className="text">Compare Lenders – We find you the best rates.</li>
                                    <li className="text">Submit Documents – Simple paperwork, fast processing.</li>
                                    <li className="text">Get Funded & Grow! – Move into your new space.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>

         <section id="commercial-cta">
            <div className="container">
                <div className="commercial-cta-warapper">
                    <h3 className="consultant-heading"><strong>Don&apos;t Let Financing<br/> Hold You Back!</strong></h3>
                    <div>
                        <p className="text" style={{marginBottom: '20px'}}><strong>Get Your Free Commercial<br/> Mortgage Quote Today</strong></p>
                        <Link href='/journey'><button className="btn btn-primary btn-rounded">
                    <span className="text text-light">Get a quote</span>
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M13.3536 6.35353L8.35359 11.3535C8.25971 11.4474 8.13237 11.5002 7.99959 11.5002C7.86682 11.5002 7.73948 11.4474 7.64559 11.3535C7.55171 11.2596 7.49896 11.1323 7.49896 10.9995C7.49896 10.8668 7.55171 10.7394 7.64559 10.6455L11.7926 6.49953L0.999595 6.49953C0.866986 6.49953 0.739809 6.44686 0.646041 6.35309C0.552273 6.25932 0.499595 6.13214 0.499595 5.99953C0.499595 5.86692 0.552273 5.73975 0.646041 5.64598C0.739809 5.55221 0.866986 5.49953 0.999595 5.49953L11.7926 5.49953L7.64559 1.35353C7.55171 1.25965 7.49896 1.13231 7.49896 0.999533C7.49896 0.866757 7.55171 0.73942 7.64559 0.645533C7.73948 0.551646 7.86682 0.498901 7.99959 0.498901C8.13237 0.498901 8.25971 0.551646 8.35359 0.645533L13.3536 5.64553C13.4002 5.69198 13.4371 5.74715 13.4623 5.8079C13.4875 5.86865 13.5005 5.93377 13.5005 5.99953C13.5005 6.0653 13.4875 6.13042 13.4623 6.19117C13.4371 6.25191 13.4002 6.30709 13.3536 6.35353Z" fill="white"/>
                    </svg>
                </button></Link>
                    </div>
                </div>
            </div>
         </section>

         <section id="plot-purchase">
            <div className="container">
                <div className="build-intro">
                    <h2 className="primary-heading text-light text-center">Build Your Dream Property from the Ground Up <br/>with a Plot & Construction Loan in Dubai</h2>
                    <p className="text text-light text-center">Dreaming of constructing your ideal home or investment property? A plot purchase and construction mortgage in Dubai makes it possible!</p>
                </div>
                <div className="row build-row g-12">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="build-card">
                            <p className="buid-number">01</p>
                            <h3 className="secondary-heading text-light"><strong>Why Choose Financing?</strong></h3>
                            <ul>
                                <li className="text">One Complete Package - Finance both land acquisition and construction costs.</li>
                                <li className="text">Flexible Drawdowns - Access funds as construction milestones are met.</li>
                                <li className="text">Competitive Rates - Start your application today.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="build-card">
                            <p className="buid-number">02</p>
                            <h3 className="secondary-heading text-light"><strong>Who Can Benefit?</strong></h3>
                            <ul>
                                <li className="text">Longer Tenures - Standard tenure.</li>
                                <li className="text">Homeowners - Build your custom dream villa.</li>
                                <li className="text">Investors - Develop profitable residential/commercial projects.</li>
                                <li className="text">Business Owners - Create your ideal home.</li>
                            </ul>
                        </div>
                    </div>

                    
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="build-card">
                            <p className="buid-number">03</p>
                            <h3 className="secondary-heading text-light"><strong>How It Works</strong></h3>
                            <ul>
                                <li className="text">Purchase Your Plot - Finance up to 60% of land value.</li>
                                <li className="text">Approved Construction Plans - Secure additional funding for building.</li>
                                <li className="text">Phased Disbursements - Funds released at construction stages.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="build-row">
                    <div className="build-row-top">
                        <h3 className="secondary-heading">Key Requirements</h3>
                        <ul className="line-list">
                            <li className="text">Final Completion - Convert to traditional mortgage if needed.</li>
                            <li className="text">Licensed contractor agreements.</li>
                            <li className="text">Detailed construction plans & budget.</li>
                            <li className="text">Proper plot zoning and approvals.</li>
                        </ul>
                    </div>
                    <div className="build-row-bottom">
                        <div>
                            <h3 className="secondary-heading text-light"><strong>Smart Tip</strong></h3>
                            <p className="text text-light">Use our construction cost calculator to <br/>estimate your total project budget before applying.</p>
                        </div>
                        <Link href='/journey'><button className="btn btn-secondary btn-rounded">
                    <span className="text">Start Your Building Journey Today</span>
                </button></Link>
                    </div>
                </div>
            </div>
         </section>
        </div>
    )
}