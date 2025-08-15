
// 'use client'

import Image from "next/image";
import MortgageCalculator from "@/components/MortgageCalculator";
import Hometab from "@/components/Hometab";
import Testimonail from "@/components/Testimonial";
import Posts from "@/components/Posts";
import Link from "next/link";
import Head from "next/head";

export const metadata = {
  title: "Mortgage Rates Dubai | Neon Mortgage Consultant",
  description: "Get the best mortgage rates in Dubai with Neon Mortgage Consultant. Expert guidance, low-interest rates, and hassle-free home financing.",
  alternates: {
        canonical: 'https://neonmortgage.com/',
      }
};


export default async function Home() {


 
 


  return (
    <div>

         <Head>
            <link rel="canonical" href="https://neonmortgage.com/" />
         </Head>

        <section id="home">
            <div className="container">
                <h1 className="hero-heading text-center">Mortgage Rates Dubai</h1>
                <p className="hero-des secondary-heading text-center py-6">Get the best mortgage rates Dubai with expert guidance. Compare, apply, and secure your dream home effortlessly.</p>
                <div className="btn-center">
                     <Link href='/journey' className="btn btn-primary btn-rounded">
                    <span className="text text-light">Qualify</span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.74277 0.757208L9.74277 7.82828C9.74277 7.96105 9.69002 8.08839 9.59614 8.18228C9.50225 8.27616 9.37491 8.32891 9.24214 8.32891C9.10936 8.32891 8.98202 8.27616 8.88814 8.18228C8.79425 8.08839 8.7415 7.96105 8.7415 7.82828L8.74221 1.96424L1.11041 9.59604C1.01664 9.68981 0.889463 9.74249 0.756855 9.74249C0.624246 9.74249 0.49707 9.68981 0.403301 9.59604C0.309533 9.50227 0.256854 9.3751 0.256854 9.24249C0.256854 9.10988 0.309533 8.9827 0.403301 8.88894L8.0351 1.25713L2.17107 1.25784C2.03829 1.25784 1.91096 1.20509 1.81707 1.11121C1.72318 1.01732 1.67044 0.889984 1.67044 0.757208C1.67044 0.624432 1.72318 0.497095 1.81707 0.403208C1.91095 0.309321 2.03829 0.256576 2.17107 0.256576H9.24214C9.3079 0.256493 9.37304 0.269386 9.43382 0.294516C9.4946 0.319645 9.54982 0.356518 9.59632 0.403023C9.64283 0.449527 9.6797 0.504749 9.70483 0.565526C9.72996 0.626303 9.74285 0.691441 9.74277 0.757208Z" fill="white"></path></svg>
                </Link>
                </div>
                {/* <img src="/assets/images/hero-img.png" className="hero-img" alt="house" /> */}
            </div>

           <div style={{background:'white'}} className="cont-box">
            <div className="container">
             <div className="counter-wrapper">
                
                

<div className="counter">
                    <h2 className="counter-number">1000 +</h2>
                    <p className="counter-des secondary-heading">Successful Transactions.</p>
                </div>
                
<svg width="28" height="39" viewBox="0 0 28 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 38L27 1" stroke="black"/>
</svg>

<div className="counter">
                    <h2 className="counter-number">20 +</h2>
                    <p className="counter-des secondary-heading">Years of Experience.</p>
                </div>

                <svg width="28" height="39" viewBox="0 0 28 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 38L27 1" stroke="black"/>
</svg>

<div className="counter">
                    <h2 className="counter-number">150 +</h2>
                    <p className="counter-des secondary-heading">Mortgage Offers.</p>
                </div>
                
<svg width="28" height="39" viewBox="0 0 28 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 38L27 1" stroke="black"/>
</svg>

<div className="counter" >
                    <h2 className="counter-number">100 %</h2>
                    <p className="counter-des secondary-heading">Customer Satisfaction.</p>
                </div>

             </div>
           </div>
           </div>
        </section>

      

        <section id="about">
            <div className="container">
                <h2 className="primary-heading">Start Your <br/>Home Ownership Journey</h2>
                <div className="about-content">
                <p className="text">With our complete guidance on mortgages and home loans, learn about your mortgage eligibility, the application process, and tips to secure the lowest rates from banks.</p>
                <p className="text">We are dedicated mortgage professionals with a banking background, advising individuals and families to navigate the mortgage process in Dubai with confidence.</p>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                       <Hometab />
                        
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="about-right">
                            
                            <Link href='/journey' className="btn btn-primary btn-rounded" style={{marginTop: '15px'}}>
                    <span className="text text-light">Check Eligiblity</span>
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                       <path fill="#fff" d="M13.3536 6.35353L8.35359 11.3535C8.25971 11.4474 8.13237 11.5002 7.99959 11.5002C7.86682 11.5002 7.73948 11.4474 7.64559 11.3535C7.55171 11.2596 7.49896 11.1323 7.49896 10.9995C7.49896 10.8668 7.55171 10.7394 7.64559 10.6455L11.7926 6.49953L0.999595 6.49953C0.866986 6.49953 0.739809 6.44686 0.646041 6.35309C0.552273 6.25932 0.499595 6.13214 0.499595 5.99953C0.499595 5.86692 0.552273 5.73975 0.646041 5.64598C0.739809 5.55221 0.866986 5.49953 0.999595 5.49953L11.7926 5.49953L7.64559 1.35353C7.55171 1.25965 7.49896 1.13231 7.49896 0.999533C7.49896 0.866757 7.55171 0.73942 7.64559 0.645533C7.73948 0.551646 7.86682 0.498901 7.99959 0.498901C8.13237 0.498901 8.25971 0.551646 8.35359 0.645533L13.3536 5.64553C13.4002 5.69198 13.4371 5.74715 13.4623 5.8079C13.4875 5.86865 13.5005 5.93377 13.5005 5.99953C13.5005 6.0653 13.4875 6.13042 13.4623 6.19117C13.4371 6.25191 13.4002 6.30709 13.3536 6.35353Z"/>
                    </svg>
                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="why">
            <div className="container">
                <h2 className="primary-heading text-center">Your Gateway to Stress,Free Financing</h2>
                <div className="row gy-3">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <div className="why-card why-card-f">
                           <div>
                           <div className="why-icon">
                                
                                <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.74618 20.0431V8.66282H13.0455V20.0431L11.3958 18.3607L9.74618 20.0431ZM18.6213 24.596V0.496155H21.9186V21.2987L18.6213 24.596ZM0.793474 28.9733V16.8315H4.09077V25.674L0.793474 28.9733ZM0.556641 36.9583L11.3713 26.1456L18.6193 32.3727L32.4066 18.5833H27.7292V16.5416H35.8958V24.7083H33.8542V20.0288L18.6683 35.2147L11.4203 28.9876L3.44968 36.9583H0.556641Z" fill="white"/>
                                </svg>
                                
                                                            </div>
                                
                                                            <h3 className="secondary-heading">Understanding Your Financial Goals</h3>
                           </div>
                            <p className="text">We begin by evaluating your financial objectives to match you with the perfect mortgage solution.</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <div className="why-card">
                            <div>
                            <div className="why-icon">
                                

                                <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.5 36.875C15.9629 36.875 13.5769 36.3918 11.3419 35.4254C9.10697 34.4577 7.16263 33.1469 5.50888 31.4932C3.85376 29.8381 2.54301 27.893 1.57662 25.6581C0.608875 23.4231 0.125 21.0371 0.125 18.5C0.125 15.9629 0.608195 13.5769 1.57458 11.3419C2.54097 9.10697 3.8524 7.16263 5.50888 5.50888C7.16535 3.85513 9.1097 2.54369 11.3419 1.57458C13.5782 0.608195 15.9643 0.125 18.5 0.125C23.2584 0.125 27.3636 1.69504 30.8153 4.83513C34.2671 7.97521 36.2428 11.8537 36.7423 16.4706H34.6761C34.3182 13.5156 33.251 10.8635 31.4748 8.51421C29.6985 6.16493 27.4153 4.43156 24.625 3.31408V4.20833C24.625 5.33125 24.2255 6.29288 23.4265 7.09321C22.6276 7.89354 21.6659 8.29303 20.5417 8.29167H16.4583V12.375C16.4583 12.9535 16.2623 13.4387 15.8703 13.8307C15.4783 14.2227 14.9938 14.418 14.4167 14.4167H10.3333V18.5H14.1023V24.625H12.375L2.575 14.825C2.47292 15.4375 2.37968 16.05 2.29529 16.6625C2.2109 17.275 2.16803 17.8875 2.16667 18.5C2.16667 22.9576 3.73195 26.7858 6.8625 29.9844C9.99306 33.183 13.8722 34.7993 18.5 34.8333V36.875ZM36.922 36.3237L29.8782 29.3617C29.2684 29.7959 28.6076 30.1361 27.8958 30.3825C27.1839 30.6275 26.4339 30.75 25.6458 30.75C23.6436 30.75 21.9525 30.0599 20.5723 28.6798C19.1908 27.2969 18.5 25.605 18.5 23.6042C18.5 21.6033 19.1908 19.9122 20.5723 18.5306C21.9538 17.1491 23.645 16.4583 25.6458 16.4583C27.6467 16.4583 29.3385 17.1491 30.7214 18.5306C32.1043 19.9122 32.7944 21.6033 32.7917 23.6042C32.7917 24.4181 32.6624 25.1871 32.4038 25.9113C32.1451 26.6367 31.7844 27.3043 31.3217 27.9141L38.3654 34.8803L36.922 36.3237ZM25.6458 28.7083C27.075 28.7083 28.283 28.2149 29.2698 27.2281C30.2566 26.2413 30.75 25.0333 30.75 23.6042C30.75 22.175 30.2566 20.967 29.2698 19.9802C28.283 18.9934 27.075 18.5 25.6458 18.5C24.2167 18.5 23.0087 18.9934 22.0219 19.9802C21.0351 20.967 20.5417 22.175 20.5417 23.6042C20.5417 25.0333 21.0351 26.2413 22.0219 27.2281C23.0087 28.2149 24.2167 28.7083 25.6458 28.7083Z" fill="black"/>
    </svg>
    
    
                                </div>
    
                                <h3 className="secondary-heading">Exploring the Best Mortgage Options</h3>
                            </div>
                            <p className="text">We carefully evaluate mortgage choices in the UAE, including exclusive mortgage rates in Dubai, to help you secure the ideal home loan in Dubai.</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <div className="why-card why-card-f">
                            <div>
                            <div className="why-icon">
                                

                            
                                <svg width="25" height="35" viewBox="0 0 25 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 0C10.8424 0 9.25269 0.641304 8.08058 1.78283C6.90848 2.92436 6.25 4.4726 6.25 6.08696C6.25 7.70132 6.90848 9.24956 8.08058 10.3911C9.25269 11.5326 10.8424 12.1739 12.5 12.1739C14.1576 12.1739 15.7473 11.5326 16.9194 10.3911C18.0915 9.24956 18.75 7.70132 18.75 6.08696C18.75 4.4726 18.0915 2.92436 16.9194 1.78283C15.7473 0.641304 14.1576 0 12.5 0ZM0 21.3043L12.5 35L25 21.3043H0Z" fill="black"/>
                                </svg>
                                
                                
                                
                                                            </div>
                                
                                                            <h3 className="secondary-heading">Simplifying Your Mortgage Application</h3>
                            </div>
                            <p className="text">We handle all the paperwork, secure pre-approvals, and coordinate with mortgage lenders to make the process effortless for you.</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <div className="why-card">
                            <div>
                            <div className="why-icon">
                                

                            

                                <svg width="39" height="31" viewBox="0 0 39 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.0387 30.4025L9.59324 28.957L13.7909 24.7246C10.2098 24.5518 7.10853 23.3281 4.48703 21.0537C1.86417 18.7807 0.552734 15.9155 0.552734 12.4583C0.552734 9.00109 1.79543 6.09512 4.28082 3.7404C6.76621 1.38567 9.75112 0.208313 13.2356 0.208313H17.4373V2.24998H13.2744C10.3466 2.24998 7.83604 3.23202 5.74265 5.1961C3.64382 7.16155 2.5944 9.58229 2.5944 12.4583C2.5944 15.3275 3.71051 17.704 5.94273 19.5878C8.17496 21.473 10.8005 22.4965 13.8195 22.6585L9.59119 18.4302L11.0347 16.9745L17.7497 23.6875L11.0387 30.4025ZM23.5623 28.7916V16.9336H38.8748V28.7916H23.5623ZM23.5623 12.0663V0.208313H38.8748V12.0663H23.5623ZM25.604 10.0246H36.8332V2.24998H25.604V10.0246Z" fill="black"/>
    </svg>
    
    
    
    
                                </div>
    
                                <h3 className="secondary-heading">Seamless Property Transfer</h3>
                            </div>
                            <p className="text">Once your mortgage is secured, we assist with the property transfer, offering continuous support and guidance throughout the process.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="calculator">
            <div className="container">
                <h2 className="primary-heading text-center">Mortgage Calculator</h2>
                <p className="text text-center">Use our free mortgage calculator to estimate finance payments.</p>
                <div>
                    <MortgageCalculator />
                </div>
            </div>
        </section>

        <section id="maximize">
            <div className="container">
                <div className="row maximize-row">
                    <div className="col-md-12 col-lg-6" style={{padding: '0'}}>
                        <div className="maximize-left">
                            <h2 className="primary-heading text-light max-heading">Maximize Your Savings</h2>
                            <p className="text text-light">Offset mortgages in the UAE offer savings on interest. The more you save in your current account, the less interest you pay on your mortgage. The calculation is done daily based on the difference between the balance in your current account and your loan balance. Additionally, without any hassle, you can easily withdraw the balance in your current account, along with the interest you’ve saved, whenever you need it.</p>
                            <Link href='/journey' className="btn btn-outline-white btn-rounded">
                                <span className="text">Learn More</span>
                                
<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3536 6.35341L8.35359 11.3534C8.25971 11.4473 8.13237 11.5 7.99959 11.5C7.86682 11.5 7.73948 11.4473 7.64559 11.3534C7.55171 11.2595 7.49896 11.1322 7.49896 10.9994C7.49896 10.8666 7.55171 10.7393 7.64559 10.6454L11.7926 6.49941L0.999595 6.49941C0.866986 6.49941 0.739809 6.44673 0.646041 6.35296C0.552273 6.2592 0.499595 6.13202 0.499595 5.99941C0.499595 5.8668 0.552273 5.73963 0.646041 5.64586C0.739809 5.55209 0.866986 5.49941 0.999595 5.49941L11.7926 5.49941L7.64559 1.35341C7.55171 1.25952 7.49896 1.13219 7.49896 0.999411C7.49896 0.866635 7.55171 0.739298 7.64559 0.645411C7.73948 0.551524 7.86682 0.498779 7.99959 0.498779C8.13237 0.498779 8.25971 0.551524 8.35359 0.645411L13.3536 5.64541C13.4002 5.69186 13.4371 5.74703 13.4623 5.80778C13.4875 5.86852 13.5005 5.93364 13.5005 5.99941C13.5005 6.06518 13.4875 6.1303 13.4623 6.19104C13.4371 6.25179 13.4002 6.30697 13.3536 6.35341Z" fill="white"/>
</svg>

                           </Link>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6" style={{padding: '0'}}>
                        <div className="maximize-right" style={{position: 'relative'}}> 
                           
                           <video autoPlay muted loop playsInline
                           
                           style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                           }}
                           className="pigy"
                            src="/assets/images/pig.mp4"></video>
                            
                          <div style={{position: 'relative', zIndex: '2'}}>
                          <h2 className="primary-heading max-heading">Save Interest</h2>
                           <p className="text">Offset your interest with your savings.</p>
                           <Link href='/journey'><p style={{marginTop: '15px'}} className="btn btn-primary btn-rounded">
                                <span className="text text-light">How Offset Work</span>
                                
