import React from 'react';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.onPageChange('Dashboard');
  }

  render() {
    let placeholder = [];
    for (let i = 0; i < 15; i++)
      placeholder.push(
        <div key={i} className="bg-gray-400 rounded w-auto px-10 py-3 text-center"></div>
      )

    return (
      <div className={`"w-full bg-white rounded-lg mb-5 shadow`}>
        <div className="flex text-gray-900 items-center justify-between w-auto rounded-t-lg px-6 py-5 font-bold text-lg">
          Where the learning happens
        </div>
        <div className="px-6 py-5">
          <div className="grid grid-rows-5 animate-pulse grid-flow-col gap-4 content-center align-middle">
            {placeholder}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;