import React from "react";
import Category from "./category";
import Like from "./like/like";
import Headline from "./headline/headline";
import MdHeadline from "./headline/mdheadline";

const Featured = (props) => {
  let item = null;

  // 若選擇類別"All" 則顯示headline
  const ifAll = (selected) => {
    if (selected === "All") {
      return [<Headline data={props.data} />, <MdHeadline />];
    }
  };

  //篩選各類別的文章
  if (props.data || props.selected) {
    const { data, selected } = props;
    let articles = null;

    if (selected === "All") {
      articles = data.filter(
        (i) =>
          i.section_name === "Arts" ||
          i.section_name === "Science" ||
          i.section_name === "Movies" ||
          i.section_name === "Sports" ||
          i.section_name === "Technology" ||
          i.section_name === "Food" ||
          i.section_name === "Business Day"
      );

    } else {
      articles = data.filter((i) => i.section_name === selected);
    }

    // 將各文章的圖片網址組合起來
    item = articles.map((i) => {
      let tar = "";
      let he = "https://www.nytimes.com/";
      let imgURL = "";

      if (i.multimedia[0] !== undefined) {
        tar = i.multimedia[0].url;
        imgURL = he + tar;
      } else {
        imgURL = "https://picsum.photos/150/150";
      }

      return (
        <div key={Math.random()} className="post">
          <a href={i.web_url} target="_blank" rel="noopener noreferrer">
            <img src={imgURL} alt="pic" />
            <div className="post-info">
              <p className="title">{i.headline.main}</p>
              <p className="author">
                <span className="circle"></span>莫莫帕帕
                <span className="like-btn">
                  <Like />
                </span>
              </p>
            </div>
          </a>
        </div>
      );
    });
  }
  return (
    <React.Fragment>
      <div id="category" className="container">
        <Category
          data={props.data}
          doClick={props.doClick}
          selected={props.selected}
        />
      </div>
      {ifAll(props.selected)}
      <div className="content">
        <div id="posts-area">{item} </div>
      </div>
    </React.Fragment>
  );
};

export default Featured;
