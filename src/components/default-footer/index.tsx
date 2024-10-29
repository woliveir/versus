import { Box } from "@mui/material"

export const DefaultFooter = () => {

  return (
    <Box
      sx={{
        height: '10%',
        bgcolor: '#051720',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        borderColor: '#ffd700', //ouro
        borderStyle: 'solid',
        borderTopWidth: '2px',
        fontSize: '24px',

        // bgcolor: '#051720',
        // padding: 2,
        // position: 'fixed',
        // bottom: '0px',
        // width: '100%'
      }}
    >
      Footer Padrão
    </Box>
  )
}