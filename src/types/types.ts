// This file contains TypeScript types for the ProfileSidebar component.
export type ProfileSidebarProps = {
  open: boolean;
  onClose: () => void;
  onLogout?: () => void;
  onChangePassword?: () => void;
  onSeeProfile?: () => void;
  userName: string;
};


