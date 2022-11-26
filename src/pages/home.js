import WalletConnect from '../components/walletconnect';

const Home = () => {
  return (
    <>
    <div class="d-flex bg-info pb-8">
        <div class="container content">
            <div class="row mt-3">
              <div class="col d-none d-lg-block">
                <h1>Getting Started</h1>
                <p>What can you do with Sorrel?</p>
              </div>
              <div class="col">
                <WalletConnect></WalletConnect>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col text-center d-lg-none">
                <h1>Bridge</h1>
                <p>Convert your stablecoins into the real world</p>
              </div>
            </div>

        </div>
    </div>


    <div class="container home content mt-n4">

            <div class="row mt-5 mx-5 text-center">
              <div class="col"></div>
              <div class="col-8">
                <h1>Save | Earn | Spend</h1>

                <div class="card" >
                  <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>

              </div>
              <div class="col"></div>
            </div>

    </div>

    </>


  );
};

export default Home;
