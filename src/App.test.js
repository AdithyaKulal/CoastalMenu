import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero heading', () => {
  render(<App />);
  // Assert the main hero heading exists in the rendered app
  const heading = screen.getByText(/Discover Your Next Favorite Dish/i);
  expect(heading).toBeInTheDocument();
});
