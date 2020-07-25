import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import CookiePopup from '../../components/cookie-popup';

describe('CookiePopup component', () => {
  it('shows up when user consent is not provided', () => {
    render(<CookiePopup />);

    expect(
      screen.queryByText(/by continuing to browse this site/i)
    ).toBeVisible();
  });

  it('disappears when user consent is given', async () => {
    render(<CookiePopup />);

    fireEvent.click(screen.getByText('Accept'));

    await waitFor(() => {
      expect(
        screen.queryByText(/by continuing to browse this site/i)
      ).toBeNull();
    });
  });

  it('does not appear when user consent was provided earlier', async () => {
    render(<CookiePopup />);

    expect(screen.queryByText(/by continuing to browse this site/i)).toBeNull();
  });
});