{/* <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3536 6.35341L8.35359 11.3534C8.25971 11.4473 8.13237 11.5 7.99959 11.5C7.86682 11.5 7.73948 11.4473 7.64559 11.3534C7.55171 11.2595 7.49896 11.1322 7.49896 10.9994C7.49896 10.8666 7.55171 10.7393 7.64559 10.6454L11.7926 6.49941L0.999595 6.49941C0.866986 6.49941 0.739809 6.44673 0.646041 6.35296C0.552273 6.2592 0.499595 6.13202 0.499595 5.99941C0.499595 5.8668 0.552273 5.73963 0.646041 5.64586C0.739809 5.55209 0.866986 5.49941 0.999595 5.49941L11.7926 5.49941L7.64559 1.35341C7.55171 1.25952 7.49896 1.13219 7.49896 0.999411C7.49896 0.866635 7.55171 0.739298 7.64559 0.645411C7.73948 0.551524 7.86682 0.498779 7.99959 0.498779C8.13237 0.498779 8.25971 0.551524 8.35359 0.645411L13.3536 5.64541C13.4002 5.69186 13.4371 5.74703 13.4623 5.80778C13.4875 5.86852 13.5005 5.93364 13.5005 5.99941C13.5005 6.06518 13.4875 6.1303 13.4623 6.19104C13.4371 6.25179 13.4002 6.30697 13.3536 6.35341Z" fill="white"/>
</svg> */}

                            </p></Link>
                          </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="products">
            <div className="container">
                <h2 className="product-heading text-center">Mortgage Services in UAE</h2>

                <div className="row products-row">
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" style={{padding: '0'}}>
                        <div className="product-card">
                          <div className="product-content">
                          <div className="product-not-hovered">
                                <div className="product-icon">
                                    
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-building-check" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514"/>
  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1z"/>
  <path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
