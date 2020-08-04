import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 100,
      currentTime: new Date().toLocaleTimeString()
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1,
      currentTime : new Date().toLocaleTimeString()
    });
  }


  render(){
    return(
      <>
        <h1 style={{textAlign: "center"}}>
         Sekarang Jam: { this.state.currentTime } &nbsp;&nbsp;&nbsp;&nbsp; Hitung Mundur : {this.state.time}
        </h1>
      </>
    )
  }
}

export default Timer