// ProfileReview.js
import React from 'react';

const ProfileReview = ({ name, rating, text, imageUrl }) => {
  return (
    <div className="profile-review">
       <div className='level-block-1'> 
      {imageUrl && <img src={imageUrl} alt={`${name}'s profile`} className="profile-image" />}
      <div className="profile-details">
        <h3>{name}</h3>
        <div className="rating">
          {'⭐'.repeat(rating)}
        </div>
        </div>
        </div>
        <p>{text} <span className="read-more">read more</span></p>
        
    </div>
  );
};

export default ProfileReview;
