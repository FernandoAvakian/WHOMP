

describe('User workflows that have been known to fail', function () {
  it('Draws a polygon, registers geometry, ensures we have proper analysisModules options', function () {

    let constructorParams, config;

    cy.visit('https://alpha.blueraster.io/gfw-mapbuilder/ci/external.html')
    cy.title().should('include', 'GFW Mapbuilder')
    cy.wait(500)

    cy.window().then(windowObject => {
      console.log('in window');
      const app = windowObject.customApp;
      expect(app).to.not.be.an('undefined');

      constructorParams = app.constructorArgs;
      expect(constructorParams).to.not.be.an('undefined');

      config = constructorParams.config;
      expect(config).to.not.be.an('undefined');

      cy.get('.tab-buttons__tab:first-child').click()
      cy.get('.legend-title').click()
      cy.wait(500)

      cy.get('.analysis-modal-container').should('have.class', 'hidden')
      cy.get('.control-panel__draw-upload').click()
      cy.get('.analysis-modal-container').should('not.have.class', 'hidden')

      cy.get('.analysis-modal-container .analysis-instructions__draw-button').click()
      cy.get('.analysis-modal-container').should('have.class', 'hidden')


      cy.wait(500)
      cy.get('.map')
          .click(80, 75)
          .click(170, 75)
          .click(90, 165)
          .click(100, 185)
          .click(125, 190);

      cy.get('.control-panel__draw-upload').click()
      cy.get('.analysis-modal-container').should('not.have.class', 'hidden')

      cy.get('.analysis-modal-container .analysis-instructions__draw-button').click();
      cy.get('.analysis-modal-container').should('have.class', 'hidden')
      cy.wait(2000)

      cy.get('.tab-view__content').should('have.class', 'selected');
      cy.get('.analysis-results__select').should('exist');
      cy.get('.analysis-results__select').contains('option', 'Select analysis...')

    });

  });



});
