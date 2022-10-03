import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function TeaxForm(props) {
  const handleOnClick = () => {
    // console.log("on Click " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowClick = () => {
    // console.log("on Click " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleCapClick = () => {
    let newText = "";

    setText(newText);
    props.showAlert("Clear Text", "success");
  };

  const handleOnChange = (event) => {
    // console.log("on Change");
    setText(event.target.value);
  };

  const reversed = () => {
    let splitWord = text.split("");

    let reverseWord = splitWord.reverse("");

    let joinedWords = reverseWord.join("");

    let newText = joinedWords;

    setText(newText);
    props.showAlert("Converted to Revers Text", "success");
  };
  const handleSpace = (event) => {
    setText(event.target.value);

    let newtext = navigator.clipboard.writeText(text);

    console.log(newtext);

    alert("text copied successfully");
    props.showAlert("Copy Text", "success");
  };
  const capitalFirstLetter = () => {
    let words = text.split(" ").map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    let newText = words.join(" ");

    setText(newText);
  };

  const handleSpaceDelete = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Text Space Deleted", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-3">
        <h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {props.test}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control "
            value={text}
            id="textBox"
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "#e7e9f5" : "#041634",
              color: props.mode === "light" ? "#041634" : "#e7e9f5",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleOnClick}
        >
          Convert To Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowClick}
        >
          Convert To LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1 "
          onClick={handleCapClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1 "
          onClick={reversed}
        >
          Reverse text Button
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1 "
          onClick={capitalFirstLetter}
        >
          Capital Each
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1 "
          onClick={handleSpace}
        >
          Copy Text
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1 "
          onClick={handleSpaceDelete}
        >
          Delete Space
        </button>
      </div>
      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }  `}
      >
        <h3>Your Text Summery :</h3>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }
          Words AND {text.length} Characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes for Read
        </p>
        <h3>Preview :</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box above to preview it here"}
        </p>
      </div>
    </>
  );
}

TeaxForm.propTypes = { test: PropTypes.string.isRequired };
