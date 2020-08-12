import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

class Content extends React.Component {

  render(){
    return (
      <Fragment>
        <header className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-white">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="rounded-lg h-64 mx-5">
                Hello World!
              </div>
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}

export default Content;