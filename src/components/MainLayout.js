import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  IconButton,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Link,
  Avatar,
  Button,
  TextField,
  

} from '@mui/material';
import { 
  NavigateNext,
  Add,
  MoreVert,
  KeyboardArrowDown
} from '@mui/icons-material';
import CustomTabPanel from './CustomTabPanel';
import Models from './Models';

import { muiTheme, theme } from '../styles/theme';
import { NavigateBefore } from '@mui/icons-material';
import { Remove, LocationOn } from '@mui/icons-material';
import { Reply as ReplyIcon } from '@mui/icons-material';

const MainLayout = ({ isOpen })  => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const rows = [
    { name: 'İşveren Firma', content: 'Romanya İçişleri Bakanlığı' },
    { name: 'Durumu', content: 'Aktif', type: 'status' },
    { name: 'Tarihler', content: '07.02.2024 - 02.02.2026 - 728 gün' },
    { name: 'Türü', content: 'Üst yapı / HASTANE' },
    { name: 'Ülke/Şehir', content: 'Romanya / BÜKREŞ' },
    { name: 'Adres', content: 'Sectotur strada Argentina Nr.41' },
    { name: 'Açıklama', content: 'The Dimitrie Gretada Hospital Procelts. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words' },
  ];

  return (
    <Box sx={{ 
      width: '100%',
      minHeight: '100vh',
      marginTop: '64px',
    }}>
      <Box sx={{ 
        width: isOpen ? 'calc(100% - 252px)' : '100%', 
        bgcolor: '#FFFFFF',
        position: 'fixed',
        zIndex: 1100,
        borderBottom: '1px solid #F4F6F8',
        transition: 'all 0.3s ease'
      }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #F4F6F8',
          px: 3,
          py: 2,
          width: '100%'
        }}>
          <Typography sx={{ 
            fontSize: '15px',
            fontWeight: 700,
            lineHeight:'22.5px',
            color: '#495057',
            fontFamily: theme.typography.fontFamily || muiTheme.typography.fontFamily,

          }}>
            PROJE DETAY
          </Typography>

          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: 1
          }}>
            <Link
              href="#"
              underline="none"
              sx={{
                color: '#495057',
                fontSize: '13px',
                fontWeight:400,
                '&:hover': {
                  color: '#212B36'
                }
              }}
            >
              Ecommerce
            </Link>
            <NavigateNext sx={{ 
              fontSize: 18,
              color: '#878A99'
            }} />
            <Link
              href="#"
              underline="none"
              sx={{
                color: '#878A99',
                fontSize: '14px',
                '&:hover': {
                  color: '#212B36'
                }
              }}
            >
              Seller Details
            </Link>
          </Box>
        </Box>
<Box sx={{ 
  bgcolor: '#F9FAFB',
  borderRadius: '12px',
  overflow: 'hidden'
}}>
 
<Box sx={{
  display: 'flex',
  alignItems: 'flex-start',
  position: 'relative',
  p: 0 
}}>
  <Box sx={{ 
    display: 'flex',
    alignItems: 'center',
    width: '419px',
    height: '116px',
    gap: 2,
    p: 2,
    bgcolor: '#F4F3FF',
    position: 'relative' 
  }}>
    <Box
      sx={{
        position: 'absolute',
        top: 8,
        right: 8,
        width: '24px',
        height: '24px',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.9)'
        }
      }}
    >
      <MoreVert 
        sx={{ 
          color: '#637381',
          fontSize: 20,
          width:'12.97px',
          height:'12.97px',
        }}
      />
    </Box>

    <img 
      src="/project-image.png"
      alt="Project"
      style={{
        width: '72px',
        height: '72px',
        borderRadius: '4px',
        objectFit: 'cover'
      }}
    />
    <Box>
      <Typography 
        sx={{ 
          fontSize: '20px',
          fontWeight: 600,
          color: '#3E1C96',
          mb: 1
        }}
      >
        Romanya Demo Projesi
      </Typography>
      <Box
        sx={{
          px: 1.5,
          py: 0.5,
          bgcolor: '#F1A218',
          borderRadius: '4px',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: '11px',
            color: '#fff',
            fontWeight: 500,
          }}
        >
          Onay Sürecinde
        </Typography>
      </Box>
    </Box>
  </Box>

  
  <Box sx={{ 
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    p: 2,
    height: '116px',
    flex: 1,
    ml: 0
  }}>
    
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      gap: 0.5
    }}>
      <Typography 
        sx={{ 
          color: '#878A99',
          fontSize: '13px',
          fontWeight: 500,
        }}
      >
        Sözleşme
      </Typography>
      <Typography 
        sx={{ 
          color: '#212529',
          fontSize: '13px',
          fontWeight: 400,
        }}
      >
        ROM-001
      </Typography>
    </Box>


    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      gap: 0.5
    }}>
      <Typography 
        sx={{ 
          color: '#878A99',
          fontSize: '13px',
          fontWeight: 500,
        }}
      >
        Şirket
      </Typography>
      <Typography 
        sx={{ 
          color: '#212529',
          fontSize: '13px',
          fontWeight: 400,
        }}
      >
        Associated CCN ALTYAPI YATIRIMLARI VE İNŞAAT AŞ.
      </Typography>
    </Box>
  </Box>


