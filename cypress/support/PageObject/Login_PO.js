import { config } from "../../config/index"
class Login_PO{
    visitSite() {
        cy.visit(config.app.base_url);
        //cy.visit("https://qa.safefamilyapp.com");
        cy.url().should("contain", config.app.base_url);
        // cy.title().should('eq', 'KrispCall');
        return this;
    }
    fillCredential() {
        cy.get('[data-cy="login-form-email"]').should("be.visible").clear().type(config.app.email,{ delay: 10 });
        cy.get('[data-cy="login-form-password"]').should("be.visible").clear().type(config.app.password,{ delay: 10 });
        return this;
    }
    clickSignInButton() {
        cy.get('[data-cy="login-form-submit"]').should("be.visible").click();
        return this;
    }
    clickSignInHereSelector(){
        cy.get('[data-cy="login-modal-submit"] > span').click({timeout: 10000});
        cy.wait(10000);
        return this;       
    }
    // showDashboard(){
    //     cy.get('a[href="/dashboard"]').contains("Dashboard").click({timeout: 10000});
    //     return this;

    // }
    // createContact(){
        
    //     cy.get('a[href="/contacts"]').contains("Contacts").click({timeout: 10000});
    //     //cy.get('button[type="button"]').contains("Add New Contact").click();
    //     return this;
    // }
    click_Setting(){
        cy.get('a[href="/settings/profile"').contains("Settings").click({timeout:10000});
        return this;
    }
    showIntegration(){
        cy.get('ul li').contains("Integrations").should('include.text','Integrations').click({timeout:10000});
        return this;
    }

    
}
export default Login_PO;
