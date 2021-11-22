describe('delete document', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.login('user2', '2');
	});
	it('go page document delete data', () => {
		cy.contains('Черновики').click();
		cy.url().should('include', '/documents/draft_in');

		cy.get('table').eq(1).find('tr').then(($tr) => {
			const lengthDocStart = $tr.length;
			cy.get('td').eq(4).find('button').click();
			cy.wait(1000);

			cy.contains('Удалить карточку документа').click();

			cy.get('.ReactModalPortal').contains('Удалить').click();

			cy.get('table').eq(1).find('tr').then(($tr) => {
				const lengthDocEnd = $tr.length;
				expect(lengthDocEnd).to.eq(lengthDocStart - 1);
			});
		});

		cy.log('Тест прошел');
	});
});
