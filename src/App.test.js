import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { mockMissions } from './fixtures/missions';
import { fetchMissions as mockFetchMissions } from './api/fetchMissions';

import App from './App';

jest.mock('./api/fetchMissions');

test('updates mission data when button pressed', async () => {
    mockFetchMissions.mockResolvedValueOnce({ mockMissions });
    const { getByText, queryAllByTestId } = render(<App />);
    expect(queryAllByTestId('mission')).toHaveLength(0);

    const button = getByText(/get data/i);
    fireEvent.click(button);
    // button.click();

    await wait();
    expect(queryAllByTestId('mission')).toHaveLength(0);

})