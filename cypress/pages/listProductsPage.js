import { clickOnElement } from "../support/utils"

class listProductsPage {

    elements = {
        productInList: ('[data-cy="card-container-0"]')
    }

    searchProduct() {
        cy.wait('@returnList')
        clickOnElement(this.elements.productInList)
    }
}

module.exports = new listProductsPage();