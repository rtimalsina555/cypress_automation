describe('login test', () => {
  it('testlogin', () => {
    cy.signin();
    cy.wait(6000);
    //Dashboard
    cy.get('a[href="/dashboard"]').should('have.text', 'Dashboard').click();
    cy.url().should('contain', 'https://qa.safefamilyapp.com/dashboard');
    cy.get('[data-cy="dashboard-page"]').should('have.text', 'Dashboard');

    //Contacts
    cy.get('a[href="/contacts"]').should('have.text', 'Contacts').click();
    cy.url().should('contain', 'https://qa.safefamilyapp.com/contacts');
    cy.get('[data-cy="contacts-header-title"]').should('have.text', 'Contacts');

    //Power Dialer
    cy.get('a[href="/sales-dialer"]').should('have.text', 'Power Dialer').click();
    cy.url().should('contain', 'https://qa.safefamilyapp.com/sales-dialer');
    cy.contains('Power Dialer').should('be.visible');

    //Bulk SMS
    cy.get('a[href="/bulk-sms"]').should('have.text', 'Bulk SMS').click();
    cy.url().should('contain', 'https://qa.safefamilyapp.com/bulk-sms');
    cy.get('[data-cy="bm-title"]').should('have.text', 'Bulk SMS');

    //Download Apps
    cy.get('a[href="/download-apps"]').should('have.text', 'Download Apps').click();
    cy.url().should('contain', 'https://qa.safefamilyapp.com/download-apps/ios');
    cy.contains('Download Apps').should('be.visible');

    //Settings
    //Settings->Profle
    cy.get('a[href="/settings/profile"]').should('have.text', 'Settings').click();
    cy.url().should('contain', 'settings/profile');
    cy.get('[data-cy="setting-menu-title"]').should('have.text', 'Settings');
  })
})