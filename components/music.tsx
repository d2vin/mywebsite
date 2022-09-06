import React from 'react';
import Cover from './cover';

const Music = () => {
  return (
    <div className="mx-4 md:mx-0 transition-all">
      <h1 className="heading">Music</h1>
      <div className="w-full grid gap-4 grid-cols-2 md:grid-cols-3">
        <Cover />
        <Cover />
        <Cover />
        <Cover />
        <Cover />
        <Cover />
      </div>
    </div>
  );
};

export default Music;
