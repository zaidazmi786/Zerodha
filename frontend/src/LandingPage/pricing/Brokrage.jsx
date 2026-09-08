import React from 'react'
function Brokrage() {
    return (
        <div className="container py-4 py-md-5 px-3">

            {/* Heading */}
            <h2
                className="mb-4"
                style={{
                    color: "#183b5d",
                    fontSize: "clamp(18px, 4vw, 21px)",
                    fontWeight: "400",
                }}
            >
                Demat AMC (Annual Maintenance Charge)
            </h2>

            {/* Free first year */}
            <div
                className="mb-4"
                style={{
                    borderLeft: "3px solid #2878d7",
                    backgroundColor: "#f8f9fa",
                    padding: "8px 12px",
                    width: "fit-content",
                    color: "#24496d",
                    fontSize: "13px",
                }}
            >
                Free for first year*
            </div>

            {/* Description */}
            <p
                style={{
                    fontSize: "13px",
                    color: "#24496d",
                    marginBottom: "12px",
                }}
            >
                From second year onwards, for BSDA accounts:
            </p>

            {/* AMC Table */}
            <div className="table-responsive">
                <table
                    className="table table-bordered mb-0"
                    style={{
                        fontSize: "13px",
                        color: "#24496d",
                        minWidth: "480px",
                    }}
                >
                    <thead>
                        <tr>
                            <th
                                style={{
                                    width: "30%",
                                    fontWeight: "500",
                                    color: "#111",
                                    padding: "10px 12px",
                                }}
                            >
                                Value of holdings
                            </th>

                            <th
                                style={{
                                    fontWeight: "500",
                                    color: "#111",
                                    padding: "10px 12px",
                                }}
                            >
                                AMC
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {/* Row 1 */}
                        <tr>
                            <td style={{ padding: "10px 12px" }}>
                                Up to ₹4 lakh
                            </td>

                            <td style={{ padding: "10px 12px" }}>
                                <span
                                    style={{
                                        backgroundColor: "#4caf50",
                                        color: "#fff",
                                        padding: "3px 8px",
                                        fontSize: "11px",
                                        fontWeight: "600",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    FREE
                                </span>
                            </td>
                        </tr>

                        {/* Row 2 */}
                        <tr style={{ backgroundColor: "#fafafa" }}>
                            <td style={{ padding: "10px 12px" }}>
                                ₹4 lakh – ₹10 lakh
                            </td>

                            <td style={{ padding: "10px 12px" }}>
                                ₹100 per year + 18% GST, charged quarterly
                            </td>
                        </tr>

                        {/* Row 3 */}
                        <tr>
                            <td style={{ padding: "10px 12px" }}>
                                Above ₹10 lakh
                            </td>

                            <td style={{ padding: "10px 12px" }}>
                                ₹300 per year + 18% GST, charged quarterly
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

            {/* Notes */}

            <p
                className="mt-3 mb-3"
                style={{
                    fontSize: "12px",
                    color: "#24496d",
                }}
            >
                For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of
                holdings value, charged quarterly.
            </p>

            <p
                style={{
                    fontSize: "12px",
                    color: "#24496d",
                }}
            >
                To learn more about BSDA,{" "}
                <a
                    href="#bsda"
                    style={{
                        color: "#2878d7",
                        textDecoration: "none",
                    }}
                >
                    click here
                </a>
                . To learn more about AMC,{" "}
                <a
                    href="#amc"
                    style={{
                        color: "#2878d7",
                        textDecoration: "none",
                    }}
                >
                    click here
                </a>
                .
            </p>

            <p
                style={{
                    fontSize: "12px",
                    color: "#24496d",
                }}
            >
                *Resident individual accounts only.
            </p>

        </div>

    );
}

export default Brokrage;