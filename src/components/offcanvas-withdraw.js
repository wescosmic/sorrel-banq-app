



const OffcanvasWithdraw = () => {
  return (

    <>


<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasWithdraw" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header bg-info">
    <h5 id="offcanvasRightLabel">Send</h5>
    <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body mx-3">

    <div class="mt-3">
      <p className="text-left">Select Account</p>
      <select class="form-select" aria-label="Select Account">
        <option selected>Primary - gTTD $444,000.88</option>
        <option value="2">Primary - gGEL $44,000.88</option>
        <option value="3">Primary - gEUR $4,000.88</option>
        <option value="4">Primary - gGBP $444.88</option>
        <option value="5">Primary - USDD $4,400.88</option>
      </select>
    </div>

    <div class="row mt-5">
      <div class="col">
      <p className="text-left">Enter Amount</p>
          <div className="input-group mb-1 mt-3">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInputGroup1"
                placeholder="$"
              />
              <label for="floatingInputGroup1">$</label>
            </div>
          </div>

      </div>
    </div>

    <div class="row mt-5">
    <div class="col">
        <p className="text-left">Enter Destination Address</p>
        <div className="input-group mb-1 mt-3">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputGroup1"
              placeholder="$"
            />
            <label for="floatingInputGroup1">TRC20 Address</label>
          </div>
        </div>
  	</div>
    </div>

    <div class="row mt-5">
    <div class="col text-center">
      <button class="btn btn-outline-info">Send</button>
    </div>

  	</div>
  </div>
</div>

</>
  );
};

export default OffcanvasWithdraw;
