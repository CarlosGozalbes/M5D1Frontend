import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
/* import posts from "../../../data/posts.json"; */
export default class BlogList extends Component {
  state = { blogPosts: [] };
  fetchBlogs = async () => {
    try {
      const apiUrl = process.env.REACT_APP_BE_URL;
      let response = await fetch(`${apiUrl}/blogsPosts`, {
        method: "GET",
      });
      if (response.ok) {
        let blogPosts = await response.json();
        console.log("Blogsposts", blogPosts);
        this.setState({ blogPosts: blogPosts });
      }
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount = () => {
    this.fetchBlogs();
  };

  render() {
    return (
      <Row>
        {blogPosts.map((blogPost) => (
          <Col  md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={blogPost._id} {...blogPost} />
          </Col>
        ))}
      </Row>
    );
  }
}
