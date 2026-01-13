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
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ContactForm />
        <EventBanner />
        <StorySection />
        <VideoHub />
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
