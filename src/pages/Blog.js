import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlockContent from '@sanity/block-content-to-react';

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
            body,
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
      <div className='Blog-header'>
        <h1>Welcome to the Vegas Luxury Home Tours Blog</h1>
      </div>
      <div className='Blog-body'>
        <div className='Blog-container'>
          {postData &&
            postData.map((post, index) => (
              <article key={index} className='Blog-card'>
                <Link to={'/blog/' + post.slug.current} key={post.slug.current}>
                  <span key={index}>
                    <div
                      className='Blog-image'
                      style={{
                        background: `url(${post.mainImage.asset.url}) no-repeat center center/cover`,
                        width: '100%',
                        height: '200px',
                      }}
                    ></div>
                    <span>
                      <h3>{post.title}</h3>
                    </span>
                    <span className='Blog-content'>
                      <BlockContent
                        blocks={post.body}
                        projectId='8rk8cdbm'
                        dataset='production'
                      />
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
