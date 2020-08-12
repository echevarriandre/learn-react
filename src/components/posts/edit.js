import React from 'react';

class EditPost extends React.Component {
    render() {
        let id = this.props.match.params.id;

        return <h1 className="text-xl">Edit Post #{id}</h1>
    }
}

export default EditPost;