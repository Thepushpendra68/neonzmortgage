



'use client';
import { useState, useEffect } from "react";
import { getPosts } from "@/http";
import Link from "next/link";
import Image from "next/image";

export default function Posts () {

    const [posts, setPoasts] = useState([]);
    
    useEffect(() => {
        const fetchPost = async () => {
            try {
               const {data} = await getPosts();
               setPoasts(data.posts); 
            } catch (error) {
                console.log(error)
            }
        }
        fetchPost();
     }, [])

     return (
         <div className="row gy-3">  

{
            posts.map((post, i) => i <= 2 ? (
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4" key={post._id}>
                        <Link href={`/blogs/post/${post.slug}`}><div className="blog-card">
                            <div className="blog-image">
                                <Image fill alt="Mortgage Rates Dubai" src={post.image} />
                                <div className="blog-category">
                                <p className="text">View More</p>
                                </div>
                            </div>
                            <div className="blog-card-content">
                                <h3 className="secondary-heading">{post.title}</h3>
                                <p className="text">{post.short_des}</p>
                            </div>
                        </div>
                        </Link>
                    </div>

            ) : null)
}
                   
                </div>
     )
}