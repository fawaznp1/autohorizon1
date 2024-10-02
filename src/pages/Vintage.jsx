import React ,{useState ,useEffect} from 'react';
import Swal from 'sweetalert2';
import v1 from '../images/v2.jpg';
import v2 from '../images/v3.jpg';
import v3 from '../images/v4.jpg';
import v4 from '../images/v5.jpg';
import v5 from '../images/v6.jpg';
import v6 from '../images/v7.jpg'


function Vintage() {
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
      <h1 style={{ color: '#8B0000', margin: '20px 0' }}>
        The Timeless Allure of Vintage Cars
      </h1>
      <img
        src={v1}
        alt="Vintage Car 1"
        style={{ width: '90%', height: 'auto', margin: '10px 0', borderRadius: '8px' }}
      />
      <p>
        Vintage cars have a charm that transcends generations, evoking nostalgia and admiration for a bygone era of automotive design and craftsmanship. These classic vehicles, often celebrated for their unique aesthetics and engineering, captivate car enthusiasts and collectors alike. In this blog post, we'll explore the history, significance, and appeal of vintage cars, highlighting what makes them such a beloved part of automotive culture.
      </p>
      
      <h1 style={{ color: '#8B0000', margin: '20px 0' }}>A Glimpse into History</h1>
      <img
        src={v2}
        alt="Vintage Car 1"
        style={{ width: '90%', height: 'auto', margin: '10px 0', borderRadius: '8px' }}
      />
      <p>
        The term "vintage car" typically refers to vehicles manufactured between 1919 and 1930. However, the allure of vintage cars extends beyond just their age. These vehicles represent a pivotal time in automotive history when manufacturers began to prioritize style and individuality over mere functionality. Classic brands like Ford, Chevrolet, and Cadillac produced some of the most iconic models during this period, characterized by elegant lines, chrome accents, and distinctive features.
      </p>
     
      <p>
        One of the most notable vintage cars is the Ford Model T, produced from 1908 to 1927. Often regarded as the first affordable automobile, the Model T revolutionized transportation and made car ownership accessible to the masses. Its simple design and reliability paved the way for future automotive innovations.
      </p>
     
      <h1 style={{ color: '#8B0000', margin: '20px 0' }}>The Craftsmanship Behind Vintage Cars</h1>
      <img
        src={v3} // Vintage car image
        alt="Vintage Car 3"
        style={{ width: '100%', height: 'auto', margin: '10px 0', borderRadius: '8px' }}
      />
      <p>
        What sets vintage cars apart from modern vehicles is the craftsmanship involved in their production. In an era dominated by mass production, vintage cars were often handmade, with meticulous attention to detail. Skilled artisans crafted each component, resulting in vehicles that showcased the beauty of their materials, such as wood, leather, and metal.
      </p>
      <p>
        Many vintage cars feature unique design elements that are rarely seen in contemporary models. Curved fenders, intricate grilles, and vibrant colors all contribute to their distinctive look. The craftsmanship extended beyond the exterior; interiors were often lavishly appointed with high-quality materials and innovative features, making these cars a pleasure to drive and ride in.
      </p>
      
      <h1 style={{ color: '#8B0000', margin: '20px 0' }}>The Cultural Significance of Vintage Cars</h1>
      <img
        src={v4}
        alt="Vintage Car 4"
        style={{ width: '100%', height: 'auto', margin: '10px 0', borderRadius: '8px' }}
      />
      <p>
        Vintage cars have a rich cultural significance, representing not just a mode of transportation but a lifestyle and an identity. They symbolize freedom, adventure, and the open road. For many, owning a vintage car is about more than just the vehicle itself; it’s a connection to history and a way to celebrate a love for automobiles.
      </p>
      <p>
        Car shows and vintage car rallies draw enthusiasts from all over the world. These events provide an opportunity to showcase meticulously restored vehicles, share stories, and connect with fellow car lovers. The sense of community among vintage car owners is palpable, fostering friendships and bonds that often last a lifetime.
      </p>

      <h1 style={{ color: '#8B0000', margin: '20px 0' }}>Restoring Vintage Cars: A Labor of Love</h1>
      <img
        src={v5} restoration image
        alt="Vintage Car Restoration"
        style={{ width: '100%', height: 'auto', margin: '10px 0', borderRadius: '8px' }}
      />
      <p>
        Restoring a vintage car is a challenging yet rewarding endeavor. Many enthusiasts take on restoration projects to bring these classic vehicles back to their former glory. The process involves sourcing rare parts, often from different corners of the globe, and employing specialized skills to ensure authenticity.
      </p>
      <p>
        Restorers must have a deep understanding of the car's history and design specifications to create a vehicle that accurately reflects its original state. While some owners prefer to maintain a car's patina, celebrating its history, others aim for a showroom-quality finish. Regardless of the approach, the restoration process allows car enthusiasts to connect with their vehicles on a personal level, turning them into cherished pieces of art.
      </p>

      <h1 style={{ color: '#8B0000', margin: '20px 0' }}>The Appeal of Vintage Cars Today</h1>
      <img
        src={v6} 
        alt="Vintage Car Today"
        style={{ width: '100%', height: 'auto', margin: '10px 0', borderRadius: '8px' }}
      />
      <p>
        In today's fast-paced world, vintage cars offer a refreshing escape. Their timeless design and history appeal to those seeking something unique in a market dominated by cookie-cutter models. Many collectors view vintage cars as an investment, with certain models appreciating significantly over time.
      </p>
      <p>
        Moreover, the growing interest in sustainability and eco-consciousness has led to a resurgence in vintage car popularity. Enthusiasts appreciate the simplicity of vintage vehicles, often opting for classic cars with fewer electronic components and mechanical systems that can be easily repaired or restored.
      </p>

      <h1 style={{ color: '#8B0000', margin: '20px 0' }}>Conclusion</h1>
      <p>
        In conclusion, vintage cars represent much more than mere machines; they embody a rich history, stunning craftsmanship, and a vibrant community of enthusiasts. Whether you're a seasoned collector or just someone who appreciates the beauty of these classic vehicles, vintage cars continue to captivate hearts and inspire awe. The timeless allure of vintage cars ensures that their legacy will endure for generations to come.
      </p>
       {/* Comment Section */}
       <h2 style={{ color: '#8B0000' }}>Comments</h2>
      <form onSubmit={handleCommentSubmit} style={{ marginBottom: '20px' }}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Leave a comment..."
          style={{ width: '100%', height: '150px', borderRadius: '5px', padding: '10px' }}
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

export default Vintage;
