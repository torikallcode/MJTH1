import React from 'react';
import { Variable } from './Variable';

const MainContent = ({ selected }) => {
  const content = {
    'introduction': (
      <div>
        <h1 className="mb-4 text-3xl font-bold">Introduction</h1>
        <p>This is the introduction content.</p>
      </div>
    ),
    'variable': (
      <div className='w-full lg:flex lg:relative lg:items-start'>
        <div className='lg:w-[65%] pr-7'>
          <h1 className="mb-4 text-3xl font-bold">Integer & FLoat</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, magni adipisci. Illo exercitationem reiciendis corporis vel porro cum veniam aperiam tempore minus iste nobis consequatur soluta autem labore ut repellendus ratione eaque quae voluptates eum quibusdam, obcaecati voluptatem. Possimus sequi iure vero ab officia numquam eum repudiandae nisi suscipit magni animi atque, architecto aut dolorem a neque aliquid at fuga optio obcaecati et. Ipsam delectus blanditiis quia corporis. Labore distinctio nesciunt delectus laboriosam ducimus, a suscipit dolorem veniam impedit. Nostrum voluptatem debitis laborum molestias ducimus inventore quia fugiat. Amet quo maiores, alias adipisci ipsa asperiores optio ipsam dolore vitae fugit sed dolorem nesciunt aut est veniam unde voluptatibus odio fugiat laboriosam quis. Quasi tempore ducimus reprehenderit animi dignissimos velit illo tenetur iure! Distinctio minima blanditiis consectetur nostrum maxime, eum quas ducimus assumenda impedit ab ullam totam voluptas odit culpa expedita repellat, fugit inventore beatae reiciendis? Sapiente suscipit optio ab aliquam reprehenderit, facilis sunt quasi perferendis commodi non doloribus, unde, eos officia consequuntur consectetur aut laborum voluptas neque fuga praesentium maxime blanditiis eum natus odit. Quos ab autem quo officia sint rerum labore, repellendus tempore cumque, non minima. Praesentium eveniet beatae earum quaerat magni. Quam unde officiis temporibus nihil, hic rerum.</p>
        </div>
        <div className='lg:w-[35%] lg:sticky  lg:top-28'>
          <Variable />
        </div>
      </div>
    ),
  }; 0

  return (
    <main className="flex px-5 pt-5 pb-10 mt-3 lg:pt-2 lg:mt-7">
      {content[selected] || (
        <div>
          <h1 className="mb-4 text-3xl font-bold">Welcome to My Documentation</h1>
          <p className='mb-32'>Select an item from the sidebar to see the content.</p>
        </div>
      )}
    </main>
  );
};

export default MainContent;