
export class POM{
    
    LoginButton = '.ico-login'
    LogoutButton = '.ico-logout'
    LoginField = '#Email'
    PasswordField = '#Password'
    ClickLogin = 'form > .buttons > .button-1'

    //NEW USER REGISTRATION
    Email(){
        cy.get('#Email').type('emmanuelarinze@qa.team')
    }
    Password(){
        cy.get('#Password').type('arinze100%')
    }
    ConfirmPassword(){
        cy.get('#ConfirmPassword').type('arinze100%')
    }

    RegisterButton(){
        cy.get('#register-button').click()
    }


// Variable for actual login
    LoginIcon(){
        cy.get(this.LoginButton).click()
    }
    EmailField(){
        cy.get(this.LoginField).type('emmanuelarinze@qa.team')
    }

    EnterPassword(){
        cy.get(this.PasswordField).type('arinze100%')
    }
    Login(){
        cy.get(this.ClickLogin).click()
    }
    Logout(){
        cy.get(this.LogoutButton).click()
    }
}