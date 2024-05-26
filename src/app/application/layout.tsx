// src/app/layout.tsx

'use client';

import Header from './Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
