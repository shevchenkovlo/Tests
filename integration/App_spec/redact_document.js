describe('Test document redact', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.login('kvn', '123');
	});
	it('go page document and check data', () => {
		cy.contains('Черновики').click();
		cy.url().should('include', '/documents/draft_in');

		cy.get('td').eq(4).find('button').click();
		cy.url();

		//redact data
		cy.get('input[type="text"]').eq(0).click();
		cy.contains('Гриф отсутствует').click();

		//get 2 input
		cy.get('input[type="text"]').eq(1).click();
		cy.contains('АКЦИОНЕРНОЕ ОБЩЕСТВО "СИБУР-НЕФТЕХИМ"').click();

		//get textArea
		cy.get("textarea:first").clear();
		cy.get("textarea:first").type('test 1 textarea');
		//get 2 textArea
		cy.get("textarea:last").clear();
		cy.get("textarea:last").type('test 2 textarea');
		//get 3 input
		cy.get('input[type="text"]').eq(2).clear();
		cy.get('input[type="text"]').eq(2).type('test in cypress');

		cy.contains('Сохранить').click();

		cy.contains('Черновики').click();
		cy.url().should('include', '/documents/draft_in');

		cy.get('td').eq(4).find('button').click();

		//check data
		cy.wait(1000);
		cy.get('input[type="text"]').eq(0).should('have.value', 'Гриф отсутствует');
		cy.get('input[type="text"]').eq(1).should('have.value', 'АКЦИОНЕРНОЕ ОБЩЕСТВО "СИБУР-НЕФТЕХИМ"');
		cy.get('input[type="text"]').eq(2).should('have.value', 'test in cypress');
		cy.get("textarea:first").should('have.value', 'test 1 textarea');
		cy.get("textarea:last").should('have.value', 'test 2 textarea');

		cy.log('Тест прошел');
	});
});