</svg>
<h3 className="secondary-heading">New Purchase</h3>
                                </div>
                            </div>
                            <div className="product-hovered">
                                    <p className="secondary-heading text-light">New Purchase</p>
                                    <p className="text-sm text-light">Secure the best home loan in the UAE for your new property purchase and enjoy competitive mortgage rates dubai.</p>
                                </div>
                          </div>

                                <Link href='/journey' className="product-button">
                                    
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="white"/>
<path d="M31.8079 24.4505L25.2699 30.8134C25.1471 30.9329 24.9806 31 24.807 31C24.6334 31 24.4669 30.9329 24.3441 30.8134C24.2214 30.6939 24.1524 30.5319 24.1524 30.3629C24.1524 30.1939 24.2214 30.0319 24.3441 29.9124L29.7668 24.6363H15.6538C15.4804 24.6363 15.3141 24.5693 15.1915 24.4499C15.0689 24.3306 15 24.1688 15 24C15 23.8312 15.0689 23.6694 15.1915 23.5501C15.3141 23.4307 15.4804 23.3637 15.6538 23.3637H29.7668L24.3441 18.0876C24.2214 17.9681 24.1524 17.8061 24.1524 17.6371C24.1524 17.4681 24.2214 17.3061 24.3441 17.1866C24.4669 17.0671 24.6334 17 24.807 17C24.9806 17 25.1471 17.0671 25.2699 17.1866L31.8079 23.5495C31.8688 23.6086 31.9171 23.6788 31.9501 23.7561C31.983 23.8334 32 23.9163 32 24C32 24.0837 31.983 24.1666 31.9501 24.2439C31.9171 24.3212 31.8688 24.3914 31.8079 24.4505Z" fill="black"/>
</svg>

                                </Link>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" style={{padding: '0'}}>
                        <div className="product-card">
                           <div className="product-content">
                           <div className="product-not-hovered">
                                <div className="product-icon">
                                    
<svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 7.66667C15 7.18044 15.1932 6.71412 15.537 6.37031C15.8808 6.02649 16.3471 5.83333 16.8333 5.83333C17.3196 5.83333 17.7859 6.02649 18.1297 6.37031C18.4735 6.71412 18.6667 7.18044 18.6667 7.66667V15.8617L20.885 16.1L29.9417 20.1333C30.895 20.5733 31.5 21.5267 31.5 22.59V30.5833C31.445 32.0867 30.2533 33.2783 28.75 33.3333H16.8333C16.1367 33.3333 15.4767 33.0583 15 32.545L6.01667 24.845L7.37333 23.4333C7.72167 23.0483 8.21667 22.8467 8.73 22.8467H9.13333L15 26V7.66667ZM16.8333 0.333334C19.4367 0.333334 21.8567 1.72667 23.1583 4C25.1933 7.48333 24.0017 11.975 20.5 14.01V11.755C21.6733 10.7283 22.3333 9.225 22.3333 7.66667C22.3333 6.20798 21.7539 4.80903 20.7224 3.77758C19.691 2.74613 18.292 2.16667 16.8333 2.16667C15.3746 2.16667 13.9757 2.74613 12.9442 3.77758C11.9128 4.80903 11.3333 6.20798 11.3333 7.66667C11.3333 9.225 11.9933 10.7283 13.1667 11.755V14.01C10.9117 12.7083 9.5 10.2883 9.5 7.66667C9.5 5.72175 10.2726 3.85648 11.6479 2.48122C13.0232 1.10595 14.8884 0.333334 16.8333 0.333334ZM7.66667 16.8333C9.005 16.8333 10.2517 17.1817 11.3333 17.8233V20.06C10.3617 19.1983 9.07833 18.6667 7.66667 18.6667C6.20798 18.6667 4.80903 19.2461 3.77758 20.2776C2.74613 21.309 2.16667 22.708 2.16667 24.1667C2.16667 26 3.08333 27.595 4.40333 28.6033L8.235 31.5H7.66667C5.72175 31.5 3.85648 30.7274 2.48122 29.3521C1.10595 27.9769 0.333333 26.1116 0.333333 24.1667C0.333333 22.2217 1.10595 20.3565 2.48122 18.9812C3.85648 17.606 5.72175 16.8333 7.66667 16.8333Z" fill="black"/>
</svg>
<h3 className="secondary-heading">Refinance</h3>
                                </div>
                            </div>

                            <div className="product-hovered">
                                    <p className="secondary-heading text-light">Refinance</p>
                                    <p className="text-sm text-light">Looking to extend your mortgage term? Refinance your existing mortgage in the UAE to benefit from lower interest rates.</p>
                                </div>
                           </div>

                           <Link href='/journey' className="product-button">
                                    
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="24" fill="white"/>
                                    <path d="M31.8079 24.4505L25.2699 30.8134C25.1471 30.9329 24.9806 31 24.807 31C24.6334 31 24.4669 30.9329 24.3441 30.8134C24.2214 30.6939 24.1524 30.5319 24.1524 30.3629C24.1524 30.1939 24.2214 30.0319 24.3441 29.9124L29.7668 24.6363H15.6538C15.4804 24.6363 15.3141 24.5693 15.1915 24.4499C15.0689 24.3306 15 24.1688 15 24C15 23.8312 15.0689 23.6694 15.1915 23.5501C15.3141 23.4307 15.4804 23.3637 15.6538 23.3637H29.7668L24.3441 18.0876C24.2214 17.9681 24.1524 17.8061 24.1524 17.6371C24.1524 17.4681 24.2214 17.3061 24.3441 17.1866C24.4669 17.0671 24.6334 17 24.807 17C24.9806 17 25.1471 17.0671 25.2699 17.1866L31.8079 23.5495C31.8688 23.6086 31.9171 23.6788 31.9501 23.7561C31.983 23.8334 32 23.9163 32 24C32 24.0837 31.983 24.1666 31.9501 24.2439C31.9171 24.3212 31.8688 24.3914 31.8079 24.4505Z" fill="black"/>
                                    </svg>
                                    </Link>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" style={{padding: '0'}}>
                        <div className="product-card">
                          <div className="product-content">
                          <div className="product-not-hovered">
                                <div className="product-icon">
                                    

                                <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.4781 0L18.9412 4.65468L20.9352 5.2033L19.7315 9.81588C19.315 9.75587 18.895 9.72601 18.4745 9.72651C18.4059 9.72674 18.3376 9.72968 18.2691 9.73151L19.9685 13.3659L23.2365 11.1093C22.7459 10.7971 22.227 10.5343 21.6872 10.3248L22.8835 5.7396L25.1002 6.34788L23.4781 0ZM8.92666 1.96616L8.91939 8.55229L10.7081 7.49215L13.0336 11.6281C12.6434 11.9331 12.278 12.2701 11.941 12.6359L15.8131 13.9418L16.5142 9.95728C15.9132 10.0979 15.3276 10.3008 14.7666 10.563L12.4558 6.45449L14.4427 5.27781L8.92666 1.96616ZM28.6726 9.16295L29.7048 10.9976L25.6777 13.3858C25.3838 12.9884 25.0582 12.6147 24.7037 12.2686L23.4563 16.0942L27.2681 16.8042C27.1335 16.2424 26.9482 15.6947 26.7147 15.1682L30.715 12.7949L31.8608 14.833L35.0854 9.16811L28.6725 9.16303L28.6726 9.16295ZM6.18073 12.2214L0 13.8873L4.52977 18.5469L5.06395 16.4988L9.55513 17.7352C9.48386 18.2656 9.45798 18.8014 9.47778 19.3364L13.1542 17.524L10.8459 14.0882C10.53 14.606 10.2653 15.1549 10.0555 15.7267L5.58622 14.4979L6.18073 12.2214ZM27.5197 18.6784L24.0293 20.456L26.2193 23.8025C26.4661 23.3853 26.6802 22.9487 26.8597 22.4967L31.3412 23.7304L30.8071 25.7787L37 24.0681L32.458 19.4532L31.8634 21.7297L27.4087 20.5033C27.5069 19.8911 27.5407 19.2809 27.5198 18.6785L27.5197 18.6784ZM9.70751 21.0841C9.82353 21.5957 9.97947 22.0946 10.1762 22.576L6.14685 24.9667L5.11485 23.1322L1.91441 28.837L8.30306 28.8023L7.15728 26.7641L11.1625 24.3882C11.5238 24.9076 11.9361 25.3877 12.3929 25.8207L13.7296 21.886L9.70743 21.084L9.70751 21.0841ZM21.3607 23.9464L20.6475 28.0003C21.103 27.8856 21.5491 27.7346 21.9818 27.5486L24.3096 31.687L22.5209 32.7469L28.0781 36.0364L28.0442 29.4726L26.0573 30.6517L23.7464 26.5406C24.2465 26.1745 24.709 25.757 25.1266 25.2945L21.3607 23.9464ZM17.2031 24.5224L13.79 26.908C14.2063 27.1702 14.6429 27.3969 15.0953 27.5859L13.8941 32.1884L11.8998 31.6398L13.5652 38L18.0588 33.3352L15.8447 32.7246L17.0387 28.1469C17.6704 28.2541 18.3114 28.2915 18.9508 28.2586L17.2031 24.5224Z" fill="black"/>
