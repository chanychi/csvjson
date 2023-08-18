import { BsChevronRight } from 'react-icons/bs';
import { AiOutlineCloudDownload } from 'react-icons/ai';

const InputForm = ({
  input,
  output,
  handleChange,
  handleClear,
  handleConvert,
  fileDownload,
  copyToClipboard,
  isCopied,
  text,
  convert
 }) => {



  return (
    <div className="flex justify-center items-center h-fit">
        <div className="grid gap-2 w-full md:w-2/3 lg:w-1/2 px-4 md:grid-cols-2 md:flex-row">
          <div className="relative rounded-lg shadow-lg p-3 col-span-2 md:col-span-1 w-full md:w-auto">
            <h2 className="text-2xl font-semibold mb-4 text-[#00df9a]">{input}</h2>
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
                onClick={(e) => handleConvert(e,input)}
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
          <div className="relative rounded-lg shadow-lg p-3 col-span-2 md:col-span-1 w-full md:w-auto">
            <h2 className="text-2xl font-semibold mb-4 text-[#00df9a]">{output}</h2>
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
                onClick={() => fileDownload(output)}
              >
                <AiOutlineCloudDownload size={22} color="#00df9a" className="mr-2" />Download
              </button>
              <button
                className={`mt-4 ml-2 text-[#00df9a] px-4 py-2 rounded-lg text-center`}
                onClick={copyToClipboard}
              >
                {isCopied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default InputForm