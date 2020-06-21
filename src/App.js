import React from 'react';

export default class App extends React.Component{
  state = {
    loading: true,
    info: [],
  };

  async componentDidMount(){
    const url = "http://localhost:8000/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({info: data.Artifacts, loading: false});
    //console.log(data);
  }

  render(){
    if (this.state.loading){
      return <div>loading...</div>;
    }
    if (!this.state.info){
      return <div>No such Artifacts</div>;
    }
    return (
      <div> 
        {this.state.info.map(Artifacts => (
          <div key = {Artifacts.uid}>
            <div>{Artifacts.title}</div>
            <div>{Artifacts.details}</div>
            <div>{Artifacts.uid}</div>
            <div>{Artifacts.artifactType}</div>
            <div>{Artifacts.slug}</div>
          </div>
        ))}
      </div>
      );
  }
}
