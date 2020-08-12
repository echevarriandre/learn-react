import React from 'react';
import axios from 'axios';

class ListPosts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({
          posts: response.data,
          isLoaded: true
        });
      })
  }

  render() {
    let isLoaded = true;
    return (
      <div className={`"w-full ${isLoaded ? '' : 'h-64'} bg-white rounded-lg mb-5 shadow`}>
        <div className="flex text-gray-900 items-center justify-between w-auto rounded-t-lg px-6 py-5 font-bold text-lg">
          List of posts
          <div className="flex">
            <button className="shadow bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-2 rounded text-sm duration-300 focus:shadow-outline focus:outline-none">New Post</button>
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
              { this.state.posts.map((posts, index) => 
                <tr key={posts.id}>
                  <td className="border-t border-gray-200 px-6 py-2">{posts.id}</td>
                  <td className="border-t border-gray-200 px-6 py-2">{posts.title.slice(0, 40)}</td>
                  <td className="border-t border-gray-200 px-6 py-2">{posts.body.slice(0, 40)}</td>
                  <td className="border-t border-gray-200 px-6 py-2">{posts.userId}</td>
                  <td className="border-t border-gray-200 px-6 py-2">
                    <div className="inline-flex">
                      <button className="bg-green-600 hover:bg-green-500 text-white px-3 py-2 rounded-l text-sm duration-300 focus:outline-none">
                        Edit
                      </button>
                      <button className="bg-red-500 hover:bg-red-400 text-white px-3 py-2 rounded-r text-sm duration-300 focus:outline-none">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListPosts;