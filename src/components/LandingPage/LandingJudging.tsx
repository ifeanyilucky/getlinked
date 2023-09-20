import React from 'react';
import JudgeImage from '@assets/images/judges.png';

const attributes = [
  {
    title: 'Innovation and Creativity',
    description: `Evaluate the uniqueness and creativity of the
    solution. Consider whether it addresses a real-world problem in a novel 
    way or introduces innovative features.`,
  },
  {
    title: 'Functionality',
    description: `Assess how well the solution works. Does it perform its 
    intended functions effectively and without major issues? Judges would
    consider the completeness and robustness of the solution.`,
  },
  {
    title: 'Impact and Relevance',
    description: `Determine the potential impact of the solution 
    in the real world. Does it address a significant problem, and is it relevant 
    to the target audience? Judges would assess the potential social, 
    economic, or environmental benefits.`,
  },
  {
    title: 'Technical Complexity',
    description: `Evaluate the technical sophistication of the solution. 
    Judges would consider the complexity of the code, the use of advanced 
    technologies or algorithms, and the scalability of the solution.`,
  },
  {
    title: 'Adherence to Hackathon Rules',
    description: `Judges will Ensure that the team adhered 
    to the rules and guidelines of the hackathon, including deadlines, use of 
    specific technologies or APIs, and any other competition-specific requirements.`,
  },
];

const LandingJudging: React.FC = () => {
  return (
    <div className='container'>
      <div className='row py-5 align-items-center'>
        <div className='col-md-7 d-flex justify-content-center'>
          <img src={JudgeImage} alt='JudgeImage' className='w-100' />
        </div>
        <div className='col-md-5'>
          <h3 className='display-6 header mb-3'>
            Judging Criteria <br />
            <span className='highlight'>Key attributes</span>
          </h3>

          {attributes.map((item, index) => (
            <div key={index} className='py-1'>
              <p className=''>
                <strong style={{ color: '#FF26B9' }}>{item.title}</strong>:{' '}
                {item.description}
              </p>
            </div>
          ))}

          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default LandingJudging;
