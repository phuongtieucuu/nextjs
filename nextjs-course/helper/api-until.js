export async function getEvent() {
  const respone = await fetch("http://localhost:3001/v1/api/event");
  return await respone.json();
}

export async function getAllEvent() {
  const respone = await getEvent();
  return respone;
}

export async function getFeaturedEvents() {
  const respone = await getEvent();
  return await respone.data.filter((event) => event.isFeatured);
}

export async function getDetailEvent(id) {
  const respone = await fetch(`http://localhost:3001/v1/api/event/${id}`);
  return await respone.json();
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const respone = await getEvent();
  let filteredEvents = respone.data.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