</Box>
</Box>

      
        <Box sx={{ 
  bgcolor: '#F9FAFB',
}}>
  <Box sx={{
    bgcolor: 'white',
    borderRadius: '8px',
    p: 1, 
  }}>
    <Tabs
      value={value}
      onChange={handleChange}
      sx={{
        '& .MuiTab-root': {
          textTransform: 'none',
          fontSize: '13px',
          minHeight: '40px',
          padding: '8px 16px',
          color: '#878A99',
          margin: '4px',
          borderRadius: '8px',
          '&.Mui-selected': {
            color: '#fff',
            fontWeight: 500,
            bgcolor: '#6938EF',
            border: '1px solid #6938EF',
            boxShadow: '0 2px 4px rgba(105, 56, 239, 0.1)',
            '&:hover': {
              bgcolor: '#6938EF',
            }
          },
          '&:hover': {
            bgcolor: 'rgba(145, 158, 171, 0.08)',
            color: '#212B36'
          }
        },
        '& .MuiTabs-indicator': {
          display: 'none'
        },
        minHeight: 'unset',
        '& .MuiTabs-flexContainer': {
          gap: '3vw' 
        }
      }}
    >
      <Tab label="Genel Görünüm" />
      <Tab label="Modeller" />
      <Tab label="Proje Takvimi" />
      <Tab label="Keşif" />
      <Tab label="Alt Yükleniciler" />
    </Tabs>
  </Box>
</Box>
      </Box>

     
      <Box sx={{ 
        top:'313px',
        left:'24px',
        marginTop:'210px',
        paddingLeft: 0.5,
        paddingTop:2,
        bgcolor: '#F8F9FA'
      }}>
        <CustomTabPanel value={value} index={0}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Paper sx={{ borderRadius: 3, width:'1200px', height:'421px', paddingTop:'20px',paddingBottom:'24px', paddingLeft:'24px', left:'2px', top:'313px', gap:'24px' }}>
                <Typography  sx={{ color: '#495057', fontWeight: 500, fontSize:'16px', lineHeight:'10px', letterSpacing:'0.1px' }}>
                  Genel Bilgi
                </Typography>
                <Table>
  <TableBody sx={{gap:'12px', width:'1162px', height:'315px'}}>
    {rows.map((row, index) => (
      <TableRow
        key={row.name}
        sx={{ 
          borderBottom: index !== rows.length - 1 ? '1px solid #EFEFF6' : 'none', 
          '& td, & th': { 
            py: 2,
            borderBottom: 'none' 
          }
        }}
      >
        <TableCell 
          component="th" 
          scope="row" 
          sx={{ 
            width: '140px', 
            color: '#878A99', 
            pl: 0,
            verticalAlign: 'top',
            fontSize: '13px',
            fontWeight:'500'
          }}
        >
          {row.name}
        </TableCell>
        <TableCell>
          {row.type === 'status' ? (
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                px: 1,
                py: 0.5,
                borderRadius: '6px',
                bgcolor: '#0AB39C1A',
                color: '#0AB39C',
                fontSize: '12px',
                fontWeight:'600'
              }}
            >
              <Box 
                sx={{ 
                  width: 6, 
                  height: 6, 
                  borderRadius: '50%', 
                  bgcolor: '#118D57'
                }} 
              />
              {row.content}
            </Box>
          ) : (
            <Typography 
              sx={{ 
                color: '#495057',
                fontSize: '14px'
              }}
            >
              {row.content}
            </Typography>
          )}
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
              </Paper>

              <Paper sx={{ p: 3, borderRadius: 2, width: '1210px', marginTop: '20px' }}>
  <Box sx={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    mb: 3
  }}>
    <Typography variant="h6" sx={{ color: '#212529', weight: 500, fontSize:'16px', lineHeight:'24px' }}>
      Yorumlar
    </Typography>
    <Box sx={{ 
      display: 'flex',
      alignItems: 'center',
      gap: 1
    }}>
      <Typography sx={{ color: '#637381', fontSize: '14px' }}>Recent</Typography>
      <IconButton size="small">
        <KeyboardArrowDown />
      </IconButton>
    </Box>
  </Box>

  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Avatar 
        src="/commantator.png" 
        sx={{ width: 40, height: 40 }} 
      />
      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
          <Typography sx={{ fontWeight: 600, color: '#495057', fontSize:'13px', lineHeight:'19.5px' }}>
            Ali Demir
          </Typography>
          <Typography sx={{ color: '#878A99', fontSize: '12px', fontWeight:'400',lineHeight:'18px' }}>
            20 Dec 2021 - 05:47AM
          </Typography>
        </Box>
        <Typography sx={{ color: '#495057', fontSize:'13px', fontWeight:400}}>
          I am getting message from customers that when they place order always get error message.
        </Typography>
        <Button
  startIcon={<ReplyIcon sx={{ fontSize: 10 }} />} 
  sx={{
    marginTop:'10px',
    color: '#637381',
    textTransform: 'none',
    background: '#EFEFF6',
    padding: '4px 8px',
    borderRadius: '6px',
    minWidth: 'auto',
    width: 'fit-content',
    height: '24px',
    fontWeight: 600,
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    '&:hover': {
      background: '#EFEFF6',
      color: '#878A99'
    }
  }}
