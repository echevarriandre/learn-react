import React, { Fragment } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    let breadcrumbs = <Fragment>
                        <Link to="/" className="text-white text-sm hover:text-indigo-200 duration-200">Dashboard</Link>
                        <span className="text-indigo-500"> / </span>
                        <Link to="/posts" className="text-white text-sm hover:text-indigo-200 duration-200">Posts</Link>
                        <span className="text-indigo-500"> / </span>
                        <span to={`/posts/${id}`} className="text-white text-base underline cursor-default">Edit #{id}</span>
                      </Fragment>
    this.props.onPageChange('Posts', breadcrumbs);
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(response => {
        this.setState({
          post: response.data,
          isLoaded: true
        });
      })
  }

  render() {
    let title = null;
    let info = [];
    if (this.state.isLoaded) {
      title = `Edit post #${this.state.post.id}`
      info = <Fragment>
              <p className="mb-2"><span className="text-indigo-500">Id</span>: {this.state.post.id}</p>
              <p className="mb-2"><span className="text-indigo-500">Title</span>: {this.state.post.title}</p>
              <p className="mb-2"><span className="text-indigo-500">Body</span>: {this.state.post.body}</p>
              <p className="mb-2"><span className="text-indigo-500">User Id</span>: {this.state.post.userId}</p>
            </Fragment>
    }
    else {
      title = <div className="bg-gray-400 rounded w-64 px-10 py-3 text-center mb-2"></div>
      info = <Fragment>
              <div className="bg-gray-400 rounded w-64 px-10 py-3 text-center mb-2"></div>
              <div className="bg-gray-400 rounded w-2/4 px-10 py-3 text-center mb-2"></div>
              <div className="bg-gray-400 rounded w-3/5 px-10 py-3 text-center mb-2"></div>
              <div className="bg-gray-400 rounded w-32 px-10 py-3 text-center mb-2"></div>;
            </Fragment>
    }
    
    return (
      <div className={`"w-full bg-white rounded-lg mb-5 shadow`}>
        <div className="flex text-gray-900 items-center justify-between w-auto rounded-t-lg px-6 py-5 font-bold text-lg">
          <span className={`${this.state.isLoaded ? '' : 'animate-pulse'}`}>{title}</span>
          <div className="inline-flex">
            <button className="bg-green-500 hover:bg-green-400 text-white px-3 py-2 rounded-l text-sm duration-300 focus:outline-none">Save</button>
            <button className="bg-red-500 hover:bg-red-400 text-white px-3 py-2 rounded-r text-sm duration-300 focus:outline-none">Delete</button>
          </div>
        </div>
        <div className={`px-6 py-5 ${this.state.isLoaded ? '' : 'animate-pulse'}`}>
          {info}
        </div>
      </div>
    );
  }
}

export default EditPost;