import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import AppRoutes from './Routes/AppRoutes';
import DocumentHead from './components/layout/DocumentHead';

export async function render(url) {
  const appHtml = renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );

  return appHtml;
}
