import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import Routes from '../src/router/Routes';

export default store => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter>
        <Routes />
      </StaticRouter>
    </Provider>
  );


  return `
  <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Title</title>
      </head>
      <body>
      
      <div id="app">${content}</div>
    
      <script src="dist/bundle.js"></script>
      </body>
      </html>
  `;
};