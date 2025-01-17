import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

interface IProps {
  linkText: string;
  linkHref: string;
  icon: React.ReactElement;
};

export const ListItemE = ({linkText, linkHref, icon}:IProps) => {
  return (
      <ListItem 
        sx={{
          color: 'white'
        }}
        component='a' 
        href={linkHref || '#'}  
      >
        <ListItemAvatar>
          <Avatar>
            {icon}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={linkText}/>
      </ListItem> 
  );
}
