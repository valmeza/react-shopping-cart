import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const query = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={query}>
      <App />
  </QueryClientProvider>,
  document.getElementById('root')
);