>
  Reply
</Button>

        <Box sx={{ display: 'flex', gap: 2, mt: 2, ml: 2 }}>
          <Avatar 
            src="/commantator-2.png" 
            sx={{ width: 40, height: 40 }} 
          />
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
              <Typography sx={{ fontWeight: 600, color: '#495057', fontSize:'13px', lineHeight:'19.5px'}}>
                Ayşe Yılmaz
              </Typography>
              <Typography sx={{  color: '#878A99', fontSize: '12px', fontWeight:'400',lineHeight:'18px'}}>
                20 Dec 2021 - 05:47AM
              </Typography>
            </Box>
            <Typography sx={{ color: '#495057', fontSize:'13px', fontWeight:400 }}>
              Please be sure to check your Spam mailbox to see if your email filters have identified the email from Dell as spam.
            </Typography>
            <Button
  startIcon={<ReplyIcon sx={{ fontSize: 10 }} />} 
  sx={{
    marginTop:'10px',
    color: '#637381',
    textTransform: 'none',
    background: '#EFEFF6',
    padding: '4px 8px',
    borderRadius: '6px',
    minWidth: 'auto',
    width: 'fit-content',
    height: '24px',
    fontWeight: 600,
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    '&:hover': {
      background: '#EFEFF6',
      color: '#878A99'
    }
  }}
>
  Reply
</Button>
          </Box>
        </Box>
      </Box>
    </Box>

    <Box sx={{ display: 'flex', gap: 2 }}>
      <Avatar 
        src="/commantator.png" 
        sx={{ width: 40, height: 40 }} 
      />
      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
          <Typography sx={{ fontWeight: 600, color: '#495057', fontSize:'13px', lineHeight:'19.5px' }}>
            Ali Demir
          </Typography>
          <Typography sx={{ color: '#878A99', fontSize: '12px', fontWeight:'400',lineHeight:'18px' }}>
            20 Dec 2021 - 05:47AM
          </Typography>
        </Box>
        <Typography sx={{ color: '#495057', fontSize:'13px', fontWeight:400}}>
          I am getting message from customers that when they place order always get error message.
        </Typography>
        <Button
  startIcon={<ReplyIcon sx={{ fontSize: 10 }} />} 
  sx={{
    marginTop:'10px',
    color: '#637381',
    textTransform: 'none',
    background: '#EFEFF6',
    padding: '4px 8px',
    borderRadius: '6px',
    minWidth: 'auto',
    width: 'fit-content',
    height: '24px',
    fontWeight: 600,
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    '&:hover': {
      background: '#EFEFF6',
      color: '#878A99'
    }
  }}
>
  Reply
