import React from 'react';
import SidebarDetail from '../reusable/SidebarDetail';

const News = () => {
  return (
    <div className="min-h-screen bg-white flex">
     

      {/* Main Content */}
      <div className="flex-1 p-6 ml-32">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4 ">
          Home <span className="mx-1">•</span> News
        </div>

        {/* Page Title */}
        <h1 className="text-2xl font-bold text-blue-900 mb-6">News</h1>

        {/* Card for Sort + New Post */}
        <div className="border rounded-md p-4 flex justify-between items-center mb-4">
          <div className="text-gray-600 font-medium">Sort by</div>
          <select className="border rounded px-4 py-2 text-sm focus:outline-none focus:ring">
            <option>New post</option>
            <option>Old post</option>
          </select>
        </div>

        {/* Placeholder for News List */}
        <div className="text-gray-400 italic text-sm">
          No news available at the moment.
        </div>
      </div>

       {/* Sidebar */}
      <div className="w-full xl:w-80 mt-28">
        <SidebarDetail />
      </div>
    </div>
  );
};

export default News;
