/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
