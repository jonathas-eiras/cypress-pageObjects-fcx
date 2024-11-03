import { clickOnElement } from "../support/utils"
class paymentPage{

    elements ={
        selectAddress: ('[data-cy="address-box-action"]'),
        selectDelivery: ('[data-cy="option-container"]'),
        selectStore: ('[data-cy="shipping-options-package-order-by-phone-container"] > [data-cy="options-payment-radio-button"]'),
        selectPaymentPix: ('[data-cy="Pix-options-payment-radio-button"]'),
        btnFinalizeOrder: ('[data-cy="confirm-payment-button"]'),
        btnConfirmFinalizeOrder: ('[data-cy="confirm-payment-modal-footer-button"]')
    }

    paymentOrder (){
        clickOnElement(this.elements.selectAddress)
        clickOnElement(this.elements.selectDelivery)
        clickOnElement(this.elements.selectStore)
        clickOnElement(this.elements.selectPaymentPix)
        clickOnElement(this.elements.btnFinalizeOrder)
        clickOnElement(this.elements.btnConfirmFinalizeOrder)
    }
}

module.exports = new paymentPage();