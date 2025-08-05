import { Container } from "@mui/material";
import Navbar from "@/components/Navbar";
import About from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <About />
        <Projects />
        <Skills />
      </Container>
    </>
  );
}
