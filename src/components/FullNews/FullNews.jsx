import React, { useContext, useEffect, useState } from "react";
import { fullNewsContext } from "../context/Context";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import Aos from "aos";
import { FaUserAlt } from 'react-icons/fa';
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import { RotateLoader } from "react-spinners";
import 'react-toastify/dist/ReactToastify.css';

export const FullNewsDetails = () => {
  const [spinC, setSpinC] = useState(false); 
    const {  allNews, mainUser} = useContext(fullNewsContext);
    const { newsHeadline } = useParams();
    const post = allNews.find(post => post?.newsHeadline === newsHeadline)
  useEffect(() => {
    Aos.init();
  }, [])
  
  const [commentInput, setCommentInput] = useState('');
  const postId = post.id;

  const addComment = async (postId) => {
    if (commentInput === '') {
      const notification = () => toast('Please input your comment below')
      notification();
      return;
    };
    const storageRef = doc(db, 'News', postId);
    setSpinC(true);
    try {
      await updateDoc(storageRef, {
        comments: [...post.comments, commentInput],
      })
      const notification = () => toast('You have successfully added a comment');
      notification();
      setSpinC(false);
      setCommentInput('');
    } catch (error) {
      setSpinC(false);
      const notification = () => toast('An error occured please try again')
      notification();
    }
  }
    return(
        <div className=" px-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-[50px] justify-between items-start md:flex-row">
            {spinC && <div className="fixed bg-tpr w-full z-[500] left-0 right-0 flex justify-center h-full top-0 bottom-0 items-center"><RotateLoader className="relative z-[600]" color="#36d7b7"
           size={30}
           width={10}
        /></div>}
            
                  <div  className=" lg:col-span-2   flex items-center justify-around flex-col   py-[100px] lg:min-h-[100vh] from-slate-50 bg-white rounded-t-[50px] gap-5 to-slate-50">
            
                    <div data-aos='zoom-in-down' aos-data-duration='2000' className="max-w-[700px] flex flex-col gap-3 ">
                            <h1 className="uppercase font-bold text-[20px] md:text-[30px] text-slate-900">{post.newsHeadline}</h1>
                            <p className="text-slate-700 font-fonty  text-[12px] md:text-[20px] ">{ post.newsOverview}</p>
                        <div  className="  ">
                        <img  data-aos='zoom-in-down' aos-data-duration='2000' src={post.newsImg} alt="" className="" />
                            </div>
                            <p className="text-slate-700 font-bold   text-[15px] md:text-[20px] ">{post.date}</p>
                        <div dangerouslySetInnerHTML={{__html: post.fullNews}} className="text-slate-700 font-fonty  text-[12px]  md:text-[20px] "></div>
        
                    </div>
                    </div>
            
      
        <div className="px-[20px]  md:pt-[50px]">
          <div className="flex flex-col gap-5 pb-[100px]">
            <h1 className="uppercase font-myfont text-[20px] md:text-[30px]">Comments</h1>
            <form className="flex flex-col gap-3">
              <textarea value={commentInput} onChange={(e) => setCommentInput(e.target.value)} placeholder="drop your comment here" className="bg-slate-50 capitalize text-[20px] w-full border-none p-2 outline-0 h-[30vh] rounded shadow-2xl " name="" id="" ></textarea>
              <button type="button" onClick={() => addComment(postId)} className="capitalize w-fit p-2 rounded text-slate-50 hover:bg-slate-700 font-semibold bg-slate-900  ">add comment</button>
          </form>
            <div className="flex flex-col gap-5">
              <h1 className="uppercase font-myfont text-[20px] md:text-[30px]">all comments</h1>

              <div className="flex flex-col gap-5">
              {post?.comments?.length == 0 &&  <h1 className="my-[30px] text-center text-[20px] text-slate-700">No comment under this post</h1> }
                {
                post?.comments?.map((comment, index )=> {
return    <div className="shadow p-2 rounded flex flex-col gap-2">
  <h1 className="font-bold text-[15px] flex items-center gap-2"><FaUserAlt className="bg-slate-900 text-slate-50 text-[30px]  p-1 rounded-full"/>User</h1>
  <p className="text-[12px] md:text-[14px] text-slate-700 ">{comment}</p>
                  </div>
                  
                  })
                }
             
              </div>
            </div>
            
          </div>
        <p className="text-start uppercase text-[25px] font-bold my-[10px] ">More news</p>
      <div className="grid grid-col-1 gap-5 ">
      {allNews?.map((news, newsIndex) => {
          
          return <div key={news.id} className="flex w-full  items-start  rounded shadow-2xl px-[20px] py-5  gap-4">
          <div className="">
          <img className=" max-w-[100px]   rounded " src={news.newsImg} alt="" />
          </div> 
          <div className="flex flex-col  max-w-[400px] ">
          <h1 className="font-bold text-[10px] md:max-w-[300px] capitalize ">{news.newsOverview}</h1>
          <Link to={`/blog/${news.newsHeadline}`}  className="text-yellow-500 text-[13px] font-bold my-1">Read More...</Link>
          </div>
          </div>
        }) }
      </div>
      </div>
        </div>
    )
}