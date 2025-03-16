import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders subtext', () => {
  render(<App />);
  const linkElement = screen.getByText(/Lorem ipsum dolor sit amet/i);
  expect(linkElement).toBeInTheDocument();
});

test('deposit button', () => {
  render(<App/>);
  const depositButton = screen.getByTestId('DepositButtonMenu');
  fireEvent.click(depositButton);
  const linkElement = screen.getByText(/Deposit to Your Account/i);
  expect(linkElement).toBeInTheDocument();
});

test('withdraw button', () => {
  render(<App/>);
  const withdrawButton = screen.getByTestId('WithdrawButtonMenu');
  fireEvent.click(withdrawButton);
  const linkElement = screen.getByText(/Withdraw from Your Account/i);
  expect(linkElement).toBeInTheDocument();
});

test('print button', () => {
  render(<App/>);
  const printButton = screen.getByTestId('PrintButtonMenu');
  fireEvent.click(printButton);
  const linkElement = screen.getByText(/Your Account Statement/i);
  expect(linkElement).toBeInTheDocument();
});

test('exit button', () => {
  render(<App/>);
  const exitButton = screen.getByTestId('ExitButtonMenu');
  fireEvent.click(exitButton);
  const linkElement = screen.getByText(/Have a nice day/i);
  expect(linkElement).toBeInTheDocument();
});