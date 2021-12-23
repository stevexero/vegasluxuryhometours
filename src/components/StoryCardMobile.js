import './StoryCardMobile.css';

const StoryCardMobile = ({ image, heading, story, r, g, b }) => {
  return (
    <div
      className='StoryCardMobile'
      style={{
        background: `url(${image}) no-repeat center center/cover`,
        width: '100%',
      }}>
      <div
        className='StoryCardMobile-heading-container'
        style={{ background: `rgba(${r}, ${g}, ${b}, 0.8)` }}>
        <h1>{heading}</h1>
        <p className='text-center'>{story}</p>
      </div>
    </div>
  );
};

export default StoryCardMobile;
