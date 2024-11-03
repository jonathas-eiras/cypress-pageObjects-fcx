import { clickOnElement } from "../support/utils"
class paymentPage{

    elements ={
        selectAddress: ('[data-cy="address-box-action"]'),
        selectDelivery: (':nth-child(1) > [data-cy="global-box-body"] > [data-cy="delivery-body"] > [data-cy="delivery-options-container"] > [data-cy="shipping-options-container"] > [data-cy="shipping-options-box"] > [data-cy="shipping-options-box-radio-button"] > [data-cy="shipping-options-box-radio-button-input"]'),
        selectPaymentPix: ('[data-cy="Pix-options-payment-radio-button"]'),
        btnFinalizeOrder: ('[data-cy="confirm-payment-button"]'),
        btnConfirmFinalizeOrder: ('[data-cy="confirm-payment-modal-footer-button"]')
    }

    paymentOrder (){
        clickOnElement(this.elements.selectAddress)
        clickOnElement(this.elements.selectDelivery)
        clickOnElement(this.elements.selectPaymentPix)
        clickOnElement(this.elements.btnFinalizeOrder)
        clickOnElement(this.elements.btnConfirmFinalizeOrder)
    }
}

module.exports = new paymentPage();