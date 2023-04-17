const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen p-2 w-20 flex flex-col
                  bg-[#58549E] dark:bg-gray-900 shadow-lg">
                    
        <SideBarIcon icon={<i class="fa-solid fa-house  fa-lg"></i>}  />
        <SideBarIcon icon={<i class="fa-solid fa-solid fa-user fa-lg"></i>} />
        <SideBarIcon icon={<i class="fa-solid fa-t fa-lg"></i>} />
        <SideBarIcon icon={<i class="fa-solid fa-plus fa-xl"></i>} />
        <SideBarIcon icon={<i class="fa-sharp fa-solid fa-gear fa-xl"></i>} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
