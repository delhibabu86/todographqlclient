import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

 const Headers = () => {
    return(
        <AppBar position="static" style={{ width: '700px', justifyContent: 'center', color:'green', backgroundColor: 'burlywood' }}>
        <Toolbar variant="dense" style={{ justifyContent: 'center' }}>
          <Typography variant="h6" color="inherit">
            Create To Do
    </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default Headers;