import React from 'react';
import LadySitting from '@assets/images/lady-sitting.png';

const LandingRulesAndGuidelines: React.FC = () => {
  return (
    <div className='container'>
      <div className='row py-5 align-items-center'>
        <div className='col-md-5'>
          <h3 className='display-6 header'>
            Rules and <br />
            <span className='highlight'>Guidelines</span>
          </h3>

          <p className='mt-3'>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
        <div className='col-md-7 d-flex justify-content-center'>
          <img src={LadySitting} alt='LadySitting' className='w-75' />
        </div>
      </div>
    </div>
  );
};

export default LandingRulesAndGuidelines;
