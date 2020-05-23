import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import MobileSummary from './mobileSummary';
import { MobileProvider } from './context';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

afterEach(cleanup);
describe('test mobile summary test', () => {
  it('Text in state is changed when button clicked', () => {
    const store = mockStore({ cart: { items: [] } });
    const mobile = {
      id: 1,
      image: 'apple-iphone-xr.jpeg',
      name: 'mobile-name',
      currency: '$',
      quantity: 1,
      specifications: []
    };
    const { getByText } = render(
      <Provider store={store}>
        <MobileProvider value={mobile}>
          <MobileSummary />
        </MobileProvider>
      </Provider>
    );
    expect(getByText(/Add to Cart/i)).toBeInTheDocument();
    fireEvent.click(getByText('Add to Cart'));
    expect(getByText(/Added to Cart/i)).toBeInTheDocument();
  });
  it('correct values get renders in mobile summary page', () => {
    const store = mockStore({ cart: { items: [] } });
    const mobile = {
      id: 1,
      image: 'apple-iphone-xr.jpeg',
      name: 'mobile-name',
      currency: '$',
      quantity: 1,
      price: 100,
      specifications: []
    };
    const { getByText, queryByText } = render(
      <Provider store={store}>
        <MobileProvider value={mobile}>
          <MobileSummary />
        </MobileProvider>
      </Provider>
    );
    expect(getByText(/mobile-name/i)).toBeInTheDocument();
    expect(getByText(/\$100/i)).toBeInTheDocument();
    expect(queryByText('i, Added to Cart')).not.toBeInTheDocument();
  });
});
