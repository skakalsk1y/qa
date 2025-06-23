describe('API CRUD Tests for Posts', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  it('POST - Create new post', () => {
    cy.request('POST', baseUrl, {
      title: 'foo',
      body: 'bar',
      userId: 1
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
    });
  });

  it('GET - Fetch all posts', () => {
    cy.request('GET', baseUrl).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });

  it('PUT - Update a post', () => {
    cy.request('PUT', `${baseUrl}/1`, {
      id: 1,
      title: 'updated title',
      body: 'updated body',
      userId: 1
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq('updated title');
    });
  });

  it('DELETE - Delete a post', () => {
    cy.request('DELETE', `${baseUrl}/1`).then((response) => {
      expect(response.status).to.be.oneOf([200, 204]);
    });
  });

  it('GET - Non-existent post returns 404', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/999999`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});