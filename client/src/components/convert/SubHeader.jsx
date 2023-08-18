const SubHeader = ({ input, output }) => {

  return (
    <div className="block justify-center items-center my-14">
      <div className="text-center">
        <h2 className="text-4xl font-semibold mb-2 text-[#00df9a]">{input} to {output}</h2>
        <p className="text-gray-500">
          To get started, upload or paste your data (saved as {input}).
        </p>
        <p className="text-gray-500">
          Note: If the page crashed, it means your file is too big for the client to process.
        </p>
      </div>
    </div>
  )
}

export default SubHeader