</Button>

      
      </Box>
    </Box>

    <Box sx={{ display: 'flex', gap: 2 }}>
      <Avatar 
        src="/commantator.png" 
        sx={{ width: 40, height: 40 }} 
      />
      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
          <Typography sx={{ fontWeight: 600, color: '#495057', fontSize:'13px', lineHeight:'19.5px' }}>
            Ali Demir
          </Typography>
          <Typography sx={{ color: '#878A99', fontSize: '12px', fontWeight:'400',lineHeight:'18px' }}>
            20 Dec 2021 - 05:47AM
          </Typography>
        </Box>
        <Typography sx={{ color: '#495057', fontSize:'13px', fontWeight:400}}>
          I am getting message from customers that when they place order always get error message.
        </Typography>
        <Button
  startIcon={<ReplyIcon sx={{ fontSize: 10 }} />} 
  sx={{
    marginTop:'10px',
    color: '#637381',
    textTransform: 'none',
    background: '#EFEFF6',
    padding: '4px 8px',
    borderRadius: '6px',
    minWidth: 'auto',
    width: 'fit-content',
    height: '24px',
    fontWeight: 600,
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    '&:hover': {
      background: '#EFEFF6',
      color: '#878A99'
    }
  }}
>
  Reply
</Button>

      
      </Box>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography 
        sx={{ 
          color: '#495057', 
          fontWeight: 500,
          fontSize:'14px',
          lineHeight:'21px',
          mb: 2 
        }}
      >
        Yorum Bırakın
      </Typography>
      <TextField
        multiline
        rows={4}
        fullWidth
        placeholder="Yorumunuzu yazın"
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#EFEFF6',
            '& fieldset': {
              borderColor: 'transparent'
            },
            '&:hover fieldset': {
              borderColor: 'transparent'
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent'
            }
          }
        }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button 
          variant="contained"
          sx={{
            bgcolor: '#6938EF',
            color: 'white',
            textTransform: 'none',
            '&:hover': {
              bgcolor: '#5B30CB'
            }
          }}
        >
          Yorumu gönder
        </Button>
      </Box>
    </Box>
  </Box>
