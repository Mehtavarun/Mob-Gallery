import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import SearchAndSortForm from '../searchAndSortForm';

describe('Search and sort form', () => {
  it('search button renders', () => {
    const order = 'asc';
    const handleOrder = () => {};
    const handleSearchText = () => {};
    const { getByTestId } = render(
      <SearchAndSortForm
        order={order}
        handleOrder={handleOrder}
        handleSearchText={handleSearchText}
      ></SearchAndSortForm>
    );
    expect(getByTestId('searchButton')).toHaveTextContent('Search');
  });

  it('dropdown menu button renders', () => {
    const order = 'asc';
    const handleOrder = () => {};
    const handleSearchText = () => {};
    const { getByTestId } = render(
      <SearchAndSortForm
        order={order}
        handleOrder={handleOrder}
        handleSearchText={handleSearchText}
      ></SearchAndSortForm>
    );
    expect(getByTestId('ascBtn')).toHaveTextContent('Low to High');
    expect(getByTestId('menuBtn')).toHaveTextContent('Low to High');
    expect(getByTestId('descBtn')).toHaveTextContent('High to Low');
  });
});
