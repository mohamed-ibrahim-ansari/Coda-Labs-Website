import React from "react";
import "./ConfirmationPop.css";
import { GoAlert } from "react-icons/go";
const ConfirmationPop = (props) => {
  const { setConfirmationPopShow } = props;
  const { setCreateAccountShow } = props;

  return (
    <div className="ConfirmationPopWrap">
      <div className="ConfirmationPopScreen">
        <div className="PageDesc">
          {" "}
          <h5>Confirmation</h5>{" "}
          <button
            onClick={() => {
              setConfirmationPopShow(false);
            }}
          >
            X
          </button>{" "}
        </div>
        <div className="PageContent">
          <GoAlert className="Alert-sign" />
          <h2>Are You Sure ?</h2>
          <h4>
            Do you really want to delete these Records? <br />
            This Process cannot be Undone.
          </h4>
          <div className="ConfirmationPopButtonDiv">
            <button
              onClick={() => {
                setConfirmationPopShow(false);
                setCreateAccountShow(false);
                localStorage.clear();
              }}
            >
              Yes
            </button>
            <button
              onClick={() => {
                setConfirmationPopShow(false);
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPop;
