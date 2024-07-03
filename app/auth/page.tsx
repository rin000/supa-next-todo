import AuthUI from '@/components/AuthUI';
import { sleep } from '@/lib/utils';
import React from 'react';

const page = async () => {
  return (
    <div>
      <AuthUI />
    </div>
  );
};

export default page;
