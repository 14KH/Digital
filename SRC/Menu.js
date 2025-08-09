import React, { useState } from 'react';

function HamburgerMenu({ onAdd }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="hamburger-btn" onClick={() => setOpen(!open)}>
        <div className={`bar ${open ? 'open' : ''}`}></div>
        <div className={`bar ${open ? 'open' : ''}`}></div>
        <div className={`bar ${open ? 'open' : ''}`}></div>
      </button>

      {open && (
        <nav className="hamburger-menu">
          <ul>
            <li><button onClick={() => onAdd('page')}>إضافة صفحة جديدة</button></li>
            <li><button onClick={() => onAdd('section')}>إضافة قسم جديد</button></li>
            <li><button onClick={() => onAdd('image')}>إضافة صورة جديدة</button></li>
            <li><button onClick={() => onAdd('video')}>إضافة فيديو جديد</button></li>
            <li><button onClick={() => onAdd('text')}>إضافة نص جديد</button></li>
            <li><button onClick={() => onAdd('ad')}>إضافة إعلان جديد</button></li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default HamburgerMenu;
