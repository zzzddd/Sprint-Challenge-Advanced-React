import React from "react";

import axios from "axios";


class App extends React.Component {
  state = {
    data: "",
    user: "zzzddd",
    followers: []
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
    console.log("Followers", this.state.followers);
    return (
      <div>
       dataheare
      </div>
    );
  }
}

export default App;
