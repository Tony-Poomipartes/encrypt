import React, { useState } from 'react';
import './header.scss';

type AppHeaderProps = {};

const AppHeader: React.FC<AppHeaderProps> = (): JSX.Element => {
  return (
    <div id="title">
      <h1>ENCRYPT</h1>
    </div>
  );
};

export default AppHeader;
