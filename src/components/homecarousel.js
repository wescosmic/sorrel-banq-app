

const HomeCarousel = () => {
  return (

    <>
<div class="row mt-5">
	<div class="col"></div>
	<div class="col-8">

		<div id="homeCarousel" class="carousel slide" data-bs-ride="carousel">
		  <div class="carousel-indicators">
		    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
		    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
		    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
		  </div>
		  <div class="carousel-inner">
		    <div class="carousel-item active" data-bs-interval="10000">
		      <img src="https://via.placeholder.com/500x300/d9e3f1" class="d-block w-100" alt="https://via.placeholder.com/500x300"/>
		      <div class="carousel-caption d-none d-md-block">
		        <h2>Save</h2>
		        <h5>Some representative placeholder content for the first slide.</h5>

				  <button class="btn btn-outline-info mt-3" type="button" >
				    Connect Wallet
				  </button>

		      </div>
		    </div>
		    <div class="carousel-item" data-bs-interval="3000">
		      <img src="https://via.placeholder.com/500x300/d9e3f1" class="d-block w-100" alt="https://via.placeholder.com/500x300"/>
		      <div class="carousel-caption d-none d-md-block">
		        <h2>Earn</h2>
		        <h5>Some representative placeholder content for the second slide.</h5>

				  <button class="btn btn-outline-info mt-3" type="button" >
				    Connect Wallet
				  </button>

		      </div>
		    </div>
		    <div class="carousel-item">
		      <img src="https://via.placeholder.com/500x300/d9e3f1" class="d-block w-100" alt="https://via.placeholder.com/500x300"/>
		      <div class="carousel-caption d-none d-md-block">
		        <h2>Spend</h2>
		        <h5>Some representative placeholder content for the third slide.</h5>

				  <button class="btn btn-outline-info mt-3" type="button" >
				    Connect Wallet
				  </button>

		      </div>
		    </div>
		  </div>
		  <button class="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
		    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
		    <span class="visually-hidden">Previous</span>
		  </button>
		  <button class="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
		    <span class="carousel-control-next-icon" aria-hidden="true"></span>
		    <span class="visually-hidden">Next</span>
		  </button>
		</div>


	</div>
	<div class="col"></div>
</div>

    </>

  );
};

export default HomeCarousel;
