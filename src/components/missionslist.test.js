import React from 'react';
import { render } from '@testing-library/react';
import MissionsList from './MissionsList';
import {mockMissions} from '../fixtures/missions';
test('renders component', () => {
  render(<MissionsList missions={[]} error="" />);
});
test('compnent renders with new mission data', () => {
  // arrange, act, assert
  // const container = render(<MissionsList missions={[]} error="" />);
  const { queryAllByTestId, rerender } = render(<MissionsList missions={[]} error="" />);
  // console.log(container);
  // const missionsArray = container.queryAllByTestId("mission");
  // const missionsArray = queryAllByTestId("mission");
  // expect(missionsArray).toHaveLength(0);
  // expect(missionsArray).toStrictEqual([]);
  expect(queryAllByTestId("mission")).toHaveLength(0);
  expect(queryAllByTestId("mission")).toStrictEqual([]);
  //rerender component with non-blank array
  rerender(<MissionsList missions={mockMissions} error="" />);
  expect(queryAllByTestId("mission")).toHaveLength(2);
})