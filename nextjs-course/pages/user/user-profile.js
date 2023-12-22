export default function UserProfile(props) {
  const { username } = props;
  return <h1>{username}</h1>;
}

export async function getServerSideProps() {
  return {
    props: {
      username: "Huy",
    },
  };
}
