import { ACTIVATE_PAGE_LOADER, DEACTIVATE_PAGE_LOADER } from './types';

export const activatePageLoader = () => ({ type: ACTIVATE_PAGE_LOADER });

export const deactivatePageLoader = () => ({ type: DEACTIVATE_PAGE_LOADER });
