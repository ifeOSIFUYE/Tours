import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="aspect-video object-cover" />
      <footer className="p-6">
        <div className="tour-info">
          <h4 className="font-bold tracking-wider">{name}</h4>
          <h4 className="font-semibold text-sky-500 bg-sky-100 rounded px-2 tracking-wider">
            ${price}
          </h4>
        </div>
        <p className="text-left pb-4">
          {readMore ? info : `${info.substring(0, 200)}... `}
          <button
            onClick={() => setReadMore(!readMore)}
            className="capitalize text-sky-500"
          >
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
