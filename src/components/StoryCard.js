import './StoryCard.css';

const StoryCard = ({ heading, story }) => {
  return (
    <div className='StoryCard'>
      <div className='StoryCard-container'>
        <h1 className='cinzel-regular-56 text-dark-silver'>{heading}</h1>
        <p className='montserrat-regular-14 text-dark-silver mt-32'>{story}</p>
      </div>
    </div>
  );
};

export default StoryCard;
