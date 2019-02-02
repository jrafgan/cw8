import React, {Component, Fragment} from 'react';
import axios from "../../axios-instances";
import PostForm from "../../components/PostForm/PostForm";

class EditPost extends Component {
    state = {
        id: '',
        post: null
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id) {
            axios.get('posts/' + id + '.json').then(response => {
                this.setState({id, post: response.data});
            });
        }
    };

    editPost = post => {
        axios.put('posts/' + this.props.match.params.id + '.json', post).then(response => {
            this.props.history.push('/');
            this.setState({post: response.data});
        });
        console.log('EDIT MODE', post);
    };

    render() {
        const postInfo = {...this.state.post, id: this.state.id};
        return (
            <Fragment>
                <h1>Edit Post</h1>
                <PostForm data={postInfo} submit={this.editPost} />
            </Fragment>
        );
    };
}

export default EditPost;