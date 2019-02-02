import React, {Component, Fragment} from 'react';
import PostForm from "../../components/PostForm/PostForm";
import axios from '../../axios-instances';

class AddPost extends Component {
    addPost = post => {
        axios.post('posts.json', post).then(()=>{
            this.props.history.replace('/');
        })
    };

    render() {
        return (
            <Fragment>
                <h1>Add Post</h1>
                <PostForm submit={this.addPost} />
            </Fragment>
        );
    };
}

export default AddPost;