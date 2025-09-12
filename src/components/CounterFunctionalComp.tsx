import { Component, type ReactNode } from "react";

class CounterFunctionalComp extends Component {
  state = { count: 0 };
  constructor(props: {}) {
    super(props);
    //this.state = { count: 0 }; //this works too
  }

  render(): ReactNode {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update Count
        </button>{" "}
        {this.state.count}
      </div>
    );
  }
}

export default CounterFunctionalComp;
