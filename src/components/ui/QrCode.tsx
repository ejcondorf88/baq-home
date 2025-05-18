import React from "react";

const QRCode: React.FC = () => (
  <svg
    viewBox="0 0 200 200"
    className="w-40 h-40 mx-auto mb-4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="200" height="200" fill="white" />
    <g fill="black">
      {/* QR Code Pattern - This is a simplified representation */}
      <rect x="20" y="20" width="40" height="40" />
      <rect x="140" y="20" width="40" height="40" />
      <rect x="20" y="140" width="40" height="40" />
      <rect x="70" y="20" width="10" height="10" />
      <rect x="90" y="20" width="10" height="10" />
      <rect x="120" y="20" width="10" height="10" />
      <rect x="20" y="70" width="10" height="10" />
      <rect x="40" y="70" width="10" height="10" />
      <rect x="20" y="90" width="10" height="10" />
      <rect x="40" y="120" width="10" height="10" />
      <rect x="70" y="140" width="10" height="10" />
      <rect x="90" y="140" width="10" height="10" />
      <rect x="120" y="140" width="10" height="10" />
      <rect x="140" y="70" width="10" height="10" />
      <rect x="170" y="70" width="10" height="10" />
      <rect x="140" y="90" width="10" height="10" />
      <rect x="170" y="120" width="10" height="10" />
      <rect x="70" y="70" width="60" height="60" />
      <rect x="80" y="80" width="40" height="40" fill="white" />
      <rect x="90" y="90" width="20" height="20" />
    </g>
  </svg>
);

export default QRCode;
