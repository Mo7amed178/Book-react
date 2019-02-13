import React, { Component } from 'react';
import { stat } from 'fs';


class Book extends Component {

    state = {
        hide: 'false'
    }
    hideBook = () => {
        if (this.state.hide === 'false') {
            this.setState({ hide: 'hidden' })
        } else {
            this.setState({ hide: 'false' })
        }
    }

    render() {

        return (

            <div>
                <h1 onClick={this.hideBook}> <strong>Title:</strong> {this.props.book.title}</h1>
                <p className={this.state.hide}> <strong>ISBN: </strong> {this.props.book.isbn}</p>
                <p className={this.state.hide}><strong>Subtitle: </strong> {this.props.book.subtitle}</p>
                <p className={this.state.hide}><strong> Author: </strong>{this.props.book.author}</p>
                <p className={this.state.hide}><strong> Published: </strong>{this.props.book.published}</p>
                <p className={this.state.hide}><strong> Publisher: </strong>{this.props.book.publisher}</p>
                <p className={this.state.hide}> <strong>Number of Pages: </strong>{this.props.book.pages}</p>
                <p className={this.state.hide}><strong> Description: </strong>{this.props.book.description}</p>
                <a className={this.state.hide} href={this.props.book.website}><strong> Website: </strong>{this.props.book.website} </a> <br /> <br />
                <i>***********************(Click on the Title to Show or Hide the Information)************************</i>
            </div>

        )

    }
}
export default Book;