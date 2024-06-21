import React from 'react';
import { FaAngleRight } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = ({ className }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean); // Split and filter out empty segments

  return (
    <p className={`flex items-center justify-center text-white text-[23px] font-bold leading-[30px] font-CU w-full capitalize ${className}`}>
      <Link to="/" className="hover:text-[#DCCA87]">Home</Link>
      {pathSegments.map((segment, index) => {
        // Create the path for the current segment
        const path = `/${pathSegments.slice(0, index + 1).join("/")}`;

        // Capitalize the segment
        const segmentName = segment.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

        return (
          <React.Fragment key={path}>
            <FaAngleRight className='text-xxl mt-1 mx-2' />
            {index === pathSegments.length - 1 ? (
              <span>{segmentName}</span>
            ) : (
              <Link to={path} className="hover:text-[#DCCA87]">{segmentName}</Link>
            )}
          </React.Fragment>
        );
      })}
    </p>
  );
};

export default Breadcrumb;
