import React from "react";

export const Footer = () => {
  return (
    <footer className="footer footer-center bg-secondary-content p-4 text-base-content mt-auto dark:bg-base-200">
      <div>
        <p className="text-base-content">
          Copyright © {new Date().getFullYear()} - All right reserved by Code by
          JD
        </p>
      </div>
    </footer>
  );
};