</svg>

<h3 className="secondary-heading">Equity</h3>
                                </div>
                            </div>

                            <div className="product-hovered">
                                    <h3 className="secondary-heading text-light">Equity</h3>
                                    <p className="text-sm text-light">Unlock the value of your property and access up to 80% equity for further investments.</p>
                                </div>
                          </div>

                          <Link href='/journey' className="product-button">
                                    
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="white"/>
<path d="M31.8079 24.4505L25.2699 30.8134C25.1471 30.9329 24.9806 31 24.807 31C24.6334 31 24.4669 30.9329 24.3441 30.8134C24.2214 30.6939 24.1524 30.5319 24.1524 30.3629C24.1524 30.1939 24.2214 30.0319 24.3441 29.9124L29.7668 24.6363H15.6538C15.4804 24.6363 15.3141 24.5693 15.1915 24.4499C15.0689 24.3306 15 24.1688 15 24C15 23.8312 15.0689 23.6694 15.1915 23.5501C15.3141 23.4307 15.4804 23.3637 15.6538 23.3637H29.7668L24.3441 18.0876C24.2214 17.9681 24.1524 17.8061 24.1524 17.6371C24.1524 17.4681 24.2214 17.3061 24.3441 17.1866C24.4669 17.0671 24.6334 17 24.807 17C24.9806 17 25.1471 17.0671 25.2699 17.1866L31.8079 23.5495C31.8688 23.6086 31.9171 23.6788 31.9501 23.7561C31.983 23.8334 32 23.9163 32 24C32 24.0837 31.983 24.1666 31.9501 24.2439C31.9171 24.3212 31.8688 24.3914 31.8079 24.4505Z" fill="black"/>
</svg>

                            </Link>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" style={{padding: '0'}}>
                        <div className="product-card">
                         <div className="product-content">
                         <div className="product-not-hovered">
                                <div className="product-icon">
                                    

                                
<svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4646 0.293053C19.3238 0.210195 19.1633 0.166504 18.9999 0.166504C18.8364 0.166504 18.676 0.210195 18.5351 0.293053L2.16162 9.92447L3.09112 11.5048L18.9999 2.14655L34.9086 11.5057L35.8381 9.92539L29.9999 6.49155V1.99989C29.9999 1.75677 29.9033 1.52361 29.7314 1.35171C29.5595 1.1798 29.3263 1.08322 29.0832 1.08322H26.3332C26.0901 1.08322 25.8569 1.1798 25.685 1.35171C25.5131 1.52361 25.4165 1.75677 25.4165 1.99989V3.7938L19.4646 0.293053ZM9.8332 13.9166H19.9165V19.4166H9.8332V13.9166Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M18.9998 3.83325L6.1665 11.1666V23.9999H1.58317C1.34006 23.9999 1.1069 24.0965 0.93499 24.2684C0.763081 24.4403 0.666504 24.6735 0.666504 24.9166C0.666504 25.1597 0.763081 25.3929 0.93499 25.5648C1.1069 25.7367 1.34006 25.8333 1.58317 25.8333H34.5832C34.8263 25.8333 35.0594 25.7367 35.2314 25.5648C35.4033 25.3929 35.4998 25.1597 35.4998 24.9166C35.4998 24.6735 35.4033 24.4403 35.2314 24.2684C35.0594 24.0965 34.8263 23.9999 34.5832 23.9999H31.8332V11.1666L18.9998 3.83325ZM18.9998 5.94433L7.99984 12.2308V23.9999H22.6665V13.9166H28.1665V23.9999H29.9998V12.2299L18.9998 5.94433Z" fill="black"/>
</svg>


<h3 className="secondary-heading">Non-Resident</h3>
                                </div>
                            </div>

                            <div className="product-hovered">
                                    <p className="secondary-heading text-light">Non-Resident</p>
                                    <p className="text-sm text-light">Invest in Dubai&apos;s real estate market, even if you&apos;re living abroad.</p>
                                </div>
                         </div>

                         <Link href='/journey' className="product-button">
                                    
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="white"/>
<path d="M31.8079 24.4505L25.2699 30.8134C25.1471 30.9329 24.9806 31 24.807 31C24.6334 31 24.4669 30.9329 24.3441 30.8134C24.2214 30.6939 24.1524 30.5319 24.1524 30.3629C24.1524 30.1939 24.2214 30.0319 24.3441 29.9124L29.7668 24.6363H15.6538C15.4804 24.6363 15.3141 24.5693 15.1915 24.4499C15.0689 24.3306 15 24.1688 15 24C15 23.8312 15.0689 23.6694 15.1915 23.5501C15.3141 23.4307 15.4804 23.3637 15.6538 23.3637H29.7668L24.3441 18.0876C24.2214 17.9681 24.1524 17.8061 24.1524 17.6371C24.1524 17.4681 24.2214 17.3061 24.3441 17.1866C24.4669 17.0671 24.6334 17 24.807 17C24.9806 17 25.1471 17.0671 25.2699 17.1866L31.8079 23.5495C31.8688 23.6086 31.9171 23.6788 31.9501 23.7561C31.983 23.8334 32 23.9163 32 24C32 24.0837 31.983 24.1666 31.9501 24.2439C31.9171 24.3212 31.8688 24.3914 31.8079 24.4505Z" fill="black"/>
</svg>

                        </Link>

                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" style={{padding: '0'}}>
                        <div className="product-card">
                          <div className="product-content">
                          <div className="product-not-hovered">
                                <div className="product-icon">
                                    

                                

                                <svg width="34" height="25" viewBox="0 0 34 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.019 15.9722C22.7372 15.9722 22.4669 16.082 22.2676 16.2773C22.0683 16.4727 21.9563 16.7376 21.9563 17.0139C21.9563 17.2902 22.0683 17.5551 22.2676 17.7505C22.4669 17.9458 22.7372 18.0556 23.019 18.0556H27.9782C28.26 18.0556 28.5303 17.9458 28.7296 17.7505C28.9289 17.5551 29.0408 17.2902 29.0408 17.0139C29.0408 16.7376 28.9289 16.4727 28.7296 16.2773C28.5303 16.082 28.26 15.9722 27.9782 15.9722H23.019ZM0 5.20833C0 3.827 0.559801 2.50224 1.55625 1.52549C2.55271 0.548733 3.90419 0 5.31339 0H28.6866C30.0958 0 31.4473 0.548733 32.4437 1.52549C33.4402 2.50224 34 3.827 34 5.20833V19.7917C34 21.173 33.4402 22.4978 32.4437 23.4745C31.4473 24.4513 30.0958 25 28.6866 25H5.3148C3.90561 25 2.55412 24.4513 1.55767 23.4745C0.561219 22.4978 0.00141714 21.173 0.00141714 19.7917L0 5.20833ZM5.31339 2.08333C4.46787 2.08333 3.65698 2.41257 3.05911 2.99862C2.46124 3.58468 2.12535 4.37953 2.12535 5.20833V6.25H31.8746V5.20833C31.8746 4.37953 31.5388 3.58468 30.9409 2.99862C30.343 2.41257 29.5321 2.08333 28.6866 2.08333H5.31339ZM2.12535 19.7917C2.12535 20.6205 2.46124 21.4153 3.05911 22.0014C3.65698 22.5874 4.46787 22.9167 5.31339 22.9167H28.6866C29.5321 22.9167 30.343 22.5874 30.9409 22.0014C31.5388 21.4153 31.8746 20.6205 31.8746 19.7917V8.33333H2.12677L2.12535 19.7917Z" fill="black"/>
</svg>



<h3 className="secondary-heading">Handover Payment</h3>
                                </div>
                                
                            </div>

                            <div className="product-hovered">
                                    <p className="secondary-heading text-light">Handover Payment</p>
                                    <p className="text-sm text-light">Simplify your handover payment process and ensure a smooth key handover.</p>
                                </div>
                          </div>

                          <Link href='/journey' className="product-button">
                                    
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="24" fill="white"/>
                                    <path d="M31.8079 24.4505L25.2699 30.8134C25.1471 30.9329 24.9806 31 24.807 31C24.6334 31 24.4669 30.9329 24.3441 30.8134C24.2214 30.6939 24.1524 30.5319 24.1524 30.3629C24.1524 30.1939 24.2214 30.0319 24.3441 29.9124L29.7668 24.6363H15.6538C15.4804 24.6363 15.3141 24.5693 15.1915 24.4499C15.0689 24.3306 15 24.1688 15 24C15 23.8312 15.0689 23.6694 15.1915 23.5501C15.3141 23.4307 15.4804 23.3637 15.6538 23.3637H29.7668L24.3441 18.0876C24.2214 17.9681 24.1524 17.8061 24.1524 17.6371C24.1524 17.4681 24.2214 17.3061 24.3441 17.1866C24.4669 17.0671 24.6334 17 24.807 17C24.9806 17 25.1471 17.0671 25.2699 17.1866L31.8079 23.5495C31.8688 23.6086 31.9171 23.6788 31.9501 23.7561C31.983 23.8334 32 23.9163 32 24C32 24.0837 31.983 24.1666 31.9501 24.2439C31.9171 24.3212 31.8688 24.3914 31.8079 24.4505Z" fill="black"/>
                                    </svg>
                                    </Link>

                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" style={{padding: '0'}}>
                        <div className="product-card">
                            <div className="product-content">
                            <div className="product-not-hovered">
                                <div className="product-icon">
                                    

                                

                              
