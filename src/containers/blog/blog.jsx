import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Button from "react-bootstrap/Button";
import "./blog.css";

import { fetchArticles } from "../../actions";

import Article from "../../components/article/article.jsx";

const mapStateToProps = (state) => {
  const { articles } = state;

  return {
    articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: bindActionCreators(fetchArticles, dispatch),
});

class Blog extends Component {
  componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles();
  }

  handleAddArticleClick = (e) => {
    window.location.href = "/article-add";
  };

  handleArticleDetails = (id) => {
    window.location.href = `/article/${id}`;
  };

  render() {
    const { articles } = this.props.articles;

    return (
      <>
        <div className="container">
          <div className="d-grid gap-2 button_block">
            <Button
              variant="outline-light"
              onClick={this.handleAddArticleClick}
            >
              <span className="article_btn_title">New article</span>
            </Button>{" "}
          </div>

          {articles &&
            articles.length &&
            articles.map((article) => (
              <Article
                article={article}
                cutTo={150}
                handler={this.handleArticleDetails}
              />
            ))}
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
