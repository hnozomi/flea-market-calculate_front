import { NextPage } from 'next';
import { memo } from 'react';

import { MainContent } from './components/MainContent';
import { useMainPageHook } from './hooks/useMainPageHook';

const MainPage: NextPage = memo(() => {
  return <MainContent {...useMainPageHook()} />;
});

MainPage.displayName = 'MainPage';

export default MainPage;
