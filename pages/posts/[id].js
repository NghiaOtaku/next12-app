import Link from "next/link";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Head from "next/head";
import { getPostById, getPostIds } from "../../lib/post";
import { Spinner } from "react-bootstrap";
// import { getPostIds, getPostById } from "../../lib/post";
// import { useRouter } from "next/router";
// import Spinner from "react-bootstrap/Spinner";
// import spinnerStyles from "../../styles/Spinner.module.css";

const Post = ({ post }) => {
  const router = useRouter();
  // console.log("router", router);

  if (router.isFallback) {
    return (
      <Spinner animation="border" role="status" variant="dark">
        <span className="sr-only">LOADING ....</span>
      </Spinner>
    );
  }

  return (
    <div>
      <Head>
        <title>{router.query.id}</title>
      </Head>
      <Layout>
        <Card className="my-3 shadow">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Link href="/posts">
              <Button variant="dark">Back</Button>
            </Link>
          </Card.Body>
        </Card>
      </Layout>
    </div>
  );
};

export const getStaticPaths = async () => {
  const paths = await getPostIds(5);
  console.log(paths);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }, ...props) => {
  console.log("params", params);
  console.log("props", props);

  const post = await getPostById(params.id);

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
};

export default Post;
