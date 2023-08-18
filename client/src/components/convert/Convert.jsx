import SubHeader from './SubHeader';
import Upload from './Upload';
import useConversion from '../../hooks/useConversion';
import InputForm from './InputForm';


const Convert = ({ input, output}) => {
  const {
    text,
    convert,
    fileInputRef,
    handleChange,
    handleClear,
    handleConvert,
    handleFileUpload,
    fileDownload,
    copyToClipboard,
    isCopied
  } = useConversion();

  const inputFormProps = {
    input,
    output,
    handleChange,
    handleConvert,
    handleClear,
    fileDownload,
    copyToClipboard,
    isCopied,
    text,
    convert
  };

  return (
    <>
      <SubHeader input={input} output={output} />
      <Upload fileInputRef={fileInputRef} handleFileUpload={handleFileUpload} />
      <InputForm {...inputFormProps} />
    </>
  );
};

export default Convert;
