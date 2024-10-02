import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import l1 from '../images/l3.jpg';
import l2 from '../images/l4.jpg';
import l3 from '../images/l5.jpg';
import l4 from '../images/l6.jpg';
import l5 from '../images/l7.jpg';
import l6 from '../images/l8.jpg';


function LatestCars() {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [hasLiked, setHasLiked] = useState(false);

  // Check local storage for previous like
  useEffect(() => {
    const liked = localStorage.getItem('latestCarsLiked');
    if (liked) {
      setLikes(Number(liked)); // Set likes from local storage
      setHasLiked(true); // User has already liked
    }
  }, []);
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
      <h1 style={{ color: '#1E90FF', margin: '20px 0' }}>
        The Cutting-Edge Innovations of Latest Cars
      </h1>
      <img
        src={l1}
        alt="Latest Cars"
        style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
      />

      {/* Subheading 1 */}
      <h2 style={{ color: '#2E8B57', marginTop: '20px' }}>Electric Vehicles</h2>
      <p style={{ margin: '20px 0', lineHeight: '1.6' }}>
        One of the most notable trends is the increasing shift towards electric vehicles (EVs). Major automakers, including Tesla, Ford, and Volkswagen, have announced ambitious plans to expand their electric lineups. These cars offer a sustainable alternative to traditional gasoline-powered vehicles, reducing greenhouse gas emissions and reliance on fossil fuels. With advancements in battery technology, the range of EVs continues to improve, making them a viable option for more consumers.
      </p>
      <img
        src={l2}
        alt="Latest Cars"
        style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
      />
      {/* Subheading 2 */}
      <h2 style={{ color: '#2E8B57', marginTop: '20px' }}>Autonomous Driving</h2>
      <p style={{ margin: '20px 0', lineHeight: '1.6' }}>
        Autonomous driving technology is another groundbreaking innovation. Companies like Waymo and Cruise are at the forefront of developing self-driving cars that promise to revolutionize the way we think about transportation. These vehicles use a combination of sensors, cameras, and artificial intelligence to navigate roads with minimal human intervention.
      </p>
      <img
        src={l3}
        alt="Latest Cars"
        style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
      />
      {/* Subheading 3 */}
      <h2 style={{ color: '#2E8B57', marginTop: '20px' }}>Advanced Connectivity</h2>
      <p style={{ margin: '20px 0', lineHeight: '1.6' }}>
        Connectivity is becoming a key feature in the latest cars. Manufacturers are integrating advanced infotainment systems that allow drivers to connect their smartphones and access navigation, music, and communication apps seamlessly. Features like Apple CarPlay and Android Auto enhance the driving experience by providing drivers with familiar interfaces.
      </p>
      <img
        src={l4}
        alt="Latest Cars"
        style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
      />
      {/* Subheading 4 */}
      <h2 style={{ color: '#2E8B57', marginTop: '20px' }}>Safety Features</h2>
      <p style={{ margin: '20px 0', lineHeight: '1.6' }}>
        Safety is a paramount concern for automakers, and the latest cars are equipped with cutting-edge safety features. Advanced Driver-Assistance Systems (ADAS) include technologies such as adaptive cruise control, lane-keeping assist, and automatic emergency braking. These features work together to create a safer driving environment.
      </p>
      <img
        src={l5}
        alt="Latest Cars"
        style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
      />
      {/* Subheading 5 */}
      <h2 style={{ color: '#2E8B57', marginTop: '20px' }}>Design and Interiors</h2>
      <p style={{ margin: '20px 0', lineHeight: '1.6' }}>
        The design of the latest cars is equally impressive, with manufacturers focusing on creating sleek, aerodynamic shapes that enhance performance and fuel efficiency. Interiors are becoming more luxurious, with high-quality materials and customizable options. Ambient lighting and advanced climate control systems contribute to an overall premium experience.
      </p>
      <img
        src={l6}
        alt="Latest Cars"
        style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
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

export default LatestCars;
