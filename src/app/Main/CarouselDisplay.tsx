'use client'
import { Card, CardContent } from "@/components/ui/card"


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { EmblaOptionsType } from 'embla-carousel'


import imgCarousel1 from "../../../assets/ImageCarousel1.webp"
import imgCarousel2 from "../../../assets/ImageCarousel2.webp"
import imgCarousel3 from "../../../assets/ImageCarousel3.webp"
import imgCarousel4 from "../../../assets/ImageCarousel4.webp"
import imgCarousel5 from "../../../assets/ImageCarousel5.webp"


import Autoplay from "embla-carousel-autoplay"
import React from "react"


interface ImgSamples {
    imageArray: any[]
}


export default function CarouselDisplay() {


    let content: ImgSamples = { imageArray: [imgCarousel1, imgCarousel2, imgCarousel3, imgCarousel4,imgCarousel5] }
    const plugin:any = React.useRef(
        Autoplay({ delay: 1500, stopOnInteraction: true })
        
    )

    return (<>


        <div className="flex flex-col items-center justify-center gap-7">

            <div className="flex flex-col items-center gap-2">
                <h1 className="text-3xl">Memories from 2023</h1>

                <p className="text-xl text-orange-500 max-[418px]:text-sm"> 77 participants &#x2022; 19 teams &#x2022; 6 organizations</p>


            </div>
            <div className="w-screen flex items-center justify-center">
                <Carousel
                    className="w-10/12"
                    plugins={[plugin.current]}
                    opts={{
                        align: "center",
                        loop: true,
                        direction:"ltr",
                      }}
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {content.imageArray.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-screen pl-[10px]">
                                <div className="">
                                    <Card className="">
                                        <CardContent className=" ">
                                            <Image src={item} alt={"Not working"} height={1000} width={1000} className="rounded-lg" />
                                            
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>




            </div>
        </div>



    </>)



}