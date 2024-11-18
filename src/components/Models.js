import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Typography
} from '@mui/material';
import {
  ViewInAr,
  FileDownload,
  MoreVert,
  Visibility,
} from '@mui/icons-material';

const tableData = [
  {
    id: 1,
    name: 'Architectural_CORE',
    version: 'ver.1',
    propertyFile: 'Architectural_CORE.json',
    size: '10,67mb',
    date: '27.09.2024 - 09:13',
    uploadedBy: 'Melih Özgürün'
  },
  {
    id: 2,
    name: 'Arc_DOORS',
    version: 'ver.1',
    propertyFile: 'DOORS.json',
    size: '21,67mb',
    date: '27.09.2024 - 09:13',
    uploadedBy: 'Ayşe Demir'
  },
  {
    id: 3,
    name: 'Arc_DOORS',
    version: 'ver.1',
    propertyFile: 'DOORS.json',
    size: '21,67mb',
    date: '27.09.2024 - 09:13',
    uploadedBy: 'Ayşe Demir'
  },
  {
    id: 4,
    name: 'Architectural_CORE',
    version: 'ver.1',
    propertyFile: 'Architectural_CORE.json',
    size: '10,67mb',
    date: '27.09.2024 - 09:13',
    uploadedBy: 'Melih Özgürün'
  },
  {
    id: 5,
    name: 'Arc_DOORS',
    version: 'ver.1',
    propertyFile: 'DOORS.json',
    size: '21,67mb',
    date: '27.09.2024 - 09:13',
    uploadedBy: 'Ayşe Demir'
  },
  {
    id: 6,
    name: 'Architectural_CORE',
    version: 'ver.1',
    propertyFile: 'Architectural_CORE.json',
    size: '10,67mb',
    date: '27.09.2024 - 09:13',
    uploadedBy: 'Melih Özgürün'
  },
  {
    id: 7,
    name: 'Arc_DOORS',
    version: 'ver.1',
    propertyFile: 'DOORS.json',
    size: '21,67mb',
    date: '27.09.2024 - 09:13',
    uploadedBy: 'Ayşe Demir'
  },
];

