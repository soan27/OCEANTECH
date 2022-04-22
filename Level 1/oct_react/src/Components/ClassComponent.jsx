import React from "react";
// import "./App.js";
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "contructor",
      stateChange: ""
    }
    console.log("1")
    console.log("Gọi đầu tiên " + this.state.show)
  }
  static getDerivedStateFromProps(props, state) {
    state = {
      show: "getDerivedStateFromProps",
      stateChange: props.stateChange
    }
    console.log("2")
    console.log("Constructor gọi đầu tiên, Gọi " + state.show + " state" + state.stateChange + " trước khi render ra HTML ");
  }
  componentDidMount(state) {
    state = {
      show: "componentDidMount", stateChange: ""
    }
    console.log("3")
    console.log("Constructor gọi đầu tiên, Gọi getDerivedStateFromProps trước khi render ra HTML, Render HTML, hiển thị HTML xong sẽ nhìn thấy " + state.show)
  }

  changeClassComponentState = (state) => {
    state = {
      stateChange: "Click change state"
    }
    console.log("5")
    console.log(this.state.stateChange);
  }
  componentDidUpdate() {
    console.log("6");
    console.log("Thấy dòng này sau khi thấy giao diện được render xong");
  }

  componentWillUnmount() {
    alert("Class component unmount!");
  }
  render(state) {
    state = {
      show: "render", stateChange: ""
    };
    console.log("4")
    console.log("Constructor gọi đầu tiên, Gọi getDerivedStateFromProps trước khi render ra HTML, " + state.show + " HTML")
    return (
      <div>
        <button type="button" className="btn-component__change" onClick={this.changeClassComponentState}>Đổi Class Component props</button>
        <p>Xin chào ReactJs, hiển thị HTML sử dụng Class Components Import</p>
      </div>
    )
  }
}

export default ClassComponent

// export default function ClassComponent() {
//   return (
//     <div>
//       <p>Xin chào ReactJs, hiển thị HTML sử dụng Class Components Import</p>
//     </div>
//   );
// }
// import React from "react";

// class ClassComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { show: "constructor", stateChange: "" };
//     console.log("Gọi đầu tiên " + this.state.show);
//   }

//   changeClassComponentState = () => {
//     this.setState = ({ stateChange: "Click change state" });
//   }

//   static getDerivedStateFromProps(props, state) {
//     state = { show: "getDerivedStateFromProps", stateChange: "props.stateChange" };
//     console.log("Constructor gọi đầu tiên, Gọi " + state.show + " trước khi render ra HTML");
//     console.log(state.stateChange);
//   }

//   componentDidMount(state) {
//     state = { show: "componentDidMount", stateChange: "" };
//     console.log("Constructor gọi đầu tiên, Gọi getDerivedStateFromProps trước khi render ra HTML, Render ra HTML, hiển thị html xong sẽ nhìn thấy " + state.show);
//   }

//   componentDidUpdate() {
//     console.log("Thấy dòng này sau khi thấy giao diện được render xong");
//   }

//   componentWillUnmount() {
//     alert("Class component unmount!");
//   }

//   render(state) {
//     state = { show: "Render", stateChange: "" };
//     console.log("Constructor gọi đầu tiên, Gọi getDerivedStateFromProps trước khi render ra HTML, " + state.show + " ra HTML");
//     return (
//       <div>
//         <button type="button" onClick={this.changeClassComponentState}>Đổi Class Component props</button>
//         <p>Xin chào ReactJS, hiển thị HTML bằng Class Component!</p>
//       </div>
//     );
//   }
// }

// export default ClassComponent;
