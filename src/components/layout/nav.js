import React from 'react';

import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    let pathname = this.props.location.pathname;
    
    return (
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/"><img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg" alt="Workflow logo"/></Link>
              </div>
              <div className="block">
                <div className="ml-10 flex items-baseline">
                  <Link to="/" className={`${pathname === '/' ? 'text-white bg-gray-900' : 'text-gray-300 hover:bg-gray-700'} px-3 py-2 rounded-md text-sm font-medium focus:outline-none uppercase`}>Dashboard</Link>
                  <Link to="/posts" className={`${pathname === '/posts' ? 'text-white bg-gray-900' : 'text-gray-300 hover:bg-gray-700'} ml-4 px-3 py-2 rounded-md text-sm font-medium hover:text-white focus:outline-none uppercase`}>Posts</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;