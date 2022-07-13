import React, {useState} from 'react';
import CategorySelect from '../../components/CategorySelect';
import Establishment from '../../components/Establishment';
import EstablishmentAutoComplete from '../../components/EstablishmentAutoComplete/index';
import './index.less';

function DashboardContainer() {
  
  const [categoryCode, setCategoryCode] = useState(null);
  
  const onCategoryChange = (newCategoryCode) => {
    setCategoryCode(newCategoryCode);
  };
  
  return (
    <div className="my-dashboard">
      <CategorySelect onChange={onCategoryChange} />
      <EstablishmentAutoComplete categoryCode={categoryCode} />
      <Establishment />
    </div>
  );
}

export default DashboardContainer;
