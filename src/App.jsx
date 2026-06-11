import './App.css'
import Header from  './header.jsx'
import Card from './Card.jsx'

function App() {
  

  return (
    <>
      <Header />
    
   <section style = {{alignItems:"center",display:"flex",flexDirection:"column",gap:"20px"}}>

     <img src="https://zerodha.com/static/images/landing.svg" alt="landing" />

     <h1>Investing, simplified.</h1>
     <p>Join 6 million+ investors using Zerodha to invest in stocks, mutual funds, and more.</p>


     <button id="sign-up-button">
        Sign up now
      </button>
            <div
              style={{
                display: "flex",
                gap: "20px"
              }}
            >
              <Card imgSrc="https://i.pinimg.com/1200x/ac/34/1c/ac341cc12d059e834fe37518151cbdf5.jpg" title="NEVER GIVE UP" />  
              <Card imgSrc="https://i.pinimg.com/736x/90/d7/be/90d7befe679363d6920e77a32629412c.jpg" title="WORK HARD" />
              <Card imgSrc="https://i.pinimg.com/736x/be/bc/82/bebc822a4b5be862b589a817f9b33486.jpg" title=" Believe in Yourself" />  
              <Card imgSrc="https://i.pinimg.com/1200x/1d/48/20/1d48205bc58f5f3f393e21ecddc28286.jpg" title="STAY FOCUSED" />
              <Card imgSrc="https://i.pinimg.com/736x/ca/8f/80/ca8f80cf07a63bc8ea665e889951f196.jpg" title="STAY FOCUSED" />
              <Card imgSrc="https://i.pinimg.com/736x/29/cd/0d/29cd0ddadce03c90f1810f887e0976f0.jpg" title="REBUILD IT" />
        </div>
              
    </section>
    </>
  );  
}

export default App
