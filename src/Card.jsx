function Card(props) {
  return (
    <div>
        <section style = {{alignItems:"center",display:"flex",flexDirection:"column",gap:"20px"}}>

         <img height="350" width="250" src={props.imgSrc} alt="landing" /> 
         <h1>{props.title}</h1>

         </section>
        
    </div>
  );
}

export default Card;