import React from 'react';

function Menu({ onAdd }) {
  return (
    <nav>
      <ul>
        <li><button onClick={() => onAdd('page')}>إضافة صفحة جديدة</button></li>
        <li><button onClick={() => onAdd('section')}>إضافة قسم جديد</button></li>
        <li><button onClick={() => onAdd('image')}>إضافة صورة جديدة</button></li>
        <li><button onClick={() => onAdd('video')}>إضافة فيديو جديد</button></li>
        <li><button onClick={() => onAdd('text')}>إضافة نص جديد</button></li>
        <li><button onClick={() => onAdd('ad')}>إضافة إعلان جديد</button></li>
      </ul>
    </nav>
  );
}

export default Menu;
