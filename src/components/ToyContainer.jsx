import React from 'react';
import ToyCard from './ToyCard'


// const ToyContainer = () => {
//   listToys = () => {
//     return this.props.toys.map((toy, index )=> <ToyCard key={index} toy={toy}/>)
//   }
//   return(
//     <div id="toy-collection">
//       {this.listToys()}
//     </div>
//   );
// }

class ToyContainer extends React.Component {
  listToys = () => {
    return this.props.toys.map((toy, index )=> <ToyCard key={index} toy={toy}/>)
  }
  render() {
      
    return(
      <div id="toy-collection">
        {this.listToys()}
      </div>
    )
  }
  
}

export default ToyContainer;
