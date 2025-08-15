

import { getPosts } from "@/http";
import Link from "next/link";

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

   let {page} = params;
   let total = 0;

    let posts = [];

    try {
      const {data} = await getPosts(page)
      posts = data.posts;
      total = data.total;
    } catch (error) {
      console.log(error)
    }

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

        <section id="blog-page">
            <div className="container">
               
                <div className="row gy-3 gx-3">
                     
                     {
                        posts.map((post) => (
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4" key={post._id}>
                        <Link href={`/blogs/post/${post.slug}`}><div className="blog-card">
                            <div className="blog-image">
                                <img src={post.image} alt="Mortgage in Dubai" />
                                <div className="blog-category">
                               <p className="text">RateExplorer</p>
                                </div>
                            </div>
                            <div className="blog-card-content">
                                <h3 className="secondary-heading">{post.title}</h3>
                                <p className="text">{post.short_des}</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                        ))
                     }

                </div>
                <div style={{paddingTop: '30ps', display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
                <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className={`page-item ${page == 1 ? 'disabled': ''}`}>
      <Link className="page-link" href={`/blogs/${+page - 1}`} aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </Link>
    </li>
    <li className="page-item"><span className="page-link">{page} / {Math.ceil(total / 6)}</span></li>
    <li className={`page-item ${page == Math.ceil(total / 6) ? 'disabled': ''}`}>
      <Link className="page-link" href={`/blogs/${+page + 1}`} aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </Link>
    </li>
  </ul>
</nav>
                </div>
            </div>
        </section>
        </div>
    )
}