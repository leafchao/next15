
import React from 'react';
import { Button } from 'antd';

function Page() {
  console.log('Page render...')
  return (
    <div className=' flex justify-center items-center h-screen'>
      <Button>退出</Button>
    </div>
  );
};

export default Page;