function Card(props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        width: "300px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <img
          height="350"
          width="250"
          src={props.imgSrc}
          alt="landing"
        />

        <h1>{props.title}</h1>
        
      </section>
    </div>
  );
}

export default Card;