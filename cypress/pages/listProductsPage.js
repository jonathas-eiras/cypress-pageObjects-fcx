import { clickOnElement} from "../support/utils"
class listProductsPage{

    elements ={
        productInList: ('[data-cy="card-container-0"] > [data-cy="product-card-container-as-component-link"]'),
    }

    searchProduct (){
        clickOnElement(this.elements.productInList)
    }
}

module.exports = new listProductsPage();