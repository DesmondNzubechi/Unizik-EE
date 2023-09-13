import React, { useEffect } from "react";
import { db, storage } from "../../config/firebase";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { useState } from "react";
import ReactQuill from "react-quill";
import { ref, getDownloadURL, listAll, uploadBytes } from "firebase/storage";
import { fullNewsContext } from "../../context/Context";
import { useContext } from "react";
import 'react-quill/dist/quill.snow.css';
import { doc } from "firebase/firestore";
import { ClipLoader, FadeLoader, MoonLoader, RotateLoader } from "react-spinners";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const EditNews = () => {
  const [spinC, setSpinC] = useState(false);
  const [fileType, setFileType] = useState('image');
  //const [contents, setContents] = useState('');
//IMAGE INFO
const {displaying, setDisplaying, editNews, setEditNews} = useContext(fullNewsContext);
const [imgInfo, setImgInfo] = useState({
  imgFile: [],
  imgName: '',
})

const currentDate = new Date();
    const options = {
        year: 'numeric',
        month: 'long', // 'short' for abbreviated name, 'long' for full name
        day: 'numeric',
        weekday: 'long', // 'short' for abbreviated name, 'long' for full name
      };
      const fullDate = currentDate.toLocaleString(undefined, options);

  ///NEWS CONTENTS
  const [newsContents, setNewsContents] = useState({
    newsImg: [],
    newsVideo: [],
    newsHeadline: editNews.newsHeadline,
    newsOverview: '',
    fullNews: ''
  })
  console.log(newsContents)


  const UpdateNewsImg = async () => {
    if (imgInfo.imgName === '') {
        const noti = () => toast('Please select Video to be uploaded');
        noti();
     return;
    }
     const folderRef = ref(storage,  'newsImages')
     try {
       const imgRef = ref(folderRef, imgInfo.imgName)
     const imgUpload =  await uploadBytes(imgRef, imgInfo.imgFile);
     const url = await getDownloadURL(imgUpload.ref);
       setEditNews({...editNews, newsImg:  url});
       const noti = () => toast('Image Successfully Updated');
      noti();
     } catch (error) {
       const noti = () => toast(error);
       noti()
     }
 
   }
useEffect(() => {
  localStorage.setItem('newsContents', JSON.stringify(newsContents));
}, [newsContents])


  const updateNews = async (newsId) => {

    if (editNews.newsImg?.length === 0 ) {
      const shouldProceed = window.confirm("You have not updated Image. Do you want to proceed with the execution of the function?");
      if (!shouldProceed) {
        return; // Function will stop if user clicks 'No'
      }
    }
    setSpinC(true);
      const newsRef = doc(db, `${editNews.category}`, newsId);
      try {
          await updateDoc(newsRef, {
            newsImg: editNews.newsImg,
            newsHeadline: editNews.newsHeadline,
            newsOverview: editNews.newsOverview,
            fullNews:  editNews.fullNews,
            date: fullDate,
            category: editNews.category,
            createTime: new Date().getTime(),
           })
         const noti = () => toast('Successfully Updated');
         noti();
        setSpinC(false)
      } catch (error) {
          console.log(error);
          const noti = () => toast(error);
        noti();
      }
  }


    return(
        <div on className="py-[20px] shadow rounded-[30px] m-[20px] px-[40px] font-poppins justify-center bg-gray-50 overflow-x-hidden flex flex-row ">
           {spinC && <div className="fixed bg-tpr w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center"><RotateLoader className="relative z-[600]" color="#36d7b7"
           size={30}
           width={10}
            /></div> }
            <div className="grid grid-cols-1 gap-5">
              <div className="flex flex-col gap-5 md:flex-row  ">
                <div className="flex flex-col gap-0 ">
                    <label className="capitalize font-[600] text-[17px] " htmlFor="headline">news headline :</label>
                    <input value={editNews.newsHeadline} onChange={(e) => setEditNews({...editNews, newsHeadline: e.target.value })} type="text" className="p-4 bg-transparent capitalize text-[20px] outline-0 shadow rounded  w-full " name="headline" placeholder="News headline" id="" />
                </div>
                <div className="flex flex-col gap-0 ">
                    <label className="capitalize font-[600] text-[17px] " htmlFor="headline">News overview:</label>
                    <input value={editNews.newsOverview} onChange={(e) => setEditNews({...editNews, newsOverview: e.target.value })} type="text" className="p-4 bg-transparent capitalize text-[20px] outline-0 shadow rounded  w-full " name="headline" placeholder="News overview" id="" />
            </div>
            <div className="flex flex-col gap-0">
                    <label className="capitalize font-[600] text-[13px] " htmlFor="headline">Category:</label>
                        <select value={editNews.category} onChange={(e) => setEditNews({...editNews, category: e.target.value})} className="rounded bg-slate shadow  outline-0 p-4" name="" id="">
                        <option value="">Select</option>
                         <option value="News">News</option>
                      <option value="Event">Event</option>
                    </select>
                    </div>
                <div className="flex flex-col gap-0 ">
               { /*<select onChange={(e) => setFileType(e.target.value)} className="rounded outline-0 p-1" name="" id="">
                      <option value="image">News Image</option>
                      <option value="video">News Video</option>
    </select>*/}
                    <input onChange={(e) => {
                      setImgInfo({
                        imgFile: e.target.files[0],
                        imgName: e.target.files[0].name,
                      });
                    }} accept="image/*" type="file" className="p-4 file:bg-transparent file:border-0 capitalize text-[20px] outline-0 shadow rounded  w-full " name="headline" placeholder="News headline" id="" />
                    <button onClick={ UpdateNewsImg} type="button" className="w-fit capitalize hover:bg-slate-900 hover:text-slate-50  p-1 rounded bg-green-500 ">upload image</button>
                </div>
              {/* <div className="flex flex-col gap-0 ">
                    <label className="capitalize font-[600] text-[17px] " htmlFor="headline">Date :</label>
                    <input type="date" className="p-4 capitalize text-[20px] outline-0 shadow rounded  w-full " name="headline" placeholder="News headline" id="" />
    </div>*/}
              </div>
              <div className="flex flex-col gap-0 ">
                    <label className="capitalize font-[600] text-[17px] " htmlFor="headline">news content :</label>
              <ReactQuill
              theme="snow"
              value={editNews.fullNews}
       className="md:max-w-[700px] rounded-[30px] max-w-[500px] min-h-[30vh] lg:max-w-[1100px] "
        onChange={(e) => {
          setEditNews({...editNews, fullNews: e})
        }}
        modules={{
          toolbar: {
            container: [
              ['bold', 'italic', 'underline', 'strike'], // Basic formatting button
              [{ 'font': [] }],
              [{ 'align': [] }],
              [{ 'color': [] }, { 'background': [] }],    
              ['blockquote', 'code-block'],
              [{ 'size': ['small', false, 'large', 'huge'] }],  
              [{ header: 1 }, { header: 2 }], // Header formatting buttons
              [{ list: 'ordered' }, { list: 'bullet' }], // List buttons
             ['link',  'image', 'video'], // Link and media buttons
             ['uppercase', 'capitalize', 'lowercase'] ,
            ], 
            },
          }}
        />
        </div>
         <button onClick={() => updateNews(editNews.id)} className="bg-slate-900 w-fit  mt-[100px] md:mt-[50px] shadow py-2 px-5 rounded text-slate-50 text-[20px] hover:bg-slate-700 ">Update News</button>
     
             {/* <div className="flex gap-0 flex-col">
                <label className="uppercase font-[600] text-[20px] "  htmlFor="full content">Full content</label>
                <textarea className="min-h-[40vh] p-4 outline-0 border w-full shadow rounded " name="" id="" cols="30" rows="10"></textarea>
              </div>
              <div>
                <button className="bg-slate-900 shadow py-2 px-5 rounded text-slate-50 text-[20px] hover:bg-slate-700 ">Post News</button>
    </div>*/}
            </div>
        </div>
    )
}