import React, { Component } from "react";
import API from "../../utils/API";
import NavBar from "../../components/Nav";
import Saved from "../saved/index";
import { Col, Row, Container } from "../../components/Grid/index";
import { Alert } from 'reactstrap';


class Search extends Component {
    state = {
        search: { title },
        authors: [],
        description: [],
        image: [],
        link: [],
        error: ""
    };

    componentDidMount() {
        API.getBookTitle()
            .then(res => this.setState({ title: res.data.message }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getBooks(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.message, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));
    };
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <Search></Search>
                <Saved></Saved>
                <Container style = {{ minHeight: "80%" }}>
                    <h1 className = "text-center">Search A Book Title</h1>
                    <Col
                        handleFormSubmit = {this.handleFormSubmit}
                        handleInputChange = {this.handleInputChange}
                        saved = {this.state.saved}
                    />
                    <Row results = {this.state.results} />
                </Container>
            </div>
        );
    }
}

export default Search;