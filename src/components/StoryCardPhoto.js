import './StoryCardPhoto.css';

const StoryCardPhoto = ({ image }) => {
  return (
    <div
      className='StoryCardPhoto'
      style={{
        background: `url(${image}) no-repeat center center/cover`,
      }}
    />
  );
};

export default StoryCardPhoto;
