import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

function LatestCars() {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [hasLiked, setHasLiked] = useState(false); // Track if the user has liked

  // Check local storage for previous like
  useEffect(() => {
    const liked = localStorage.getItem('latestCarsLiked');
    if (liked) {
      setLikes(Number(liked)); // Set likes from local storage
      setHasLiked(true); // User has already liked
    }
  }, []);

  const handleLike = () => {
    if (!hasLiked) {
        const newLikes = likes + 1; // Calculate new likes
        setLikes(newLikes);
        localStorage.setItem('latestCarsLiked', newLikes); // Save likes to local storage
        setHasLiked(true); // User has now liked
  
        // Show success alert
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      }
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
        src="https://www.caranddriver.com/photos/60518a39e73f3e1c6cf1a2e3/16:9/w_2560%2Cc_limit/2022-honda-civic-sedan-2022-honda-civic-sedan.jpg"
        alt="Latest Cars"
        style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
      />
      <p style={{ margin: '20px 0', lineHeight: '1.6' }}>
        In the ever-evolving world of automotive technology, the latest cars represent a fusion of innovation, design, and performance. Car manufacturers are pushing the boundaries to create vehicles that not only meet the needs of today’s consumers but also address environmental concerns and enhance driving experiences. This blog post delves into some of the latest trends and features in the automotive industry that are shaping the future of transportation.
      </p>
      <p style={{ margin: '20px 0', lineHeight: '1.6' }}>
        One of the most notable trends is the increasing shift towards electric vehicles (EVs). Major automakers, including Tesla, Ford, and Volkswagen, have announced ambitious plans to expand their electric lineups. These cars offer a sustainable alternative to traditional gasoline-powered vehicles, reducing greenhouse gas emissions and reliance on fossil fuels. With advancements in battery technology, the range of EVs continues to improve, making them a viable option for more consumers.
      </p>
      <p style={{ margin: '20px 0', lineHeight: '1.6' }}>
        Autonomous driving technology is another groundbreaking innovation. Companies like Waymo and Cruise are at the forefront of developing self-driving cars that promise to revolutionize the way we think about transportation. These vehicles use a combination of sensors, cameras, and artificial intelligence to navigate roads with minimal human intervention. As this technology matures, it has the potential to improve road safety and increase accessibility for individuals who are unable to drive.
      </p>
      <p style={{ margin: '20px 0', lineHeight: '1.6' }}>
        Connectivity is also becoming a key feature in the latest cars. Manufacturers are integrating advanced infotainment systems that allow drivers to connect their smartphones and access navigation, music, and communication apps seamlessly. Features like Apple CarPlay and Android Auto enhance the driving experience by providing drivers with familiar interfaces. Additionally, many cars are now equipped with over-the-air update capabilities, ensuring that software and features can be improved without requiring a trip to the dealership.
      </p>
      <p style={{ margin: '20px 0', lineHeight: '1.6' }}>
        Safety is a paramount concern for automakers, and the latest cars are equipped with cutting-edge safety features. Advanced Driver-Assistance Systems (ADAS) include technologies such as adaptive cruise control, lane-keeping assist, and automatic emergency braking. These features work together to create a safer driving environment, helping to prevent accidents and protect passengers.
      </p>
      <p style={{ margin: '20px 0', lineHeight: '1.6' }}>
        The design of the latest cars is equally impressive, with manufacturers focusing on creating sleek, aerodynamic shapes that enhance performance and fuel efficiency. Interiors are becoming more luxurious, with high-quality materials and customizable options. Ambient lighting and advanced climate control systems contribute to an overall premium experience for passengers.
      </p>
      <p style={{ margin: '20px 0', lineHeight: '1.6' }}>
        In conclusion, the latest cars represent a harmonious blend of technology, design, and sustainability. As the automotive industry continues to innovate, consumers can look forward to a future filled with exciting developments that enhance the driving experience while addressing critical environmental issues. Whether you’re interested in electric vehicles, autonomous technology, or advanced connectivity features, the latest cars are sure to impress and inspire.
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
        <button onClick={handleLike} style={{ padding: '10px 20px', backgroundColor: '#1E90FF', color: 'white', border: 'none', borderRadius: '5px' }} className='me-3' disabled={hasLiked}>
          Like {hasLiked ? '' : likes}
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
