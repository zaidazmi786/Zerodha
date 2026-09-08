import React from 'react';

const features = [
  {
    amount: '0',
    title: 'Free equity delivery',
    desc: 'All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.',
  },
  {
    amount: '20',
    title: 'Intraday and F&O trades',
    desc: 'Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.',
  },
  {
    amount: '0',
    title: 'Free direct MF',
    desc: 'All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.',
  },
];

const charges = [
  {
    name: 'Brokerage',
    values: [
      'Zero Brokerage',
      <>0.03% or Rs. 20/executed<br />order whichever is lower</>,
      <>0.03% or Rs. 20/executed<br />order whichever is lower</>,
      'Flat Rs. 20 per executed order',
    ],
  },
  {
    name: 'STT/CTT',
    values: [
      '0.1% on buy & sell',
      '0.025% on the sell side',
      '0.05% on the sell side',
      <ul className="mb-0 ps-3">
        <li>
          0.15% of the intrinsic value on options that are bought and
          exercised
        </li>
        <li>0.15% on sell side (on premium)</li>
      </ul>,
    ],
  },
  {
    name: 'Transaction charges',
    values: [
      <>
        NSE: 0.00307%
        <br />
        BSE: 0.00375%
      </>,
      <>
        NSE: 0.00307%
        <br />
        BSE: 0.00375%
      </>,
      <>
        NSE: 0.00183%
        <br />
        BSE: 0
      </>,
      <>
        NSE: 0.03553% (on premium)
        <br />
        BSE: 0.0325% (on premium)
      </>,
    ],
  },
  {
    name: 'GST',
    values: [
      '18% on (brokerage + SEBI charges + transaction charges)',
      '18% on (brokerage + SEBI charges + transaction charges)',
      '18% on (brokerage + SEBI charges + transaction charges)',
      '18% on (brokerage + SEBI charges + transaction charges)',
    ],
  },
  {
    name: 'SEBI charges',
    values: [
      '₹10 / crore',
      '₹10 / crore',
      '₹10 / crore',
      '₹10 / crore',
    ],
  },
  {
    name: 'Stamp charges',
    values: [
      '0.015% or ₹1500 / crore on buy side',
      '0.003% or ₹300 / crore on buy side',
      '0.002% or ₹200 / crore on buy side',
      '0.003% or ₹300 / crore on buy side',
    ],
  },
];

