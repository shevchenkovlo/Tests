describe('App E2E', () => {
	it('successul load page', () => {
		cy.visit('/');
	});
	it('user auth test', () => {
		cy.get('input[type="text"]')
			.type('user2')
			.should('have.value', 'user2');

		cy.get('input[type="password"]')
			.type('2', {force: true})
			.should('have.value', '2');

		cy.get('button[type="submit"]').click();
	});
});
