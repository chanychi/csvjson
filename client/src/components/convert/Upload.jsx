const Upload = ({ fileInputRef, handleFileUpload }) => {
  return (
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
            onChange={handleFileUpload} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Upload