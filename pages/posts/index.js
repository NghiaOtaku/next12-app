import Layout from "../../components/Layout";
import Card from "react-bootstrap/Card";
import { getPosts } from "../../lib/post";
import Link from "next/link";
import Head from "next/head";

const Posts = ({ posts }, props) => {
  // console.log("posts", posts);
  //   console.log("props", props);

  return (
    <div>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Layout>
        {posts.map((post) => (
          <Card key={post.id} className="my-3 shadow">
            <Card.Body>
              <Card.Title>
                {post.id} -- {post.title}
              </Card.Title>
              <Card.Text>{post.body}</Card.Text>
              <Link href={`/posts/${post.id}`} passHref>
                <Card.Link>See more</Card.Link>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </Layout>
    </div>
  );
};

// Get static data from backend /db /api
// Lay du lieu tinh
export const getStaticProps = async () => {
  const posts = await getPosts(10);

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
