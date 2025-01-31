export default [
  { heading: 'Dashboard' },
  {
    title: 'Analytics',
    to: { name: 'root' },
    icon: { icon: 'tabler-chart-pie' }, 
  },
  {
    title: 'My Images',
    to: { name: 'my-images' },
    icon: { icon: 'tabler-photo' },
  },
  
  { heading: 'Orders & Commerce' },
  {
    title: 'My Orders',
    // to: { name: 'my-orders' },
    icon: { icon: 'tabler-shopping-cart' },
  },
  {
    title: 'Order History',
    // to: { name: 'order-history' },
    icon: { icon: 'tabler-history' },
  },
  
  { heading: 'User Management' },
  {
    title: 'Users',
    to: { name: 'users' },
    icon: { icon: 'tabler-users' },
  },
  
  { heading: 'Account' },
  {
    title: 'Profile',
    // to: { name: 'profile' },
    icon: { icon: 'tabler-user' },
  },
  {
    title: 'Settings',
    // to: { name: 'settings' },
    icon: { icon: 'tabler-settings' },
  },
]
