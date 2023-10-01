import { useState, useEffect, useRef } from 'react';
import './App.css';
import { uploadFile } from '../src/services/api';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  const url = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F923752568%2Fphoto%2Ffiles-and-folders-network.webp%3Fb%3D1%26s%3D170667a%26w%3D0%26k%3D20%26c%3DqJs4MuRPiwZL7Re6uFzcXl-J8CCqnBOAMsm3M-rL4MI%3D&tbnid=oEnbsWmieypocM&vet=12ahUKEwjQ3br377WBAxVCnCcCHdWvDFYQMygIegUIARCIAQ..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fdata-sharing&docid=783s1VDfDlpcnM&w=509&h=339&q=images%20of%20data%20sharing&ved=2ahUKEwjQ3br377WBAxVCnCcCHdWvDFYQMygIegUIARCIAQ';

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  return (
    <div className='container'>
      <img src={url} className='img' />
      <div className='wrapper'>
        <h1>Simple file sharing!</h1>
      
        <p>Upload and share the download link.</p>
        
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <a href={result} target='_blank'>{result}</a> 
      </div>
    </div>
  );
}

export default App;