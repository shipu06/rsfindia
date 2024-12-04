import Link from "next/link";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import ReactVisibilitySensor from "react-visibility-sensor";

const CausesSingle = ({ cause = {}, causePage }) => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  const bufferToBase64 = (buffer) => {

    const binary = Array.from(new Uint8Array(buffer))
      .map((byte) => String.fromCharCode(byte))
      .join('');
    return `data:image/jpeg;base64,${btoa(binary)}`; // For JPEG, adjust if using another image format
  };

  const { coverImage: image, category, name: title, description, collectedAmount: raised, targetAmount: goal } = cause;

  // const raisedNumber = +raised.split(",").join("");
  // const goalNumber = +goal.split(",").join("");
  const percent = 40;

  return (
    <div className={causePage ? "" : "my-4"}>
      <div
        style={causePage ? {} : { userSelect: "none" }}
        className="causes-one__single animated fadeInLeft"
      >
        <div className="causes-one__img">
          <div className="causes-one__img-box">
            <Image
              src={bufferToBase64(image?.data)}
              alt="Cover Image"
          width={500}
          height={300}
            />
            <Link href="/causes-details">
              <a>
                <i className="fa fa-plus"></i>
              </a>
            </Link>
          </div>
          <div className="causes-one__category">
            <span>{category}</span>
          </div>
        </div>
        <div className="causes-one__content">
          <h3 className="causes-one__title">
            <Link href="/causes-details">{title}</Link>
          </h3>
          <p className="causes-one__text">{description}</p>
        </div>
        <div className="causes-one__progress">
          <ReactVisibilitySensor
            offset={{ top: 10 }}
            delayedCall={true}
            onChange={onVisibilityChange}
          >
            <div className="bar">
              <div
                className="bar-inner count-bar"
                data-percent={`${countStart ? percent : 0}%`}
                style={{ width: `${countStart ? percent : 0}%`, opacity: 1 }}
              >
                <div className="count-text" style={{ opacity: 1 }}>
                  {countStart ? percent : 0}%
                </div>
              </div>
            </div>
          </ReactVisibilitySensor>
          <div className="causes-one__goals">
            <p>
              <span>${raised}</span> Raised
            </p>
            <p>
              <span>${goal}</span> Goal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CausesSingle;
