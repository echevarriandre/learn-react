import React, { Fragment, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";

// Components
const Dashboard = React.lazy(() => import('../dashboard'));
const ListPosts = React.lazy(() => import('../posts/list'));
const EditPost = React.lazy(() => import('../posts/edit'));

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.handlePageTitle = this.handlePageTitle.bind(this);
    this.state = {
      title: '',
      breadcrumbs: ''
    }
  }

  handlePageTitle(title, breadcrumbs = '') {
    this.setState({
      title: title,
      breadcrumbs: breadcrumbs
    })
  }

  render(){
    return (
      <Fragment>
        <header className="bg-gray-800 pb-24">
          <div className="flex items-center justify-between max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-white">
              {this.state.title}
            </h1>
            <span>{this.state.breadcrumbs}</span>
          </div>
        </header>
        <main>
          <div className="-m-32 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="rounded-lg h-64 mx-5">
                <Suspense fallback={<div>Loading...</div>}>
                  <Switch>
                    <Route
                      path="/"
                      exact 
                      render={(props) => (
                        <Dashboard {...props} onPageChange={this.handlePageTitle}/>
                      )}
                    />

                    <Route 
                      path="/posts"
                      exact
                      render={(props) => (
                        <ListPosts {...props} onPageChange={this.handlePageTitle}/>
                      )}
                    />
                    
                    <Route 
                      path="/posts/:id"
                      exact
                      render={(props) => (
                        <EditPost {...props} onPageChange={this.handlePageTitle}/>
                      )}
                    />
                  </Switch>
                </Suspense>
              </div>
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}

export default Content;