import Login_PO from "./PageObject/Login_PO";
const login_po = new Login_PO();
Cypress.Commands.add( 'signin', () =>{ 
       login_po
       .visitSite()
       .fillCredential()
       .clickSignInButton()
       .clickSignInHereSelector()
       //.showDashboard()
       //.createContact()
       .click_Setting()
       .showIntegration()
});





