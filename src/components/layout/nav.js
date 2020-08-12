import React from 'react';

class Nav extends React.Component {

  render() {
      return (
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg" alt="Workflow logo"/>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline">
                    <button className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 uppercase">Dashboard</button>
                    <button className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 uppercase">List</button>
                    <button className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 uppercase">Add</button>
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