//import cypress from 'cypress'
import {POM} from './POM'
const user = new POM


before(()=>{
        cy.visit('/')
        cy.viewport(1024, 768)
    })

describe('User Registration', ()=>{
    it('Launch nopCommerce', ()=>{
       // cy.visit('/')
        cy.get('.header-logo > a > img').should('be.visible')
        cy.wait(5000)
    })
    it('Register User', ()=>{
        cy.contains('Register').click()
        cy.scrollTo(0,90)
    //Enter user details
        cy.get('#gender-male').click()
        cy.get('#FirstName').type('Emmanuel')
        cy.get('#LastName').type('Osakwe')
        cy.scrollTo(0,50)
        cy.get('[name="DateOfBirthDay"]').select(1)
        cy.get('[name="DateOfBirthMonth"]').select('April')
        cy.get('[name="DateOfBirthYear"]').select('Year')
        user.Email()
        cy.scrollTo(0,80)
        user.Password()
        user.ConfirmPassword()
    //Click on REGISTER
        user.RegisterButton()
    })
})

describe('Order An Item',()=>{
    it('Load page',()=>{
        cy.visit('/')
        cy.viewport(1024, 768)
        cy.get('.header-logo > a > img').should('be.visible')
        cy.get('.menu-toggle')
        .should('have.class', 'menu-toggle')
    })
    it('Login and Select Item',()=>{
        user.LoginIcon()
        user.EmailField()
        user.EnterPassword()
        user.Login()
        cy.wait(2000)
        cy.scrollTo(0,500)
    //Assertions
        cy.get('.ico-logout').should('be.visible')
        cy.get('.header-logo > a > img').should('be.visible')
        cy.get('.topic-block-title > h2').should('be.visible')
        
    //Preview the item you want to order
        cy.get(':nth-child(2) > .product-item > .picture > a > img').click()
        cy.wait(2000)
        cy.scrollTo(0, 1300)
        cy.get('#product-details-form > div:nth-child(2) > div.product-essential > div.overview > div.product-name > h1')
        .should('contain', 'Apple MacBook Pro 13-inch')

    //Add the item to Cart
        Cypress.on("uncaught:exception", (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false;
        })
        cy.get('#add-to-cart-button-4').click()
        cy.wait(3000)
       
    })

    //Order the item
    it('Place an Order', () => {
        cy.get('.cart-label').click()
        cy.get('.ico-login').click()
        cy.scrollTo(0, 500)
        user.EmailField()
        user.EnterPassword()
        user.Login()
        cy.wait(2000)
        cy.get('.cart-label').click()
        cy.scrollTo(0,1000)
    //Checkout
        cy.get('#termsofservice').click()
        cy.get('#checkout').click()
        cy.wait(5000)
   
        cy.get('#BillingNewAddress_CountryId').select('Nigeria')
        cy.get('#BillingNewAddress_City').type('Lagos')
        cy.get('#BillingNewAddress_Address1').type('13 Park Lane Victoria Island')
        cy.get('#BillingNewAddress_ZipPostalCode').type(23401)
        cy.get('#BillingNewAddress_PhoneNumber').type(2348035666987)
       // cy.get('#billing-buttons-container > .new-address-next-step-button').click()
    
        cy.get('#billing-buttons-container > .new-address-next-step-button').click()
        cy.wait(2000)
      
         //Continue with order details
         cy.get('#shipping-method-buttons-container > .button-1').click()
         cy.wait(1000)
         cy.get('#payment-method-buttons-container > .button-1').click()
         cy.wait(1000)
         cy.get('#payment-info-buttons-container > .button-1').click()

         //Confirm that Billing and Shipping addresses are available
         cy.get('.billing-info-wrap').should('contain', 'Billing Address')
         cy.get('.shipping-info-wrap').should('contain','Shipping Address')
         cy.wait(1000)
         cy.scrollTo(0,1300)
         cy.get('#confirm-order-buttons-container > .button-1').click()
         cy.wait(2000)

         //On successful order, confirm that order number is available
         cy.get('.section > .title > strong').should('contain', 'Your order has been successfully processed!')
         cy.get('.order-number > strong').should('be.visible')

         //Logout
         user.Logout()
         
    })

})

