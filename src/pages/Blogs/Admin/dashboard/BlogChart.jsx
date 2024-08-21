import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatdate } from '../../../../Utilities/dateformat.js';

// Assuming the blogs prop is an array of blog objects with a date and commentCount field
const formatData = (blogs) => {
    
  return blogs.map(blog => ({
    name: formatdate(blog.createdAt), // Use the date or another field as the X-axis label
    rating: blog.rating|| 0, // Use commentCount or another metric as the data value
    pv: blog.pageViews || 0, // Example for an additional data key, use if available
    amt: blog.amt || 0, // Example for an additional data key, use if available
  }));

};

const BlogChart = ({ blogs }) => {
  const data = formatData(blogs);
  console.log(blogs);
  return (
    <div className="p-6 bg-bgPrimary rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Blogs Chart</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="rating" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BlogChart;
