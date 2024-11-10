// Discover.js
import React from 'react';
import ProfileReview from './ProfileReview';
import './Discover.css';

const Discover = () => {
  const reviews = [
    {
      name: "Arjun Raghav",
      rating: 4,
      text: "I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me.",
      imageUrl: "/assets/profile.png"
    },
    
    
    
  ];

  const reviewsanother = [
   
    {
      name: "Anand Solanki",
      rating: 5,
      text: "I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me.",
      imageUrl: "/assets/profile.png"
    }
    
  ];


  return (
    <div className="discover">
      <h2 className='dis-2'>Discover</h2>

      <div className='total-block'>

      <div className="reviews">
        {reviews.map((review, index) => (
          <ProfileReview
            key={index}
            name={review.name}
            rating={review.rating}
            text={review.text}
            imageUrl={review.imageUrl}
          />
        ))}
      </div>

      <div className='middleimage-11'><img src='/assets/discover.webp' alt='discover'/></div>
      <div className='total-side-review'>
      <div className="reviews">
      {reviews.map((review, index) => (
          <ProfileReview
            key={index}
            name={review.name}
            rating={review.rating}
            text={review.text}
            imageUrl={review.imageUrl}
          />
        ))}
      </div>

      <div className="reviews">
      {reviews.map((review, index) => (
          <ProfileReview
            key={index}
            name={review.name}
            rating={review.rating}
            text={review.text}
            imageUrl={review.imageUrl}
          />
        ))}
      </div></div>

      </div>

     
      <div className="reviews reviews2">
        {reviewsanother.map((review, index) => (
          <ProfileReview
            key={index}
            name={review.name}
            rating={review.rating}
            text={review.text}
            imageUrl={review.imageUrl}
          />
        ))}
      </div>

     
    </div>
  );
};

export default Discover;
