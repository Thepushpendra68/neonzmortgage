'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import JourneyHeader from './JourneyHeader';
import Link from "next/link";

export default function LayoutWrapper({ children }) {
    const pathname = usePathname();
    const isJourneyPage = pathname === '/journey';

    return (
        <>
            {isJourneyPage ? <JourneyHeader /> : <Header />}
            
            {children}

            {!isJourneyPage && (
                <section id="footer">
                    <div className="footer-top">
                        <div className="container">
                            <div className="footer-row">
                                <div className="footer-col">
                                    <Link href='/'><img src="/assets/images/logo-white.png" alt="Neon Mortgage" /></Link>
                                </div>
                                <div className="footer-col">
                                    <h3 className="secondary-heading footer-title text-light">explore</h3>
                                    <ul className="footer-list">
                                        <li><Link href='/'><span className="footer-list-text text text-light">Home</span></Link></li>
                                        <li><Link href='/about-us'><span className="footer-list-text text text-light">About</span></Link></li>
                                        <li><Link href='/calculator'><span className="footer-list-text text text-light">Calculator</span></Link></li>
                                        <li><Link href='/blogs'><span className="footer-list-text text text-light">Blogs</span></Link></li>
                                    </ul>
                                </div>
                                <div className="footer-col">
                                    <h3 className="secondary-heading footer-title text-light">products</h3>
                                    <div className="footer-list-row">
                                    <ul className="footer-list">
                                        <li><Link href='/products#new-purchase'><span className="footer-list-text text text-light">New Purchace</span></Link></li>
                                        <li><Link href='/products#re-finance'><span className="footer-list-text text text-light">Refinance</span></Link></li>
                                        <li><Link href='/products#equity-release'><span className="footer-list-text text text-light">Equity</span></Link></li>
                                        <li><Link href='/products#non-resident'><span className="footer-list-text text text-light">Non-Resident</span></Link></li>
                                    </ul>
                                    <ul className="footer-list">
                                        <li><Link href='/products#handover-payment'><span className="footer-list-text text text-light">Handover Payment</span></Link></li>
                                        <li><Link href='/products#under-constructon'><span className="footer-list-text text text-light">Underconstruction</span></Link></li>
                                        <li><Link href='/products#commercial'><span className="footer-list-text text text-light">Commercial Mortgage</span></Link></li>
                                        <li><Link href='/products#plot-purchase'><span className="footer-list-text text text-light">Plot Purchase</span></Link></li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="footer-col">
                                    <h3 className="secondary-heading footer-title text-light">quick links</h3>
                                    <ul className="footer-list">
                                        <li><Link href='/contact-us'><span className="footer-list-text text text-light">Speak to us</span></Link></li>
                                        <li><Link href='/journey'><span className="footer-list-text text text-light">Apply for mortgage</span></Link></li>
                                        <li><Link href='https://maps.app.goo.gl/PCjnALnxpLnC7gF27' target='_blank'><span className="footer-list-text text text-light">Locate our office</span></Link></li>
                                    </ul>
                                </div>
                                <div className="footer-col">
                                    <h3 className="secondary-heading footer-title text-light">contact us</h3>
                                    <ul className="footer-list">
                                        <li>
                                            <span className="footer-list-icon">
                                                
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-envelope" viewBox="0 0 16 16">
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
    </svg>

                                            </span>
                                            <a href='mailto:info@neonmortgage.com'><span className="footer-list-text text text-light">
                                            Info@neonmortgage.com

                                            </span></a>
                                        </li>
                                        <li>
                                            <span className="footer-list-icon">
                                                

                                            <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.90398 9.71383L0.97998 1.78983L1.68798 1.07583L8.90298 8.29083L15.291 1.90283H9.99998V0.902832H17V7.90283H16V2.61683L8.90398 9.71383Z" fill="white"/>
    </svg>


                                            </span>
                                            <a href='tel:+971588002132'><span className="footer-list-text text text-light">
                                            +971 58 800 2132

                                            </span></a>
                                        </li>
                                        
                                        <li>
                                            <span className="footer-list-icon">
                                                

                                            <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.90398 9.71383L0.97998 1.78983L1.68798 1.07583L8.90298 8.29083L15.291 1.90283H9.99998V0.902832H17V7.90283H16V2.61683L8.90398 9.71383Z" fill="white"/>
    </svg>


                                            </span>
                                            <a href='tel:+971585946007'><span className="footer-list-text text text-light">
                                            +971 58 594 6007

                                            </span></a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="footer-bottom-inner">
                                <p className="text text-light">Copyright ©2025, All Rights Reserved by Neon Mortgage</p>
                                <ul className="social-list">
                                    <li>
                                        <a href="https://www.linkedin.com/company/102205357/admin/dashboard/" target='_blank'>
                                            
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.5556 0C20.2039 0 20.8256 0.257539 21.284 0.715961C21.7425 1.17438 22 1.79614 22 2.44444V19.5556C22 20.2039 21.7425 20.8256 21.284 21.284C20.8256 21.7425 20.2039 22 19.5556 22H2.44444C1.79614 22 1.17438 21.7425 0.715961 21.284C0.257539 20.8256 0 20.2039 0 19.5556V2.44444C0 1.79614 0.257539 1.17438 0.715961 0.715961C1.17438 0.257539 1.79614 0 2.44444 0H19.5556ZM18.9444 18.9444V12.4667C18.9444 11.4099 18.5247 10.3965 17.7774 9.64924C17.0302 8.90201 16.0167 8.48222 14.96 8.48222C13.9211 8.48222 12.7111 9.11778 12.1244 10.0711V8.71444H8.71444V18.9444H12.1244V12.9189C12.1244 11.9778 12.8822 11.2078 13.8233 11.2078C14.2771 11.2078 14.7124 11.3881 15.0333 11.709C15.3542 12.0298 15.5344 12.4651 15.5344 12.9189V18.9444H18.9444ZM4.74222 6.79556C5.2868 6.79556 5.80907 6.57922 6.19415 6.19415C6.57922 5.80907 6.79556 5.2868 6.79556 4.74222C6.79556 3.60556 5.87889 2.67667 4.74222 2.67667C4.1944 2.67667 3.66902 2.89429 3.28165 3.28165C2.89429 3.66902 2.67667 4.1944 2.67667 4.74222C2.67667 5.87889 3.60556 6.79556 4.74222 6.79556ZM6.44111 18.9444V8.71444H3.05556V18.9444H6.44111Z" fill="white"/>
    </svg>

                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://www.instagram.com/neon.mortgage/" target='_blank'>
                                            
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
      <path fill='white' d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
    </svg>


                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://web.facebook.com/profile.php?id=61575797454036" target='_blank'>

                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.0301C24 5.38947 18.624 0 12 0C5.376 0 0 5.38947 0 12.0301C0 17.8526 4.128 22.7008 9.6 23.8195V15.6391H7.2V12.0301H9.6V9.02256C9.6 6.70075 11.484 4.81203 13.8 4.81203H16.8V8.42105H14.4C13.74 8.42105 13.2 8.96241 13.2 9.62406V12.0301H16.8V15.6391H13.2V24C19.26 23.3985 24 18.2737 24 12.0301Z" fill="white"/>
    </svg>


                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://www.youtube.com/@NeonMortgageConsultantL.L.C">
                                            
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
      <path fill="#fff" d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
    </svg>


                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}