function Hero() {
  return (
    <div>

      {/* =======================
          TOP HERO
      ======================= */}

      <div className="container text-center py-5">
        <h1 className="mb-2">Charges</h1>
        <p className="text-muted">List of all charges and taxes</p>
      </div>

      {/* =======================
          FEATURES
      ======================= */}

      <div className="container py-5">
        <div className="row text-center">

          {features.map((f, i) => (
            <div className="col-md-4 mb-4" key={i}>

              <h1
                style={{
                  color: '#f5a623',
                  fontWeight: 'bold',
                  fontSize: '4rem',
                }}
              >
                ₹{f.amount}
              </h1>

              <h5 className="mt-3">
                {f.title}
              </h5>

              <p className="text-muted px-3">
                {f.desc}
              </p>

            </div>
          ))}

        </div>
      </div>

      {/* =======================
          CHARGES TABLE
      ======================= */}

      <div className="container py-5">

        {/* Tabs */}

        <div
          className="d-flex justify-content-center"
          style={{
            borderBottom: '1px solid #ddd',
            marginBottom: '25px',
          }}
        >

          <button
            className="btn rounded-0 px-4 py-2"
            style={{
              color: '#444',
              borderBottom: '2px solid #2878d7',
            }}
          >
            Equity
          </button>

          <button
            className="btn rounded-0 px-4 py-2"
            style={{
              color: '#2878d7',
            }}
          >
            Currency
          </button>

          <button
            className="btn rounded-0 px-4 py-2"
            style={{
              color: '#2878d7',
            }}
          >
            Commodity
          </button>

        </div>

        {/* Table */}

        <div
          className="table-responsive"
          style={{
            border: '1px solid #ddd',
            borderRadius: '3px',
          }}
        >

          <table
            className="table mb-0"
            style={{
              color: '#24496d',
              fontSize: '13px',
            }}
          >

            <thead>

              <tr>

                <th
                  style={{
                    width: '12%',
                    fontWeight: '500',
                    color: '#111',
                    padding: '14px 12px',
                    borderBottom: '1px solid #ddd',
                  }}
                >
                </th>

                <th
                  style={{
                    fontWeight: '500',
                    color: '#111',
                    padding: '14px 12px',
                    borderBottom: '1px solid #ddd',
                  }}
                >
                  Equity delivery
                </th>

                <th
                  style={{
                    fontWeight: '500',
                    color: '#111',
                    padding: '14px 12px',
                    borderBottom: '1px solid #ddd',
                  }}
                >
                  Equity intraday
                </th>

                <th
                  style={{
                    fontWeight: '500',
                    color: '#111',
                    padding: '14px 12px',
                    borderBottom: '1px solid #ddd',
                  }}
                >
                  F&amp;O - Futures
                </th>

                <th
                  style={{
                    fontWeight: '500',
                    color: '#111',
                    padding: '14px 12px',
                    borderBottom: '1px solid #ddd',
                  }}
                >
                  F&amp;O - Options
                </th>

              </tr>

            </thead>

            <tbody>

              {charges.map((charge, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor:
                      index % 2 === 1 ? '#fafafa' : '#fff',
                  }}
                >

                  <td
                    style={{
                      color: '#607080',
                      padding: '15px 12px',
                      verticalAlign: 'middle',
                    }}
                  >
                    {charge.name}
                  </td>

                  {charge.values.map((value, i) => (
                    <td
                      key={i}
                      style={{
                        padding: '15px 12px',
                        verticalAlign: 'middle',
                        lineHeight: '1.6',
                      }}
                    >
                      {value}
                    </td>
                  ))}

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* Calculator */}

        <div className="text-center mt-4">

          <a
            href="#calculator"
            style={{
              color: '#2878d7',
              textDecoration: 'none',
              fontSize: '16px',
            }}
          >
            Calculate your costs upfront using our brokerage calculator
          </a>

        </div>

      </div>
      <div className="container py-5">

  <h2 className="mb-4">
    Charges for account opening
  </h2>

  <div className="table-responsive">
    <table className="table table-bordered mb-0">

      <thead>
        <tr>
          <th
            style={{
              width: "60%",
              fontWeight: "500",
              fontSize: "13px",
              padding: "10px 12px",
            }}
          >
            Type of account
          </th>

          <th
            style={{
              fontWeight: "500",
              fontSize: "13px",
              padding: "10px 12px",
            }}
          >
            Charges
          </th>
        </tr>
      </thead>

      <tbody>

        {/* Individual account */}
        <tr>
          <td
            style={{
              fontSize: "13px",
              color: "#24496d",
              padding: "10px 12px",
            }}
          >
            Individual account
          </td>

          <td
            style={{
              fontSize: "13px",
              color: "#24496d",
              padding: "10px 12px",
            }}
          >
            <span
              style={{
                backgroundColor: "#4caf50",
                color: "#fff",
                padding: "3px 8px",
                fontSize: "10px",
                fontWeight: "600",
              }}
            >
              FREE
            </span>
          </td>
        </tr>

        {/* Minor account */}
        <tr style={{ backgroundColor: "#fafafa" }}>
          <td
            style={{
              fontSize: "13px",
              color: "#24496d",
              padding: "10px 12px",
            }}
          >
            Minor account
          </td>

          <td
            style={{
              fontSize: "13px",
              color: "#24496d",
              padding: "10px 12px",
            }}
          >
            <span
              style={{
                backgroundColor: "#4caf50",
                color: "#fff",
                padding: "3px 8px",
                fontSize: "10px",
                fontWeight: "600",
              }}
            >
              FREE
            </span>
          </td>
        </tr>

        {/* NRI account */}
        <tr>
          <td
            style={{
              fontSize: "13px",
              color: "#24496d",
              padding: "10px 12px",
            }}
          >
            NRI account
          </td>

          <td
            style={{
              fontSize: "13px",
              color: "#24496d",
              padding: "10px 12px",
            }}
          >
            ₹ 500
          </td>
        </tr>

        {/* HUF account */}
        <tr style={{ backgroundColor: "#fafafa" }}>
          <td
            style={{
              fontSize: "13px",
              color: "#24496d",
              padding: "10px 12px",
            }}
          >
            HUF account
          </td>

          <td
            style={{
              fontSize: "13px",
              color: "#24496d",
              padding: "10px 12px",
            }}
          >
            <span
              style={{
                backgroundColor: "#4caf50",
                color: "#fff",
                padding: "3px 8px",
                fontSize: "10px",
                fontWeight: "600",
              }}
            >
              FREE
            </span>{" "}
            (online) / ₹ 500 (offline)
          </td>
        </tr>

        {/* Partnership */}
        <tr>
          <td
            style={{
              fontSize: "13px",
              color: "#24496d",
              padding: "10px 12px",
            }}
          >
            Partnership, LLP, and Corporate accounts (offline only)
          </td>

          <td
            style={{
              fontSize: "13px",
              color: "#24496d",
              padding: "10px 12px",
            }}
          >
            ₹ 500
          </td>
        </tr>

      </tbody>

    </table>
  </div>

</div>


    </div>
  );
}

export default Hero;
