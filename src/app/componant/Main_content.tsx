'use client'
import Img from "next/image"

export default async function Main_content() {

    // const apikey = process.env.YOUTUBE_API_KEY
    const apikey = "AIzaSyBH0mripjJ5ZHdsxVH0COw0XnJfPKmYItA"
    // const apikey = "AIzaSyD5BVVqW1YYfVjqVYJ_U661fRQjxp-JSvQ"
    const channel_id = "UCClMPKqtJ1LbRBCDP948g5q"
    const youtube_url = "https://www.googleapis.com/youtube/v3/search"


    const data = await fetch(`${youtube_url}?key=${apikey}&channelID${channel_id}&order=date&part=snippet`);
    const VideoData = await data.json();
    console.log(VideoData);

    return (
        <div className='mt-2 flex flex-wrap justify-around '>
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