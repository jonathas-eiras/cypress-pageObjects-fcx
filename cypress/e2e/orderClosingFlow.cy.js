import homePage from "../pages/homePage"
import listProductsPage from "../pages/listProductsPage"
import detailProductPage from "../pages/detailProductPage"
import checkoutPage from "../pages/checkoutPage"
import paymentPage from "../pages/paymentPage"
import paymentDetailsPage from "../pages/paymentDetailsPage"

describe('Complete Order', () => {
    it('Complete the order with Pix', () => {
        // Search product
        homePage.searchProduct('joelho com bucha')

        // Select product
        listProductsPage.searchProduct()

        // Add to cart
        detailProductPage.addToCart()

        // Finalize order
        checkoutPage.checkoutOrder()

        // Select payment and finalize order
        paymentPage.paymentOrder()

        // Assert
        paymentDetailsPage.paymentDetail()

    })
})