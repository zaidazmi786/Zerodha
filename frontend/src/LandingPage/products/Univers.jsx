import React from 'react';

const partners = [
  {
    name: 'Zerodha Fund House',
    desc: 'Our asset management venture that is creating simple and transparent index funds to help you save for your goals.',
  },
  {
    name: 'Sensibull',
    desc: 'Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.',
  },
  {
    name: 'Tijori',
    desc: 'Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.',
  },
  {
    name: 'Streak',
    desc: 'Systematic trading platform that allows you to create and backtest strategies without coding.',
  },
  {
    name: 'smallcase',
    desc: 'Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.',
  },
  {
    name: 'ditto',
    desc: 'Personalized advice on life and health insurance. No spam and no mis-selling.',
  },
];

function Universe() {
  return (
    <div className="container text-center py-5">
      <h1 className="mb-3">The Zerodha Universe</h1>
      <p className="text-muted mb-5">
        Extend your trading and investment experience even further with our partner platforms
      </p>

      <div className="row">
        {partners.map((p, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <h5>{p.name}</h5>
            <p className="text-muted small">{p.desc}</p>
          </div>
        ))}
      </div>

     
    </div>
  );
}

export default Universe;