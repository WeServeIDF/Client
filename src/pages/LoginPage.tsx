import { Box, Button, TextField, Typography } from "@mui/material";

const LoginPage: React.FC = () => {
    return (
        <Box style={{display: 'contents'}}>
            <Typography variant="h3" style={{marginRight: 25, marginTop: 10}}>התחבר</Typography>
            <Box
            style={{
                backgroundColor: 'white', position: 'relative',
                borderRadius: '20px', margin: '1.5vh', padding: 10, flex: '1 1 auto',
            }}
            >
                <div style={{position: 'relative', display: 'grid', paddingTop: 50}}>
                    <TextField label="שם משתמש" variant="filled" style={{marginBottom: 20, width: '100%'}} />
                    <TextField label="סיסמה" type="password" variant="filled" style={{marginBottom: 50, width: '100%'}} />
                    <Button variant="contained" style={{marginRight: 70, marginLeft: 70, marginBottom: 20}}>התחבר</Button>
                    <Typography style={{color: 'black', textAlign: 'center'}}>עדיין אין לך משתמש? <span style={{color: '#1976d2'}}>הירשם</span></Typography>
                </div>
            </Box>
    </Box>
    )
};

export default LoginPage;