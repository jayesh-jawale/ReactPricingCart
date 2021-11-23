import './App.css';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

export default function App() {
  return (
    <div className="App">
    <PricingCart />
    </div>
  );
}

function PricingCart() {
 return (
  <div className='card-container'>
    <div className='box'>
      <div className='card-plan'>
      <Typography variant="caption" display="block" gutterBottom>
        FREE
      </Typography>
      <Typography variant="h3" component="div" gutterBottom>
        $0 <span class="period">/month</span>
      </Typography>
      </div>
<div style={{textAlign: 'left'}}>
<List>
<ListItem>
        <ListItemAvatar>
            <CheckIcon />
        </ListItemAvatar>
        <ListItemText primary="Single User" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
            <CheckIcon />
        </ListItemAvatar>
        <ListItemText primary="5GB Storage" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
            <CheckIcon />
        </ListItemAvatar>
        <ListItemText primary="Unlimited Public Projects" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
            <CheckIcon />
        </ListItemAvatar>
        <ListItemText primary="Community Acces" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
            <CloseIcon />
        </ListItemAvatar>
        <ListItemText className='text-muted' primary="Unlimited Private Projects" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
        <CloseIcon />
        </ListItemAvatar>
        <ListItemText className='text-muted' primary="Dedicated Phone Support" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
        <CloseIcon />
        </ListItemAvatar>
        <ListItemText className='text-muted' primary="Free Subdomain" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
        <CloseIcon />
        </ListItemAvatar>
        <ListItemText className='text-muted' primary="Monthly Status Reports" />
      </ListItem>
    </List>
</div>
<div>
<Button style={{height:'45px', width:'300px', borderRadius:'20px'}} variant="contained">Button</Button>
</div>
</div>

<div className='box'>
      <div className='card-plan'>
      <Typography variant="caption" display="block" gutterBottom>
        PLUS
      </Typography>
      <Typography variant="h3" component="div" gutterBottom>
        $9 <span class="period">/month</span>
      </Typography>
      </div>
<div style={{textAlign: 'left'}}>
<List>
<ListItem>
        <ListItemAvatar>
            <CheckIcon />
        </ListItemAvatar>
        <ListItemText primary="5 Users" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
            <CheckIcon />
        </ListItemAvatar>
        <ListItemText primary="50GB Storage" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
            <CheckIcon />
        </ListItemAvatar>
        <ListItemText primary="Unlimited Public Projects" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
            <CheckIcon />
        </ListItemAvatar>
        <ListItemText primary="Community Acces" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
            <CheckIcon />
        </ListItemAvatar>
        <ListItemText primary="Unlimited Private Projects" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
            <CheckIcon />
        </ListItemAvatar>
        <ListItemText primary="Dedicated Phone Support" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
            <CheckIcon />
        </ListItemAvatar>
        <ListItemText primary="Free Subdomain" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
        <CloseIcon />
        </ListItemAvatar>
        <ListItemText className='text-muted' primary="Monthly Status Reports" />
      </ListItem>
    </List>
</div>
<div>
<Button style={{height:'45px', width:'300px', borderRadius:'20px'}} variant="contained">Button</Button>
</div>
</div>

<div className='box'>
      <div className='card-plan'>
      <Typography variant="caption" display="block" gutterBottom>
        PRO
      </Typography>
      <Typography variant="h3" component="div" gutterBottom>
        $49 <span class="period">/month</span>
      </Typography>
      </div>
<div style={{textAlign: 'left'}}>
<List>
<ListItem>
        <ListItemAvatar>
            <CheckIcon />
        </ListItemAvatar>
        <ListItemText primary="5 Users" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
            <CheckIcon />
        </ListItemAvatar>
        <ListItemText primary="50GB Storage" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
            <CheckIcon />
        </ListItemAvatar>
        <ListItemText primary="Unlimited Public Projects" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
            <CheckIcon />
        </ListItemAvatar>
        <ListItemText primary="Community Acces" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
            <CheckIcon />
        </ListItemAvatar>
        <ListItemText primary="Unlimited Private Projects" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
            <CheckIcon />
        </ListItemAvatar>
        <ListItemText primary="Dedicated Phone Support" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
            <CheckIcon />
        </ListItemAvatar>
        <ListItemText primary="Free Subdomain" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
        <CheckIcon />
        </ListItemAvatar>
        <ListItemText primary="Monthly Status Reports" />
      </ListItem>
    </List>
</div>
<div>
<Button style={{height:'45px', width:'300px', borderRadius:'20px'}} variant="contained">Button</Button>
</div>
</div>

</div>
 )
}
