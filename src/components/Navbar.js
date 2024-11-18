import React from 'react';
import { 
  FaAngleDown,  
  FaExpand,
} from 'react-icons/fa';

const Navbar = ({ isOpen, onToggleSidebar }) => {
  return (
    <div
      style={{
        height: '64px',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        borderBottom: '1px solid #E5E7EB',
        position: 'fixed',
        top: 0,
        right: 0,
        left: isOpen ? '252px' : '0',
        transition: 'left 0.3s ease',
        zIndex: 1000,
      }}
    >
    
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          position: 'relative',
        }}
      >
      
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 12px',
            background: '#F4F3FF',
            borderRadius: '8px',
            cursor: 'pointer',
            marginLeft:'3vw',
          }}
        >
          <img
            src="/project-image.png"
            alt="Project"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '4px',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span style={{ fontSize: '13px', color:'#3E1C96', fontWeight: 500 }}>
              Romanya Demo Projesi
            </span>
            <span style={{ fontSize: '11px', color: '#878A99',fontWeight: 500 }}>ROM-001</span>
          </div>
          <FaAngleDown size={14} color="#5925DC" />
        </div>
      </div>

    
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        
        <button
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src="/us-flag.png"
            alt="Language"
            style={{ width: '24px', height: '24px' }}
          />
        </button>

     
        <button
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <FaExpand size={18} color="#5925DC" />
        </button>

       
        <button
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img src='./navbarSun.png' style={{width:'20px', height:'20px'}}></img>
        </button>

    
        <button
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img src='./navbarNotifications.png' style={{width:'16.5px', height:'18.3px'}}></img>
          </button>

   
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
          }}
        >
          <img
            src="/avatar.png"
            alt="User"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <span style={{ fontSize: '13px', fontWeight: 500, color:'#495057' }}>Anna Adame</span>
            <span style={{ fontSize: '12px', color: '#9599AD' }}>Founder</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;