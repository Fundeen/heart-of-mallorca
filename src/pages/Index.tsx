import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventBanner from "@/components/EventBanner";
import StorySection from "@/components/StorySection";
import NarrativeTransition from "@/components/NarrativeTransition";
import VideoHub from "@/components/VideoHub";
import EmotionalJourney from "@/components/EmotionalJourney";
import TestimonialSection from "@/components/TestimonialSection";
import EventSection from "@/components/EventSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <EventBanner />
        <StorySection />
        <NarrativeTransition 
          text="Cada inversión cuenta una historia. Esta es la nuestra."
        />
        <VideoHub />
        <NarrativeTransition 
          text="No invertimos en proyectos. Invertimos en personas, en lugares, en futuro."
          subtext="Y queremos que formes parte."
        />
        <EmotionalJourney />
        <TestimonialSection />
        <NarrativeTransition 
          text="Conocernos en persona es la mejor forma de confiar."
        />
        <EventSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
