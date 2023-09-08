import React, { useState } from "react";



export const NewsUpload = () => {

    const [newsDetails, setNewsDetails] = useState({
        category: '',
        title: '',
        headline: '',
        newsImg : '',
        fullDetails: '',
    })

    console.log(newsDetails);
    return(
            <div className="px-[20px] flex justify-center  py-[50px] ">
                <div>
                <h1 className="text-center md:max-w-full max-w-[250px] uppercase mb-[30px] font-bold text-[15px] md:text-[30px] ">Hey! You can now post news/event </h1>
                <form action="" method="post" className="flex max-w-[250px] md:max-w-full  flex-col  gap-3 ">
                    <div className="flex w-full flex-col  gap-3 ">
                    <div className="flex w-full  flex-col ">
                        <label className="md:text-[20px] text-[15px] font-semibold " htmlFor="category">Category</label>
                        <select value={newsDetails.category} 
                        onChange={(e) => {
                            const val = e.target.value;
                            setNewsDetails({
                                ...newsDetails,
                                category:  val,
                            })
                        }}
                        className="outline-0 w-full md:text-[20px] text-[10px] p-2 bg-yellow-400 rounded-[2px] shadow-2xl text-slate-900  placeholder:text-slate-400 font-[500] uppercase " name="" id="">
                            <option value="">Select</option>
                            <option value="News">News</option>
                            <option value="Event">Event</option>
                        </select>
                    </div>
                    <div className="flex w-full  flex-col ">
                        <label className="text-[20px] font-semibold "  htmlFor="title">Title</label>
                        <input value={newsDetails.title}
                         onChange={(e) => {
                            const val = e.target.value;
                            setNewsDetails({
                                ...newsDetails,
                                title:  val,
                            })
                        }}
                         type="text" name="" className="outline-0 md:text-[20px] text-[10px] p-2 bg-yellow-400 rounded-[2px] shadow-2xl text-slate-900 placeholder:text-slate-400 font-[500] uppercase " placeholder="Input title" id="" />
                    </div>
                    <div className="flex w-full  flex-col ">
                        <label className="md:text-[20px] text-[15px] font-semibold "  htmlFor="headline">Headline</label>
                        <input 
                        value={newsDetails.headline} 
                        onChange={(e) => {
                            const val = e.target.value;
                            setNewsDetails({
                                ...newsDetails,
                                headline:  val,
                            })
                        }}
                        type="text" name="" className="outline-0 p-2 bg-yellow-400 rounded-[2px] md:text-[20px] text-[10px] shadow-2xl text-slate-900 placeholder:text-slate-400 font-[500] uppercase " placeholder="Input headline" id="" />
                    </div>
                    <div className="flex w-full  flex-col ">
                        <label className="text-[20px] font-semibold "  htmlFor="image">Image</label>
                        <input 
                        value={newsDetails.newsImg}
                        onChange={(e) => {
                            const val = e.target.files[0];
                            setNewsDetails({
                                ...newsDetails,
                                category:  val,
                            })
                        }}
                         type="file" name="" className="outline-0 md:text-[20px] text-[10px] p-2 bg-yellow-400 rounded-[2px] file:bg-transparent file:border-0 shadow-2xl text-slate-900 placeholder:text-slate-400 font-[500] uppercase " placeholder="Input headline" id="" />
                    </div>
                    <div className="w-full">
                    <label className="md:text-[20px] text-[15px] font-semibold " htmlFor="full details">Full details</label>
                        <textarea 
                        value={newsDetails.fullDetails}
                        onChange={(e) => {
                            const val = e.target.value;
                            setNewsDetails({
                                ...newsDetails,
                                fullDetails:  val,
                            })
                        }}
                         name="" id="" className="outline-0 md:text-[20px] text-[10px] p-2 bg-yellow-400 rounded-[2px] shadow-2xl w-full text-slate-900 placeholder:text-slate-400 font-[500] w-full uppercase min-h-[55vh] "placeholder="input full details" ></textarea>
                    </div>
                    <button className="outline-0 p-2 bg-green-400 rounded-[2px] file:bg-transparent file:border-0 shadow-2xl text-slate-900 placeholder:text-slate-400 font-[500] uppercase "  type="submit">Upload</button>
                    </div>
                </form>
            </div>
            </div>
    )
}