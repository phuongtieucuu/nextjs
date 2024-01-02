import EventList from "../components/events/event-list";
import NewsletterRegistration from "../components/input/newsletter-registration";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <NewsletterRegistration />
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
