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
];

export default function Skills() {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      textAlign="center"
    >
      <Typography variant="h4">Skills</Typography>

      <Stack direction="row" flexWrap="wrap" gap={1} justifyContent="center">
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
