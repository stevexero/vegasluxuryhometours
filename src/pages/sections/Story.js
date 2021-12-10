import StoryCard from '../../components/StoryCard';
import StoryCardPhoto from '../../components/StoryCardPhoto';

import StoryImg_1 from '../../assets/story_img_1.jpeg';
import StoryImg_2 from '../../assets/story_img_2.jpeg';
import StoryImg_3 from '../../assets/story_img_3.jpeg';
import StoryImg_4 from '../../assets/story_img_4.jpeg';
import StoryImg_5 from '../../assets/story_img_5.jpeg';

import './Story.css';

const Story = () => {
  return (
    <div className='Story'>
      <div className='StorySection Story-1'>
        <StoryCardPhoto image={StoryImg_1} />
        <StoryCard />
      </div>
      <div className='StorySection Story-2'>
        <StoryCard />
        <StoryCardPhoto image={StoryImg_2} />
      </div>
      <div className='StorySection Story-3'>
        <StoryCardPhoto image={StoryImg_3} />
        <StoryCard />
      </div>
      <div className='StorySection Story-4'>
        <StoryCard />
        <StoryCardPhoto image={StoryImg_4} />
      </div>
      <div className='StorySection Story-5'>
        <StoryCardPhoto image={StoryImg_5} />
        <StoryCard />
      </div>
    </div>
  );
};

export default Story;
