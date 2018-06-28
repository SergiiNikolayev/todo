import React from 'react';
import {VisibilityFilters} from './actions'

export const getFilteredItems = (store) => {

/*  const currentFilter = store.currentFilter;// достаем текущий фильтр
  const items = store.items;

  // в зависимости от того какой фильтр, производим соответсвующие действия
  if (currentFilter === VisibilityFilters.SORT_RED) {
    return items.filter(item => items.isDone);
  } else if (currentFilter === VisibilityFilters.SORT_BLACK) {
    return items.filter(item => !items.isDone);
  } else if (currentFilter === VisibilityFilters.SORT_ALL) {
    return items.filter(item => item);
  } else {
    return items.filter(item => item);
  }*/

  const currentFilter = store.filter.currentFilter;// достаем текущий фильтр
  const items = store.items.list;
  console.log(currentFilter);

  // в зависимости от того какой фильтр, производим соответсвующие действия
  if (currentFilter === VisibilityFilters.SORT_RED) {
    return items.filter(item => item.isDone);
  } else if (currentFilter === VisibilityFilters.SORT_BLACK) {
    return items.filter(item => !item.isDone);
  } else {
    return items;
  }
};