<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M24.7318 20.8634C25.5201 18.6268 25.0434 16.0234 23.2468 14.2268C22.2767 13.2623 21.0216 12.6362 19.6676 12.4413C18.3135 12.2465 16.9328 12.4933 15.7301 13.1451L20.0384 17.4534L17.4534 20.0384L13.1451 15.7301C11.8434 18.1501 12.1918 21.2118 14.2268 23.2468C16.0234 25.0434 18.6268 25.5201 20.8634 24.7318L27.1151 30.9834C27.4818 31.3501 28.0501 31.3501 28.4168 30.9834L30.9834 28.4168C31.3501 28.0501 31.3501 27.4818 30.9834 27.1151L24.7318 20.8634Z" fill="black"/>
<circle cx="22" cy="22" r="17.5" stroke="black"/>
</svg>




<h3 className="secondary-heading">Underconstruction</h3>
                                </div>
                             
                            </div>

                            <div className="product-hovered">
                                    <p className="secondary-heading text-light">Underconstruction</p>
                                    <p className="text-sm text-light">Buy under-construction properties in Dubai with a mortgage.</p>
                                </div>
                            </div>

                            <Link href='/journey' className="product-button">
                                    
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="24" fill="white"/>
                                    <path d="M31.8079 24.4505L25.2699 30.8134C25.1471 30.9329 24.9806 31 24.807 31C24.6334 31 24.4669 30.9329 24.3441 30.8134C24.2214 30.6939 24.1524 30.5319 24.1524 30.3629C24.1524 30.1939 24.2214 30.0319 24.3441 29.9124L29.7668 24.6363H15.6538C15.4804 24.6363 15.3141 24.5693 15.1915 24.4499C15.0689 24.3306 15 24.1688 15 24C15 23.8312 15.0689 23.6694 15.1915 23.5501C15.3141 23.4307 15.4804 23.3637 15.6538 23.3637H29.7668L24.3441 18.0876C24.2214 17.9681 24.1524 17.8061 24.1524 17.6371C24.1524 17.4681 24.2214 17.3061 24.3441 17.1866C24.4669 17.0671 24.6334 17 24.807 17C24.9806 17 25.1471 17.0671 25.2699 17.1866L31.8079 23.5495C31.8688 23.6086 31.9171 23.6788 31.9501 23.7561C31.983 23.8334 32 23.9163 32 24C32 24.0837 31.983 24.1666 31.9501 24.2439C31.9171 24.3212 31.8688 24.3914 31.8079 24.4505Z" fill="black"/>
                                    </svg>
                                    </Link>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" style={{padding: '0'}}>
                        <div className="product-card">
                           <div className="product-content">
                           <div className="product-not-hovered">
                                <div className="product-icon">
                                    

                                

                              

                                <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 16.4286L16.4286 2L30.8572 16.4286" stroke="black" strokeWidth="2.09524" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.2063 13.2224V24.4446C5.2063 25.295 5.54411 26.1106 6.14542 26.7119C6.74673 27.3132 7.56227 27.651 8.41265 27.651H24.4444C25.2948 27.651 26.1103 27.3132 26.7117 26.7119C27.313 26.1106 27.6508 25.295 27.6508 24.4446V13.2224" stroke="black" strokeWidth="2.09524" strokeLinecap="round" strokeLinejoin="round"/>
</svg>





<h3 className="secondary-heading">Commercial Mortgage</h3>
                                </div>

                            </div>

                            <div className="product-hovered">
                                    <p className="secondary-heading text-light">Commercial Mortgage</p>
                                    <p className="text-sm text-light">Purchase office space, retail shops, or commercial buildings to expand your business.</p>
                                </div>
                           </div>

                           <Link href='/journey' className="product-button">
                                    
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="white"/>
<path d="M31.8079 24.4505L25.2699 30.8134C25.1471 30.9329 24.9806 31 24.807 31C24.6334 31 24.4669 30.9329 24.3441 30.8134C24.2214 30.6939 24.1524 30.5319 24.1524 30.3629C24.1524 30.1939 24.2214 30.0319 24.3441 29.9124L29.7668 24.6363H15.6538C15.4804 24.6363 15.3141 24.5693 15.1915 24.4499C15.0689 24.3306 15 24.1688 15 24C15 23.8312 15.0689 23.6694 15.1915 23.5501C15.3141 23.4307 15.4804 23.3637 15.6538 23.3637H29.7668L24.3441 18.0876C24.2214 17.9681 24.1524 17.8061 24.1524 17.6371C24.1524 17.4681 24.2214 17.3061 24.3441 17.1866C24.4669 17.0671 24.6334 17 24.807 17C24.9806 17 25.1471 17.0671 25.2699 17.1866L31.8079 23.5495C31.8688 23.6086 31.9171 23.6788 31.9501 23.7561C31.983 23.8334 32 23.9163 32 24C32 24.0837 31.983 24.1666 31.9501 24.2439C31.9171 24.3212 31.8688 24.3914 31.8079 24.4505Z" fill="black"/>
</svg>

                              </Link>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" style={{padding: '0'}}>
                        <div className="product-card">
                            <div className="product-content">
                            <div className="product-not-hovered">
                                <div className="product-icon">
                                
