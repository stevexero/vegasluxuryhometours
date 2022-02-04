import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
        mainImage{
            asset->{
                _id,
                url
            }
        },
        body,
        "name": auther->name,
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
      <article>
        <header>
          <div>
            <div>
              <h1>{singlePost.title}</h1>
              <div>
                <img
                  src={urlFor(singlePost.authorImage).width(100).url()}
                  alt={singlePost.name}
                  className='SinglePost-author-image'
                />
                <p>{singlePost.name}</p>
              </div>
            </div>
          </div>
          <img src={singlePost.mainImage.asset.url} alt={singlePost.title} />
        </header>
        <div>
          <BlockContent
            blocks={singlePost.body}
            projectId='8rk8cdbm'
            dataset='production'
          />
        </div>
      </article>
    </main>
  );
};

export default SinglePost;