</Paper>
            </Grid>

            <Grid item xs={4}>
            <Grid item xs={4}>
            <Paper sx={{ 
    mb: 3, 
    width: '390px', 
    height: '328px', 
    borderRadius: '12px',
    padding: '20px', 
    gap: '12px',
    marginLeft: '150px',
    bgcolor: 'white'
  }}>
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      mb: 2,
    }}>
      <Typography sx={{ 
        color: '#212529', 
        fontSize: '16px', 
        fontWeight: 500,
        lineHeight: '24px',
        letterSpacing:'0.1px'
      }}>
        Galeri
      </Typography>
      <IconButton 
        size="small" 
        sx={{ 
          bgcolor: '#F4F3FF',
          width: '28px',
          height: '28px',
          padding: '4px',
          borderRadius:'4px',
          gap:'4px',
          '&:hover': { bgcolor: '#DFE3E8' }
        }}
      >
        <Add sx={{ fontSize: '14px', color: '#5925DC' }} />
      </IconButton>
    </Box>

    <Box sx={{ 
      width: '100%', 
      height: '180px',
      mb: 2, 
      borderRadius: '8px',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <img 
        src="/bigImage.png" 
        alt="Construction Site"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '8px'
        }}
      />
    </Box>

    <Box sx={{ 
      position: 'relative',
      px: 3
    }}>
      <IconButton 
        sx={{ 
          position: 'absolute',
          left: -5,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: '#F4F3FF',
          width: '37px',
          height: '37px',
          padding: '4px',
          boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
          '&:hover': { bgcolor: '#f5f5f5' },
          '& .MuiSvgIcon-root': {
            fontSize: '16px',
            color: '#5925DC'
          }
        }}
        size="small"
      >
        <NavigateBefore />
      </IconButton>

      <Box sx={{ 
        display: 'flex', 
        gap: '8px', 
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {[1, 2, 3, 4].map((index) => (
          <Box
            key={index}
            sx={{
              width: '64px',
              height: '48px',
              borderRadius: '8px',
              overflow: 'hidden',
              flexShrink: 0,
              border: index === 2 ? '2px solid #6938EF' : 'none',
              padding: index === 2 ? '1px' : 0
            }}
          >
            <img
              src={index === 2 ? "/bigImage.png" : "/smallImage.png"}
              alt={`Thumbnail ${index}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '6px'
              }}
            />
          </Box>
        ))}
      </Box>

      <IconButton 
        sx={{ 
          position: 'absolute',
          right: -5,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: '#F4F3FF',
          width: '37px',
          height: '37px',
          padding: '4px',
          boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
          '&:hover': { bgcolor: '#f5f5f5' },
          '& .MuiSvgIcon-root': {
            fontSize: '16px',
            color: '#5925DC'
          }
        }}
        size="small"
      >
        <NavigateNext />
      </IconButton>
    </Box>
  </Paper>
</Grid>

<Paper sx={{ 
  mb: 3, 
  width: '390px', 
  height: '105px', 
  borderRadius: '12px', 
  padding: '20px', 
  gap: '12px', 
  marginLeft: '150px',
  bgcolor: 'white'
}}>
  <Typography sx={{ 
    color: '#212529', 
    fontSize: '16px', 
    fontWeight: 500,
    mb: 5
  }}>
    Proje İlerleme Durumu
  </Typography>

  <Box sx={{ position: 'relative' }}>
    <Box sx={{ 
      width: '100%',
      height: '8px',
      bgcolor: '#F4F6F8',
      borderRadius: '12px',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <Box sx={{ 
        width: '20%',
        height: '100%',
        background: 'linear-gradient(90deg, #0AB39C 0%, #0AB39C 95%, #fff 95%)',
        borderRadius: '12px',
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          right: 0,
          width: '7.3px',
          height: '8px',
          bgcolor: '#fff',
          borderRadius: '50%',
          border: '2px solid white'
        }
      }} />
    </Box>

    <Box sx={{ 
      position: 'absolute',
      left: '20%', 
      top: '-30px',
      transform: 'translateX(-50%)',
      bgcolor: '#878A99',
      borderRadius: '4px',
      padding: '2px 8px',
      minWidth: 'fit-content'
    }}>
      <Typography sx={{ 
        fontSize: '12px',
        color: 'white',
        fontWeight: 500
      }}>
        120. gün
      </Typography>
    </Box>

    <Typography sx={{ 
      position: 'absolute',
      right: 0,
      top: '-25px',
      fontSize: '14px',
      color: '#878A99',
      fontWeight: 500
    }}>
      726
    </Typography>
  </Box>
</Paper>

<Paper sx={{ 
  mb: 3, 
  width: '390px', 
  height: '395px', 
  borderRadius: '12px', 
  padding: '20px', 
  gap: '12px', 
  marginLeft: '150px',
  bgcolor: 'white'
}}>
  <Box sx={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    mb: 2,
  }}>
    <Typography sx={{  
      color: '#212529', 
      fontSize: '16px', 
      fontWeight: 500,
      lineHeight: '24px'
    }}>
      Konum
    </Typography>
  </Box>

  <Box sx={{ 
    width: '100%',
    height: '200px',
    borderRadius: '12px',
    overflow: 'hidden',
    mb: 2,
    position: 'relative'
  }}>
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.6554577292322!2d32.757682599999995!3d39.881954900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347abdf64736b%3A0xcc21b3541b32f49!2sInfera%20Teknoloji!5e0!3m2!1str!2str!4v1731959190154!5m2!1str!2str"
      style={{
        border: 0,
        width: '350px',
        height: '267px',
        borderRadius: '8px'
      }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
        <Box sx={{ 
      position: 'absolute',
      right: 10,
      bottom: 10,
      display: 'flex',
      flexDirection: 'column',
      bgcolor: 'white',
      borderRadius: '8px',
      boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
      overflow: 'hidden'
    }}>
      <IconButton 
        size="small"
        sx={{ 
          padding: '4px',
          borderRadius: 0,
          borderBottom: '1px solid #E5E7EB',
          '&:hover': { bgcolor: '#F8F9FA' }
        }}
      >
        <Add sx={{ fontSize: 18, color: '#637381' }} />
      </IconButton>
      <IconButton 
        size="small"
        sx={{ 
          padding: '4px',
          borderRadius: 0,
          '&:hover': { bgcolor: '#F8F9FA' }
        }}
      >
        <Remove sx={{ fontSize: 18, color: '#637381' }} />
      </IconButton>
    </Box>
  </Box>

  <Box sx={{ 
    display: 'flex',
    alignItems: 'flex-start',
    gap: 1.5,
    mt: 1
  }}>
    <LocationOn sx={{ 
      color: '#637381',
      fontSize: 24,
      mt: 0.5
    }} />
    <Typography sx={{ 
      color: '#212529',
      fontSize: '13px',
      fontWeight: 400,
      lineHeight: '22px'
    }}>
      Üniversiteler Mahallesi 1604. Cadde 9/1 İç Kapı NO: 120 06800 Bilkent
      <br />
      Çankaya / Ankara / Türkiye
    </Typography>
  </Box>
</Paper>
            </Grid>
          </Grid>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <Models/>
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default MainLayout;