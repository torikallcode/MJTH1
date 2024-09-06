import React, { useState } from 'react';

const Sidebar = ({ isOpen, onSelect }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && filteredMenuItems.length > 0) {
      // Navigate to the first item in the filtered list when pressing Enter
      onSelect(filteredMenuItems[0].id);
    }
  };

  const filteredMenuItems = menuItems.flatMap((item) =>
    item.children
      .filter((child) => child.label.toLowerCase().includes(searchTerm.toLowerCase()))
      .map((child) => ({ ...child, parentLabel: item.label }))
  );


  return (
    <aside
      className={`lg:inset-0 lg:top-[3.8125rem] lg:left-[max(0px,calc(50%-50rem))] lg:right-auto fixed min-h-full w-64 lg:w-52 xl:w-72 lg:py-10 xl:pl-20 bg-white lg:bg-opacity-50 lg:backdrop-blur-md p-4 border-r border-gray-300 lg:translate-x-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40 overflow-y-auto`}
      style={{ maxHeight: 'calc(100vh - 56px)' }}
    >
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <ul className='font-semibold font-poppins text-end lg:text-sm'>
        {searchTerm ? (
          filteredMenuItems.map((child) => (
            <li key={child.id}>
              <button
                onClick={() => onSelect(child.id)}
                className="block w-full p-2 text-left rounded text-dark-blue hover:bg-gray-200"
              >
                {child.label} - <span className="italic">{child.parentLabel}</span>
              </button>
            </li>
          ))
        ) : (
          menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuClick(item.id)}
                className="block w-full p-2 text-left rounded text-dark-blue hover:bg-gray-200"
              >
                {item.label}
              </button>
              {activeMenu === item.id && item.children && (
                <ul className="pl-4 mb-3 font-medium">
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <button
                        onClick={() => handleSubMenuClick(child.id)}
                        className="block w-full p-2 text-left rounded text-hitam hover:bg-gray-300"
                      >
                        {child.label}
                      </button>
                      {activeSubMenu === child.id && child.children && (
                        <ul className="pl-4 mb-3 font-normal">
                          {child.children.map((subChild) => (
                            <li key={subChild.id}>
                              <button
                                onClick={() => onSelect(subChild.id)}
                                className="block w-full p-2 text-left rounded text-hitam hover:bg-gray-200"
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
          ))
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;

