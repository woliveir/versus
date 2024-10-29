import { Box } from "@mui/material"

export const DefaultHeader = () => {

  return (
    <Box
      sx={{
        heigth: '20%',
        bgcolor: '#051720',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '24px',
        borderColor: '#ffd700', //ouro
        borderBottomWidth: '5px',
        borderStyle: 'solid',
        minHeight: '50px',
      }}
    >
      header padrão
    </Box>
  )
}
