import React, { useEffect, useState } from 'react';
import AboutBanner from '../layer/AboutBanner';
import BlogInside from '../BlogInside';

const BlogsDetail = () => {
  let [breadcrumbText, setBreadcrumbText] = useState('With-Sidebar');

  useEffect(() => {
    
    let newText = 'Single-Column';
    setBreadcrumbText(newText);
  }, []);

  return (
    <div className='bg-home-bg'>
      <AboutBanner text={`Our Blogs - ${breadcrumbText}`} />
      <BlogInside/>
    </div>
  );
}

export default BlogsDetail;
