import './App.css'

function App() {
  
 let alertmessage = () => {
  alert("Sign up button clicked!")
 }

  return (
    <>
    <section style = {{alignItems:"center"}}>

      <header style={{display:"flex",justifyContent:"space-evenly"}}>

       <img height="50" width="120" src="https://zerodha.com/static/images/logo.svg"  alt="logo" />

      <nav style={{display:"flex",gap:"20px",alignItems:"end"}}>
      
          <a href="https://zerodha.com/open-account/" target="_blank" >Sign UP</a>
          <a href="https://zerodha.com/about/">About</a>
          <a href="https://zerodha.com/products/">Products</a>
          <a href="https://zerodha.com/pricing/">Pricing</a>
          <a href="https://zerodha.com/support/">Support</a>
        
      </nav>
    </header>

    </section>
      

    
   <section style = {{alignItems:"center",display:"flex",flexDirection:"column",gap:"20px"}}>

     <img src="https://zerodha.com/static/images/landing.svg" alt="landing" />
     <h1>Investing, simplified.</h1>
     <p>Join 6 million+ investors using Zerodha to invest in stocks, mutual funds, and more.</p>
     <button id="sign-up-button" onClick={alertmessage}>
        Sign up now
      </button>

    </section>
    </>
  );
}

export default App
