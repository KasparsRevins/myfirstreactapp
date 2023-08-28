
const Body = () => {
 return (
    <div>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.pexels.com/photos/9739345/pexels-photo-9739345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/13588954/pexels-photo-13588954.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/4728866/pexels-photo-4728866.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="container text-center">
<div class="row">
  <div class="col">
  <div class="card">
  <img src="https://images.pexels.com/photos/1685503/pexels-photo-1685503.jpeg?auto=compress&cs=tinysrgb&w=1600" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>
  <div class="col">
  <div class="card" >
  <img src="https://images.pexels.com/photos/1459497/pexels-photo-1459497.jpeg?auto=compress&cs=tinysrgb&w=1600" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>
  <div class="col">
  <div class="card" >
  <img src="https://images.pexels.com/photos/1457812/pexels-photo-1457812.jpeg?auto=compress&cs=tinysrgb&w=1600" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>
</div>
</div>
    </div>
 )   
}
export default Body