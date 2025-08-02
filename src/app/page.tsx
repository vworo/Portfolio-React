import { Container } from "@mui/material";
import Navbar from "@/components/Navbar";
import About from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <About />
        <Projects />
      </Container>
    </>
  );
}
