import React from "react";
import nav from "./components/nav";
import axios from "axios";
import MainCard from "./components/playerCard";
import PlayersCard from "./components/card";

class App extends React.Component {
  state = {
    data:[],
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')

      .then(res => {
        console.log("players data...", res);
        this.setState({ data: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    // console.log(res.data);
    return (
      <div>
        <nav />
        <PlayersCard data={this.state.data} />
        {this.state.data.map(user => (
          <MainCard key={user.id} data={user} />
        ))}
      </div>
    );
  }
}

export default App;
