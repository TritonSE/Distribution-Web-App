import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import CreateAgencyBtn from "../src/components/CreateAgencyBtn/CreateAgencyBtn";

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe('CreateAgencyBtn', () => {
    it('Redirects to correct URL on click', () => {
      const { getByRole } = render(
        <MemoryRouter>
          <CreateAgencyBtn />
        </MemoryRouter>,
      );
  
      fireEvent.click(getByRole('button'));
      expect(mockHistoryPush).toHaveBeenCalledWith('/create-agency');
    });
  });