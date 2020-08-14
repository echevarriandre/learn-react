import React, { Fragment } from 'react';
import PostService from '../../services/PostService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      isLoaded: false,
      body: '',
      title: ''
    }

    this.handleInput = this.handleInput.bind(this);
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
    PostService.getPostById(id)
      .then(response => {
        this.setState({
          post: response.data,
          title: response.data.title,
          body: response.data.body,
          isLoaded: true
        });
      })
  }

  handleInput(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    
    this.setState({
      [name]: value
    })
  }

  save() {
    PostService.updatePost({ 'title': this.title, 'body': this.body }, this.state.post.id)
      .then(response => {
        console.log('Success');
      })
      .catch(error => {
        console.log('Error');
      });
  }

  delete() {
    PostService.deletePost(this.state.post.id)
      .then(response => {
        console.log('Success');
        this.props.history.push('/posts');
      })
      .catch(error => {
        console.log('Error');
      });
    
      
  }

  render() {
    let title = null;
    let buttonsForm = '';
    let deleteButton = '';
    let info = [];
    if (this.state.isLoaded) {
      title = `Edit post #${this.state.post.id}`
      info = <Fragment>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Title
                </label>
                <input 
                  name="title"
                  onChange={this.handleInput}
                  value={this.state.title}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                  type="text"
                >
                </input>
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Body
                </label>
                <input
                  name="body"
                  onChange={this.handleInput}
                  value={this.state.body}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                  type="text"
                >
                </input>
              </div>
              <span className="mb-2"><span className="text-gray-700 text-sm font-bold"> User Id</span> {this.state.post.userId}</span>
            </Fragment>

      buttonsForm = <>
                      <button onClick={() => this.props.history.push('/posts')} className="hover:bg-gray-200 text-gray-700 px-3 py-2 rounded text-sm duration-300 focus:outline-none">
                        Return
                      </button>
                      <button onClick={() => this.save()} className="bg-green-500 hover:bg-green-400 text-white px-3 py-2 ml-4 rounded text-sm duration-300 focus:outline-none">
                        Save
                      </button>
                    </>
      
      deleteButton = <div className="inline-flex">
                        <button onClick={() => this.delete()} className="bg-red-500 hover:bg-red-400 text-white px-3 py-2 rounded text-sm duration-300 focus:outline-none">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
    }
    else {
      title = 'Loading...';
      info =  <div className="flex justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-20 w-20 text-indigo-500 text-opacity-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
    }
    
    return (
      <div className={`"w-full bg-white rounded-lg mb-5 shadow`}>
        <div className="flex text-gray-900 items-center justify-between w-auto rounded-t-lg px-6 py-5 font-bold text-lg">
          <span className={`${this.state.isLoaded ? '' : 'animate-pulse'}`}>{title}</span>
          {deleteButton}
        </div>
        <div className={`px-6 py-5`}>
          {info}
        </div>
        <div className="px-6 py-4 flex justify-end">
          {buttonsForm}
        </div>
      </div>
    );
  }
}

export default EditPost;