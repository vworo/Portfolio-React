import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

export default function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6">VW</Typography>
                <Box>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Projects</Button>
                    <Button color="inherit">Contact</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}