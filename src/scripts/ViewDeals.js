import { getDealFilter } from "./getDealFilter";

class ViewDeals {
  constructor(store, template) {
    this.store = store;
    this.template = template;
    this.dealList = document.getElementById("deal-list");
  }

  render(data) {
    if (this.dealList && data.length) {
      const htmlToAppend = this.template.buildDealList(data);
      this.dealList.innerHTML = htmlToAppend;
    }
  }

  update(state) {
    const filteredPoducts = getDealFilter(state,this.store.deals)
    console.log('afer assi', filteredPoducts)
    this.render(filteredPoducts);
  }
}

export default ViewDeals;
