import React from 'react';
import Swal from 'sweetalert2'; // Ensure this is imported
import { useState } from 'react';
import h1 from '../images/h1.jpg';
import h2 from '../images/h2.jpg';
import h3 from '../images/h3.jpg';
import h4 from '../images/h4.jpg';
import h5 from '../images/h5.jpg';


function Hybrid() {

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
      <h1 style={{ color: '#228B22', margin: '20px 0' }}>The Rise of Hybrid Vehicles</h1>
      <img
        src={h1}
        alt="Hybrid Car"
        style={{ width: '100%', height: 'auto', margin: '10px 0', borderRadius: '8px' }}
      />
      
      {/* Subheadings with standard colors */}
      <h2 style={{ color: '#1E90FF' }}>A Brief History of Hybrid Vehicles</h2>
      Hybrid vehicles are not a new concept. The idea of combining gasoline and electric power dates back to the late 19th century when engineers experimented with dual-power sources for better performance and efficiency. However, it was in the late 20th century, specifically with the launch of the Toyota Prius in 1997, that hybrid vehicles became commercially viable and widely available. The Prius set the stage for other automakers to follow suit, marking the beginning of the hybrid era in the automotive industry.

      <h2 style={{ color: '#1E90FF' }}>How Hybrid Vehicles Work</h2>
      The key feature of a hybrid vehicle is its ability to switch between an internal combustion engine and an electric motor. At low speeds, the electric motor powers the car, while the gasoline engine kicks in when higher speeds or additional power are required. This seamless transition between power sources ensures optimal fuel efficiency and reduces emissions.

      Another crucial aspect of hybrid vehicles is regenerative braking. This system captures the energy generated during braking and stores it in the car’s battery, which can later be used to power the electric motor. This process enhances the overall efficiency of the vehicle, making it ideal for city driving where stop-and-go traffic is common.
      <img
        src={h2}
        alt="Hybrid Car"
        style={{ width: '100%', height: 'auto', margin: '10px 0', borderRadius: '8px' }}
      />
      <h2 style={{ color: '#1E90FF' }}>Benefits of Hybrid Vehicles</h2>
      Hybrid vehicles offer several benefits that appeal to environmentally conscious consumers and those looking to reduce fuel costs. Firstly, the fuel efficiency of hybrid cars is significantly higher than that of traditional gasoline vehicles. The ability to run on electric power at low speeds reduces the overall fuel consumption, making hybrids an economical choice for daily commuting.

      Secondly, hybrid cars produce fewer emissions compared to their gasoline counterparts. Since they rely on electric power for short distances and utilize regenerative braking, they contribute to a reduction in greenhouse gases and air pollutants, helping to combat climate change and improve air quality.

      In addition to environmental benefits, hybrid vehicles also offer a quieter and smoother driving experience. The electric motor is almost silent, reducing noise pollution, and the transition between power sources is typically seamless, providing a comfortable ride.
      <img
        src={h3}
        alt="Hybrid Car"
        style={{ width: '100%', height: 'auto', margin: '10px 0', borderRadius: '8px' }}
      />
      <h2 style={{ color: '#1E90FF' }}>Challenges and Limitations</h2>
      Despite their numerous advantages, hybrid vehicles are not without challenges. One of the primary concerns is the cost. Hybrid cars are generally more expensive than conventional gasoline vehicles due to the complexity of their dual powertrain system. Although fuel savings can offset the higher initial cost over time, the upfront price may deter some consumers.

      Another limitation is the size and weight of the battery pack. Hybrid vehicles require larger batteries than standard gasoline cars, which can reduce the available space inside the vehicle and add to its weight. However, advancements in battery technology are addressing this issue, with newer hybrids offering better energy density and reduced battery size.

      <h2 style={{ color: '#1E90FF' }}>The Future of Hybrid Vehicles</h2>
      As the automotive industry continues to evolve, hybrid vehicles are expected to play a critical role in the transition towards fully electric transportation. The development of plug-in hybrids (PHEVs) allows drivers to charge their vehicles from an external power source, extending the electric-only range and further reducing reliance on gasoline. This innovation brings hybrids closer to all-electric vehicles while maintaining the convenience of a gasoline engine for longer journeys.

      Moreover, advancements in battery technology, such as solid-state batteries, promise to make hybrids even more efficient and cost-effective in the coming years. These next-generation batteries offer higher energy density, faster charging times, and improved safety, making them ideal for hybrid applications.

      Governments worldwide are also introducing incentives to promote the adoption of hybrid vehicles. Tax credits, rebates, and exemptions from congestion charges are just some of the measures encouraging consumers to choose hybrids over traditional vehicles. As public charging infrastructure expands and battery technology advances, the appeal of hybrid cars will continue to grow.
      <img
        src={h4}
        alt="Hybrid Car"
        style={{ width: '100%', height: 'auto', margin: '10px 0', borderRadius: '8px' }}
      />
      <h2 style={{ color: '#1E90FF' }}>Conclusion</h2>
      Hybrid vehicles represent a significant step towards a more sustainable and eco-friendly future in the automotive industry. By combining the benefits of gasoline and electric power, hybrids offer an efficient, practical, and environmentally conscious alternative to conventional vehicles. While challenges remain, the continued evolution of hybrid technology, coupled with growing environmental awareness, will ensure that hybrids play a crucial role in the future of transportation. As the world moves towards a greener economy, hybrid vehicles are poised to bridge the gap between traditional combustion engines and fully electric cars, providing a smoother transition to cleaner, more efficient modes of transport.
      <img
        src={h5}
        alt="Hybrid Car"
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
        <button onClick={handleLike} style={{ padding: '10px 20px', backgroundColor: '#1E90FF', color: 'white', border: 'none', borderRadius: '5px' }} className='me-3' >
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

export default Hybrid;
