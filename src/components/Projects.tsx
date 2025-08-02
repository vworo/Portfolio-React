import {
  Stack,
  Typography,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const projects = [
  {
    name: "Project 1",
    desc: "Desc",
    skills: "Skills",
    imgURL: "https://placehold.co/600x400",
    imgAlt: "Project1",
    github: "https://github.com/vworo",
    live: "https://github.com/vworo",
  },
  {
    name: "Project 2",
    desc: "Desc",
    skills: "Skills",
    imgURL: "https://placehold.co/600x400",
    imgAlt: "Project2",
    github: "https://github.com/vworo",
    live: "https://github.com/vworo",
  },
  {
    name: "Project 3",
    desc: "Desc",
    skills: "Skills",
    imgURL: "https://placehold.co/600x400",
    imgAlt: "Project3",
    github: "https://github.com/vworo",
    live: "https://github.com/vworo",
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
      <Stack direction={"row"} gap={2}>
        {projects.map((project) => {
          return (
            <Card key={project.name} sx={{ maxWidth: 345 }}>
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
