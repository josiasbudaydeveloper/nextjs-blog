import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../utils/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="Hi, I'm Josias Buday Dias, I'm a Full Stack JS Developer." key="desc" />
        <meta property="og:title" content="Josias Buday Dias" />
        <meta
          property="og:description"
          content="Hi, I'm Josias Buday Dias, I'm a Full Stack JS Developer."
        />
        <meta
          property="og:image"
          content="https://josiasbudaydeveloper-blog-app.vercel.app/_next/image?url=%2Fimages%2Fprofile.jpg&w=256&q=75"
        />
      </Head>

      <section className={utilStyles.description}>
        Hi, I'm Josias Buday Dias, I'm a <b>Full Stack JS Developer</b>. I the <b>main</b> technologies I <b>currently know</b> are: <br/>
        <b>React.js, Next.js, Express.js, MongoDB</b> and <b>PostGreSQL</b>
      </section>
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}