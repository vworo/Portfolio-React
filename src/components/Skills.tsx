import { Stack, Typography, Chip } from "@mui/material";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "CSS",
  "Tailwind",
  "MUI",
  "Node.js",
  "MongoDB",
  "GitHub",
  "Figma",
];

export default function Skills() {
  return (
    <Stack
      spacing={4}
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      textAlign="center"
    >
      <Typography variant="h4">Skills</Typography>

      <Stack direction="row" flexWrap="wrap" gap={2} justifyContent="center">
        {skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            color="primary"
            variant="outlined"
            sx={{ fontSize: "1rem", px: 2, py: 1 }}
          />
        ))}
      </Stack>
    </Stack>
  );
}
