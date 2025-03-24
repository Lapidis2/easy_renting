import React from "react";
import { useParams } from "react-router-dom";
import Properties from "../assets/property"; 
const PropertyDetail = () => {
  const { id } = useParams();
  const property = Properties.find((prop) => prop.id === id);
  console.log(property); 
  if (!property) {
    return <h2 className="text-red-500 text-center mt-10">Property not found</h2>;
  }
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{property.title}</h1>
      <img src={property.image} alt={property.title} className="w-full h-96 object-cover mt-4 rounded-md" />
      
      <div className="mt-4">
        <p className="text-gray-700">{property.description}</p>
        <p className="mt-2 text-gray-600">
          <strong>Location:</strong> {property.location}
        </p>
        <p className="mt-2 text-gray-600">
          <strong>Owner:</strong> {property.owner} | <strong>Contact:</strong> {property.contact}
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <p className="text-gray-800"><strong>Price:</strong> {property.price}</p>
        <p className="text-gray-800"><strong>Status:</strong> {property.status}</p>
        <p className="text-gray-800"><strong>Bedrooms:</strong> {property.bedrooms}</p>
        <p className="text-gray-800"><strong>Bathrooms:</strong> {property.bathrooms}</p>
        <p className="text-gray-800"><strong>Toilets:</strong> {property.toilets}</p>
        <p className="text-gray-800"><strong>Area:</strong> {property.area}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Features</h3>
        <ul className="list-disc ml-6 text-gray-700">
          {property.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetail;
