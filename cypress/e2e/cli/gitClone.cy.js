import { faker } from '@faker-js/faker'

describe('git clone', () => {
  const project = {
    name: `project-${faker.datatype.uuid()}`,
    description: faker.random.words(5)
  }
  //pré condição
  beforeEach(() => {
    cy.api_deleteProjects()
    cy.api_createProject(project)
  })

  it('successfully', () => {
    //ação:
    cy.cloneViaSSH(project) 
    //resultado esperado:
    cy.readFile(`cypress/downloads/${project.name}/README.md`)
      .should('contain', `# ${project.name}`)
      .and('contain', project.description)
  })
})
