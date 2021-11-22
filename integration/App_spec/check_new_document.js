describe('Check document', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.login('user2', '2');
	});
	it('go page document and check data', () => {
		cy.contains('Черновики').click();
		cy.url().should('include', '/documents/draft_in');
		cy.get('td').eq(2).should('have.text', 'test 2 textarea');

		cy.get('td').eq(4).find('button').click();
		cy.url();

		//check data
		cy.wait(1000);
		cy.get('input[type="text"]').eq(0).should('have.value', 'Для служебного пользования');
		cy.get('input[type="text"]').eq(1).should('have.value', 'АКЦИОНЕРНОЕ ОБЩЕСТВО "СИБУР-ПЭТФ"');
		cy.get('input[type="text"]').eq(2).should('have.value', 'test in cypress');
		cy.get("textarea:first").should('have.value', 'test 1 textarea');
		cy.get("textarea:last").should('have.value', 'test 2 textarea');

		cy.log('Тест прошел');
	});
});
