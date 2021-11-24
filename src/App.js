import React, { Component } from "react";

const resizableHOC = Child => {
  return class Wrapper extends Component {
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
      const size = this.state.size;
      return <Child size={size} />;
    }
  };
};

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
    const [width, height] = this.props.size;
    return (
      <div>
        {width}x{height}
      </div>
    );
  }
}

const WrapperedFoo = resizableHOC(Foo);

class App extends Component {
  render() {
    // return <Resizable render={size => <Foo size={size} />} />;
    return <WrapperedFoo />;
  }
}

export default App;
