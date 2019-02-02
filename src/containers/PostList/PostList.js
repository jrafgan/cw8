import React, {Component, Fragment} from 'react';
import ShortPost from "../../components/Post/ShortPost";
import axios from '../../axios-instances';

class PostList extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        axios.get('posts.json').then(response => {
            const posts = Object.keys(response.data).map(id => {
                return {...response.data[id], id};
            });
            this.setState({posts});
        });
    };

    readHandler= id => {
      this.props.history.push('/posts/' + id);
    };

    render() {
        if (!this.state.posts) return null;

        const posts = this.state.posts.map(post=>(
                <ShortPost
                    key={post.id}
                    title={post.title}
                    description={post.description}
                    readClicked={() => this.readHandler(post.id)}
                />
            ));
        return (
            <Fragment>
                <h1>Home</h1>
                {posts}
            </Fragment>
        );
    }
}

export default PostList;