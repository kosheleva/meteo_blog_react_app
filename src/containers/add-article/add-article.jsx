import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./add-article.css";

import { fetchCategories, fetchTags, save } from "../../actions";

const mapStateToProps = (state) => {
  const { categories, tags } = state;

  return {
    categories,
    tags,
  };
};

const mapDispatchToProps = (dispatch) => ({
  save: bindActionCreators(save, dispatch),
  fetchCategories: bindActionCreators(fetchCategories, dispatch),
  fetchTags: bindActionCreators(fetchTags, dispatch),
});

class AddArticle extends Component {
  componentDidMount() {
    const { fetchCategories, fetchTags } = this.props;
    fetchCategories();
    fetchTags();
  }

  handleSaveArticle(e) {
    e.preventDefault();

    const { save } = this.props;

    const formData = new FormData(e.target);
    // for test project there are no registration/login yet, so just passing id from client side
    // in correct way, backend should take it from access token
    formData.append("author_id", 5);

    let data = {
      post: {},
      tags: [],
    };

    for (let [key, value] of formData.entries()) {
      if (key === "tags") {
        data.tags.push(value);
      } else {
        data.post[key] = value;
      }
    }

    data.post.is_visible = data.post.is_visible ? true : false;

    save(data).then((x) => {
      window.location.href = "/blog";
    });
  }

  render() {
    const { categories } = this.props.categories;
    const { tags } = this.props.tags;

    return (
      <>
        <div className="container">
          <Form
            className="form_container"
            onSubmit={this.handleSaveArticle.bind(this)}
          >
            <Form.Group className="mb-3" controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <Form.Select aria-label="Category" name="category_id">
                <option>Choose category...</option>
                {categories &&
                  categories.length &&
                  categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTags">
              <Form.Label>Tags</Form.Label>
              <br />
              {tags &&
                tags.length &&
                tags.map((tag) => (
                  <Form.Check
                    key={tag.id}
                    inline
                    label={tag.title}
                    name="tags"
                    value={tag.id}
                    type="checkbox"
                    id={`inline-checkbox-${tag.id}`}
                  />
                ))}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContent">
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={10} name="content" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formVisibility">
              <Form.Check
                type="switch"
                id="is_visible"
                label="Visibility"
                name="is_visible"
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="outline-light" type="submit">
                <span className="article_btn_title">Add article</span>
              </Button>{" "}
            </div>
          </Form>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddArticle);
