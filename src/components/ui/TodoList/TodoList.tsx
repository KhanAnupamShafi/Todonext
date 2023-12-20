'use client';

import CustomButton from '@/components/view/Button';
import Image from 'next/image';
import { useState } from 'react';

const TodoList = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [individualCheckboxes, setIndividualCheckboxes] = useState(
    Array.from({ length: 4 }, () => false),
  );

  const toggleCheckbox = (index: number) => {
    const updatedCheckboxes = [...individualCheckboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setIndividualCheckboxes(updatedCheckboxes);

    // Check if all individual checkboxes are checked
    const allChecked = updatedCheckboxes.every((checkbox) => checkbox);
    setIsChecked(allChecked);
  };

  const toggleSelectAll = () => {
    const updatedCheckboxes = Array.from({ length: 4 }, () => !isChecked);
    setIndividualCheckboxes(updatedCheckboxes);
    setIsChecked(!isChecked);
  };
  const dataArray = Array.from({ length: 4 }, (_, index) => index);
  return (
    <div className="rounded-md bg-white p-5 large:max-w-[718px]">
      <h1 className="mb-2 font-medium text-dark">To-Do List</h1>
      <div className="flex justify-start gap-4">
        <div className="relative flex flex-1">
          <textarea
            id="message"
            style={{ resize: 'none' }}
            rows={4}
            className="block w-full rounded-lg border  bg-[#F9F9F9] p-2.5 text-sm text-gray-900 outline-none focus:border-[#FF797B] focus:ring-[#FF797B]"
          ></textarea>
          <button className="absolute bottom-2 right-2 block h-6 w-6 rounded-full bg-[#FF7594] p-0.5 large:hidden ">
            <Image fill src={'/images/button-secondary-default.svg'} alt="" />
          </button>
        </div>
        <div className="hidden large:block">
          <CustomButton onClick={() => console.log('Button clicked')}>
            <span className="relative h-4 w-4">
              <Image fill src={'/images/button-checkmark.svg'} alt="" />
            </span>
            Add
          </CustomButton>
        </div>
      </div>
      <div className="flex cursor-pointer items-center justify-between gap-4 py-6">
        <div
          className="custom-checkbox flex items-center gap-4 "
          onClick={toggleSelectAll}
        >
          <input
            type="checkbox"
            id="checkbox"
            className="hidden"
            checked={isChecked}
          />
          <label
            onClick={toggleSelectAll}
            htmlFor="checkbox"
            className="checkbox-label w-full"
          >
            <span className="checkbox-icon"></span>
          </label>
          <span className="text-sm font-semibold text-dark"> Select All</span>
        </div>

        <CustomButton onClick={() => console.log('Button clicked')}>
          <span className="relative h-4 w-4">
            <Image fill src={'/images/button-checkmark.svg'} alt="" />
          </span>
          Done
        </CustomButton>
      </div>

      <div className="flex cursor-pointer items-center justify-between gap-4">
        <ul className="pt-4">
          {dataArray.map((item, index) => (
            <li
              key={item}
              className="custom-checkbox flex items-center gap-4 pb-4"
              onClick={() => toggleCheckbox(index)}
            >
              <input
                type="checkbox"
                id={`checkbox-${index}`}
                className="hidden"
                checked={individualCheckboxes[index]}
              />
              <label
                onClick={() => toggleCheckbox(index)}
                htmlFor={`checkbox-${index}`}
                className="checkbox-label w-full"
              >
                <span className="checkbox-icon"></span>
              </label>
              <span className="text-sm font-semibold text-dark">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </span>
              <span className="text-[#E0E0E0]">Last Added: 10 sep 2022</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
