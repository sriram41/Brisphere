import React from 'react';
import './ServiceCard.css';

const services = [
  {
    title: "High Speed Internet",
    description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    imgurl: "/assets/wifi.png"
  },
  {
    title: "Healthy Meals",
    description: "A healthy breakfast and pleasant dinner will be serviced at your space every single day for your entire duration of stay with option of paid order within BriSphere.",
    imgurl: "/assets/juice.png"
  },
  {
    title: "Homely Stay",
    description: "Designed for working professionals with spacious interiors, comfortable beds and sleekly attached kitchen are some of the comforts provided in your space.",
    imgurl: "/assets/house.png"
  },
  {
    title: "Transportation",
    description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    imgurl: "/assets/car.png"
  },
  {
    title: "Food Delivery",
    description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    imgurl: "/assets/cycle.png"
  },
  {
    title: "Tourism",
    description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    imgurl: "/assets/tourism.png"
  },
  {
    title: "Job",
    description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    imgurl: "/assets/flag.png"
  },
  {
    title: "Rental Service",
    description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    imgurl: "/assets/car.png"
  },
  {
    title: "Online Shop",
    description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    imgurl: "/assets/cart.png"
  }
];

const ServiceCard = ({ title, description, imgurl }) => {
  return (
    <div className="service-card">
      <div className="service-imgurl">
        <img src={imgurl} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className='totalser-3-44'>
        <h2 className='dis-2 ser-110-30'>Services</h2>
    <div className="services-container">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          imgurl={service.imgurl}
        />
      ))}
    </div>
    </div>
  );
};

export default Services;
