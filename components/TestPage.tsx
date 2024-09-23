// pages/testpage.tsx
import React from 'react';

const TestPage: React.FC = () => {
  return (
    <div style={{ height: '100vh', overflowY: 'scroll' }} className="custom-scrollbar">
      <h1 style={{ textAlign: 'center', padding: '20px' }}>Scrollable Test Page</h1>
      <div style={{ padding: '20px' }}>
        {/* Generate a long list of content */}
        {[...Array(100)].map((_, index) => (
          <p key={index}>
            This is item #{index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        ))}
      </div>
    </div>
  );
};

export default TestPage;
