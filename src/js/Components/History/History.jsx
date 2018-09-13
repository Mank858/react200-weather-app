import React from 'react';

export default class History extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { history } = this.props;
    console.log(history)
    return (
      <div className="card border-info">
        <div className="card-header text-info bg-gradient-info">Search History</div>
        <div className='card-body scroll'>
          <ul className="list-group list-group-flush">
            {history ? history.map((item) => {
              return <li className="list-group-item items">
                {item.searchedCity}
                <span className='searchItems'>{item.date}</span>
                <br />
                <span className='searchItems'>{item.time}</span>
              </li>
            }) : <span></span>
            }
          </ul>
        </div>
      </div>
    );
  }
}