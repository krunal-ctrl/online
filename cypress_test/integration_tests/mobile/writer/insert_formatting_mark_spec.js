/* global describe it cy beforeEach require */

var helper = require('../../common/helper');
var mobileHelper = require('../../common/mobile_helper');
var writerHelper = require('../../common/writer_helper');

describe(['tagmobile', 'tagnextcloud', 'tagproxy'], 'Insert formatting mark via insertion wizard.', function() {

	beforeEach(function() {
		helper.setupAndLoadDocument('writer/insert_formatting_mark.odt');
		// Click on edit button
		mobileHelper.enableEditingMobile();
		mobileHelper.openInsertionWizard();
		// Open formatting marks
		cy.cGet('body').contains('.menu-entry-with-icon.flex-fullwidth', 'Formatting Mark').click();
		cy.cGet('.ui-content.level-0.mobile-wizard').should('be.visible');
	});

	it('Insert non-breaking space.', function() {
		helper.setDummyClipboardForCopy();
		cy.cGet('body').contains('.menu-entry-with-icon', 'Insert non-breaking space').click();
		writerHelper.selectAllTextOfDoc();
		helper.copy();
		cy.cGet('#copy-paste-container p').should('contain.text', '\u00a0');
	});

	it('Insert non-breaking hyphen.', function() {
		helper.setDummyClipboardForCopy();
		cy.cGet('body').contains('.menu-entry-with-icon', 'Insert non-breaking hyphen').click();
		writerHelper.selectAllTextOfDoc();
		helper.copy();
		cy.cGet('#copy-paste-container p').should('contain.text', '\u2011');
	});

	it('Insert soft hyphen.', function() {
		helper.setDummyClipboardForCopy();
		cy.cGet('body').contains('.menu-entry-with-icon', 'Insert soft Hyphen').click();
		writerHelper.selectAllTextOfDoc();
		helper.copy();
		cy.cGet('#copy-paste-container p').should('contain.text', '\u00ad');
	});

	it('Insert no-width optional break.', function() {
		helper.setDummyClipboardForCopy();
		cy.cGet('body').contains('.menu-entry-with-icon', 'No-width Optional Break').click();
		writerHelper.selectAllTextOfDoc();
		helper.copy();
		cy.cGet('#copy-paste-container p').should('contain.text', '\u200b');
	});

	it('Insert word joiner.', function() {
		helper.setDummyClipboardForCopy();
		cy.cGet('body').contains('.menu-entry-with-icon', 'Word Joiner').click();
		writerHelper.selectAllTextOfDoc();
		helper.copy();
		cy.cGet('#copy-paste-container p').should('exist');
		cy.cGet('#copy-paste-container p').should('contain.text', '\u2060');
	});

	it('Insert left-to-right mark.', function() {
		helper.setDummyClipboardForCopy();
		cy.cGet('body').contains('.menu-entry-with-icon', 'Left-to-right Mark').click();
		writerHelper.selectAllTextOfDoc();
		helper.copy();
		cy.cGet('#copy-paste-container p').should('contain.text', '\u200e');
	});

	it('Insert right-to-left mark.', function() {
		helper.setDummyClipboardForCopy();
		cy.cGet('body').contains('.menu-entry-with-icon', 'Right-to-left Mark').click();
		writerHelper.selectAllTextOfDoc();
		helper.copy();
		cy.cGet('#copy-paste-container p').should('contain.text', '\u200f');
	});
});
