import React from "react";
import "./category.css";


const Category = (props) => {
  // 滑動效果
  const handleScroll = () => {
    let category = document.getElementById("category");
    if (category) {
      if (window.pageYOffset > 20) {
        category.className = "move-top";
      } else {
        category.className = "";
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  // 篩選類別

  let categories = ["All"];

  if (props.data) {
    const { data } = props;
    data.map((data) => {
      switch (data.section_name) {
        case "Arts":
        case "Science":
        case "Movies":
        case "Sports":
        case "Technology":
        case "Food":
        case "Business Day":
          const target = categories.find(
            (category) => category === data.section_name
          );
          if (!target) {
            categories.push(data.section_name);
            categories.sort();
          }
          break;

        default:
          break;
      }

      return null;
    });
  }

  // 類別被選中時,加上class .active

  const categoryList = categories.map((category) => {
    const classes = () => {
      if (category === props.selected) {
        let active = "active";
        return active;
      }
    };
    return (
      <li key={Math.random()} className="d-flex">
        <button
          id={category}
          onClick={(e) => props.doClick(e)}
          className={classes()}
        >
          {category}
        </button>
      </li>
    );
  });

  return (
    <ul className="d-flex align-items-center overflowX-scroll">
      {categoryList}
    </ul>
  );
};

export default Category;
