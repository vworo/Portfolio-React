import { Stack, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const projects = [
  {
    name: "Project 1",
    desc: "Desc",
    skills: "Skills",
    github: "https://github.com/vworo",
    live: "https://github.com/vworo",
  },
  {
    name: "Project 2",
    desc: "Desc",
    skills: "Skills",
    github: "https://github.com/vworo",
    live: "https://github.com/vworo",
  },
  {
    name: "Project 3",
    desc: "Desc",
    skills: "Skills",
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
            <Stack gap={2}>
              <Typography>{project.name}</Typography>
              <Typography>{project.desc}</Typography>
              <Typography>{project.skills}</Typography>
              <Stack direction={"row"}>
                <IconButton href={project.github} target="_blank">
                  <GitHubIcon />
                </IconButton>
                <IconButton href={project.live} target="_blank">
                  <OpenInNewIcon />
                </IconButton>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
