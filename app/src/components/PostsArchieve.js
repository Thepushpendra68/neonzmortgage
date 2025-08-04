
'use client';

import { getPosts } from "@/http";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function PostsArchieve () {

    
  
   const [page, setPage] = useState(1)
   const [total, setTotal] = useState(0);
   const [posts, setPost] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
      const {data} = await getPosts(page)
      setPost(data.posts);
      setTotal(data.total);
    } catch (error) {
      console.log(error)
    }
        }
        fetchPosts();
    }, [page])

    


    return (
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
      <button className="page-link" onClick={() => setPage(page => page - 1)} aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </button>
    </li>
    <li className="page-item"><span className="page-link">{page} / {Math.ceil(total / 6)}</span></li>
    <li className={`page-item ${page == Math.ceil(total / 6) ? 'disabled': ''}`}>
      <button className="page-link" onClick={() => setPage(page => page + 1)} aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </button>
    </li>
  </ul>
</nav>
                </div>
            </div>
        </section>
    )
}