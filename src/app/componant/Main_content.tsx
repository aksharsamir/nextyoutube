// 'use client'
import Img from "next/image"

export default async function Main_content() {

    const apikey = process.env.YOUTUBE_API_KEY
    const youtube_url = process.env.YOUTUBE_URL
    const channel_id = process.env.YOUTUBE_ID
    // const apikey = "AIzaSyBH0mripjJ5ZHdsxVH0COw0XnJfPKmYItA"
    // const apikey = "AIzaSyD5BVVqW1YYfVjqVYJ_U661fRQjxp-JSvQ"

    const fetch_data = await fetch(`${youtube_url}?key=${apikey}&channelID${channel_id}&order=date&part=snippet`);
    const json_Data = await fetch_data.json();
    const video_data = json_Data.items;

    return (
        <div className='mt-2 flex flex-wrap justify-around '>
            {
                video_data.map((e:string[]) => {
                    // e.map((y)=>{
                        console.log(e)
                    // });
                })
            }
            <div>
                <div>
                    <Img src="/images/1demo.jpg" width={100} height={100} className='rounded-3xl' alt="logo" />
                </div>
                <div className='mt-4'>
                    <div className='w-[25%] float-left pr-2'>
                        <Img src="/images/1demo.jpg" width={10} height={10} className='w-[5em] rounded-[50%]' alt="logo" />
                    </div>
                    <div className='w-auto text-left'>
                        <div>Title</div>
                        <div>Channel Name</div>
                    </div>
                </div>
            </div>

        </div>
    )
}