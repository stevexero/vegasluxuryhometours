import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

import './SinglePost.css';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        publishedAt,
        mainImage{
            asset->{
                _id,
                url
            }
        },
        body,
        "name": author->name,
        "authorImage": author->image 
    }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) {
    return <div>Loading...</div>;
  }

  return (
    <main className='SinglePost'>
      <div className='SinglePost-header'>
        <h1 className='cinzel-bold-56 text-dark-silver text-center'>
          {singlePost.title.toUpperCase()}
        </h1>
        <Link to='/about' className='SinglePost-author'>
          <div className='SinglePost-author-left'>
            <img
              src={urlFor(singlePost.authorImage).width(50).url()}
              alt={singlePost.name}
              className='SinglePost-author-image'
            />
            <p>{singlePost.name}</p>
          </div>
          <div className='SinglePost-author-right'>
            <p>{new Date(singlePost.publishedAt).toDateString()}</p>
          </div>
        </Link>
        <div
          className='SinglePost-image mt-64'
          style={{
            background: `url(${singlePost.mainImage.asset.url})`,
          }}
        ></div>
      </div>

      <div className='SinglePost-body'>
        <BlockContent
          blocks={singlePost.body}
          projectId='8rk8cdbm'
          dataset='production'
        />
      </div>
    </main>
  );
};

export default SinglePost;
