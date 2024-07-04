import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchArticle } from "../../actions";

import Article from "../../components/article/article.jsx";

const mapStateToProps = (state) => {
  const { articles } = state;

  return {
    articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchArticle: bindActionCreators(fetchArticle, dispatch),
});

class ArticleDetails extends Component {
  componentDidMount() {
    const { fetchArticle } = this.props;

    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf("/") + 1);

    fetchArticle(id);
  }

  render() {
    const article = this.props.articles?.article;

    return (
      <>
        <div className="container">
          {article && <Article article={article} cutTo={null} handler={null} />}
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetails);
