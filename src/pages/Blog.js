import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import sanityClient from '../client';

import './Blog.css';

const Blog = () => {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, []);

  return (
    <div className='Blog'>
      <h1>Blog</h1>
      <h2>Welcome to the Vegas Luxury Home Tours Blog</h2>
      <div>
        {postData &&
          postData.map((post, index) => (
            <article key={index}>
              <Link to={'/blog/' + post.slug.current} key={post.slug.current}>
                <span key={index}>
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                  />
                  <span>
                    <h3>{post.title}</h3>
                  </span>
                </span>
              </Link>
            </article>
          ))}
      </div>
    </div>
  );
};

export default Blog;
