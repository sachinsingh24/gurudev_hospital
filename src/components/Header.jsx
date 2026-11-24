import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { site } from '../config/site.js';
import { specialities } from '../data/specialities.js';
import { treatments } from '../data/treatments.js';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';
import Illustration from './Illustration.jsx';

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/specialities', label: 'Specialities', children: specialities.map((s) => ({ to: `/specialities/${s.slug}`, label: s.name, slug: s.slug })) },
  { to: '/treatments', label: 'Treatments', children: treatments.map((t) => ({ to: `/treatments/${t.slug}`, label: t.name, slug: t.slug })) },
  { to: '/doctors', label: 'Doctors' },
  { to: '/reviews', label: 'Reviews', desktop: false }, // phone menu only (kept off the desktop bar)
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const [drawerTop, setDrawerTop] = useState(0);
  const [menu, setMenu] = useState(null); // open desktop dropdown (item.to) or null
  const suppressHover = useRef(false); // after a click, don't re-open on hover until the pointer leaves
  const headerRef = useRef(null);
  const { pathname } = useLocation();

  // Desktop dropdowns are state-driven (not CSS :hover/:focus-within) so they close reliably after a click —
  // otherwise the clicked link keeps focus and the pointer still hovers, leaving the menu open on the new page.
  const closeMenu = useCallback((e) => {
    setMenu(null);
    suppressHover.current = true;
    e?.currentTarget?.blur?.();
  }, []);

  useEffect(() => {
    setMenu(null);
  }, [pathname]);

  useEffect(() => {
    if (!menu) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenu(null);
        suppressHover.current = true;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menu]);

  // The drawer is position:fixed OUTSIDE <header> (the header's backdrop-filter would otherwise become its
  // containing block and clip it). It starts exactly at the header's bottom edge, which differs depending on
  // whether the top bar is still visible (page top) or scrolled away (sticky header only).
  const measure = useCallback(() => {
    if (headerRef.current) setDrawerTop(Math.max(0, Math.round(headerRef.current.getBoundingClientRect().bottom)));
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    if (typeof document === 'undefined') return undefined;
    document.body.classList.toggle('no-scroll', open);
    if (!open) {
      setOpenGroup(null); // reopen with all sub-menus collapsed
      return undefined;
    }
    measure();
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => {
      if (window.matchMedia('(min-width: 1100px)').matches) setOpen(false);
      else measure();
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      document.body.classList.remove('no-scroll');
    };
  }, [open, measure]);

  return (
    <>
      <div className="topbar" role="region" aria-label="Hospital quick information">
        <div className="container topbar__inner">
          <span className="topbar__item">
            <span className="pulse-dot" aria-hidden="true" />
            {/* One flex item (the parent's flex gap would otherwise split "24" and "×7") */}
            <span>
              Open 24<span className="topbar__long">{' hours · 7 days'}</span><span className="topbar__short">×7</span>
            </span>
          </span>
          <span className="topbar__item topbar__addr">
            <Icon name="pin" size={15} /> Yadav Nagar Road, Shirgaon, Badlapur East 421503
          </span>
          <a className="topbar__item topbar__phone" href={site.phone.tel}>
            <Icon name="phone" size={15} />
            <span>
              <span className="topbar__long">Emergency: </span>
              {site.phone.display}
            </span>
          </a>
        </div>
      </div>
      <header className="header" ref={headerRef}>
        <div className="container header__inner">
          <Link to="/" className="header__logo" aria-label={`${site.name} home`}>
            <Logo />
          </Link>

          <nav className="nav" aria-label="Main">
            <ul className="nav__list">
              {NAV.filter((item) => item.desktop !== false).map((item) => {
                const hasMenu = Boolean(item.children);
                const isOpen = hasMenu && menu === item.to;
                const menuProps = hasMenu
                  ? {
                      onMouseEnter: () => {
                        if (!suppressHover.current) setMenu(item.to);
                      },
                      onMouseLeave: () => {
                        suppressHover.current = false;
                        setMenu((m) => (m === item.to ? null : m));
                      },
                      onFocus: (e) => {
                        // keyboard users: open when focus moves into this item (not on mouse clicks)
                        let keyboard = true;
                        try {
                          keyboard = e.target.matches(':focus-visible');
                        } catch {
                          /* older browsers without :focus-visible */
                        }
                        if (keyboard) setMenu(item.to);
                      },
                      onBlur: (e) => {
                        if (!e.currentTarget.contains(e.relatedTarget)) setMenu((m) => (m === item.to ? null : m));
                      },
                    }
                  : {};
                return (
                <li
                  key={item.to}
                  className={`nav__item${hasMenu ? ' nav__item--has-menu' : ''}${isOpen ? ' nav__item--open' : ''}`}
                  {...menuProps}
                >
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className="nav__link"
                    aria-haspopup={hasMenu ? 'true' : undefined}
                    aria-expanded={hasMenu ? isOpen : undefined}
                    onClick={closeMenu}
                  >
                    {item.label}
                    {hasMenu ? <Icon name="chevronDown" size={14} /> : null}
                  </NavLink>
                  {hasMenu ? (
                    <div className="mega">
                      <ul className="mega__grid">
                        {item.children.map((c) => (
                          <li key={c.to}>
                            <Link to={c.to} className="mega__link" onClick={closeMenu} tabIndex={isOpen ? 0 : -1}>
                              <Illustration slug={c.slug} size={36} className="mega__illus" />
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
                );
              })}
            </ul>
          </nav>

          <div className="header__actions">
            <a href={site.phone.tel} className="btn btn--emergency btn--sm header__call" aria-label={`Call ${site.phone.display}`}>
              <Icon name="phone" size={16} /> <span>{site.phone.display}</span>
            </a>
            <Link to="/book-appointment" className="btn btn--primary btn--sm header__book">
              Book Appointment
            </Link>
            <button
              type="button"
              className="menu-btn"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <Icon name={open ? 'x' : 'menu'} size={24} />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`drawer${open ? ' drawer--open' : ''}`}
        hidden={!open}
        style={drawerTop ? { top: `${drawerTop}px` } : undefined}
      >
          <nav aria-label="Mobile">
            <ul className="drawer__list">
              {NAV.map((item) =>
                item.children ? (
                  <li key={item.to}>
                    <button
                      type="button"
                      className="drawer__link drawer__toggle"
                      aria-expanded={openGroup === item.to}
                      onClick={() => setOpenGroup((g) => (g === item.to ? null : item.to))}
                    >
                      {item.label} <Icon name="chevronDown" size={18} />
                    </button>
                    {openGroup === item.to ? (
                      <ul className="drawer__sub">
                        <li>
                          <Link to={item.to} className="drawer__sublink drawer__sublink--all">
                            <span className="drawer__all-icon"><Icon name="arrowRight" size={16} /></span>
                            All {item.label.toLowerCase()}
                          </Link>
                        </li>
                        {item.children.map((c) => (
                          <li key={c.to}>
                            <Link to={c.to} className="drawer__sublink">
                              <Illustration slug={c.slug} size={30} className="drawer__illus" />
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ) : (
                  <li key={item.to}><NavLink to={item.to} end={item.end} className="drawer__link">{item.label}</NavLink></li>
                ),
              )}
              <li><NavLink to="/facilities" className="drawer__link">Facilities</NavLink></li>
              <li><NavLink to="/patient-rooms-services" className="drawer__link">Patient rooms &amp; services</NavLink></li>
              <li><NavLink to="/health-guides" className="drawer__link">Health guides</NavLink></li>
              <li><NavLink to="/photos" className="drawer__link">Photos</NavLink></li>
              <li><NavLink to="/areas-we-serve" className="drawer__link">Areas we serve</NavLink></li>
            </ul>
            <div className="drawer__cta">
              <a href={site.phone.tel} className="btn btn--emergency btn--block"><Icon name="phone" size={18} /> Call {site.phone.display}</a>
              <Link to="/book-appointment" className="btn btn--primary btn--block">Book Appointment</Link>
            </div>
          </nav>
      </div>
    </>
  );
}
