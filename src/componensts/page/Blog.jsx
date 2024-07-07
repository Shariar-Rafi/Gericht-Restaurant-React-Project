import React, { useState, useEffect } from 'react';
import Newsletter from '../Newsletter';
import { Link } from 'react-router-dom';
import AboutBanner from '../layer/AboutBanner';
import LeftBlog from '../LeftBlog';
import Sidebar from '../Sidebar';
import BlogTwo from '../BlogTwo';

const Blog = () => {
  const [activeTab, setActiveTab] = useState('Multiple-Column');
  const [breadcrumbText, setBreadcrumbText] = useState('Multiple-Column');

  useEffect(() => {
    setBreadcrumbText(activeTab);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'Multiple-Column':
        return (
          <div className="flex justify-center gap-x-8 pt-16">
            <LeftBlog />
            <Sidebar />
          </div>
        );
      case 'Single-Column':
        return (
          <div className="flex justify-center gap-x-8 pt-16">
            <BlogTwo />
            <Sidebar />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-home-bg">
      <AboutBanner text={`Our Blogs ${breadcrumbText}`} />

      <div className="flex flex-col items-center">
        <ul className="flex gap-x-10 max-w-[500px] mt-10">
          {['Multiple-Column', 'Single-Column'].map((tab) => (
            <li
              key={tab}
              className={`text-base leading-7 font-normal ${activeTab === tab ? 'font-extrabold text-xl transition-all duration-150 text-[#DCCA87]' : 'text-[#aaa]'}`}
            >
              <Link to="#" onClick={() => setActiveTab(tab)}>{tab}</Link>
            </li>
          ))}
        </ul>
        {renderContent()}
      </div>

      <Newsletter />
    </div>
  );
};

export default Blog;
