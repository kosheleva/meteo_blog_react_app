import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

const Article = ({ article, cutTo, handler }) => {
  return (
    <Card
      className={"panel_article " + (handler ? "panel_article_clickable" : "")}
      key={article.id}
      onClick={handler ? () => handler(article.id) : () => {}}
    >
      <Card.Body>
        <Card.Title>
          {article.title}
          <Badge bg="info">{article.category.title}</Badge>
        </Card.Title>

        <Card.Text>
          {cutTo && article.content.slice(0, cutTo) + "..."}
          {!cutTo && article.content}
        </Card.Text>

        <Stack direction="horizontal" gap={2}>
          {article.tags &&
            article.tags.length &&
            article.tags.map((tag) => (
              <Badge bg="primary" key={tag.id}>
                {tag.title}
              </Badge>
            ))}
        </Stack>
        <div className="author_block">Author: {article.author.nickname}</div>
      </Card.Body>
    </Card>
  );
};

export default Article;
