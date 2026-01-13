import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import EventBanner from "@/components/EventBanner";
import StorySection from "@/components/StorySection";
import VideoHub from "@/components/VideoHub";
import EmotionalJourney from "@/components/EmotionalJourney";
import TestimonialSection from "@/components/TestimonialSection";
import EventSection from "@/components/EventSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
    </div>
  );
};

export default Index;
