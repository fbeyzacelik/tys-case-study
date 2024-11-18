import React, { useState } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import Navbar from './Navbar';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isProjeOpen, setIsProjeOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('proje');
  const [activeSubMenu, setActiveSubMenu] = useState('proje-detay');

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      id: 'proje',
      title: 'Proje',
      image: '/sidebarProje.png',
      hasSubmenu: true,
      submenu: [
        { id: 'proje-detay', title: 'Proje Detay' },
        { id: 'metrajlar', title: 'Metrajlar' },
        { id: 'ihaleler', title: 'İhaleler' },
        { id: 'sozlesmeler', title: 'Sözleşmeler' },
        { id: 'hakedisler', title: 'Hakedişler' },
        { id: 'kabul', title: 'Kabul ve Kapanış İşlemleri' }
      ]
    },
    { id: 'dokuman', title: 'Doküman Yönetimi', image: '/sidebarDokumanYonetimi.png' },
    { id: 'kalite', title: 'Kalite', image: '/sidebarKalite.png', hasArrow: true },
    { id: 'iso', title: 'ISO', image: '/sidebarIsg.png', hasArrow: true },
    { id: 'personel', title: 'Personel Yönetimi', image: '/sidebarPersonelYonetimi.png', hasArrow: true },
    { id: 'malzeme', title: 'Malzeme Yönetimi', image: '/sidebarMalzemeYonetimi.png', hasArrow: true },
    { id: 'raporlar', title: 'Raporlar', image: '/sidebarRaporlar.png' },
    { id: 'tanimlamalar', title: 'Tanımlamalar', image: '/sidebarTanimlamalar.png' }
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Navbar 
        isOpen={isOpen} 
        onToggleSidebar={handleToggleSidebar} 
      />
      <div style={{
        width: isOpen ? '252px' : '0',
        backgroundColor: '#3E1C96',
        height: '100vh',
        transition: 'width 0.3s ease',
        overflow: 'hidden',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 1000
      }}>
        <div style={{ padding: '24px', height: '100%' }}>
        
          <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center' }}>
            <img 
              src="/tys-logo.png" 
              alt="TYS" 
              style={{ 
                width: '80px', 
                filter: 'brightness(0) invert(1)',
                transition: 'opacity 0.3s ease',
                opacity: isOpen ? 1 : 0
              }}
            />
          </div>

          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '2px',
            opacity: isOpen ? 1 : 0,
            transition: 'opacity 0.2s ease'
          }}>
            {menuItems.map((item) => (
              <div key={item.id} style={{ marginBottom: '2px' }}>
                <button
                  onClick={() => {
                    setActiveMenu(item.id);
                    if (item.id === 'proje') {
                      setIsProjeOpen(!isProjeOpen);
                    }
                  }}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    backgroundColor: activeMenu === item.id ? 'rgba(255,255,255,0.1)' : 'transparent', 
                    border: 'none',
                    borderRadius: '8px',
                    lineHeight:'19.5px',
                    color: activeMenu === item.id ? '#FFFFFF' : 'rgba(255,255,255,0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '14px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img 
                      src={item.image}
                      alt={item.title}
                      style={{ 
                        width: '20px',
                        height: '20px',
                        filter: activeMenu === item.id ? 'brightness(0) invert(1)' : 'brightness(0) invert(0.7)'
                      }}
                    />
                    <span style={{fontSize:'15px'}}>{item.title}</span>
                  </div>
                  {(item.hasSubmenu || item.hasArrow) && (
                    item.hasSubmenu ? (
                      isProjeOpen ? 
                        <FaAngleDown size={16} color={activeMenu === item.id ? '#FFFFFF' : 'rgba(255,255,255,0.7)'} /> : 
                        <FaAngleRight size={16} color={activeMenu === item.id ? '#FFFFFF' : 'rgba(255,255,255,0.7)'} />
                    ) : (
                      <FaAngleRight size={16} color={activeMenu === item.id ? '#FFFFFF' : 'rgba(255,255,255,0.7)'} />
                    )
                  )}
                </button>

                {item.id === 'proje' && isProjeOpen && item.hasSubmenu && (
                  <div style={{ marginTop: '2px' }}>
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => setActiveSubMenu(subItem.id)}
                        style={{
                          width: '100%',
                          padding: '8px 12px 8px 15px',
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: activeSubMenu === subItem.id ? '#FFFFFF' : 'rgba(255,255,255,0.7)',
                          display: 'flex',
                          alignItems: 'center',
                          cursor: 'pointer',
                          textAlign: 'left',
                          fontSize: '13px',
                          position: 'relative'
                        }}
                      >
                        <span style={{
                          marginRight: '8px',
                        }}>
                          -
                        </span>
                        {subItem.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={handleToggleSidebar}
        style={{
          position: 'fixed',
          left: isOpen ? '252px' : '0',
          zIndex: 1001,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '22px',
          transition: 'left 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img 
          src="/sidebar-icon.png" 
          alt="Toggle Sidebar" 
          style={{ width: '20px' }}
        />
      </button>

      <div style={{
        marginLeft: isOpen ? '252px' : '0',
        transition: 'margin-left 0.3s ease',
        width: '100%'
      }}>
      </div>
    </div>
  );
};

export default Sidebar;