import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

import lovebabbar from "../assets/lovebabbar.png";
import amandhattarwal from "../assets/amandhattarwal.png";
import anujbhaiya from "../assets/anujbhaiya.png";
import striver from "../assets/striver.png";
import fraz from "../assets/mohammadfraz.png";

const CreatorCard = ({ name, description, id }) => {
  const navigate = useNavigate();
  return (
    <div className="ag-format-container" onClick={() => navigate(`/DsaDemon/creator/${id}`)} >
      <div className="ag-courses_box">
        <div className="ag-courses_item">
          <div href="#" className="ag-courses-item_link">
            <div className="ag-courses-item_bg"></div>
            <div
              style={{
                display: "flex",
              }}
            >
              <div>
                <div className="ag-courses-item_title">{name}</div>
                <div className="ag-courses-item_desc">{description}</div>
              </div>
              <div
                style={{
                  zIndex: "1",
                }}
              >
                <img
                  src={
                    id == "lovebabbar"
                      ? lovebabbar
                      : id == "amandhattarwal"
                      ? amandhattarwal
                      : id == "anujbhaiya"
                      ? anujbhaiya
                      : id == "striver"
                      ? striver
                      : id == "mohammadfraz"
                      ? fraz
                      : ""
                  }
                  alt="Creator About"
                  height={"200px"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
