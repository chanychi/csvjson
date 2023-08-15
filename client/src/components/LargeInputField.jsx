import { useState, useRef } from 'react'
import { BsChevronRight } from 'react-icons/bs';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import convertCSV from '../utils/convertCSV.js'

const LargeInputField = () => {
  const [text, setText] = useState('')
  const [convert, setConvert] = useState('')
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleClear = (e) => {
    e.preventDefault()
    setText('')
    setConvert('')

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }

  const handleConvert = (e) => {
    e.preventDefault()
    if (!text.length) return;
    let data = convertCSV(text)
    console.log(typeof data)
    setConvert(data)
  }


  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const uploadedText = event.target.result;
      setText(uploadedText);
    };
    reader.readAsText(file);
  };

  const fileDownload = () => {
    if(!convert.length) return;
    console.log()

    const blob = new Blob([convert], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'data.json';
    link.href = url;
    link.click();
  }

  return (
    <>
      <div className="block justify-center items-center my-14">
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-2 text-[#00df9a]">CSV to JSON</h2>
          <p className="text-gray-500">
            To get started, upload or paste your data from Excel (saved as CSV).
          </p>
          <p className="text-gray-500">
            Note: If the page crashed, it means your file is too big for the client to process.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center h-fit">
      <div className="grid gap-4 w-full md:w-2/3 lg:w-1/2 px-4 md:grid-cols-2">
        <div className="grid gap-4 md:grid-cols-1 mb-0">
          <div className="relative rounded-lg p-2">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="file_input">Upload file</label>
            <input
              ref={fileInputRef}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 mb-0"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
              onChange={handleFileUpload}/>
          </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-fit">
        <div className="grid gap-2 md:w-2/3 lg:w-1/2 px-4 md:grid-cols-2">
          <div className="relative rounded-lg shadow-lg p-3 col-span-2 md:col-span-1 md:w-full">
            <h2 className="text-2xl font-semibold mb-4 text-[#00df9a]">CSV</h2>
            <textarea
              className="w-full p-4 border rounded-lg resize-none focus:outline-none focus:ring focus:border-green-300"
              placeholder="Paste your text here..."
              rows="15"
              value={text}
              onChange={handleChange}
            ></textarea>
            <div className="flex">
              <button
                className={`flex items-center mt-4 bg-gray-700 text-[#00df9a] px-4 py-2 rounded-lg text-center`}
                onClick={handleConvert}
              >
                <BsChevronRight size={14} color="#00df9a" className="mr-1" />Convert
              </button>
              <button
                className={`mt-4 ml-2 text-[#00df9a] px-4 py-2 rounded-lg text-center`}
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          </div>
          <div className="relative rounded-lg shadow-lg p-3 col-span-2 md:col-span-1">
            <h2 className="text-2xl font-semibold mb-4 text-[#00df9a]">JSON</h2>
            <textarea
              id="inputField2"
              className="w-full p-4 border rounded-lg resize-none focus:outline-none focus:ring focus:border-green-300 cursor-default"
              rows="15"
              defaultValue={convert}
              readOnly
            ></textarea>
            <div className="flex">
              <button
                className={`flex items-center mt-4 bg-gray-700 text-[#00df9a] px-4 py-2 rounded-lg text-center`}
                onClick={fileDownload}
              >
                <AiOutlineCloudDownload size={22} color="#00df9a" className="mr-2" />Download
              </button>
              <button
                className={`mt-4 ml-2 text-[#00df9a] px-4 py-2 rounded-lg text-center`}
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LargeInputField;
