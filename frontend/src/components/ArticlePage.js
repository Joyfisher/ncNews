import React from 'react';
import Comments from './Comments';

const arts = [{
    title: 'What does Jose Mourinho\'s handwriting say about his personality?',
    body: 'Jose Mourinho was at The O2 on Sunday night to watch Dominic Thiem in action against Novak Djokovic. Thiem took the first set before Djokovic fought back to claim the victory, but Manchester United\'s manager was clearly impressed with the Austrian\'s performance.'
}];

class ArticlePage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            comment: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit (e) {
        e.preventDefault();
     //   this.props.ArticlePage(this.state.name);
        this.setState({
            comment: ''
     });
    }
    
    render () {
        return (
            <div id='ArticlePage'>
                {arts[0].title} <br />
                {arts[0].body}
                <Comments />
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Comment:
                        <input type='text' name='comment' value={this.comment} onChange={this.handleInputChange} />
                        </label>
                        <button>Add a Comment</button>
                        </form>
            </div>
        );
    }
}

export default ArticlePage; 