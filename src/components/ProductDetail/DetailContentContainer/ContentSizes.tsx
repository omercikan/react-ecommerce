import React, { Dispatch, SetStateAction } from "react";
import { Product } from "../../../types/types";

export type productDetailContentSizesProps = {
  setSelectSize: Dispatch<SetStateAction<string>>;
  selectSize: string;
  matchedProduct: Product | undefined;
};

const ContentSizes: React.FC<productDetailContentSizesProps> = ({ matchedProduct, setSelectSize, selectSize }) => {
  return (
    <div className="detail-content-sizes my-10">
      {matchedProduct?.category && (
        <fieldset className="flex gap-3 mt-3">
          <legend className="text-sm mb-3">
            <strong>Size:</strong> <span>{selectSize}</span>
          </legend>
          <div>
            <label
              htmlFor="size-xs-option"
              className={`border w-10 h-10 flex items-center justify-center cursor-pointer ${
                selectSize === "XS" && "border-black"
              }`}
            >
              XS
            </label>
            <input
              type="radio"
              id="size-xs-option"
              name="size"
              className="hidden"
              value="XS"
              onChange={(e) => setSelectSize(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="size-s-option"
              className={`border w-10 h-10 flex items-center justify-center cursor-pointer ${
                selectSize === "S" && "border-black"
              }`}
            >
              S
            </label>
            <input
              type="radio"
              id="size-s-option"
              name="size"
              className="hidden"
              value="S"
              onChange={(e) => {
                setSelectSize(e.target.value);
              }}
            />
          </div>

          <div>
            <label
              htmlFor="size-m-option"
              className={`border w-10 h-10 flex items-center justify-center cursor-pointer ${
                selectSize === "M" && "border-black"
              }`}
            >
              M
            </label>
            <input
              type="radio"
              id="size-m-option"
              name="size"
              className="hidden"
              value="M"
              onChange={(e) => setSelectSize(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="size-l-option"
              className={`border w-10 h-10 flex items-center justify-center cursor-pointer ${
                selectSize === "L" && "border-black"
              }`}
            >
              L
            </label>
            <input
              type="radio"
              id="size-l-option"
              name="size"
              className="hidden"
              value="L"
              onChange={(e) => setSelectSize(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="size-xl-option"
              className={`border w-10 h-10 flex items-center justify-center cursor-pointer ${
                selectSize === "XL" && "border-black"
              }`}
            >
              XL
            </label>
            <input
              type="radio"
              id="size-xl-option"
              name="size"
              className="hidden"
              value="XL"
              onChange={(e) => setSelectSize(e.target.value)}
            />
          </div>
        </fieldset>
      )}
    </div>
  );
};

export default ContentSizes;
