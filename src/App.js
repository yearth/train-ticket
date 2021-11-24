import React, { Component } from "react";

class Resizable extends Component {
  state = {
    size: [window.innerWidth, window.innerHeight]
  };

  onResize = () => {
    this.setState({ size: [window.innerWidth, window.innerHeight] });
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    document.title = this.state.size.join("x");
  }

  componentDidUpdate() {
    document.title = this.state.size.join("x");
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  render() {
    return this.props.render(this.state.size);
  }
}

class Foo extends Component {
  render() {
    console.log("size", this.props.size);
    const [width, height] = this.props.size;

    return (
      <div>
        {width}x{height}
      </div>
    );
  }
}
class App extends Component {
  render() {
    return <Resizable render={size => <Foo size={size} />} />;
  }
}

export default App;
