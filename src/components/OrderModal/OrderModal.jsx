import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import { hideModal } from '../../redux/Action/modalActions';
import { ReactSVG } from 'react-svg';
import "./OrderModal.css";
import ReusableButton from '../ReusableButton/ReusableButton';
import { clearCart } from '../../redux/Action/cartActions';
import CartProduct from '../CartProducts/CartProduct';

const OrderModal = () => {
    const dispatch = useDispatch();
    const [successMessage, setSuccessMessage] = useState("");
    const { isModalOpen, orderDetails } = useSelector(state => state.modal);

    const handleClose = () => {
        dispatch(hideModal());
    };

    const handleStartingNewOrder = () => {
        setSuccessMessage("✅ Orden enviada correctamente. Gracias por tu compra.");

        setTimeout(() => {
            dispatch(clearCart());
            dispatch(hideModal());
            setSuccessMessage("");
        }, 2000);
    };

    return (
        <Modal isOpen={isModalOpen} onClose={handleClose} orderDetails={orderDetails}>
            {orderDetails && (
                <div className='checkout-modal'>
                    <ReactSVG
                        className='checkout-icon'
                        src={`/assets/images/icon-order-confirmed.svg`}
                        beforeInjection={(svg) => {
                            svg.setAttribute('role', 'img');
                            svg.setAttribute('aria-label', "icon-order-confirmed");
                        }}
                    />

                    <h2>Order Confirmed</h2>
                    <p>We hope you enjoyed your food!</p>

                    <div className='product-details-modal'>
                        <CartProduct
                            priceMap={orderDetails?.priceMap}
                            cartItems={orderDetails?.cartItems}
                            totalPrice={orderDetails?.totalPrice}
                            showProductImage={true}
                            showPriceLarge={true}
                        />
                    </div>

                    {successMessage && (
                        <p className="success-message">{successMessage}</p>
                    )}

                    <ReusableButton
                        className="submit-order"
                        label="Submit Order"
                        onClick={handleStartingNewOrder}
                    />
                </div>
            )}
        </Modal>
    );
};

export default OrderModal;