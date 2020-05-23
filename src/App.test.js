import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import App from './App';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

test('checks title bar with title-text', () => {
  const store = mockStore({ user: {} });
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = getByText(/mob gallery/i);
  expect(linkElement).toBeInTheDocument();
});
