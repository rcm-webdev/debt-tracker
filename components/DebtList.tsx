export const DebtList = () => {
  const icons = {
    wallet: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path d="M17 8V5a1 1 0 0 0-1-1H6a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V6" />
          <path d="M20 12v4h-4a2 2 0 0 1 0-4z" />
        </g>
      </svg>
    ),
  };
  return (
    <div className="card bg-neutral w-full shadow-xl">
      <div className="card-body">
        <div className="flex flex-row items-center gap-4">
          <h3 className="opacity-45">Total Remaining Debt:</h3>
          <h2 className="card-title font-extrabold ">₩ 45.6 billion</h2>
        </div>
        <progress
          className="progress progress-error w-56"
          value="50"
          max="100"
        ></progress>
        <div className="flex flex-row items-center mt-4">
          <p className="font-semibold ">
            Hello player number <span className="text-success">456</span>, ready
            to pay off your remaining <span className="text-error">debt</span>?
          </p>
        </div>
      </div>
      {/* <div>
        <select className="select select-ghost w-full max-w-xs">
          <option disabled selected>
            Pick a currency
          </option>
          <option>USD - US Dollar</option>
          <option>KRW - South Korean Won</option>
          <option>EUR - Euro</option>
        </select>
      </div> */}

      {/* Debt List */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Type</th>
                <th>Amount</th>
                <th>Pay off debt</th>
                <th>Curious?</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="bg-base-200">
                <th>1</th>
                <td>Credit Card</td>
                <td className="text-error">₩5,000,000,000</td>
                <td>
                  <button className="btn btn-primary">{icons.wallet}</button>
                </td>
                <td>
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      className="toggle toggle-primary"
                      defaultChecked
                    />
                  </label>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Mortgage</td>
                <td className="text-error">₩40,000,000,000</td>
                <td>
                  <button className="btn btn-primary">{icons.wallet}</button>
                </td>
                <td>
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      className="toggle toggle-primary"
                      defaultChecked
                    />
                  </label>
                </td>
              </tr>

              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Car Loan</td>
                <td className="text-error">₩600,000,000</td>
                <td>
                  <button className="btn btn-primary">{icons.wallet}</button>
                </td>
                <td>
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      className="toggle toggle-primary"
                      defaultChecked
                    />
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DebtList;
