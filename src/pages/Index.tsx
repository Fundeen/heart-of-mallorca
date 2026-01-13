import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import EventBanner from "@/components/EventBanner";
import StorySection from "@/components/StorySection";
import VideoHub from "@/components/VideoHub";
import EmotionalJourney from "@/components/EmotionalJourney";
import TestimonialSection from "@/components/TestimonialSection";
import EventSection from "@/components/EventSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div 
      className="min-h-screen"
      style={{
        background: `linear-gradient(180deg, 
          hsl(10 80% 70%) 0%, 
          hsl(15 85% 72%) 20%,
          hsl(20 90% 75%) 40%,
          hsl(25 95% 75%) 60%,
          hsl(30 90% 72%) 80%,
          hsl(15 80% 65%) 100%)`
      }}
    >
      <Header />
      <main>
        <Hero />
        <EventBanner />
        <StorySection />
        <VideoHub />
        <ContactForm />
        <EmotionalJourney />
        <TestimonialSection />
        <EventSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
