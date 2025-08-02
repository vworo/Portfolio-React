import { Stack, Typography, Button, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Hero() {
  return (
    <Stack
      gap={4}
      alignItems="center"
      justifyContent={"center"}
      minHeight="calc(100vh - var(--navbar-height))"
    >
      <Typography variant="h2">
        Hi, I'm <span style={{ color: "primary" }}>Victor Worobec</span>.
      </Typography>
      <Typography variant="h4">A Software Engineer</Typography>
      <Typography variant="h6">
        I like to experiment and build things with code and food.
      </Typography>
      <Stack direction="row" gap={4}>
        <Button variant="contained" href="/resume.pdf" target="_blank">
          Resume
        </Button>
        <IconButton href="https://github.com/vworo" target="_blank">
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/victor-worobec/"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}
