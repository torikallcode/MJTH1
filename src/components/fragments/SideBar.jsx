import React, { useState } from 'react';

const Sidebar = ({ isOpen, onSelect }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const menuItems = [
    {
      id: 'tauhid',
      label: 'Tauhid',
      children: [
        { id: 'introduction', label: 'Apa itu Tauhid?' },
      ],
    },
    {
      id: 'sholat',
      label: 'Sholat',
      children: [
        {
          id: 'rukunSholat',
          label: 'Rukun Sholat',
          children: [
            { id: 'niatSholat', label: 'Niat' },
            { id: 'takbiratulIhram', label: 'Takbiratul Ihram' },
            { id: 'berdiri', label: 'Berdiri bagi yang mampu' },
            { id: 'alfatihah', label: 'Alfatihah' },
            { id: 'rukuk', label: 'Rukuk' },
            { id: "thuma'ninah", label: "Thuma'ninah" },
            { id: "iktidal", label: "Iktidal" },
            { id: 'dudukDiantaraDuaSujud', label: 'Duduk antara dua sujud' },
            { id: 'tasyahud', label: 'Tasyahud' },
            { id: 'dudukIftirasy', label: 'Duduk Iftirasy' },
            { id: 'shalawat', label: 'Shalawat atas nabi' },
            { id: 'salam', label: 'Salam' },
            { id: 'tertib', label: 'Tertib' },
          ],
        },
        { id: 'syaratSahSholat', label: 'Syarat Sah Sholat', },
        { id: 'fikihSholat', label: 'FikihSholat' },
        { id: 'sunnahSolat', label: 'Sunnah Solat' },
      ],
    },
    {
      id: 'puasa',
      label: 'Puasa',
      children: [
        { id: 'introduction', label: 'Apa itu Puasa?' },
      ],
    },
    {
      id: 'zakat',
      label: 'Zakat',
      children: [
        { id: 'introduction', label: 'Apa itu Zakat?' },
      ],
    },
    {
      id: "Al-Qur'an",
      label: "Al-Qur'an",
      children: [
        { id: 'introduction', label: 'apa itu Al-Quran?' },
      ],
    },
  ];

  const handleMenuClick = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
    setActiveSubMenu(null); // Reset the active sub-menu when clicking on a main menu
  };

  const handleSubMenuClick = (id) => {
    setActiveSubMenu(activeSubMenu === id ? null : id);
  };

  return (
    <aside
      className={`fixed lg:sticky top-14 left-0 min-h-full w-64 lg:w-72 lg:py-10 lg:pl-20 bg-white lg:bg-opacity-50 lg:backdrop-blur-md p-4 border-r border-gray-300 lg:translate-x-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40 overflow-y-auto`}
      style={{ maxHeight: 'calc(100vh - 56px)' }} // Adjusting maxHeight for the sidebar to fit in the viewport
    >
      <ul className='font-poppins font-semibold text-end lg:text-sm'>
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleMenuClick(item.id)}
              className="block w-full text-left text-dark-blue p-2 hover:bg-gray-200 rounded"
            >
              {item.label}
            </button>
            {activeMenu === item.id && item.children && (
              <ul className="pl-4 font-medium mb-3">
                {item.children.map((child) => (
                  <li key={child.id}>
                    <button
                      onClick={() => handleSubMenuClick(child.id)}
                      className="block w-full text-left p-2 text-hitam hover:bg-gray-300 rounded"
                    >
                      {child.label}
                    </button>
                    {activeSubMenu === child.id && child.children && (
                      <ul className="pl-4 font-normal mb-3">
                        {child.children.map((subChild) => (
                          <li key={subChild.id}>
                            <button
                              onClick={() => onSelect(subChild.id)}
                              className="block w-full text-left p-2 text-hitam hover:bg-gray-200 rounded"
                            >
                              {subChild.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;