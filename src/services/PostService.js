import axios from 'axios';

const POST_API_BASE_URL = 'https://jsonplaceholder.typicode.com/posts/';

class PostService {
  getPosts() {
    return axios.get(POST_API_BASE_URL);
  }

  createPost(post) {
    return axios.put(POST_API_BASE_URL, post);
  }

  getPostById(id) {
    return axios.get(POST_API_BASE_URL + id);
  }

  updatePost(post, id) {
    return axios.put(POST_API_BASE_URL + id, post);
  }

  deletePost(id) {
    return axios.delete(POST_API_BASE_URL + id);
  }
}

export default new PostService();