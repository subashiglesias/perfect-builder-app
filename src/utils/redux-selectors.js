
export const getUserName = state => state.authReducer.currentSession.username;

export const getProjectList = state => state.projects.projectList;

export const getContractorList = state => state.contractors.contractorList;

export const getPageLoading = state => state.pageLoading;

