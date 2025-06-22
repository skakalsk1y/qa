describe('Login Tests', () => {
    const URL = 'https://www.saucedemo.com/';
  
    it('Successful Login with Valid Credentials', () => {
      cy.visit(URL);
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.url().should('include', '/inventory.html');
    });
  
    it('Error Message for Invalid Credentials', () => {
      cy.visit(URL);
      cy.get('#user-name').type('wrong_user');
      cy.get('#password').type('wrong_pass');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
    });
  
    it('Password Input is Masked', () => {
      cy.visit(URL);
      cy.get('#password').should('have.attr', 'type', 'password');
    });
  });
  