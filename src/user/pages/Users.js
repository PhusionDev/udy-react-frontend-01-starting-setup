import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Jared Hodgkins',
      image:
        'https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?cs=srgb&dl=pexels-craig-mckay-842980.jpg&fm=jpg&_gl=1*1cqvoqi*_ga*MTYyODA2NjM3OC4xNjY0ODEwMDEx*_ga_8JE65Q40S6*MTY2NzU4MjMzOS40LjEuMTY2NzU4MjQxOS4wLjAuMA..',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
