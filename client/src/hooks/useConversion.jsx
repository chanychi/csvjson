import { useState, useRef } from 'react';
import convertCSV from '../utils/convertCSV'
import convertJSON from '../utils/convertJSON'

const useConversion = () => {
  const [text, setText] = useState('');
  const [convert, setConvert] = useState('');
  const [isCopied, setIsCopied] = useState(false)
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setText('');
    setConvert('');

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleConvert = (e, input) => {
    e.preventDefault();
    if (!text.length) return;

    if(input === 'CSV') {
      let data = convertCSV(text);
      setConvert(data)
    } else {
      let data = convertJSON(text)
      setConvert(data)
    }

  };

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

  const fileDownload = (output) => {
    if (!convert.length) return;

    if(output === 'JSON') {
      const blob = new Blob([convert], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = 'data.json';
      link.href = url;
      link.click();
    }

    if(output === 'CSV') {
      const csvContent = "data:text/csv;charset=utf-8," + encodeURIComponent(convert);
      const link = document.createElement('a');
      link.href = csvContent;
      link.download = 'data.csv';
      link.click();
    }
  };

  const copyToClipboard = () => {
    if (!convert) return;

    navigator.clipboard.writeText(convert)
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 7500);
  }



  return {
    text,
    convert,
    fileInputRef,
    handleChange,
    handleClear,
    handleConvert,
    handleFileUpload,
    fileDownload,
    copyToClipboard,
    isCopied,
  };
};

export default useConversion;
