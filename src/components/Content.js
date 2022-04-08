import React from "react";
import s1 from "./images/s1.png";
import s2 from "./images/s2.png";
import s3 from "./images/s3.png";
import s4 from "./images/s4.png";
import s5 from "./images/s5.png";
import s6 from "./images/s6.png";

export const Content = () => {
  return (
    <div className="grid">
      <div className="item">
        <div className="description">
          <img src={s1} alt="img" className="gridImg" />
          <h3>Meta Trap house</h3>
          <button className="info">
            @freezecorle <br />
            0x89736aac
          </button>
        </div>
      </div>
      <div className="item">
        <div className="description">
          <img src={s2} alt="img" className="gridImg" />
          <h3>The Vincent Van Dough Gallery</h3>
          <button className="info">
            @freezecorle <br />
            0x89736aac
          </button>
        </div>
      </div>
      <div className="item">
        <div className="description">
          <img src={s3} alt="img" className="gridImg" />
          <h3>Teufzer</h3>
          <button className="info">
            @freezecorle <br />
            0x89736aac
          </button>
        </div>
      </div>

      <div className="item">
        <div className="description">
          <img src={s4} alt="img" className="gridImg" />
          <h3>65 29 AB+1</h3>
          <button className="info">
            @freezecorle <br />
            0x89736aac
          </button>
        </div>
      </div>
      <div className="item">
        <div className="description">
          <img src={s5} alt="img" className="gridImg" />
          <h3>#9049</h3>
          <button className="info">
            @freezecorle <br />
            0x89736aac
          </button>
        </div>
      </div>
      <div className="item">
        <div className="description">
          <img src={s6} alt="img" className="gridImg" />
          <h3>6529 Photo A</h3>
          <button className="info">
            @freezecorle <br />
            0x89736aac
          </button>
          <button className="info2">
            @freezecorle <br />
            0x89736aac
          </button>
        </div>
      </div>
    </div>
  );
};
