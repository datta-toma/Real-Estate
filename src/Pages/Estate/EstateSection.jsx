import React from 'react';
import { Link } from 'react-router-dom';

const EstateSection = ({estate}) => {
  const {id, image, estate_title, description, price, status} = estate;
    return (
        <div>
             <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{ estate_title}</h2>
    <p className='text-start'>{description}</p>
    <div className='flex gap-5'>
    
    </div>
    
    <div className="card-actions">
      <Link to={`/estate/${id}`}>
      <button className="btn btn-primary">View Property</button>
      </Link>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default EstateSection;