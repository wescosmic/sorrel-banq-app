import WalletConnect from '../components/walletconnect';

const Vaults = () => {
  return (
    <>

    <div class="d-flex bg-info pb-8">
      <div class="container content">
          <div class="row mt-3">
            <div class="col d-none d-lg-block">
              <h1>Vaults</h1>
              <p>Earn stablecoins by staking your digital assets over fixed periods.</p>
            </div>
            <div class="col">
              <WalletConnect></WalletConnect>
            </div>
          </div>



      </div>
    </div>

    </>

  );
};

export default Vaults;
