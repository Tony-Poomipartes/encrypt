import React from 'react';
import { render } from '@testing-library/react';
import FloatingMenu from '../components/floatingMenu/FloatingMenu';

describe('FloatingMenu', () => {
  it('renders without errors', () => {
    render(<FloatingMenu />);
  });

});
