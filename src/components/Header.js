import React from 'react';

function Header() {
  return (
    <div className="header">
      header
      <style jsx>{`
        .header {
          background: linear-gradient(to right ,#541f61, #009E49); /* Blue to Green gradient */
          color: #fff;
          padding: 10px;
          text-align: center;
          height: 60px;
        }
      `}</style>
    </div>
  );
}

export default Header;
