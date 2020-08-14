import React, { Fragment } from 'react';
import PostService from '../../services/PostService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen, faFile } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

class ListPosts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    let breadcrumbs = <Fragment>
                        <Link to="/" className="text-white text-sm hover:text-gray-200 duration-200">Dashboard</Link>
                        <span className="text-indigo-500"> / </span>
                        <span className="text-white text-base underline cursor-default">Posts</span>
                      </Fragment>
    this.props.onPageChange('Posts', breadcrumbs);
    PostService.getPosts().then(response => {
      this.setState({
        posts: response.data,
        isLoaded: true
      });
    })
  }

  render() {
    let tbody = [];
    if (this.state.isLoaded) {
      tbody = this.state.posts.map((posts, index) => 
        <tr key={posts.id}>
          <td className="border-t border-gray-200 px-6 py-2">#{posts.id}</td>
          <td className="border-t border-gray-200 px-6 py-2">{posts.title.slice(0, 40)}</td>
          <td className="border-t border-gray-200 px-6 py-2">{posts.body.slice(0, 40)}</td>
          <td className="border-t border-gray-200 px-6 py-2">{posts.userId}</td>
          <td className="border-t border-gray-200 px-6 py-2">
            <div className="inline-flex">
              <Link to={`/posts/${posts.id}`} className="bg-green-500 hover:bg-green-500 text-white px-3 py-1 rounded-l text-sm duration-300 focus:outline-none">
                <FontAwesomeIcon icon={faPen} />
              </Link>
              <button className="bg-red-500 hover:bg-red-400 text-white px-3 py-1 rounded-r text-sm duration-300 focus:outline-none">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </td>
        </tr>
      );
    } else {
      for(let i = 0; i< 20; i++) {
        tbody.push(
          <tr className="animate-pulse" key={i}>
            <td className="border-t border-gray-200 px-6 py-2"><div className="h-4 bg-gray-400 rounded"></div></td>
            <td className="border-t border-gray-200 px-6 py-2"><div className="h-4 bg-gray-400 rounded"></div></td>
            <td className="border-t border-gray-200 px-6 py-2"><div className="h-4 bg-gray-400 rounded"></div></td>
            <td className="border-t border-gray-200 px-6 py-2"><div className="h-4 bg-gray-400 rounded"></div></td>
            <td className="border-t border-gray-200 px-6 py-2"><div className="h-4 bg-gray-400 rounded"></div></td>
          </tr>
        );
      }
    }

    return (
      <div className={`"w-full bg-white rounded-lg mb-5 shadow`}>
        <div className="flex text-gray-900 items-center justify-between w-auto rounded-t-lg px-6 py-5 font-bold text-lg">
          List of posts
          <div>
            <button className="shadow bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-2 rounded text-sm duration-300 focus:shadow-outline focus:outline-none">
              <FontAwesomeIcon icon={faFile} /> New Post
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-100 border-t border-gray-200 text-gray-500 uppercase text-left text-xs font-bold">
                <th className="px-6 py-2">Id</th>
                <th className="px-6 py-2">Title</th>
                <th className="px-6 py-2">Body</th>
                <th className="px-6 py-2 w-24">User Id</th>
                <td className="px-6 py-2 w-0">Actions</td>
              </tr>
            </thead>
            <tbody>
              {tbody}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListPosts;