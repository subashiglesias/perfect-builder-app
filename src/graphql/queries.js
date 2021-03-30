/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      noOfBlocks
      address
      comments
      blocks {
        name
        carParkingArea
        noOfUnits
        noOfFloors
        floors {
          name
          floorNo
          ceilingHeight
        }
        basementHeight
      }
      createdBy
      createdDate
      createdAt
      updatedAt
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        noOfBlocks
        address
        comments
        blocks {
          name
          carParkingArea
          noOfUnits
          noOfFloors
          floors {
            name
            floorNo
            ceilingHeight
          }
          basementHeight
        }
        createdBy
        createdDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContractor = /* GraphQL */ `
  query GetContractor($id: ID!) {
    getContractor(id: $id) {
      id
      name
      workType
      mobile
      emailId
      createdBy
      createdDate
      createdAt
      updatedAt
    }
  }
`;
export const listContractors = /* GraphQL */ `
  query ListContractors(
    $filter: ModelContractorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContractors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        workType
        mobile
        emailId
        createdBy
        createdDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      name
      itemType
      gst
      cgst
      sgst
      igst
      description
      createdBy
      createdDate
      createdAt
      updatedAt
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        itemType
        gst
        cgst
        sgst
        igst
        description
        createdBy
        createdDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
