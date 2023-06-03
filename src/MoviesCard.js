const MoviesCard = ({title,des,src}) => {
  return (
    <>
    <center>
      <div className="card" style={{width:'18rem'}}>
        <img className="card-img-top" src={src} alt="MoviesCard image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
          {des}
          </p>
          <a href="#" className="btn btn-primary">
            Paly & Enjoy
          </a>
        </div>
      </div>
</center>
    </>
  );
};
export default MoviesCard;
