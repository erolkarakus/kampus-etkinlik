import { NavLink } from 'react-router-dom';

const menu = [
  { to: '/', label: 'Ana Sayfa' },
  { to: '/events', label: 'Etkinlikler' },
  { to: '/admin', label: 'Yönetim' },
  { to: '/login', label: 'Giriş' }
];

export default function Navigation() {
  return (
    <nav className="ana-menu">
      {menu.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          className={({ isActive }) => (isActive ? 'aktif' : '')}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}