'use client';
import useSticky from '@/hooks/use-sticky';

const HeaderWrapper = ({ children}: {
  children: React.ReactNode;
}) => {
  const { headerSticky } = useSticky();
  return (
    <header className={`main-header header-five ${headerSticky ? 'fixed-header' : ''}`}>
      {children}
    </header>
  );
};

export default HeaderWrapper;