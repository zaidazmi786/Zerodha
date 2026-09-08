import React from 'react';

function Hero() {
  return (
    <div className="container py-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1
          className="mb-0"
          style={{
            color: "#2f4d6b",
            fontSize: "36px",
            fontWeight: "600"
          }}
        >
          Support Portal
        </h1>

        <button
          className="btn text-white"
          style={{
            backgroundColor: "#377dc8",
            borderRadius: "3px",
            padding: "10px 17px"
          }}
        >
          My tickets
        </button>
      </div>

      {/* Search Box */}
      <div
        className="d-flex align-items-center bg-white"
        style={{
          height: "60px",
          border: "1px solid #d7e0e8",
          borderRadius: "4px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.08)",
          padding: "0 22px"
        }}
      >
        {/* Search Icon */}
        <span
          style={{
            fontSize: "20px",
            color: "#31536f",
            marginRight: "15px"
          }}
        >
          🔍
        </span>

        {/* Search Input */}
        <input
          type="text"
          className="form-control border-0 shadow-none"
          placeholder="Eg: How do I open my account, How do i activate F&O..."
          style={{
            fontSize: "17px"
          }}
        />
      </div>

    </div>
  );
}

export default Hero;