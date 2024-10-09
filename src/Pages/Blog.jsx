import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlog } from '../actions/actions';
import HashLoader from 'react-spinners/HashLoader';
import { Link } from 'react-router-dom';

export default function Blog() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const { blogData, loading, error } = useSelector((state) => state.blog);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = blogData.slice(firstPostIndex, lastPostIndex);
  const totalPages = Math.ceil(blogData.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Blog Posts</h1>
      <div className='space-y-4'>
        {currentPosts.map((post) => (
          <div key={post.id} className='p-4 border rounded shadow'>
            <Link to={`/blogs/${post.id}`}>
              <h2 className='text-xl font-semibold'>{post.title}</h2>
              <p>{post.body.substring(0, 100)}...</p>
            </Link>
          </div>
        ))}
      </div>

      <div className='mt-4 flex justify-center'>
        {Array.from({ length: totalPages }, (_, index) => (
          <Link key={index + 1} to={`?page=${index + 1}`}>
            <button
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-4 py-2 border rounded ${
                currentPage === index + 1 ? 'bg-cyan-500 text-white' : 'bg-white text-cyan-500'
              }`}
            >
              {index + 1}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
