
import { observable, computed, action} from 'mobx';
import Fetch from '../utils/Fetch'

class shopCar {
  @observable 
  data = [];
 
  constructor() {
    Fetch.post('http://192.168.0.10:8088/cart/findShoppingCart',{
        brcNo:'2',
        userNo:'1',
      }).done((data)=>{
        if (data.retCode == '1') {
          const dataSource = data.shoppingCartListReturnVO;
          for (const i in dataSource) {
            dataSource[i]['checked'] = false
          }
          this.data.replace(dataSource)
        }
      })
  }

  @action
  minus(index) {
    this.data[index].count -= 1;
  };
  @action
  plus(index){
    this.data[index].count += 1;
  };

  @action
  check(index,checked) {
    this.data[index].checked = checked;
  };

  @action
  selectAll(checked) {
    console.log(checked)
    console.log(this.data.length)

    for (let i = 0;i <= this.data.length ;i ++ ) {
            console.log(i)

    }
  }

  @computed
  get count(){

    return this.data.reduce((a, b) => {
      console.log(a)
      if (b.checked) {
        return a + b.count;
      }
      else {
        return a;
      }
    }, 0);

  };

  @computed
  get sum() {
    return this.data.reduce((a, b) => {
      if (b.checked) {
        return a + b.count * b.oldPrice;
      }
      else {
        return a;
      }
    }, 0);
  };

}

export default shopCar