<svg width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.87433 15.0105L10.3333 15.7643V14.122V1.81818L23 9.85V30H1V10.9422L8.87433 15.0105Z" stroke="black" strokeWidth="2"/>
</svg>
<h3 className="secondary-heading">Plot Purchase</h3>
                                </div>
                                
                            </div>

                            <div className="product-hovered">
                                    <p className="secondary-heading text-light">Plot Purchase</p>
                                    <p className="text-sm text-light">Obtain a mortgage in Dubai for purchasing a plot and financing construction with flexible repayment options.</p>
                                </div>
                            </div>

                            <Link href='/journey' className="product-button">
                                     
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="24" fill="white"/>
                                    <path d="M31.8079 24.4505L25.2699 30.8134C25.1471 30.9329 24.9806 31 24.807 31C24.6334 31 24.4669 30.9329 24.3441 30.8134C24.2214 30.6939 24.1524 30.5319 24.1524 30.3629C24.1524 30.1939 24.2214 30.0319 24.3441 29.9124L29.7668 24.6363H15.6538C15.4804 24.6363 15.3141 24.5693 15.1915 24.4499C15.0689 24.3306 15 24.1688 15 24C15 23.8312 15.0689 23.6694 15.1915 23.5501C15.3141 23.4307 15.4804 23.3637 15.6538 23.3637H29.7668L24.3441 18.0876C24.2214 17.9681 24.1524 17.8061 24.1524 17.6371C24.1524 17.4681 24.2214 17.3061 24.3441 17.1866C24.4669 17.0671 24.6334 17 24.807 17C24.9806 17 25.1471 17.0671 25.2699 17.1866L31.8079 23.5495C31.8688 23.6086 31.9171 23.6788 31.9501 23.7561C31.983 23.8334 32 23.9163 32 24C32 24.0837 31.983 24.1666 31.9501 24.2439C31.9171 24.3212 31.8688 24.3914 31.8079 24.4505Z" fill="black"/>
                                    </svg>
                                    
                                                                    </Link>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>

        <section id="blog">
            <div className="container">
                <div className="row blog-intro">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-8">
                        <div className="blog-left">
                            <h2 className="primary-heading">Insights & Updates</h2>
                            <p className="text">Stay informed on the latest mortgage trends, expert advice, and market updates. Get timely information on interest rates, home financing tips, and insights into Dubai’s dynamic real estate market.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="blog-right">
                            <Link href='/blogs' className="btn btn-primary btn-rounded">
                                <span>Explore More</span>
                                
<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8644 5.32178L7.24935 9.86671C7.16269 9.95205 7.04516 10 6.9226 10C6.80005 10 6.68251 9.95205 6.59585 9.86671C6.5092 9.78137 6.46051 9.66562 6.46051 9.54493C6.46051 9.42424 6.5092 9.30849 6.59585 9.22315L10.4236 5.45449L0.461507 5.45449C0.339108 5.45449 0.221722 5.40661 0.135172 5.32138C0.0486231 5.23614 0 5.12054 0 5C0 4.87946 0.0486231 4.76386 0.135172 4.67862C0.221722 4.59339 0.339108 4.54551 0.461507 4.54551L10.4236 4.54551L6.59585 0.776849C6.5092 0.691507 6.46051 0.575759 6.46051 0.455068C6.46051 0.334376 6.5092 0.218628 6.59585 0.133286C6.68251 0.0479446 6.80005 8.99221e-10 6.9226 0C7.04516 -8.99221e-10 7.16269 0.0479446 7.24935 0.133286L11.8644 4.67822C11.9074 4.72044 11.9415 4.77059 11.9648 4.82581C11.988 4.88102 12 4.94022 12 5C12 5.05978 11.988 5.11898 11.9648 5.17419C11.9415 5.22941 11.9074 5.27956 11.8644 5.32178Z" fill="white"/>
</svg>
</Link>
                        </div>
                    </div>
                </div>

               <Posts />
            </div>
        </section>

        <section id="testimonials">
            <div className="container">
                <h2 className="primary-heading text-center">Hear From Our Customers</h2>
                <Testimonail />
                {/* <div className="row gy-3">
                    <div className="col-md-12 col-lg-6">
                        <div className="testimonial-card">
                            <div className="testimonail-content">
                                <p className="text text-light">Neon Mortgage, guided me through every step of the process, ensuring I understood my options and got the best rate possible. Professionalism and prompt responses made buying my first home stress-free. Highly recommend!</p>
                            </div>
                            <div className="testimonail-footer">
                                <span className="testimonial-user text-light">Michael JORDAN</span>
                                <img src="/assets/images/stars.png" alt="Mortgage Rates Dubai" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="testimonial-card">
                            <div className="testimonail-content">
                                <p className="text text-light">Neon Mortgage, guided me through every step of the process, ensuring I understood my options and got the best rate possible. Professionalism and prompt responses made buying my first home stress-free. Highly recommend!</p>
                            </div>
                            <div className="testimonail-footer">
                                <span className="testimonial-user text-light">Michael JORDAN</span>
                                <img src="/assets/images/stars.png" alt="Mortgage Rates Dubai" />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>

        <section id="cta">
            <div className="container">
                <h2 className="primary-heading text-center">Find the Right<br/> Mortgage for You</h2>
                <p className="text text-center">Whether you&apos;re buying your first home, refinancing, or investing in property, we offer tailored mortgage solutions to fit your needs. Our experts ensure a smooth, transparent, and hassle-free process from start to finish.</p>
                <p className="text text-center">✅ Expert Guidance | ✅ Best Rates | ✅ Fast Approvals</p>
                <div className="btn-center">
                    <Link href='/journey' className="btn btn-primary btn-rounded btn-noicon btn-center" style={{display: 'inline-flex'}}>📞 Get in Touch Today!</Link>
                </div>
            </div>
        </section>
           
        </div>
  );
}
