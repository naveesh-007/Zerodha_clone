

function Header() {
  return (
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
  );
}

export default Header