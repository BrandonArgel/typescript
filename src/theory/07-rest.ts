import { User, ROLES } from './01-enum';

const currentUser: User = {
  username: 'brand',
  role: ROLES.ADMIN,
}

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
}