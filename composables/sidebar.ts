// export const useSidebar = () => {
//   const sidebar = ref(false);
//   const openSidebar = () => {
//     sidebar.value = true;
//   };
//   const closeSidebar = () => {
//     sidebar.value = false;
//   };
//   return { sidebar, openSidebar, closeSidebar };
// }

export const useSidebarOpen = () => useState<boolean>('isSidebarOpen', () => false);