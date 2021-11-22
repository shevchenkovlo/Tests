import {user1} from './users';

describe('Test document create', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.login(user1.login, user1.password);
	});

	it('get button', () => {
		cy.contains('Создать исходящий документ').click();
		cy.url().should('include', '/document/outcoming');
		cy.wait(1000);

		//get 1 input
		cy.get('input[type="text"]').eq(0).click();
		cy.contains('Для служебного пользования').click();

		//get 2 input
		cy.get('input[type="text"]').eq(1).click();
		cy.contains('АКЦИОНЕРНОЕ ОБЩЕСТВО "СИБУР-ПЭТФ"').click();

		//get textArea
		cy.get("textarea:first").type('test 1 textarea');
		//get 2 textArea
		cy.get("textarea:last").type('test 2 textarea');
		//get 3 input
		cy.get('input[type="text"]').eq(2).type('test in cypress');

		cy.contains('Сохранить').click();
		//cy.get('table').eq(1).find('tr').should('have.length', '4');
		cy.log('Документ создан. Тест прошел');
	});
});
