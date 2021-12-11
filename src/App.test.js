import { render, screen } from '@testing-library/react';
import Card from './components/HowSection/Card';

test('renders Card if data is available', () => {
  render(<Card />);
  const linkElement = screen.getByTestId('card-element');
  expect(linkElement).toBeInTheDocument();
});


