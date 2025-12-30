import React from "react";
import { Updates } from "../../data";

const LookingUpdates = () => {
    return (
        <div className="bg-white w-full py-10 flex justify-center h-350 ">
            {Updates.map((item, index) => (
                <div key={index} className="max-w-7xl w-full px-5">

                    <h1 className="text-4xl font-bold text-center">
                        {item.title}
                    </h1>
                    <p className="text-2xl text-center mt-2">
                        {item.discription}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 ">
                        {item.cards.map((bajwa, i) => (
                            <div
                                key={i}
                                className=" bg-blue-100 text-black rounded-lg p-5 flex flex-col gap-4 hover:border-2 transfrom transition-transform duration-300 scale-90 hover:scale-100"
                            >

                                <div className="flex justify-between">
                                    <button className="bg-blue-500 px-4 py-1 text-white rounded-md">
                                        {bajwa.btn1}
                                    </button>
                                    <span className=" px-4 py-1 text-sm text-gray-400 rounded-md">
                                        {bajwa.p1}
                                    </span>
                                </div>


                                <div className="flex flex-col gap-2 items-center text-center">
                                    <h1 className="text-md font-semibold  ">
                                        {bajwa.h1}
                                    </h1>
                                    <p className="text-gray-600  ">
                                        {bajwa.p}
                                    </p>
                                </div>

                                <hr />
                                <ul className="flex justify-between text-gray-500 text-sm">
                                    <li>{bajwa.li1}</li>
                                    <li>{bajwa.li2}</li>
                                    
                                </ul>
                                  <button className="px-8  border-2 border-gray-400 rounded-md hover:bg-gray-300">{bajwa.li3}</button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LookingUpdates;

