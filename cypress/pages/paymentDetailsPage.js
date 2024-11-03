
import { validateElementText} from "../support/utils"

class paymentDetailsPage{

    elements ={
        messagePaymentDetail: ('[data-cy="detailed-purchase-top-text-title"]'),
    }

    paymentDetail (){
        cy.intercept('POST', 'https://fcxlabs-ecommerce-api.ferreiracosta.com/bff-site/purchase/order').as('purchase')
        cy.wait('@purchase')
        validateElementText(this.elements.messagePaymentDetail, 'Pague com Pix para finalizar sua compra.')
    }
}

module.exports = new paymentDetailsPage();