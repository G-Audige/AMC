import React from 'react';

export default function UpperHeader(props) {
  return (
    <div className={props.className}>
      <div className="logo">
        <h3 className="logo1">AMC</h3>
        <p className="logo2">Theaters</p>
      </div>
      <p className="p-header">See a Movie</p>
      <p className="p-header">Find a Theater</p>
      <p className="p-header">Food & Drinks</p>
      <p className="p-header">More</p>
      <div className="separator"></div>
      <div className="search">
        <input placeholder="Search" />
        <svg
          className="lupa"
          width="18"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 7a5 5 0 1110 0A5 5 0 012 7zm5-7a7 7 0 104.192 12.606l5.1 5.101a1 1 0 101.415-1.414l-5.1-5.1A7 7 0 007 0z"
            fill="#004E36"
          ></path>
        </svg>
      </div>
      <div className="show-times">
        <img
          className="ticket-img"
          src="data:image/png;base64,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"
          alt="ticket-img"
        />
        <p className="p-header">Showtimes</p>
      </div>
      <div className="log">
        <img
          className="user-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcdVYzHZqg7FoM_ZQbNQ1we5zrCI1v43LD4Q&usqp=CAU"
          alt="logo"
        />
        <p className="p-header">
          <p className="stubs">AMC STUBS</p> <strong>Sign In</strong> OR{' '}
          <strong>Join Now</strong>
        </p>
      </div>
    </div>
  );
}
