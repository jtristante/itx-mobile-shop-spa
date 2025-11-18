import { Header } from '@/sharedComponents/header/Header.jsx';

export const MainLayout = ({ children }) => {
  return (
    <div className={'appContanier'}>
      <Header />
      <main>{children}</main>
    </div>
  );
};
