import React from 'react';

const Container = props => {
  if (!props.loaded) return <div>Loading...</div>;

  return (
    <img style={{ width: '135vh', height: '100vh' }} src={require('../analytics.png')}/>
  );
};

export default Container;
