import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ title, data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="An App to view events in different places"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <Image />
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/about-us">About Us</a>
        </nav>
      </header>

      <main className={styles.main}>
        {data.map((data) => {
          return (
            <a key={data.id} href={`/events/${data.id}`}>
              <Image width="200" height="200" src={data.image} alt={data.id}/>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </a>
          );
        })}
      </main>

      <footer className={styles.footer}>
        <p>This is my footer</p>
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await import("/data/data.json");
  return {
    props: {
      title: "Hello Abhishek!",
      data: data.events_categories,
    },
  };
}
