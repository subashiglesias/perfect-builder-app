/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
export const onCreateContractor = /* GraphQL */ `
  subscription OnCreateContractor {
    onCreateContractor {
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
export const onUpdateContractor = /* GraphQL */ `
  subscription OnUpdateContractor {
    onUpdateContractor {
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
export const onDeleteContractor = /* GraphQL */ `
  subscription OnDeleteContractor {
    onDeleteContractor {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
      id
      name
      itemType
      itemUnit {
        no
        meter
        milliMeter
        length
        feet
        inch
        kg
        gram
        milliGram
        ton
        litre
        milliLitre
        dozen
        coil
        squareFeet
        cubicFeet
        squareMeter
        cubicMeter
      }
      rate
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
      id
      name
      itemType
      itemUnit {
        no
        meter
        milliMeter
        length
        feet
        inch
        kg
        gram
        milliGram
        ton
        litre
        milliLitre
        dozen
        coil
        squareFeet
        cubicFeet
        squareMeter
        cubicMeter
      }
      rate
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
      id
      name
      itemType
      itemUnit {
        no
        meter
        milliMeter
        length
        feet
        inch
        kg
        gram
        milliGram
        ton
        litre
        milliLitre
        dozen
        coil
        squareFeet
        cubicFeet
        squareMeter
        cubicMeter
      }
      rate
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
