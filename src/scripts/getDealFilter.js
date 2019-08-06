import {getIconId} from './getIcon';

const isArraysSame = (array1, array2) => {
    return array1.length === array2.length && 
     array1.sort().every(function(value, index) { return value === array2.sort()[index]});
}

const buildFormattedProductList = list => {
    return list.reduce((result, product) => {
      if (product === 'Phone') {
        return result;
      }
      const iconId = getIconId(product, true);
      return result.concat(iconId);
    }, []);
  }

export const getDealFilter = (state, deals) => {
    deals.map( deal => {
        deal.formattedProductTypes = buildFormattedProductList(deal.productTypes);
    });
    const {productFilters, providerFilter} = state;
    const hasBothProductAndProviderFilter = providerFilter && productFilters.length >=1;
    const filteredPoducts = deals.filter(deal => {
        return hasBothProductAndProviderFilter ? 
            isArraysSame(deal.formattedProductTypes, productFilters) &&  deal.provider.id === providerFilter
            : isArraysSame(deal.formattedProductTypes, productFilters) || deal.provider.id === providerFilter
    });
    return productFilters.length === 0 && !providerFilter ? deals : filteredPoducts;
}