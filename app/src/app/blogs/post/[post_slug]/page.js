



import { getPost } from '@/http';
import { da } from 'intl-tel-input/i18n';


export async function generateMetadata ({params}) {
    try {
        const {data} = await getPost(params.post_slug);
        return {
            title: data.post.title,
            description: data.post.short_des,
            alternates: {
              canonical: `https://neonmortgage.com/blogs/post/${data.post.slug}`,
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
        }
    } catch (error) {
        console.log(error)
    }
}


export default async function Blog ({params}) {

    const {post_slug} = params;
    let post = {}


    try {
        const {data} = await getPost(post_slug);
        post = data.post
    } catch (error) {
                console.log(error)
    }

    return (
        <div>
            
            <section id='about-us-hero' className="page-header">
            <div className="container blog-container">
                <div className="about-hero-wrapper">
                    <div className="about-page-content">
                        <h1 className='primary-heading' style={{fontSize: '30px'}}>{post.title}</h1>
                    </div>
                </div>
            </div>
        </section>

        <section id="post">
            <div className="container post-contaainer">
                <div className="postimage" style={{marginBottom: '30px'}}>
                    <img src={post.image} alt={post.alt_text} />
                </div>
                {/* <h1 className='primary-heading post-title'>{post.title}</h1> */}
                <div className="srvice-content post-content" dangerouslySetInnerHTML={{ __html: post.content }}>
                       
                </div>
            </div>
        </section>
        </div>
    )
}

