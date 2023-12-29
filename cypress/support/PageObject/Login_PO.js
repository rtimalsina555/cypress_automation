import { config } from "../../config/index"
class Login_PO{
    visitSite() {
        cy.visit(config.app.base_url);
        //cy.visit("https://qa.safefamilyapp.com");
        cy.url().should("contain", config.app.base_url);
        // cy.title().should('eq', 'KrispCall');
        return this;
    }
    fillCredential(){
        cy.get('[data-cy="login-form-email"]').should("be.visible").clear().type(config.app.email);
        cy.get('[data-cy="login-form-password"]').should("be.visible").clear().type(config.app.password);
        return this;
    }
    clickSignInButton() {
        cy.get('[data-cy="login-form-submit"]').should("be.visible").click();
        return this;
    }
}
export default Login_PO;