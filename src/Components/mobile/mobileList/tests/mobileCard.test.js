import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MobileCard from '../mobileCard';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureMockStore([thunk]);

describe('Mobile card tests', () => {
  const store = mockStore({ cart: { items: [] } });
  it('search button renders', () => {
    const mobile = {
      id: 1,
      name: 'iphone',
      price: 100,
      image: 'apple-iphone-xr.jpeg',
      currency: '$',
      specifications: [],
      quantity: 1
    };
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <MobileCard mobile={mobile}></MobileCard>
        </Provider>
      </BrowserRouter>
    );
    expect(getByText(/Add to Cart/i)).toBeInTheDocument();
    fireEvent.click(getByText('Add to Cart'));
    expect(getByText(/Added to Cart/i)).toBeInTheDocument();
  });
});
