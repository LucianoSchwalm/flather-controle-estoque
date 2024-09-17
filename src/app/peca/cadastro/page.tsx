"use client";

import { useState } from "react";

export default function CadastroPeca() {
   const [gridIsAdult, setGridIsAdult] = useState(true);
   const [inputList, setInputList] = useState([
      {
         input: "",
         input_rank: null,
      },
   ]);

   const handleColorAdd = () => {
      setInputList([
         ...inputList,
         {
            input: "",
            input_rank: null,
         },
      ]);
   };

   const handleColorRemove = () => {
      const newList = [...inputList];
      newList.splice(newList.length - 1, 1);
      setInputList(newList);
   };

   return (
      <main className="min-h-screen bg-gray-300">
         <div className="text-2xl text-gray-600 px-10 pt-10">
            CORTE DE PEÇAS
         </div>
         <div className="text-gray-600 px-10 py-10">
            INSIRA A PEÇA FINALIZADA
         </div>
         <form action="">
            <div className="flex flex-col lg:flex-row justify-between pb-10 ">
               <div className="flex gap-24">
                  <div className="pl-10">
                     <label htmlFor="peca" className="text-xs text-gray-500">
                        Peça
                     </label>
                     <select
                        className="bg-transparent w-full py-1.5 text-gray-800 border-b border-gray-500
                                 transition duration-500 focus:outline-none focus:border-black rounded"
                        name="peca"
                        id="peca"
                     >
                        <option value="Viscolaycra">Calça moletom</option>
                        <option value="Moletim">Blusa Gola V</option>
                     </select>
                  </div>
                  <div>
                     <label htmlFor="type" className="text-xs text-gray-500">
                        Tipo
                     </label>
                     <select
                        className="bg-transparent w-full py-1.5 text-gray-800 border-b border-gray-500
                                 transition duration-500 focus:outline-none focus:border-black rounded"
                        name="type"
                        id="type"
                     >
                        <option value="Viscolaycra">Listrado</option>
                        <option value="Moletim">Lisa</option>
                     </select>
                  </div>
                  <div>
                     <label htmlFor="date" className="text-xs text-gray-500">
                        Data
                     </label>
                     <input
                        type="date"
                        name="date"
                        id="date"
                        className="bg-transparent w-full py-1.5 text-gray-800 border-b border-gray-500
                                 transition duration-500 focus:outline-none focus:border-black rounded"
                     />
                  </div>
               </div>
               <div className="flex gap-24 pl-10 lg:pl-0">
                  <div>
                     <label
                        htmlFor="grid"
                        id="grid"
                        className="text-xs text-gray-500"
                     >
                        Grade
                     </label>
                     <input
                        id="grid"
                        name="grid"
                        className="bg-transparent border-b m-auto block border-gray-500 w-full mb-6
                                 text-gray-700 pb-2"
                        type="text"
                        placeholder="1P 2M 2G 1GG"
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="weight"
                        id="weight"
                        className="text-xs text-gray-500"
                     >
                        Peso
                     </label>
                     <input
                        id="weight"
                        name="weight"
                        className="bg-transparent border-b m-auto block border-gray-500 w-full mb-6
                                 text-gray-700 pb-2"
                        type="text"
                        placeholder="2KG"
                     />
                  </div>
                  <div className="pr-10">
                     <label
                        htmlFor="meter"
                        id="meter"
                        className="text-xs text-gray-500"
                     >
                        Metro
                     </label>
                     <input
                        id="meter"
                        name="meter"
                        className="bg-transparent border-b m-auto block border-gray-500 w-full mb-6
                                 text-gray-700 pb-2"
                        type="text"
                        placeholder="22M"
                     />
                  </div>
               </div>
            </div>
            <div className="text-gray-600 px-10 py-10">
               INSIRA AS CORES E GRADES REALIZADAS
            </div>
            {inputList.map((input, index) => (
               <div key={index} className="grid grid-cols-4 pb-10">
                  <div className="pl-10 min-w-10 lg:min-w-80">
                     <label
                        htmlFor="cor"
                        id="cor"
                        className="text-xs text-gray-500"
                     >
                        Cor
                     </label>
                     <select
                        className="bg-transparent w-full py-1.5 text-gray-800 border-b border-gray-500
                                   transition duration-500 focus:outline-none focus:border-black rounded"
                        id="cor"
                        name="cor"
                     >
                        <option value="vermelho">Vermelho</option>
                        <option value="azul">Azul</option>
                        <option value="preto">Preto</option>
                        <option value="branco">Branco</option>
                     </select>
                  </div>
                  <div className="col-start-2 col-end-4 text-xl uppercase text-gray-500 flex flex-row justify-center gap-10">
                     <div className="flex flex-col">
                        <label htmlFor="p">{gridIsAdult ? "p" : "2"}</label>
                        <input
                           className="max-w-8"
                           type="number"
                           name="p"
                           id="p"
                        />
                     </div>
                     <div className="flex flex-col">
                        <label htmlFor="m">{gridIsAdult ? "m" : "4"}</label>
                        <input
                           className="max-w-8"
                           type="number"
                           name="m"
                           id="m"
                        />
                     </div>
                     <div className="flex flex-col">
                        <label htmlFor="g">{gridIsAdult ? "g" : "6"}</label>
                        <input
                           className="max-w-8"
                           type="number"
                           name="g"
                           id="g"
                        />
                     </div>
                     <div className="flex flex-col">
                        <label htmlFor="gg">{gridIsAdult ? "gg" : "8"}</label>
                        <input
                           className="max-w-8"
                           type="number"
                           name="gg"
                           id="gg"
                        />
                     </div>
                     <div className="flex flex-col">
                        <label htmlFor="xgg">
                           {gridIsAdult ? "xgg" : "10"}
                        </label>
                        <input
                           className="max-w-8"
                           type="number"
                           name="xgg"
                           id="xgg"
                        />
                     </div>
                     <div className="flex flex-col">
                        <label htmlFor="g1">{gridIsAdult ? "g1" : "12"}</label>
                        <input
                           className="max-w-8"
                           type="number"
                           name="g1"
                           id="g1"
                        />
                     </div>
                     <div className="flex flex-col">
                        <label htmlFor="g2">{gridIsAdult ? "g2" : "14"}</label>
                        <input
                           className="max-w-8"
                           type="number"
                           name="g2"
                           id="g2"
                        />
                     </div>
                     {!gridIsAdult && (
                        <div className="flex flex-col">
                           <label htmlFor="16">16</label>
                           <input
                              className="max-w-8"
                              type="number"
                              name="16"
                              id="16"
                           />
                        </div>
                     )}
                  </div>
                  <div className="text-gray-500 flex flex-col gap-2">
                     <label htmlFor="gridType" className="text-xl">
                        Tipo de Grade
                     </label>
                     <div>
                        <input
                           type="radio"
                           name="gridType"
                           id="gridType1"
                           className="pt-1"
                           onChange={() => setGridIsAdult(true)}
                           checked={gridIsAdult}
                           value={1}
                        />
                        <label htmlFor="gridType1" className="pl-2">
                           Adulto
                        </label>
                     </div>
                     <div>
                        <input
                           type="radio"
                           name="gridType"
                           id="gridType2"
                           onChange={() => setGridIsAdult(false)}
                           checked={!gridIsAdult}
                           value={2}
                        />
                        <label htmlFor="gridType1" className="pl-2">
                           Infantil
                        </label>
                     </div>
                  </div>
               </div>
            ))}
            <div className="flex flex-row justify-between pt-10 gap-24 px-10">
               <div className="pr-0 lg:pr-20 pt-3">
                  <button
                     id="colorBtnRemove"
                     name="colorBtnRemove"
                     type="button"
                     className="text-xs text-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 disabled:border-gray-500 disabled:text-gray-500 disabled:hover:bg-gray-500"
                     onClick={handleColorRemove}
                     disabled={inputList?.length === 1}
                  >
                     - Remova uma cor
                  </button>
               </div>
               <div className="pt-3">
                  <button
                     id="colorBtnAdd"
                     name="colorBtnAdd"
                     type="button"
                     className="text-xs text-center text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 
                                 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:border-blue-500
                                 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                     onClick={handleColorAdd}
                  >
                     + Adicione uma Nova Cor
                  </button>
               </div>
            </div>
            <div className="w-full mx-auto flex justify-center">
               <input
                  className="shadow-lg mt-3 pt-3 pb-3 w-1/4 text-white bg-indigo-500
                  hover:bg-indigo-400 rounded-full cursor-pointer"
                  type="submit"
                  value="Clique para cadastrar peça"
               />
            </div>
         </form>
      </main>
   );
}
