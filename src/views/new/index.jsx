// import React, { Component } from "react";
// import "react-quill/dist/quill.snow.css";
// import ReactQuill from "react-quill";
// import { Container, Form, Button } from "react-bootstrap";
// import "./styles.css";
// export default class NewBlogPost extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { text: "" };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(value) {
//     this.setState({ text: value });
//   }

//   render() {
//     return (
//       <Container className="new-blog-container">
//         <Form className="mt-5">
//           <Form.Group controlId="blog-form" className="mt-3">
//             <Form.Label>Title</Form.Label>
//             <Form.Control size="lg" placeholder="Title" />
//           </Form.Group>
//           <Form.Group controlId="blog-category" className="mt-3">
//             <Form.Label>Category</Form.Label>
//             <Form.Control size="lg" as="select">
//               <option>Category1</option>
//               <option>Category2</option>
//               <option>Category3</option>
//               <option>Category4</option>
//               <option>Category5</option>
//             </Form.Control>
//           </Form.Group>
//           <Form.Group controlId="blog-content" className="mt-3">
//             <Form.Label>Blog Content</Form.Label>
//             <ReactQuill
//               value={this.state.text}
//               onChange={this.handleChange}
//               className="new-blog-content"
//             />
//           </Form.Group>
//           <Form.Group className="d-flex mt-3 justify-content-end">
//             <Button type="reset" size="lg" variant="outline-dark">
//               Reset
//             </Button>
//             <Button
//               type="submit"
//               size="lg"
//               variant="dark"
//               style={{ marginLeft: "1em" }}
//             >
//               Submit
//             </Button>
//           </Form.Group>
//         </Form>
//       </Container>
//     );
//   }
// }

import "./styles.css";
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export default function NewBlogPost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (data) => {
    try {
      let response = await fetch("http://localhost:3001/blogPosts", {
        //:userId/experience
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Authorization:
            "Bearer",
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if (response.ok) {
        alert("Blog was saved");
      } else {
        alert("There was a problem saving your blog");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (data, e) => {
    console.log(data);
    submitForm(data);
    e.target.reset();
    
  };
  //

  return (
    <Container className="new-blog-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("category", { required: true })}>
          <option value="Health">Health</option>
          <option value="Tech">Tech</option>
          <option value="History">History</option>
          <option value="Psycology">Psycology</option>
          <option value="Finance">Finance</option>
          <option value="Nature">Nature</option>
        </select>
        <input
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
        />
        <textarea {...register("content", { required: true })} />

        <input type="submit" />
      </form>
    </Container>
  );
}