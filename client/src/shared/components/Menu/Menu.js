import "./Menu.css";
import { DUMMY_MENUITEMS } from "./DUMMY_MENU";
import MenuItem from "./MenuItem";
// import BestSeller from "./BestSeller";

function Menu() {

  return (
    <>
      {/* <BestSeller
        item = {DUMMY_MENUITEMS[0]["beset_seller"]}
      /> */}
      
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
          {DUMMY_MENUITEMS[0]["coffees"].map((item) => {
            return (
              <MenuItem
                key={item.name}
                name={item.name}
                description={item.description}
                price={item.price}
                src={item.src}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Menu;
