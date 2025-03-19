

describe('Word Guess Game Cycle', () => {
  context('Game Setup', () => {
    beforeEach(() => {
      // Stub the API request for starting the game
   

      // Visit the game page
      cy.visit('/');
    });

    it('should GET a random word with masked letters on page load and render the masked word to the page', () => {
      // Wait for the API call to complete
      cy.get('button').contains('Start Quiz').click();
      // Check if the masked word is rendered on the page
    });
  });

});
