

import { getPosts } from "@/http";
import Link from "next/link";
import PostsArchieve from "@/components/PostsArchieve";

export const metadata = {
  title: "Mortgage Blogs | Neon Mortgage – Insights & Expert Advice",
  description: "Stay updated with the latest mortgage trends, expert tips, and Dubai real estate insights. Read Neon Mortgage blogs for valuable home financing advice.",
  alternates: {
        canonical: 'https://neonmortgage.com/blogs',
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


export default async function Blogs({params}){


    return (
         <div style={{background: 'white'}}>
           
           <section id='about-us-hero' className="page-header">
            <div className="container blog-container">
                <div className="about-hero-wrapper">
                <div className="about-herodes" style={{alignSelf: 'start', padding: '30px', backgroundColor:'rgba(0,0,0,.7)', borderRadius: '0 0 40px 0'}}>
                    <p className='text text-light'>Stay informed with the latest mortgage trends, market insights, and expert advice. Get updates on interest rates, home financing tips, and Dubai’s real estate market to make smarter mortgage decisions.</p>
                    </div>
                    <div className="about-page-content">
                        <h1 className='primary-heading' style={{whiteSpace: 'nowrap'}}>Insights & Updates</h1>
                    </div>
                </div>
            </div>
        </section>

       <PostsArchieve />
        </div>
    )
}