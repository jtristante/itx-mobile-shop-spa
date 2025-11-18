import { Heading, Link, Text } from '@chakra-ui/react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import styles from './Header.module.scss';
import { HeaderBreadcrumb } from '@/sharedComponents/header/breadCrumb/HeaderBreadCrumb.jsx';

export const Header = () => {
  const cartCount = useSelector((state) => state.cart.numberOfItems);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLeft}>
        <Heading size="4xl" fontWeight="bold">
          <Link as={RouterLink} to="/home/" variant="unstyled">
            ITX Mobile Shop
          </Link>
        </Heading>
        <HeaderBreadcrumb />
      </div>
      <div className={styles.cartContainer}>
        <RiShoppingCartLine />
        <Text fontWeight="bold">{cartCount} </Text>
      </div>
    </header>
  );
};
