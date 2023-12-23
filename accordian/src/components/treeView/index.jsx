import Menulist from "./Menulist";


export default function TreeView({menus = []}){

  return (
    <div className="tree-view-container  mt-1 text-xl rounded  w-56">
     <Menulist list={menus}/>
    </div>
  )
}