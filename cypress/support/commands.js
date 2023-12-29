import Login_PO from "./PageObject/Login_PO";
const login_po = new Login_PO();
Cypress.Commands.add( "login", () =>{ 
       login_po
       .visitSite()
       .fillCredential()
       .clickSignInButton()
});





