import { clickOnElement} from "../support/utils"

class detailProductPage{

    elements ={
        addCart: ('[data-cy="box-product-box-buttons"] > [data-cy="button-cart"]'),
    }

    addToCart (){
        clickOnElement(this.elements.addCart)
    }
}

module.exports = new detailProductPage();