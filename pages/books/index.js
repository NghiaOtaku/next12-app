import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Layout from "../../components/Layout";
import Link from "next/link";
import { getBooks } from "@/lib/book";

const Book = ({ books }) => {
  return (
    <Layout>
      {books.map((book) => (
        <Card className="my-3 shadow" key={book.bookContent}>
          <Card.Body>
            <Card.Title>{book.bookName}</Card.Title>
            <Card.Text>{book.bookContent}</Card.Text>
            <Link href="/">
              <Button variant="dark">Back</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Layout>
  );
};

export const getStaticProps = async () => {
  const books = await getBooks();

  return {
    props: {
      books,
    },
  };
};

export default Book;
