import React from "react";

function CreateTicket() {
  const categories = [
    {
      icon: "⊕",
      title: "Account Opening",
    },
    {
      icon: "◎",
      title: "Your Zerodha Account",
    },
    {
      icon: "◉",
      title: "Kite",
    },
    {
      icon: "₹",
      title: "Funds",
    },
    {
      icon: "◎",
      title: "Console",
    },
    {
      icon: "◔",
      title: "Coin",
    },
  ];

  return (
    <div className="container-fluid py-4">
      <div className="row justify-content-center">

        {/* LEFT SIDE */}
        <div className="col-lg-8">

          {categories.map((item, index) => (
            <div
              className="card mb-4 border"
              key={index}
              style={{
                borderRadius: "0",
                minHeight: "62px",
              }}
            >
              <div className="d-flex align-items-center">

                {/* Icon */}
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#f5faff",
                    color: "#2878d8",
                    fontSize: "25px",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <div
                  className="flex-grow-1 px-3"
                  style={{
                    fontSize: "18px",
                    color: "#222",
                  }}
                >
                  {item.title}
                </div>

                {/* Arrow */}
                <div
                  className="px-4"
                  style={{
                    color: "#2878d8",
                    fontSize: "22px",
                  }}
                >
                 ⌄
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-4">

          {/* Notice Box */}
          <div
            className="mb-4"
            style={{
              backgroundColor: "#fff3e3",
              borderLeft: "8px solid #ff9900",
              padding: "18px 20px",
            }}
          >
            <ul
              className="mb-0 ps-3"
              style={{
                fontSize: "16px",
                lineHeight: "1.7",
              }}
            >
              <li className="mb-2">
                <a href="#" className="text-primary">
                  Maintenance activity of CDSL EDIS facility
                </a>
              </li>

              <li>
                <a href="#" className="text-primary">
                  Latest Intraday leverages and Square-off timings
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="border">

            <div
              className="px-3 py-3"
              style={{
                backgroundColor: "#f5f5f5",
                fontSize: "17px",
                color: "#222",
              }}
            >
              Quick links
            </div>

            <div className="list-group list-group-flush">

              <a
                href="#"
                className="list-group-item list-group-item-action py-3"
              >
                1. Track account opening
              </a>

              <a
                href="#"
                className="list-group-item list-group-item-action py-3"
              >
                2. Track segment activation
              </a>

              <a
                href="#"
                className="list-group-item list-group-item-action py-3"
              >
                3. Intraday margins
              </a>

              <a
                href="#"
                className="list-group-item list-group-item-action py-3"
              >
                4. Kite user manual
              </a>

              <a
                href="#"
                className="list-group-item list-group-item-action py-3"
              >
                5. Learn how to create a ticket
              </a>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default CreateTicket;