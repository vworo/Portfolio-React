import {
  Stack,
  Typography,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const projects = [
  {
    name: "Beat Box",
    desc: "An app that plays music through Spotify API. Requires a Spotify premium account.",
    skills: "Javascript, React",
    imgURL: "https://placehold.co/600x400",
    imgAlt: "Beat Box",
    github: "https://github.com/vworo/Beat-Box",
    live: "https://boxbeats.netlify.app/",
  },
  {
    name: "Armory",
    desc: "An app designed for police and military inventory management",
    skills: "Ruby, Rails",
    imgURL: "https://placehold.co/600x400",
    imgAlt: "Armory",
    github: "https://github.com/vworo/Armory",
    live: "https://armory.fly.dev/",
  },
  {
    name: "Tic Tac Toe",
    desc: "My first HTML, CSS, and JS project.",
    skills: "HTML, CSS, JS",
    imgURL: "https://placehold.co/600x400",
    imgAlt: "Tic Tac Toe",
    github: "https://github.com/vworo/Tic-Tac-Toe",
    live: "https://vworo.github.io/Tic-Tac-Toe/",
  },
];

export default function Projects() {
  return (
    <Stack
      gap={4}
      alignItems={"center"}
      justifyContent={"center"}
      textAlign={"center"}
      minHeight={"100vh"}
    >
      <Typography variant="h4">Projects</Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={4}
        width={{ xs: "90%", md: "100%" }}
        justifyContent={"center"}
      >
        {projects.map((project) => {
          return (
            <Card key={project.name}>
              <CardMedia
                component="img"
                image={project.imgURL}
                alt={project.imgAlt}
                height="140"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {project.name}
                </Typography>
                <Typography>{project.desc}</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <IconButton href={project.github} target="_blank">
                  <GitHubIcon />
                </IconButton>
                <IconButton href={project.live} target="_blank">
                  <OpenInNewIcon />
                </IconButton>
              </CardActions>
            </Card>
          );
        })}
      </Stack>
    </Stack>
  );
}
