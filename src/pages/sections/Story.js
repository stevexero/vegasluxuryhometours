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
        <StoryCard
          heading='Ride In Luxury'
          story='A  luxury vehicle will whisk you away beyond the famous strip!'
        />
      </div>
      <div className='StorySection Story-2'>
        <StoryCard
          heading='Snack In Style'
          story='Drinks and snacks will be served as you enjoy a magnificent ride through the surrounding areas that often go unnoticed to tourists.'
        />
        <StoryCardPhoto image={StoryImg_2} />
      </div>
      <div className='StorySection Story-3'>
        <StoryCardPhoto image={StoryImg_3} />
        <StoryCard
          heading='Lavish Homes'
          story='Throughout  the tour we will make stops at carefully selected luxury homes and allow you to walk through them to take in the amazing workmanship and creativity'
        />
      </div>
      <div className='StorySection Story-4'>
        <StoryCard
          heading='Stunning Views'
          story='Your guide will provide you with interesting information about the various areas and the fabulous homes we tour.'
        />
        <StoryCardPhoto image={StoryImg_4} />
      </div>
      <div className='StorySection Story-5'>
        <StoryCardPhoto image={StoryImg_5} />
        <StoryCard
          heading='Be a VIP'
          story="Everyone likes to feel like a VIP and that's my goal! You will  leave with a greater knowledge and appreciation of the lesser known areas and architecture of Las Vegas that are worthy of sightseeing."
        />
      </div>
    </div>
  );
};

export default Story;
