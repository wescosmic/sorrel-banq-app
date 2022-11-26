

const HomeCarousel = () => {
  return (

    <>
<div class="row mt-5">
	<div class="col"></div>
	<div class="col-8">

		<div id="homeCarousel" class="carousel carousel-dark slide" data-bs-ride="carousel">
		  <div class="carousel-indicators">
		    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
		    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 1"></button>
		    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 2"></button>
		    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="3" aria-label="Slide 3"></button>
		    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="4" aria-label="Slide 4"></button>
		  </div>
		  <div class="carousel-inner">
		    <div class="carousel-item active" data-bs-interval="10000">
		      <img src="https://via.placeholder.com/1200x700/d9e3f1" class="d-block w-100" alt="https://via.placeholder.com/500x300"/>
		      <div class="carousel-caption d-none d-md-block">
		        <h5>Earn a steady APR interest in stablecoins on your assets.<br/>Interest is credited monthly to your Sorrel Savings Account.<br/>Withdraw your assets at anytime.</h5>

				  <button class="btn btn-outline-info mt-3 mb-3" type="button"  data-bs-target="#homeCarousel" data-bs-slide="next">
				    Next&nbsp;&nbsp;>
				  </button>

		      </div>
		    </div>
		    <div class="carousel-item" data-bs-interval="10000">
		      <img src="https://via.placeholder.com/1200x700/d9e3f1" class="d-block w-100" alt="https://via.placeholder.com/500x300"/>
		      <div class="carousel-caption d-none d-md-block">
		        <h5>Earn a steady APR interest in stablecoins by<br/>staking your assets for fixed periods in Sorrel Vaults.<br/>Interest is credited monthly to your Sorrel Savings Account.</h5>

				  <button class="btn btn-outline-info mt-3 mb-3" type="button"  data-bs-target="#homeCarousel" data-bs-slide="next">
				    Next&nbsp;&nbsp;>
				  </button>

		      </div>
		    </div>
		    <div class="carousel-item" data-bs-interval="10000">
		      <img src="https://via.placeholder.com/1200x700/d9e3f1" class="d-block w-100" alt="https://via.placeholder.com/500x300"/>
		      <div class="carousel-caption d-none d-md-block">
		        <h5>Bridge your stablecoins into the real world<br/>via various available off-ramp methods.</h5>

				  <button class="btn btn-outline-info mt-3 mb-3" type="button"  data-bs-target="#homeCarousel" data-bs-slide="next">
				    Next&nbsp;&nbsp;>
				  </button>

		      </div>
		    </div>
		    <div class="carousel-item" data-bs-interval="10000">
		      <img src="https://via.placeholder.com/1200x700/d9e3f1" class="d-block w-100" alt="https://via.placeholder.com/500x300"/>
		      <div class="carousel-caption d-none d-md-block">
		        <h3>Coming Soon</h3>
		        <h5>Access a low interest credit limit using your Sorrel Vaults and Savings Account balances as collateral.</h5>

				  <button class="btn btn-outline-info mt-3 mb-3" type="button"  data-bs-target="#homeCarousel" data-bs-slide="next">
				    Next&nbsp;&nbsp;>
				  </button>

		      </div>
		    </div>
		    <div class="carousel-item" data-bs-interval="50000">
		      <img src="https://via.placeholder.com/1200x700/d9e3f1" class="d-block w-100" alt="https://via.placeholder.com/500x300"/>
		      <div class="carousel-caption d-none d-md-block">
		        
			    <h5>A Simple Decentralized Banq.</h5>
			    <h5>For Anyone. Anywhere. On-chain.</h5>
			    <h5>Get ready for your new Sorrel Multi-Currency Savings Account!</h5>

			    <div class="p-5">
			      <h5 className="text-left">Select Your Home Country</h5>
			        <select class="mt-3 form-select" aria-label="Select Country">
			          <option selected>Trinidad & Tobago</option>
			          <option value="2">Georgia</option>
			          <option value="3">Turkiye</option>
			          <option value="4">Barbados</option>
			          <option value="5">Jamaica</option>
			          <option value="6">Dominica</option>
			          <option value="6">other countries</option>
			        </select>
			    </div>


				  <button class="btn btn-outline-info mt-3 mb-3" type="button" >
				    Create Account
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
