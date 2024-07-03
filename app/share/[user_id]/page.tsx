import React from 'react';

interface SharePageProps {
  params: { user_id: string };
  searchParams: {};
}

const page = (props: SharePageProps) => {
  const userId = props?.params?.user_id;
  console.log('userId', userId);

  return <div>share page</div>;
};

export default page;
