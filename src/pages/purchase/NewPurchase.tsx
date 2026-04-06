import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import {
  addConfiguredProductToCart,
  goToBrowse,
  goToCart,
  goToConfigure,
  placeOrder,
  proceedToReview,
  removeCartItem,
  restartPurchase,
  selectCartTotals,
  selectProduct,
  selectSelectedProduct,
  setAcceptedTerms,
  setAutoRenew,
  setSelectedCategory,
  setSelectedCustomer,
  toggleAddOn,
  updateConfiguration,
} from '../../store/purchaseSlice';
import BrowseStep from './BrowseStep';
import CartStep from './CartStep';
import ConfirmationStep from './ConfirmationStep';
import ConfigureStep from './ConfigureStep';
import PurchaseStepper from './PurchaseStepper';
import ReviewStep from './ReviewStep';

const NewPurchase = () => {
  const dispatch = useDispatch();
  const {
    activeStep,
    categories,
    selectedCategory,
    products,
    customers,
    selectedCustomer,
    configuration,
    cart,
    acceptedTerms,
    autoRenew,
    placedOrder,
  } = useSelector((state: RootState) => state.purchase);
  const selectedProduct = useSelector(selectSelectedProduct);
  const totals = useSelector(selectCartTotals);

  const filteredProducts = products.filter((product) => product.categoryId === selectedCategory);

  return (
    <div className="mx-auto flex h-full max-w-6xl flex-col">
      <PurchaseStepper />

      {activeStep === 1 && (
        <BrowseStep
          customers={customers}
          selectedCustomer={selectedCustomer}
          categories={categories}
          selectedCategory={selectedCategory}
          filteredProducts={filteredProducts}
          onCustomerChange={(customer) => dispatch(setSelectedCustomer(customer))}
          onCategoryChange={(categoryId) => dispatch(setSelectedCategory(categoryId))}
          onSelectProduct={(productId) => dispatch(selectProduct(productId))}
        />
      )}

      {activeStep === 2 && selectedProduct && (
        <ConfigureStep
          selectedProduct={selectedProduct}
          configuration={configuration}
          onBack={() => dispatch(goToBrowse())}
          onConfigurationChange={(changes) => dispatch(updateConfiguration(changes))}
          onToggleAddOn={(addOnId) => dispatch(toggleAddOn(addOnId))}
          onAddToCart={() => dispatch(addConfiguredProductToCart())}
        />
      )}

      {activeStep === 3 && (
        <CartStep
          cart={cart}
          totals={totals}
          onRemoveItem={(itemId) => dispatch(removeCartItem(itemId))}
          onContinueShopping={() => dispatch(goToConfigure())}
          onProceed={() => dispatch(proceedToReview())}
        />
      )}

      {activeStep === 4 && (
        <ReviewStep
          selectedCustomer={selectedCustomer}
          cart={cart}
          totals={totals}
          acceptedTerms={acceptedTerms}
          autoRenew={autoRenew}
          onAcceptedTermsChange={(value) => dispatch(setAcceptedTerms(value))}
          onAutoRenewChange={(value) => dispatch(setAutoRenew(value))}
          onBack={() => dispatch(goToCart())}
          onPlaceOrder={() => dispatch(placeOrder())}
        />
      )}

      {activeStep === 5 && (
        <ConfirmationStep placedOrder={placedOrder} onRestart={() => dispatch(restartPurchase())} />
      )}
    </div>
  );
};

export default NewPurchase;
