import { Container } from "@mui/material";
import Navbar from "@/components/Navbar";
import About from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <About />
      </Container>
    </>
  );
}
