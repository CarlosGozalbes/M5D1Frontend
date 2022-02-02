import React, { Component } from "react";
import { Card } from "react-bootstrap";
import BlogAuthor from "../blog-author";
import { Link } from "react-router-dom";
import "./styles.css";
export default class BlogItem extends Component {
  
  
  
  
  render() {
    const { title, cover, author, _id } = this.props;
    
    
    const downloadPDF = async () => {
      try {
        const apiUrl = process.env.REACT_APP_BE_URL
        let response = await fetch(`${apiUrl}/blogPosts/${_id}/downloadPDF`, {
          method: "GET",
        })
        
        
      } catch (error) {
        console.log(error)
      }
    }
    
    return (
      <Card className="blog-card">
        <Card.Img variant="top" src={cover} className="blog-cover" />
        <Card.Body>
          <Link to={`/blogPost/${_id}`} className="blog-link">
            <Card.Title>{title}</Card.Title>
          </Link>
        </Card.Body>
        <Card.Footer>
          <BlogAuthor {...author} />
          <button onClick={downloadPDF}>Download PDF</button>
        </Card.Footer>
      </Card>
    );
  }
}
