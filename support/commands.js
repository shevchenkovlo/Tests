Cypress.Commands.add('login', (userName, password) => {
		cy.clearLocalStorage();

		cy.get('input[type="text"]')
			.type(userName)
			.should('have.value', userName);

		cy.get('input[type="password"]')
			.type(password, {force: true})
			.should('have.value', password);

		cy.get('button[type="submit"]').click();

		cy.wait(1500);
});
