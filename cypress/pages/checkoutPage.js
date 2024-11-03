import { clickOnElement} from "../support/utils"

class checkoutPage{

    elements ={
        btnCheckoutOrder: ('[data-cy="box-details-info-box-buttons"] > [data-cy="box-details-info-button-success"]'),
    }

    checkoutOrder (){
        clickOnElement(this.elements.btnCheckoutOrder)
    }
}

module.exports = new checkoutPage();