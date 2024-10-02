import React from 'react';
import Swal from 'sweetalert2'; // Ensure this is imported
import { useState } from 'react';
import d1 from '../images/d1.jpg';
import d2 from '../images/d2.jpg';
import d3 from '../images/d3.jpg';
import d4 from '../images/d4.jpg';
import d5 from '../images/d5.jpg';
import d6 from '../images/d6.jpg';


function Diesel() {

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const handleLike = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your like has been added",
      showConfirmButton: false,
      timer: 1500
    });
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment(''); // Clear the comment input
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#8B4513', margin: '20px 0' }}>The Enduring Popularity of Diesel Vehicles</h1>
      <img
        src={d4}
        alt="Diesel Vehicle"
        style={{ width: '100%', height: 'auto', margin: '10px 0', borderRadius: '8px' }}
      />
      
      {/* Subheadings and formatted text */}
      
      <h2 style={{ color: '#1E90FF', margin: '20px 0' }}>Introduction</h2>
      Diesel cars have long been a staple in the automotive industry, known for their durability, fuel efficiency, and power. While diesel engines were initially developed for commercial purposes, such as trucks and buses, they eventually made their way into passenger cars, offering a compelling alternative to gasoline-powered vehicles. 

      <h2 style={{ color: '#1E90FF', margin: '20px 0' }}>The Mechanics of Diesel Engines</h2>
      Diesel engines rely on compression ignition, where the air inside the engine is compressed to a high temperature, and fuel is injected into the cylinder, igniting the fuel. The higher compression ratio in diesel engines allows them to extract more energy from the fuel, leading to greater fuel efficiency.
      <img
        src={d2}
        alt="Diesel Vehicle"
        style={{ width: '100%', height: 'auto', margin: '10px 0', borderRadius: '8px' }}
      />
      
      <h2 style={{ color: '#1E90FF', margin: '20px 0' }}>Fuel Efficiency and Economy</h2>
      One of the most significant advantages of diesel cars is their fuel efficiency. Diesel engines can travel further on a gallon of fuel compared to gasoline engines, making them ideal for long-distance driving. Diesel cars typically offer between 20% and 30% better fuel economy than gasoline-powered vehicles.

      <h2 style={{ color: '#1E90FF', margin: '20px 0' }}>Performance and Power</h2>
      Diesel cars are renowned for their robust performance, particularly when it comes to torque. The high torque output makes diesel engines more powerful at low speeds, which is especially useful in situations where rapid acceleration is needed, such as overtaking or merging onto highways.
      <img
        src={d3}
        alt="Diesel Vehicle"
        style={{ width: '100%', height: 'auto', margin: '10px 0', borderRadius: '8px' }}
      />
      
      <h2 style={{ color: '#1E90FF', margin: '20px 0' }}>Environmental Considerations</h2>
      Diesel engines produce lower carbon dioxide (CO2) emissions than gasoline engines. However, they emit higher levels of nitrogen oxides (NOx) and particulate matter, which are harmful pollutants. Modern diesel cars are equipped with advanced exhaust treatment systems, such as diesel particulate filters (DPF) and selective catalytic reduction (SCR), to reduce emissions.
      <img
        src={d1}
        alt="Diesel Vehicle"
        style={{ width: '100%', height: 'auto', margin: '10px 0', borderRadius: '8px' }}
      />
      
      <h2 style={{ color: '#1E90FF', margin: '20px 0' }}>The Future of Diesel Cars</h2>
      The future of diesel cars remains uncertain. While diesel engines are still widely used in commercial and heavy-duty vehicles, the demand for diesel-powered passenger cars has declined due to stricter emissions regulations and the rise of electric vehicles. However, advancements in synthetic and renewable diesel fuels could help extend the life of diesel engines.
      <img
        src={d5}
        alt="Diesel Vehicle"
        style={{ width: '100%', height: 'auto', margin: '10px 0', borderRadius: '8px' }}
      />
      
      <h2 style={{ color: '#1E90FF', margin: '20px 0' }}>Conclusion</h2>
      Diesel cars have a long-standing reputation for their durability, fuel efficiency, and power. Despite environmental challenges, diesel cars continue to offer a unique blend of performance and economy. With advancements in emissions control technology and the potential for cleaner fuels, diesel cars may continue to play a role in the automotive landscape.
      <img
        src={d6}
        alt="Diesel Vehicle"
        style={{ width: '100%', height: 'auto', margin: '10px 0', borderRadius: '8px' }}
      />
      
      {/* Comment Section */}
      <h2 style={{ color: '#1E90FF' }}>Comments</h2>
      <form onSubmit={handleCommentSubmit} style={{ marginBottom: '20px' }}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Leave a comment..."
          style={{ width: '100%', height: '80px', borderRadius: '5px', padding: '10px' }}
        />
        <button onClick={handleLike} style={{ padding: '10px 20px', backgroundColor: '#1E90FF', color: 'white', border: 'none', borderRadius: '5px' }} className='me-3'>
          Like 
        </button>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#1E90FF', color: 'white', border: 'none', borderRadius: '5px', marginTop: '10px' }}>
          Submit
        </button>
      </form>

      {/* Display Comments */}
      <div>
        {comments.length > 0 ? (
          comments.map((c, index) => (
            <div key={index} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
              {c}
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
}

export default Diesel;
