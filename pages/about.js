export default function About({ data }) {
  return data.data.map((dat) => {
    return <h1>{dat.email}</h1>;
  });
}

export async function getServerSideProps() {
  const res = await fetch("https://reqres.in/api/users?page=1");
  const data = await res.json();

  return { props: { data } };
}
