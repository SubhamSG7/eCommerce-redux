import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlog } from '../actions/actions';
import HashLoader from 'react-spinners/HashLoader';
import { Link, useParams, useLocation } from 'react-router-dom';
import { setCurrentPage } from '../slices/blogSlice';

export default function Blog() {
  const dispatch = useDispatch();
  const location = useLocation();
  const postsPerPage = 10;
  const {currentPage, blogData, loading, error } = useSelector((state) => state.blog);
  

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get('page')) || 1; 
  dispatch(setCurrentPage(page));
  }, [location.search]);

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);


  
  if (loading) {
    return (
      <div className='h-[100vh] flex justify-center items-center'>
        <HashLoader
          color='green'
          loading={loading}
          size={150}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      </div>
    );
  }

  if (error) return <div>Error: {error}</div>;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = blogData.slice(firstPostIndex, lastPostIndex);
  const totalPages = Math.ceil(blogData.length / postsPerPage);

  const handlePageChange = (page) => {
   dispatch(setCurrentPage(page));
    window.history.pushState({}, '', `?page=${page}`); 
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Blog Posts</h1>
      <div className='space-y-4'>
        {currentPosts.map((post) => (
          <div key={post.id} className='p-4 border rounded shadow'>
            <Link to={`/blog/${post.id}`}>
              <h2 className='text-xl font-semibold'>{post.title}</h2>
              <p>{post.body.substring(0, 100)}...</p>
            </Link>
          </div>
        ))}
      </div>

      <div className='mt-4 flex justify-center'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-4 py-2 border rounded ${
              currentPage === index + 1 ? 'bg-cyan-500 text-white' : 'bg-white text-cyan-500'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
