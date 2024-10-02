import React from 'react';
import Swal from 'sweetalert2'; // Ensure this is imported
import { useState } from 'react';
import e1 from '../images/e1.jpg';
import e2 from '../images/e2.jpg';
import e3 from '../images/e3.jpg';
import e4 from '../images/e4.jpg';
import e5 from '../images/e5.jpg';


function Electric() {

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
      <h1 style={{ color: '#FF4500', margin: '20px 0' }}>The Future of Electric Vehicles</h1>
      <img
        src={e1}
        alt="Electric Car"
        style={{ width: '80%', height: 'auto', margin: '10px 0', borderRadius: '8px' }}
      />
      
      <h2 style={{ color: '#1E90FF' }}>The Electrification of the Automotive Industry</h2>
      <p>
        Electric vehicles (EVs) are revolutionizing the automotive industry, offering a cleaner, more sustainable alternative to traditional gasoline and diesel-powered cars. As concerns about climate change and air pollution continue to grow, electric vehicles have emerged as a key solution to reduce emissions and decrease reliance on fossil fuels. This essay delves into the development, advantages, and challenges of electric vehicles, highlighting their pivotal role in shaping the future of transportation.
      </p>
      <img
        src={e2}
        alt="Electric Car"
        style={{ width: '80%', height: 'auto', margin: '10px 0', borderRadius: '8px' }}
      />
      <h2 style={{ color: '#1E90FF' }}>The Evolution of Electric Vehicles</h2>
      <p>
        Electric vehicles have a long history, with the first electric car being developed in the late 19th century. However, due to limitations in battery technology and the rise of gasoline-powered engines, electric vehicles fell out of favor for much of the 20th century. It wasn’t until the early 21st century, with advancements in battery technology and growing environmental awareness, that EVs made a resurgence.
      </p>
      <img
        src={e3}
        alt="Electric Car"
        style={{ width: '80%', height: 'auto', margin: '10px 0', borderRadius: '8px' }}
      />
      <p>
        The introduction of the Tesla Roadster in 2008 marked a turning point in the electric vehicle industry. With its impressive range and sleek design, the Roadster proved that electric cars could be both practical and desirable. Since then, major automakers have embraced electric vehicle technology, launching a variety of models that cater to different segments of the market, from compact city cars to luxury sedans and SUVs.
      </p>

      <h2 style={{ color: '#1E90FF' }}>How Electric Vehicles Work</h2>
      <p>
        Electric vehicles operate using an electric motor powered by a large battery pack. Unlike traditional vehicles that rely on internal combustion engines, EVs produce zero tailpipe emissions, making them an environmentally friendly alternative. The battery pack is charged through an external power source, typically a charging station or a home outlet.
      </p>
      <img
        src={e4}
        alt="Electric Car"
        style={{ width: '80%', height: '70%', margin: '10px 0', borderRadius: '8px' }}
      />
      <p>
        One of the key features of electric vehicles is regenerative braking. Similar to hybrid vehicles, EVs capture the energy generated during braking and convert it into electricity, which is stored in the battery for later use. This process improves the overall efficiency of the vehicle and helps to extend its range.
      </p>

      <h2 style={{ color: '#1E90FF' }}>Advantages of Electric Vehicles</h2>
      <p>
        The most significant advantage of electric vehicles is their environmental impact. Since EVs produce no exhaust emissions, they contribute to improved air quality, especially in urban areas where traffic congestion leads to high levels of pollution. As the global energy grid becomes increasingly powered by renewable sources like solar and wind, the overall carbon footprint of electric vehicles continues to decrease.
      </p>
      <p>
        In addition to their environmental benefits, electric vehicles offer significant cost savings for owners. Electricity is generally cheaper than gasoline, and many EV owners benefit from lower maintenance costs due to the simplicity of electric motors. Without the need for oil changes, exhaust system repairs, and other engine-related maintenance, electric vehicles offer a more economical long-term solution.
      </p>

      <h2 style={{ color: '#1E90FF' }}>Challenges Facing Electric Vehicles</h2>
      <p>
        Despite their many benefits, electric vehicles face several challenges that have hindered widespread adoption. One of the primary concerns is range anxiety—the fear that the vehicle’s battery will run out of charge before reaching a charging station. While modern electric vehicles offer ranges of over 300 miles on a single charge, the limited availability of charging infrastructure in some regions remains a barrier to adoption.
      </p>
      <p>
        Charging time is another challenge. While rapid chargers can provide a significant amount of charge in a short period, standard home chargers can take several hours to fully recharge an EV. However, advancements in battery technology and the expansion of fast-charging networks are addressing these issues, making electric vehicles more convenient for everyday use.
      </p>
      <img
        src={e5}
        alt="Electric Car"
        style={{ width: '80%', height: 'auto', margin: '10px 0', borderRadius: '8px' }}
      />

      <h2 style={{ color: '#1E90FF' }}>The Future of Electric Vehicles</h2>
      <p>
        The future of the automotive industry is undoubtedly electric. With governments around the world introducing stricter emission regulations and banning the sale of new gasoline and diesel vehicles in the coming decades, automakers are investing heavily in electric vehicle technology. The development of next-generation batteries, such as solid-state batteries, promises to further improve the range, charging times, and affordability of electric vehicles.
      </p>
      <p>
        In addition to passenger cars, the electrification of commercial vehicles is gaining momentum. Electric trucks and buses are being developed to reduce emissions in the transportation and logistics sectors, which are major contributors to global greenhouse gas emissions.
      </p>

      <h2 style={{ color: '#1E90FF' }}>Conclusion</h2>
      <p>
        Electric vehicles represent a fundamental shift in the automotive industry, offering a cleaner, more sustainable mode of transportation. While challenges such as range anxiety and charging infrastructure remain, advancements in technology and growing environmental awareness are driving the adoption of electric vehicles worldwide. As we move towards a future where electric vehicles dominate the roads, the transition will not only reduce our reliance on fossil fuels but also improve air quality and help mitigate the impacts of climate change. Electric vehicles are not just a trend; they are the future of transportation.
      </p>

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

export default Electric;
