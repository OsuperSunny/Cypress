context("Google", () => {
  describe("Login to Webmail", () => {
    beforeEach(() => {
      cy.visit("https://mail.yandex.com"); //go to website
      cy.viewport(1440, 960); //screen orientation
    });

    it("Should sign in successfully to mail", () => {
      cy.get('input[name="user"]').type("sunday.oladiran@yandex.com"); //input the username

      cy.get('input[name="pass"]').type("Decembers12{enter}"); //input the password
      cy.wait(3000);
      cy.get('span[class="subject"]').first().click(); //click on the first element
      cy.wait(2000);
    });
  });
});
