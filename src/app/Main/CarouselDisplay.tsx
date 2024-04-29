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


import Autoplay from "embla-carousel-autoplay"
import React from "react"


interface ImgSamples {
    imageArray: any[]
}


export default function CarouselDisplay() {


    let content: ImgSamples = { imageArray: [imgCarousel1, imgCarousel2, imgCarousel3, imgCarousel4] }
    const plugin:any = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
        
    )

    return (<>


        <div className="flex flex-col items-center gap-7">

            <div className="flex flex-col items-center gap-2">
                <h1 className="text-3xl">Memories from 2023</h1>

                <p className="text-xl text-orange-500 max-[418px]:text-sm"> 77 participants &#x2022; 19 teams &#x2022; 6 organizations</p>


            </div>
            <div className="w-screen flex items-center justify-center">
                <Carousel
                    className="w-full max-w-sm"
                    plugins={[plugin.current]}
                    opts={{
                        align: "start",
                        loop: true,
                        direction:"ltr",
                      }}
                >
                    <CarouselContent className="-ml-1">
                        {content.imageArray.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="">
                                    <Card>
                                        <CardContent className=" w-fit h-fit">
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