import { clickOnElement, typeValue} from "../support/utils"
class homePage{

    elements ={
        searchField : ('[data-cy="input-search-product"]'),
        valueSearch: ('[data-cy="input-search-product"]'),
        selectProduct: ('[data-cy="search-container-suggestion"]'),
        btnSearch: ('[data-cy="search-product-hyperlink"]')
    }

    searchProduct (value){
        clickOnElement(this.elements.searchField)
        typeValue(this.elements.valueSearch, value)
        clickOnElement(this.elements.selectProduct)
        clickOnElement(this.elements.btnSearch)

    }
}

module.exports = new homePage();