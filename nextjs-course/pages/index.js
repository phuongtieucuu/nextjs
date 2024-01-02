import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helper/api-until";

function HomePage(props) {
  return (
    <div>
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getFeaturedEvents();
  return {
    props: { events: events },
  };
}

export default HomePage;
