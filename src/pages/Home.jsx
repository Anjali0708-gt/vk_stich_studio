import react from 'react';
import './home.css';
function Home()
{
  return(
    <>
    <h1 className="container-h1">Welcome to VK Stich Studio</h1>
    <div className="container">
      
      <div className="herosection">
        
        <h2>Crafted for Your Story. Tailored for Your Legacy.</h2>
        <p>The suit you wear to your first interview, your wedding day, or a special celebration becomes part of your story. At VK Stitch Studio, we craft custom garments designed not just to fit your body, but to stay with your memories for years to come.</p>
      </div>

      <div className="side-img">
        <img src="src/assets/bacgroudhome img.webp" alt="Background Image" />
      </div>
    </div>

    </>
  )
}

export default Home;