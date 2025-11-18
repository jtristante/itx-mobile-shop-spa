import React from 'react';

import { Breadcrumb, Link } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export function HeaderBreadcrumb() {
  const location = useLocation();

  const segments = location.pathname
    .replace(/\/\d+/g, '')
    .split('/')
    .filter(Boolean)
    .map((seg) => capitalize(seg));

  const items = segments.map((part, index) => {
    const to = `${segments.slice(0, index + 1).join('/')}`;
    return {
      label: capitalize(part),
      to,
      isCurrent: index === segments.length - 1,
    };
  });

  return (
    <Breadcrumb.Root size="lg" separator="/">
      <Breadcrumb.List>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Breadcrumb.Item>
              {item.isCurrent ? (
                <Breadcrumb.CurrentLink>{item.label}</Breadcrumb.CurrentLink>
              ) : (
                <Breadcrumb.Link asChild>
                  <RouterLink to={item.to}>{item.label}</RouterLink>
                </Breadcrumb.Link>
              )}
            </Breadcrumb.Item>
            {index < items.length - 1 && <Breadcrumb.Separator />}
          </React.Fragment>
        ))}
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
}
