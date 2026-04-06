import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { productsData, purchaseCategoriesData } from '../../data/mockData';
import {
  setSeatQuantity,
  setSelectedAction,
  setSelectedCustomer,
  toggleRenewalSelection,
} from '../../store/renewalsSlice';
import RenewalsActionCards from './RenewalsActionCards';
import RenewalsBenefits from './RenewalsBenefits';
import RenewalsBrowsePanel from './RenewalsBrowsePanel';
import RenewalsCustomerFilter from './RenewalsCustomerFilter';
import RenewalsHero from './RenewalsHero';
import RenewalsRenewPanel from './RenewalsRenewPanel';
import RenewalsSeatPanel from './RenewalsSeatPanel';
import RenewalsUpgradePanel from './RenewalsUpgradePanel';

const Renewals = () => {
  const dispatch = useDispatch();
  const {
    actions,
    benefits,
    managedSubscriptions,
    tierPlans,
    selectedAction,
    selectedCustomer,
    selectedRenewalIds,
    seatQuantities,
  } = useSelector((state: RootState) => state.renewals);

  const customerOptions = useMemo(
    () => ['All Customers', ...Array.from(new Set(managedSubscriptions.map((subscription) => subscription.customer)))],
    [managedSubscriptions]
  );

  const filteredSubscriptions = useMemo(() => {
    if (selectedCustomer === 'All Customers') return managedSubscriptions;
    return managedSubscriptions.filter((subscription) => subscription.customer === selectedCustomer);
  }, [managedSubscriptions, selectedCustomer]);

  return (
    <div className="mx-auto flex h-full max-w-6xl flex-col gap-5">
      <RenewalsHero />

      <RenewalsActionCards
        actions={actions}
        selectedAction={selectedAction}
        onSelect={(id) => dispatch(setSelectedAction(id))}
      />

      {selectedAction === 'renew' && (
        <RenewalsRenewPanel
          subscriptions={filteredSubscriptions}
          selectedIds={selectedRenewalIds}
          onToggle={(id) => dispatch(toggleRenewalSelection(id))}
          headerRight={
            <RenewalsCustomerFilter
              value={selectedCustomer}
              options={customerOptions}
              onChange={(value) => dispatch(setSelectedCustomer(value))}
            />
          }
        />
      )}

      {selectedAction === 'add_seats' && (
        <RenewalsSeatPanel
          subscriptions={filteredSubscriptions}
          seatQuantities={seatQuantities}
          onQuantityChange={(id, quantity) => dispatch(setSeatQuantity({ id, quantity }))}
          headerRight={
            <RenewalsCustomerFilter
              value={selectedCustomer}
              options={customerOptions}
              onChange={(value) => dispatch(setSelectedCustomer(value))}
            />
          }
        />
      )}

      {selectedAction === 'upgrade' && <RenewalsUpgradePanel plans={tierPlans} />}

      {selectedAction === 'browse' && (
        <RenewalsBrowsePanel
          categories={purchaseCategoriesData as RootState['purchase']['categories']}
          products={productsData as RootState['purchase']['products']}
        />
      )}

      <RenewalsBenefits benefits={benefits} />
    </div>
  );
};

export default Renewals;
