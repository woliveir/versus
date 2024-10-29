import { Box } from "@mui/material"

export const DefaultContent = ( { children }:{ children: React.ReactNode} ) => {

  return (
    <Box
      sx={{
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative', 
      }}
    >
      {children}
    </Box>
  )
}