const Models = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleCheckboxChange = (id) => {
    setSelectedRows(prev => {
      if (prev.includes(id)) {
        return prev.filter(rowId => rowId !== id);
      }
      return [...prev, id];
    });
  };


  return (
    <Box sx={{ bgcolor: '#F9FAFB', minHeight: '100vh' }}>
      <Paper sx={{ 
        p: 2,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        borderRadius: 0,
        boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
      }}>
        <Button
          startIcon={<ViewInAr />}
          sx={{
            bgcolor: '#EBE9FE',
            color: '#5925DC',
            textTransform: 'none',
            px: 2,
            py: 1,
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            '&:hover': {
              bgcolor: '#EAECFF'
            },
            '&.Mui-disabled': {
              bgcolor: '#F4F6F8',
              color: '#919EAB'
            }
          }}
          disabled={selectedRows.length > 0}
        >
          3D Modeli Göster
        </Button>

        {selectedRows.length === 0 ? (
          <TextField
            placeholder="Seçili modelleri göster"
            size="small"
            sx={{
              opacity: '80%',
              width: '184px',
              height: '44px',
              borderRadius: '6px',
              bgcolor: '#EFEFF6',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#E5E7EB',
                },
                '& input::placeholder': { 
                  color: '#878A99', 
                  fontSize: '13px', 
                  fontWeight: 500, 
                  lineHeight: '195px'
                },
              },
            }}
          />
        ) : (
          <>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#6938EF',
                color: 'white',
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: 500,
                '&:hover': {
                  bgcolor: '#5B30CB'
                }
              }}
            >
              Seçili modelleri göster
            </Button>

            <Button
              sx={{
                color: '#E44835',
                textTransform: 'none',
                fontSize: '13px',
                fontWeight: 500,
                '&:hover': {
                  bgcolor: 'rgba(255, 72, 66, 0.08)'
                }
              }}
              onClick={() => setSelectedRows([])}
            >
              Seçimleri kaldır
            </Button>
          </>
        )}

        <Box sx={{ ml: 'auto', display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button
            sx={{
              color: '#007AFF',
              textTransform: 'none',
              fontSize: '13px',
              lineHeight: '19.5px',
              fontWeight: 500,
              '&.Mui-disabled': {
                color: '#919EAB'
              }
            }}
            disabled={selectedRows.length > 0}
          >
            Metraj Bilgi Dosyasını Oluştur
          </Button>

          <Button
  sx={{
    color: '#007AFF',
    textTransform: 'none',
    fontSize: '14px',
    bgcolor: '#007AFF1A',
    fontWeight: 500,
    borderRadius: '6px',
    width: '146px',
    height: '44px',
    '&.Mui-disabled': {
      bgcolor: '#F4F6F8',
      color: '#919EAB'
    }
  }}
  disabled={selectedRows.length > 0}
>
  Model Yükle
  <img 
    src='./downloadModel.png' 
    style={{
      width: '16.5px', 
      height: '18.3px', 
      marginLeft: '10px',
      opacity: selectedRows.length > 0 ? '0.5' : '1', // Disable durumunda opacity azaltılır
      filter: selectedRows.length > 0 ? 'grayscale(100%)' : 'none' // veya grileştirilebilir
    }} 
  />
</Button>

          <IconButton>
            <MoreVert sx={{ color: '#637381' }} />
          </IconButton>
        </Box>
      </Paper>

      <TableContainer sx={{ mt: 2, px: 2 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell 
                padding="checkbox" 
                sx={{ 
                  bgcolor: '#F8FAFD',
                  borderBottom: '1px solid '
                }}
              >
                
              </TableCell>
              {['No', 'Dosya Adı', 'Özellik Dosyası', 'Boyutu', 'Yüklenme Tarihi', 'Görüntüle', 'İşlemler'].map((header) => (
                <TableCell 
                  key={header}
                  sx={{ 
                    bgcolor: '#F8FAFD',
                    color: '#495057',
                    fontSize: '14px',
                    fontWeight: 600,
                    borderBottom: '1px solid #EFEFF6'
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{ 
                  bgcolor: selectedRows.includes(row.id) ? '#F4F3FF' : (index % 2 === 0 ? '#FFFFFF' : '#FAFAFF'),
                  '&:hover': { 
                    bgcolor: selectedRows.includes(row.id) ? '#F4F3FF' : '#F4F6F8'
                  }
                }}
              >
                <TableCell 
                  padding="checkbox"
                  sx={{ 
                    borderBottom: '1px solid #CED4DA',
                    py: 1,
                    borderRadius: '5.14px'
                  }}
                >
                  <Checkbox 
                    size="small" 
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleCheckboxChange(row.id)}
                  />
                </TableCell>
                <TableCell 
                  sx={{ 
                    color: '#637381',
                    fontSize: '13px',
                    borderBottom: '1px solid #EFEFF6',
                    py: 1
                  }}
                >
                  {row.id}
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid #EFEFF6', py: 1 }}>
                  <Box>
                    <Typography sx={{ 
                      color: '#212B36',
                      fontSize: '13px',
                      fontWeight: 500,
                      lineHeight: '20px'
                    }}>
                      {row.name}
                    </Typography>
                    <Typography sx={{ 
                      color: '#637381',
                      fontSize: '12px',
                      lineHeight: '18px'
                    }}>
                      {row.version}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell 
                  sx={{ 
                    color: '#637381',
                    fontSize: '13px',
                    borderBottom: '1px solid #EFEFF6',
                    py: 1
                  }}
                >
                  {row.propertyFile}
                </TableCell>
                <TableCell 
                  sx={{ 
                    color: '#637381',
                    fontSize: '13px',
                    borderBottom: '1px solid #EFEFF6',
                    py: 1
                  }}
                >
                  {row.size}
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid #EFEFF6', py: 1 }}>
                  <Box>
                    <Typography sx={{ 
                      color: '#212B36',
                      fontSize: '13px',
                      lineHeight: '20px'
                    }}>
                      {row.date}
                    </Typography>
                    <Typography sx={{ 
                      color: '#637381',
                      fontSize: '12px',
                      lineHeight: '18px'
                    }}>
                      {row.uploadedBy}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid #EFEFF6', py: 1 }}>
                  <IconButton 
                    size="medium"
                    sx={{
                      bgcolor: '#F4F3FF',
                      padding: '4px',
                      width: '34px',
                      borderRadius: '3px',
                      height: '34px',
                      color: '#6938EF',
                      '&:hover': { bgcolor: 'rgba(105, 56, 239, 0.08)' }
                    }}
                  >
                    <Visibility sx={{ fontSize: 18 }} />
                  </IconButton>
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid #EFEFF6', py: 1 }}>
                  <IconButton 
                    size="medium"
                    sx={{
                      bgcolor: '#F4F3FF',
                      padding: '4px',
                      width: '34px',
                      borderRadius: '3px',
                      height: '34px',
                      color: '#6455A2',
                      '&:hover': { bgcolor: 'rgba(99, 115, 129, 0.08)' }
                    }}
                  >
                    <MoreVert sx={{ fontSize: 18 }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Models;