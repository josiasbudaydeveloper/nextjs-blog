import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../utils/posts';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import Date from '../../components/date';

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  console.log(postData);

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={`${postData.title} ${postData.date}`} key="desc" />
        <meta property="og:title" content={postData.title} />
        <meta
          property="og:description"
          content={`${postData.title} ${postData.date}`}
        />
        <meta
          property="og:image"
          content="https://josiasbudaydeveloper-blog-app.vercel.app/_next/image?url=%2Fimages%2Fprofile.jpg&w=256&q=75"
        />
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}