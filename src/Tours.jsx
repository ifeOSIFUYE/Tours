import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {
  return (
    <section className="mx-auto w-11/12 md:w-1/2 lg:w-1/3">
      <div className="title">
        <h2 className="text-center capitalize font-bold tracking-wider text-2xl text-sky-800">
          our tours
        </h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
