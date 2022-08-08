import React from "react";
import "./SearchBox.css";

const SearchBox = (props) => {
  const { className, placeholder, onChangeHandler } = props;
  return (
    <input
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}
    ></input>
  );
};

// export class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className={`search-box ${this.props.className}`}
//         type='search'
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       ></input>
//     );
//   }
// }

export default SearchBox;
