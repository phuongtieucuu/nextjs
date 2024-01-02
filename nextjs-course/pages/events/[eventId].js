import { Fragment } from "react";

import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import ErrorAlert from "../../components/ui/error-alert";
import { getDetailEvent } from "../../helper/api-until";

function EventDetailPage(props) {
  const event = props.event;
  if (!event) {
    return (
      <ErrorAlert>
        <p>Loading...</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const event = await getDetailEvent(context.params.eventId);
  if (!event.data) {
    return { notFound: true };
  }
  return {
    props: { event: event.data },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { eventId: "65868f44b4166a87ad257d60" } }],
    fallback: true,
  };
}

export default EventDetailPage;
