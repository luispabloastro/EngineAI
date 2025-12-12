import Hero from "myapp-LP@/components/sections/Hero";
import Solutions from "myapp-LP@/components/sections/Solutions";
import ProcessTimeline from "myapp-LP@/components/sections/ProcessTimeline";
import Technologies from "myapp-LP@/components/sections/Technologies";
import Booking from "myapp-LP@/components/sections/Booking";
import Contact from "myapp-LP@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <ProcessTimeline />
      <Technologies />
      <Booking />
      <Contact />
    </>
  );
}
