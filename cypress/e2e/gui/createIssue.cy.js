/// <reference types="Cypress" />

import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

describe('Create Issue', options, () => {
  //definiçao de um objeto:
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  }
  //pré-condição do teste
  beforeEach(() => {
    cy.api_deleteProjects()
    cy.login()
    cy.api_createProject(issue.project)
  })

  //o teste:
  it('successfully', () => {
    cy.gui_createIssue(issue)

    cy.get('.issue-details')
      .should('contain', issue.title)
      .and('contain', issue.description)
  })

})
