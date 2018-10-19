/** @format */

import {action, configure, decorate, observable, computed} from 'mobx';
import {observer} from 'mobx-react';

configure({enforceActions: true});

class Store {
  pranksLog = [];

  clearList() {
    this.pranksLog = [];
  }

  pushPrank(e) {
    this.pranksLog.push(e);
  }
  get totalSum() {
    let sum = 0;
    this.pranksLog.map(e => (sum = sum + e.salary));
    return sum;
  }
}

decorate(Store, {
  pranksLog: observable,
  clearList: action,
  pushEmployee: action,
  totalSum: computed,
});

const appStore = new Store();

// class Controls extends Component {
//     addEmployee = ()=> {
//       const name = prompt("The name:")
//       const salary = parseInt(prompt("The salary:"), 10)
//       this.props.store.pushEmployee({name,salary})
//     }

//     clearList = ()=> {
//       this.props.store.employeesList = []
//     }

//     render() {
//       return(<div className="controls">
//         <button onClick=>clear table</button>
//         <button>add record</button>
//       </div>)
//     }
//   }

// class Table extends Component {
//     render() {
// const  { store } = this.props
//         return (
// <table>
// <tbody>
//           {store.employeesList.map((e, i) =>
//             <Row
//               key={i}
//               data={e}
//             />
//           )}
//         </tbody>
// <tfoot>
// <tr>
//  <td>TOTAL:</td>
//  <td>{Store.totalSum}</td>
//</tr></tfoot> */}
//</table>
//

//         )
//     }
// }
//
// Table = observer(Table)
