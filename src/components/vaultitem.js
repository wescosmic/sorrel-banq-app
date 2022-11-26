import OffcanvasVaultDeposit from "../components/offcanvas-vaultdeposit";
import USDDImg from "../img/usdd.png";
import BTCImg from "../img/btc.png";
import TRXImg from "../img/trx.png";
import ETHImg from "../img/eth.png";



const VaultItem = () => {
  return (

    <>

      <div class="accordion-item vault-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              <img
                src={BTCImg}
                alt="gStable"
                width="32"
                height="32"
                class="flex-shrink-0"
              />
              <div class="currency-name">
                <b>BTC</b>
                <p class="small">Bitcoin</p>
              </div>
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
              Addon description and whatever
            <div class="row mt-5">
              <div class="col"></div>
              <div class="col">
              <button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasVaultDeposit" aria-controls="offcanvasVaultDeposit">Deposit</button>
              </div>
              <div class="col"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item vault-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              <img
                src={TRXImg}
                alt="gStable"
                width="32"
                height="32"
                class="flex-shrink-0"
              />
              <div class="currency-name">
                <b>TRX</b>
                <p class="small">Tron</p>
              </div>
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
              Addon description and whatever
            <div class="row mt-5">
              <div class="col"></div>
              <div class="col">
              <button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasVaultDeposit" aria-controls="offcanvasVaultDeposit">Deposit</button>
              </div>
              <div class="col"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item vault-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              <img
                src={ETHImg}
                alt="gStable"
                width="32"
                height="32"
                class="flex-shrink-0"
              />
              <div class="currency-name">
                <b>ETH</b>
                <p class="small">Ethereum</p>
              </div>
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
              Addon description and whatever
            <div class="row mt-5">
              <div class="col"></div>
              <div class="col">
              <button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasVaultDeposit" aria-controls="offcanvasVaultDeposit">Deposit</button>
              </div>
              <div class="col"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item vault-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              <img
                src={USDDImg}
                alt="gStable"
                width="32"
                height="32"
                class="flex-shrink-0"
              />
              <div class="currency-name">
                <b>USDD</b>
                <p class="small">Decentralized US Dollar</p>
              </div>
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
              Addon description and whatever
            <div class="row mt-5">
              <div class="col"></div>
              <div class="col">
              <button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasVaultDeposit" aria-controls="offcanvasVaultDeposit">Deposit</button>
              </div>
              <div class="col"></div>
            </div>
          </div>
        </div>
      </div>


      <OffcanvasVaultDeposit></OffcanvasVaultDeposit>

    </>

  );
};

export default VaultItem;
